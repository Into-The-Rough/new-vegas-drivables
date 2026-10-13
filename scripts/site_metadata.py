from html import escape

BASE = 'https://into-the-rough.github.io/new-vegas-drivables/'
PAGES = {
    'index.html': ('New Vegas Drivables', 'Cars, bikes, aircraft, boats and horses for Fallout: New Vegas. Watch gameplay, explore placements and learn the controls, races and horse taming.'),
    'vehicles.html': ('Vehicle speeds', 'Compare the cars, motorcycles, aircraft, boats and other rides in New Vegas Drivables, with top speeds, fuel supplies and locations.'),
    'locations.html': ('Complete location guide', 'Find all 36 vehicle placements, three wild horse herds and three unlocks in New Vegas Drivables. Includes location and quest spoilers.'),
    'sounds.html': ('Sound & passengers', 'Explore the real-world engine recordings behind New Vegas Drivables and check which vehicles can carry your companions.'),
    'faq.html': ('FAQ', 'New Vegas Drivables release plans, requirements, TTW compatibility, controllers, Steam Deck and settings explained.'),
    'about.html': ('Ethos & development', 'Why New Vegas Drivables exists and how exploration, handling, sound and player choice shape the mod.'),
    'credits.html': ('Credits', 'Credits and sources for New Vegas Drivables, its vehicle guide, artwork and typeface.'),
    'modders.html': ('Modders', 'Create vehicles for New Vegas Drivables. Guides to meshes, wheels, tyres, glass, lights, configuration, commands and events.'),
}


def metadata(filename):
    title, description = PAGES[filename]
    title = title if filename == 'index.html' else title + ' · New Vegas Drivables'
    url = BASE if filename == 'index.html' else BASE + filename
    image = BASE + 'assets/monster-truck.jpg'
    return f'''<title>{escape(title)}</title>
<meta name="description" content="{escape(description, quote=True)}">
<link rel="canonical" href="{url}">
<meta property="og:title" content="{escape(title, quote=True)}">
<meta property="og:description" content="{escape(description, quote=True)}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="New Vegas Drivables">
<meta property="og:locale" content="en_GB">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{image}">
<meta property="og:image:width" content="1280">
<meta property="og:image:height" content="720">
<meta property="og:image:alt" content="New Vegas Drivables Monster Truck beside the Thunderdome loops">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{escape(title, quote=True)}">
<meta name="twitter:description" content="{escape(description, quote=True)}">
<meta name="twitter:image" content="{image}">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32.png">
<link rel="icon" type="image/svg+xml" href="assets/mark.svg">
<link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">'''


def sitemap():
    urls = [BASE if name == 'index.html' else BASE + name for name in PAGES]
    return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + ''.join(f'  <url><loc>{url}</loc></url>\n' for url in urls) + '</urlset>\n'
