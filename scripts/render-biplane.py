"""Render the mod's Stunt Biplane for the website without changing game assets.

python3 scripts/render-biplane.py --dump /path/to/DrivablesNVSE /path/to/work
blender --background --python scripts/render-biplane.py -- /path/to/work
"""
import json
from pathlib import Path
import sys


def dump(source, work):
    import time
    time.clock = time.perf_counter
    import numpy as np
    from pyffi.formats.nif import NifFormat as N
    work.mkdir(parents=True, exist_ok=True)
    nif = N.Data()
    with (source / 'mod/meshes/drivables/stunt_biplanes/rusty_biplane_onebody.nif').open('rb') as stream:
        nif.read(stream)
    root = nif.roots[0]
    parents = {id(c): n for n in root.tree() if isinstance(n, N.NiNode) for c in n.children if c}
    shapes = []
    for shape in root.tree():
        if not isinstance(shape, N.NiTriShape):
            continue
        parent, hidden = shape, False
        while parent:
            hidden |= bool(parent.flags & 1)
            parent = parents.get(id(parent))
        if hidden:
            continue
        matrix = np.array(shape.get_transform(root).as_list()).T
        vertices = np.array([v.as_list() for v in shape.data.vertices]) @ matrix[:3, :3].T + matrix[:3, 3]
        shapes.append(dict(name=shape.name.decode(), vertices=vertices.tolist(),
                           triangles=list(shape.data.get_triangles()),
                           uv=[v.as_list() for v in shape.data.uv_sets[0]] if shape.data.num_uv_sets else []))
    (work / 'biplane.json').write_text(json.dumps(shapes))
    from PIL import Image
    Image.open(source / 'mod/textures/drivables/stunt_biplanes/rusty_biplane_d.dds').save(work / 'texture.png')


def render(work):
    import bpy
    from mathutils import Vector
    bpy.ops.object.select_all(action='SELECT')
    bpy.ops.object.delete(use_global=False)
    material = bpy.data.materials.new('Paint and fabric')
    material.use_nodes = True
    shader = material.node_tree.nodes.get('Principled BSDF')
    shader.inputs['Roughness'].default_value = .75
    texture = material.node_tree.nodes.new('ShaderNodeTexImage')
    texture.image = bpy.data.images.load(str(work / 'texture.png'))
    material.node_tree.links.new(texture.outputs['Color'], shader.inputs['Base Color'])
    glass = bpy.data.materials.new('Canopy')
    glass.use_nodes = True
    canopy = glass.node_tree.nodes.get('Principled BSDF')
    canopy.inputs['Base Color'].default_value = (.2, .3, .35, 1)
    canopy.inputs['Alpha'].default_value = .2
    canopy.inputs['Roughness'].default_value = .2
    glass.surface_render_method = 'DITHERED'
    points = []
    for part in json.loads((work / 'biplane.json').read_text()):
        mesh = bpy.data.meshes.new(part['name'])
        mesh.from_pydata(part['vertices'], [], part['triangles'])
        mesh.update()
        obj = bpy.data.objects.new(part['name'], mesh)
        bpy.context.collection.objects.link(obj)
        points.extend(Vector(v) for v in part['vertices'])
        if part['uv']:
            uv = mesh.uv_layers.new()
            for loop in mesh.loops:
                u, v = part['uv'][loop.vertex_index]
                uv.data[loop.index].uv = (u, 1-v)
        mesh.materials.append(glass if 'glass' in part['name'].lower() else material)
    low = Vector(tuple(min(p[i] for p in points) for i in range(3)))
    high = Vector(tuple(max(p[i] for p in points) for i in range(3)))
    centre = (low + high) / 2
    size = max(high-low)
    scene = bpy.context.scene
    scene.render.engine = 'BLENDER_EEVEE'
    scene.render.resolution_x, scene.render.resolution_y = 1400, 900
    scene.render.resolution_percentage = 100
    scene.world.use_nodes = True
    scene.world.node_tree.nodes['Background'].inputs['Color'].default_value = (.12, .12, .12, 1)
    scene.world.node_tree.nodes['Background'].inputs['Strength'].default_value = .8
    bpy.ops.object.light_add(type='SUN', rotation=(.4, -.5, -.4))
    bpy.context.object.data.energy = 3
    bpy.ops.object.light_add(type='SUN', rotation=(-.4, .7, 2.4))
    bpy.context.object.data.energy = 1.2
    bpy.ops.object.camera_add(location=centre + Vector((1.2, 1.7, 1.0))*size)
    scene.camera = bpy.context.object
    scene.camera.rotation_euler = (centre-scene.camera.location).to_track_quat('-Z', 'Y').to_euler()
    scene.camera.data.type = 'ORTHO'
    scene.camera.data.ortho_scale = size*1.35
    scene.camera.data.clip_end = size*10
    scene.render.filepath = str(work / 'biplane.png')
    bpy.ops.render.render(write_still=True)


if __name__ == '__main__':
    if '--dump' in sys.argv:
        dump(Path(sys.argv[-2]), Path(sys.argv[-1]))
    else:
        render(Path(sys.argv[-1]))
