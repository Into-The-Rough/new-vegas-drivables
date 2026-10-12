"""Vehicle studio images and selected frames from the author's gameplay videos."""
from PIL import Image

RENDERS = {
    1: 'buggy', 2: 'hotrod', 3: 'rustybicycle', 4: 'motorcycle',
    6: 'skateboard', 7: 'oldrustycar', 8: 'unicycle', 9: 'buggy736',
    10: 'corvega', 11: 'truckflatbed', 12: 'wheelchair', 13: 'highwayman',
    14: 'patrolcar', 16: 'deathcar', 17: 'hopper', 18: 'pogo',
    19: 'hoverbike', 20: 'vertibird', 33: 'motorchariot', 34: 'formula',
    35: 'boat02', 36: 'smallplane', 37: 'b29', 38: 'golfcart',
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
    return f'fleet/{RENDERS[profile]}.webp' if profile in RENDERS else None


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
        if item.get('profile') in RENDERS:
            item['image'] = vehicle_image(item['profile'])
