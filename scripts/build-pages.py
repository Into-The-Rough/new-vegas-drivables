"""Generate a no-JavaScript companion guide from the exported public content."""
import json
import re
from html import escape
from pathlib import Path
from modder_reference import content as modder_content
from site_navigation import navigation
from site_metadata import metadata, sitemap, PAGES, BASE

ROOT = Path(__file__).resolve().parents[1]
public = ROOT / 'public'
data = json.loads((public / 'content.js').read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))
index = (public / 'index.html').read_text()
index, count = re.subn(r'<!--metadata-->.*?<!--/metadata-->', lambda _: '<!--metadata-->' + metadata('index.html') + '<!--/metadata-->', index, flags=re.S)
assert count == 1, 'expected one metadata slot'
analytics = (ROOT / 'pages/analytics.html').read_text().strip()
index, count = re.subn(r'<!--analytics-->.*?<!--/analytics-->', lambda _: '<!--analytics-->' + analytics + '<!--/analytics-->', index, flags=re.S)
assert count == 1, 'expected one analytics slot'
faq = (ROOT / 'pages/faq.html').read_text()
embedded_faq = faq.replace('<h1>', '<h2>').replace('</h1>', '</h2>').replace('href="index.html#', 'href="#')
index, count = re.subn(r'<!--faq-content-->.*?<!--/faq-content-->', lambda _: '<!--faq-content-->\n' + embedded_faq + '      <!--/faq-content-->', index, flags=re.S)
assert count == 1, 'expected one FAQ content slot'
index, count = re.subn(r'<!--site-navigation-->.*?<!--/site-navigation-->', lambda _: '<!--site-navigation-->' + navigation(index=True) + '<!--/site-navigation-->', index, flags=re.S)
assert count == 1, 'expected one navigation slot'
(public / 'index.html').write_text(index)


def page(title, body, active=''):
    current = active or {'Complete location guide': 'placements', 'Vehicle speeds': 'vehicles', 'Sound & passengers': 'sounds'}.get(title, '')
    extra_head = '<link rel="stylesheet" href="modders.css"><script defer src="modders.js"></script>' if active == 'modders' else ''
    nav = navigation(current)
    filename = next(name for name, details in PAGES.items() if details[0] == title)
    return f'''<!doctype html>
<html lang="en-GB"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#090909">{metadata(filename)}<link rel="stylesheet" href="style.css"><link rel="stylesheet" href="navigation.css"><script defer src="navigation.js"></script><link rel="stylesheet" href="guides.css"><link rel="stylesheet" href="media.css"><script defer src="gallery.js"></script>{extra_head}<link rel="stylesheet" href="reading.css"><script defer src="reading.js"></script></head>
<body><div class="site-shell"><header class="site-header"><a class="brand" href="index.html">New Vegas Drivables</a><div class="profile-links"><a class="text-link" href="https://www.nexusmods.com/newvegas/mods/100007">Nexus Mods ↗</a><a class="text-link" href="index.html#start">Player guides →</a></div></header>{nav}<main class="plain-page">{body}</main><footer class="site-footer"><p>New Vegas Drivables by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>.</p><div><a href="faq.html">FAQ</a><a href="about.html">Ethos & development</a><a href="https://www.youtube.com/@OliverSwanickProductions">YouTube ↗</a><a href="index.html" class="text-link">Home</a><button type="button" class="reading-toggle" data-reading-font aria-pressed="false" hidden>Simpler text</button></div></footer></div>{analytics}</body></html>'''


rows = []
for entry in data['entries']:
    gate = f"Survival {entry['survival']}" if entry['kind'] == 'herd' else f"Repair {entry['repair']}" if entry['repair'] else 'No repair skill gate'
    rows.append(f'''<tr id="{entry['id']}"><td><a href="index.html#ride={entry['id']}">{escape(entry['name'])}</a><br>{escape(entry['category'])} · {escape(entry['region'])}</td><td>{escape(entry['location'])}<br><small>{escape(entry['state'])}</small></td><td>{escape(gate)} · {escape(entry['parts'])}<br>{escape(entry['acquisition'])}{'<br><em>'+escape(entry['note'])+'</em>' if entry['note'] else ''}</td><td>{escape(entry['fuel'])}<br>{escape(entry['reserve'])}</td></tr>''')
(public / 'locations.html').write_text(page('Complete location guide', f'''<h1>Complete location list</h1><p>36 vehicle placements, three horse herds and four race, arena and garage unlocks. This page includes exact location spoilers and works without JavaScript.</p><p>World placements must be enabled in F10 preferences. Starting conditions are for discoveries before you use or repair them.</p><div class="table-scroll"><table class="location-table"><thead><tr><th scope="col">Vehicle</th><th scope="col">Location / route</th><th scope="col">How to acquire it</th><th scope="col">Supply / starting reserve</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>'''))
rows = []
for vehicle in sorted(data['vehicles'], key=lambda v: v['name']):
    links = ''.join(f'<a href="locations.html#{id}">{escape(next(e["location"] for e in data["entries"] if e["id"] == id))}</a>' for id in vehicle['entries'])
    portrait = f'<a class="vehicle-portrait" href="assets/{vehicle["image"]}" data-lightbox data-caption="{escape(vehicle["name"])} · vehicle image"><img src="assets/{vehicle["image"].replace(".webp", "-thumb.webp")}" alt="{escape(vehicle["name"])} vehicle image" width="320" height="180" loading="lazy"></a>' if vehicle['image'] else ''
    rows.append(f'''<tr><th scope="row">{portrait}{escape(vehicle['name'])}<small>{escape(vehicle['description'])}</small></th><td>{escape(vehicle['category'])}</td><td>{round(vehicle['mph'])}</td><td>{round(vehicle['kmh'])}</td><td>{escape(vehicle['fuel'])}</td><td class="vehicle-links">{links}</td></tr>''')
(public / 'vehicles.html').write_text(page('Vehicle speeds', f'''<h1>Vehicles & speeds</h1><p>Standard top speeds from the F10 garage. Boost, tuning, load and terrain affect your speed in play. Horse speeds depend on individual traits.</p><p><a href="index.html#vehicles">Search, filter and sort the catalogue</a> or <a href="sounds.html">check sounds and passenger positions</a>.</p><div class="table-scroll"><table class="vehicle-table"><thead><tr><th scope="col">Vehicle</th><th scope="col">Type</th><th scope="col">mph</th><th scope="col">km/h</th><th scope="col">Supply</th><th scope="col">Where to find it</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>'''))
sound_rows = []
passenger_rows = []
for vehicle in sorted(data['vehicles'], key=lambda v: v['name']):
    name = f'<a href="index.html#ride={vehicle["entries"][0]}">{escape(vehicle["name"])}</a>'
    sound_rows.append(f'<tr><th scope="row">{name}</th><td>{escape(vehicle["sound"]["source"])}</td><td>{escape(vehicle["sound"]["detail"])}</td></tr>')
    passenger_rows.append(f'<tr><th scope="row">{name}</th><td>{vehicle["passengers"] or "Solo"}</td><td>{escape(vehicle["passengerNote"])}</td></tr>')
sound_rows.append('<tr><th scope="row"><a href="index.html#horses">Horses</a></th><td>Horse recordings</td><td>Hoofbeats, breathing and vocal sounds support pace, movement and behaviour.</td></tr>')
(public / 'sounds.html').write_text(page('Sound & passengers', f'''<h1>Sound & passengers</h1><p>Recording sources are sound-design choices. They do not change a vehicle’s Fallout identity or fuel supply. <a href="index.html#sounds">Search the sound mappings</a>.</p><div class="table-scroll"><table class="sound-table"><thead><tr><th scope="col">Ride</th><th scope="col">Recording source</th><th scope="col">How it is used</th></tr></thead><tbody>{''.join(sound_rows)}</tbody></table></div><h2>Passenger positions</h2><p>These counts exclude the driver. Some positions require a dog or a humanoid companion. <a href="index.html#driving=companions">Read the companion guide</a>.</p><div class="table-scroll"><table class="passenger-table"><thead><tr><th scope="col">Vehicle</th><th scope="col">Passengers</th><th scope="col">Seating</th></tr></thead><tbody>{''.join(passenger_rows)}</tbody></table></div>'''))
(public / 'about.html').write_text(page('Ethos & development', (ROOT / 'pages/about.html').read_text()))
(public / 'faq.html').write_text(page('FAQ', faq, 'faq'))
(public / 'modders.html').write_text(page('Modders', modder_content(), 'modders'))
(public / 'credits.html').write_text(page('Credits', '''<h1>Credits & sources</h1><h2>The mod</h2><p>New Vegas Drivables is a Fallout: New Vegas mod by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>. Watch the mod on <a href="https://www.youtube.com/@OliverSwanickProductions">Oliver Swanick Productions</a>.</p><h2>The guide</h2><p>Locations, restoration requirements and unlock routes come from the mod’s placement records and implementation notes. Vehicle speeds use the same settings and conversion as the F10 garage. Circuit diagrams follow the race routes. Vehicle renders and showcase artwork come from the mod’s own assets and videos. The amber text, selection outlines and tabs follow the in-game F10 menu.</p><h2>Map & game</h2><p>The Mojave map artwork and Fallout: New Vegas belong to their respective rights holders. This is an unofficial fan project.</p><h2>Font</h2><p>Monofonto by Ray Larabie, the typeface used for the game’s menu text. This site includes the unmodified 2.000 release and its <a href="assets/monofonto-readme.html">original readme and licence</a>, which permits use and redistribution. The original package is available from <a href="https://www.abstractfonts.com/font/845">Abstract Fonts</a>. The designer’s current catalogue is at <a href="https://typodermicfonts.com/monofonto/">Typodermic Fonts</a>.</p>'''))
print('Generated locations.html, vehicles.html, sounds.html, about.html, faq.html, credits.html and modders.html.')

(public / 'sitemap.xml').write_text(sitemap())
(public / 'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: ' + BASE + 'sitemap.xml\n')
