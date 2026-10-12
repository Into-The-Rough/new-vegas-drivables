"""Render the newer vehicle models in a shared studio, without modifying the mod.

Extract with Python: --source /path/to/DrivablesNVSE --work /path/to/work
Render with Blender: --background --python render-studio.py -- --work /path/to/work
Use --vehicle desoto commonwealth to select a subset at either stage.
"""
import argparse
import hashlib
import json
from pathlib import Path
import sys

MODELS = {
    'desoto': 'desoto/desoto_onebody.nif',
    'commonwealth': 'fo4-tank/fo4_tank_onebody.nif',
    'interceptor': 'interceptor/interceptor_onebody.nif',
    'marine-apc': 'marine-apc/marine_apc_onebody.nif',
    'pershing': 'pershing/pershing_onebody.nif',
    'alien': 'alien_craft/alien_craft_onebody.nif',
    'biplane': 'stunt_biplanes/rusty_biplane_onebody.nif',
    'monster-truck': 'hummer/hummer_onebody.nif',
}


def extract(source, work, names):
    import time
    time.clock = time.perf_counter
    import numpy as np
    from PIL import Image
    from pyffi.formats.nif import NifFormat as N
    work.mkdir(parents=True, exist_ok=True)
    converted = {}

    def texture(raw):
        relative = raw.decode().replace('\\', '/')
        if not relative:
            return ''
        if relative not in converted:
            path = source / 'mod' / relative
            if not path.exists():
                raise FileNotFoundError(path)
            filename = hashlib.sha1(relative.encode()).hexdigest()[:12] + '.png'
            Image.open(path).convert('RGBA').save(work / filename)
            converted[relative] = filename
        return converted[relative]

    for name in names:
        data = N.Data()
        with (source / 'mod/meshes/drivables' / MODELS[name]).open('rb') as stream:
            data.read(stream)
        root = data.roots[0]
        parents = {id(c): n for n in root.tree() if isinstance(n, N.NiNode) for c in n.children if c}
        shapes = []
        for shape in root.tree():
            if not isinstance(shape, N.NiTriBasedGeom) or not shape.data:
                continue
            parent, hidden = shape, False
            while parent:
                hidden |= bool(parent.flags & 1)
                parent = parents.get(id(parent))
            if hidden:
                continue
            shader = next((p for p in shape.properties if isinstance(p, N.BSShaderPPLightingProperty)), None)
            #animated exhaust and distortion meshes are not part of the parked vehicle
            if not shader or not shader.texture_set or not shader.texture_set.textures[0].lower().startswith(b'textures\\drivables\\'):
                continue
            matrix = np.array(shape.get_transform(root).as_list()).T
            vertices = np.array([v.as_list() for v in shape.data.vertices]) @ matrix[:3, :3].T + matrix[:3, 3]
            normals = np.array([v.as_list() for v in shape.data.normals])
            if len(normals):
                normals = normals @ np.linalg.inv(matrix[:3, :3])
                normals /= np.maximum(np.linalg.norm(normals, axis=1, keepdims=True), 1e-12)
            alpha = next((p for p in shape.properties if isinstance(p, N.NiAlphaProperty)), None)
            shapes.append(dict(name=shape.name.decode(), vertices=vertices.tolist(),
                               triangles=list(shape.data.get_triangles()), normals=normals.tolist(),
                               uv=[v.as_list() for v in shape.data.uv_sets[0]] if shape.data.num_uv_sets else [],
                               diffuse=texture(shader.texture_set.textures[0]),
                               normal=texture(shader.texture_set.textures[1]),
                               alpha=alpha is not None))
        if not shapes:
            raise ValueError(f'no visible geometry for {name}')
        (work / f'{name}.json').write_text(json.dumps(shapes, separators=(',', ':')))
        print(f'{name}: {len(shapes)} visible shapes', flush=True)


def render(work, names):
    import bpy
    from mathutils import Vector
    gpu = False
    preferences = bpy.context.preferences.addons['cycles'].preferences
    for backend in ('OPTIX', 'CUDA'):
        try:
            preferences.compute_device_type = backend
            preferences.get_devices()
            devices = [d for d in preferences.devices if d.type == backend]
            if devices:
                for device in preferences.devices:
                    device.use = device.type == backend
                gpu = True
                break
        except (TypeError, RuntimeError):
            continue
    print('Studio renderer:', backend if gpu else 'CPU', flush=True)

    for name in names:
        bpy.ops.object.select_all(action='SELECT')
        bpy.ops.object.delete(use_global=False)
        parts = json.loads((work / f'{name}.json').read_text())
        points = [Vector(v) for part in parts for v in part['vertices']]
        low = Vector(tuple(min(p[i] for p in points) for i in range(3)))
        high = Vector(tuple(max(p[i] for p in points) for i in range(3)))
        origin = Vector(((low.x+high.x)/2, (low.y+high.y)/2, low.z))
        scale = 6 / max(high-low)
        height = (high.z-low.z)*scale
        materials = {}
        for part in parts:
            mesh = bpy.data.meshes.new(part['name'])
            vertices = [tuple((Vector(v)-origin)*scale) for v in part['vertices']]
            mesh.from_pydata(vertices, [], part['triangles'])
            mesh.update()
            obj = bpy.data.objects.new(part['name'], mesh)
            bpy.context.collection.objects.link(obj)
            if part['uv']:
                uv = mesh.uv_layers.new()
                for loop in mesh.loops:
                    u, v = part['uv'][loop.vertex_index]
                    uv.data[loop.index].uv = (u, 1-v)
            if len(part['normals']) == len(vertices):
                for face in mesh.polygons:
                    face.use_smooth = True
                mesh.normals_split_custom_set_from_vertices(part['normals'])
            key = (part['diffuse'], part['normal'], part['alpha'])
            if key not in materials:
                material = bpy.data.materials.new(part['name'])
                material.use_nodes = True
                nodes, links = material.node_tree.nodes, material.node_tree.links
                shader = nodes.get('Principled BSDF')
                shader.inputs['Roughness'].default_value = .62
                shader.inputs['Metallic'].default_value = .12
                diffuse = nodes.new('ShaderNodeTexImage')
                diffuse.image = bpy.data.images.load(str(work / part['diffuse']), check_existing=True)
                links.new(diffuse.outputs['Color'], shader.inputs['Base Color'])
                if part['alpha']:
                    links.new(diffuse.outputs['Alpha'], shader.inputs['Alpha'])
                if part['normal']:
                    normal = nodes.new('ShaderNodeTexImage')
                    normal.image = bpy.data.images.load(str(work / part['normal']), check_existing=True)
                    normal.image.colorspace_settings.name = 'Non-Color'
                    normal_map = nodes.new('ShaderNodeNormalMap')
                    normal_map.inputs['Strength'].default_value = .65
                    links.new(normal.outputs['Color'], normal_map.inputs['Color'])
                    links.new(normal_map.outputs['Normal'], shader.inputs['Normal'])
                materials[key] = material
            mesh.materials.append(materials[key])

        scene = bpy.context.scene
        scene.render.engine = 'CYCLES'
        scene.cycles.device = 'GPU' if gpu else 'CPU'
        scene.cycles.samples = 48
        scene.cycles.use_denoising = True
        scene.cycles.max_bounces = 6
        scene.render.threads_mode = 'FIXED'
        scene.render.threads = 8
        scene.render.resolution_x, scene.render.resolution_y = 1600, 900
        scene.render.resolution_percentage = 100
        scene.render.image_settings.file_format = 'PNG'
        scene.render.film_transparent = False
        scene.world.use_nodes = True
        scene.world.node_tree.nodes['Background'].inputs['Color'].default_value = (.006, .008, .012, 1)
        scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value = .18
        scene.view_settings.look = 'AgX - Medium High Contrast'
        bpy.ops.mesh.primitive_plane_add(size=200, location=(0, 0, -.025))
        floor = bpy.context.object
        material = bpy.data.materials.new('Polished studio floor')
        material.use_nodes = True
        shader = material.node_tree.nodes.get('Principled BSDF')
        shader.inputs['Base Color'].default_value = (.009, .011, .016, 1)
        shader.inputs['Metallic'].default_value = .7
        shader.inputs['Roughness'].default_value = .22
        floor.data.materials.append(material)
        target = Vector((0, 0, height*.4))
        for label, location, power, size, colour in (
            ('Key', (1, -4, 7), 1900, 5, (1, .96, .90)),
            ('Fill', (3, 5, 4), 1550, 4, (.90, .95, 1)),
            ('Rim', (-4, 1, 5), 2300, 3, (.82, .90, 1)),
        ):
            bpy.ops.object.light_add(type='AREA', location=location)
            light = bpy.context.object
            light.name = label
            light.data.energy, light.data.size, light.data.color = power, size, colour
            light.rotation_euler = (target-light.location).to_track_quat('-Z', 'Y').to_euler()
        bpy.ops.object.camera_add(location=(8, 10, 6))
        camera = bpy.context.object
        scene.camera = camera
        camera.rotation_euler = (target-camera.location).to_track_quat('-Z', 'Y').to_euler()
        camera.data.type = 'ORTHO'
        inverse = camera.rotation_euler.to_matrix().transposed()
        projected = [inverse @ ((p-origin)*scale-target) for p in points]
        half_width = max(abs(p.x) for p in projected)
        half_height = max(abs(p.y) for p in projected)
        camera.data.ortho_scale = max(8.3, half_width*2.24, half_height*2.32*1600/900)
        camera.data.clip_end = 500
        scene.render.filepath = str(work / f'{name}.png')
        bpy.ops.render.render(write_still=True)
        print('Rendered', name, flush=True)


if __name__ == '__main__':
    argv = sys.argv[sys.argv.index('--')+1:] if '--' in sys.argv else sys.argv[1:]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path)
    parser.add_argument('--work', type=Path, required=True)
    parser.add_argument('--vehicle', nargs='+', choices=MODELS, default=list(MODELS))
    args = parser.parse_args(argv)
    if args.source:
        extract(args.source, args.work, args.vehicle)
    else:
        render(args.work, args.vehicle)
