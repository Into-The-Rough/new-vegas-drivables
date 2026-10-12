"""Vehicle studio images and selected frames from the author's gameplay videos."""
from PIL import Image, ImageOps

RENDERS = {
    1: 'buggy', 2: 'hotrod', 3: 'rustybicycle', 4: 'motorcycle',
    6: 'skateboard', 7: 'oldrustycar', 8: 'unicycle', 9: 'buggy736',
    10: 'corvega', 11: 'truckflatbed', 12: 'wheelchair', 13: 'highwayman',
    14: 'patrolcar', 16: 'deathcar', 17: 'hopper', 18: 'pogo',
    19: 'hoverbike', 20: 'vertibird', 33: 'motorchariot', 34: 'formula',
    35: 'boat02', 36: 'smallplane', 37: 'b29', 38: 'golfcart',
}

EXTRA_IMAGES = {
    39: ('pershing', 'videos', 'new-vegas-drivables-page-screenshots/Ready to Upload/04 - Tank Destruction.jpg'),
    40: ('alien', 'videos', 'new-vegas-drivables-page-screenshots/Ready to Upload/05 - Alien Ship Over McCarran.jpg'),
    41: ('commonwealth', 'mod', 'assets/work/fo4-tank/preview.png'),
    42: ('marine-apc', 'mod', 'assets/work/marine-apc/preview.png'),
    43: ('interceptor', 'mod', 'assets/work/interceptor/preview.png'),
    44: ('desoto', 'mod', 'assets/work/desoto/preview.png'),
    45: ('biplane', 'site', 'artifacts/missing-media/biplane.png'),
    46: ('monster-truck', 'mod', 'assets/work/hummer-h1-monster-truck/exterior.png'),
}

CAPTURES = {
    'flight': ('daytime-flight-demo-video', 50.92),
    'parachute': ('parachute-video', 60.67),
    'hover-bike': ('new-vegas-drivables-hoverbike-demo', 86.32),
    'horse-road': ('companion-horses-world-integration-video', 127.41),
    'horse-race': ('wip-horse-racing-video', 48.67),
    'ivanpah': ('ivanpah-race-test-video', 48.85),
    'motorcycle-stunts': ('mmm-donuts-video', 47.27),
    'thunderdome': ('new-vegas-drivables-monster-truck', 68.79),
}


def vehicle_image(profile):
    name = RENDERS.get(profile) or EXTRA_IMAGES.get(profile, (None,))[0]
    return f'fleet/{name}.webp' if name else None


def export_renders(source, assets):
    destination = assets / 'fleet'
    destination.mkdir(parents=True, exist_ok=True)
    for name in RENDERS.values():
        image = Image.open(source / f'mod/textures/interface/loading/drivables/{name}.dds').convert('RGB')
        #loading textures are stored at 2:1 and displayed at 16:9 in game
        image = image.resize((1024, 576), Image.Resampling.LANCZOS)
        image.save(destination / f'{name}.webp', quality=88, method=6)
        image.resize((320, 180), Image.Resampling.LANCZOS).save(destination / f'{name}-thumb.webp', quality=85, method=6)


def apply_images(data):
    for item in data['entries'] + data['vehicles']:
        path = vehicle_image(item.get('profile'))
        if path:
            item['image'] = path


def export_extra_images(source, videos, assets):
    roots = {'mod': source, 'videos': videos, 'site': assets.parents[1]}
    for name, root, relative in EXTRA_IMAGES.values():
        path = roots[root] / relative
        destination = assets / 'fleet' / f'{name}.webp'
        if not path.exists() and destination.exists():
            continue
        image = Image.open(path).convert('RGB')
        image = ImageOps.pad(image, (1024, 576), method=Image.Resampling.LANCZOS, color='#090909')
        image.save(destination, quality=88, method=6)
        image.resize((320, 180), Image.Resampling.LANCZOS).save(destination.with_name(f'{name}-thumb.webp'), quality=85, method=6)
