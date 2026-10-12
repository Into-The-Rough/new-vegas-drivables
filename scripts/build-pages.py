"""Generate a no-JavaScript companion guide from the exported public content."""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
public = ROOT / 'public'
data = json.loads((public / 'content.js').read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))


def page(title, body):
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#090909"><title>{title} — New Vegas Drivables</title><link rel="icon" href="assets/mark.svg"><link rel="stylesheet" href="style.css"></head>
<body><div class="site-shell"><header class="site-header"><a class="brand" href="index.html">New Vegas Drivables</a><a class="text-link" href="index.html#placements">← Map & guide</a></header><main class="plain-page">{body}</main><footer class="site-footer"><p>New Vegas Drivables by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>.</p><a href="index.html" class="text-link">Back to the guide</a></footer></div></body></html>'''


rows = []
for entry in data['entries']:
    gate = f"Survival {entry['survival']}" if entry['kind'] == 'herd' else f"Repair {entry['repair']}" if entry['repair'] else 'No repair skill gate'
    rows.append(f'''<tr id="{entry['id']}"><td><a href="index.html#ride={entry['id']}">{escape(entry['name'])}</a><br>{escape(entry['category'])} · {escape(entry['region'])}</td><td>{escape(entry['location'])}<br><small>{escape(entry['state'])}</small></td><td>{escape(gate)} · {escape(entry['parts'])}<br>{escape(entry['acquisition'])}{'<br><em>'+escape(entry['note'])+'</em>' if entry['note'] else ''}</td><td>{escape(entry['fuel'])}<br>{escape(entry['reserve'])}</td></tr>''')
(public / 'locations.html').write_text(page('Complete location guide', f'''<h1>Complete location list</h1><p>36 vehicle placements, three horse herds and three race / arena unlocks. This page includes exact location spoilers and works without JavaScript.</p><p>World placements must be enabled in F10 preferences. Starting conditions are for discoveries before you use or repair them. Updated {data['updated']}.</p><div class="table-scroll"><table class="location-table"><thead><tr><th scope="col">Vehicle</th><th scope="col">Location / route</th><th scope="col">How to acquire it</th><th scope="col">Supply / starting reserve</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>'''))
(public / 'credits.html').write_text(page('Credits', '''<h1>Credits & sources</h1><h2>The mod</h2><p>New Vegas Drivables is a Fallout: New Vegas mod by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>.</p><h2>The guide</h2><p>Locations, restoration requirements and unlock routes come from the mod’s placement records and implementation notes. Vehicle images are renders of the mod’s assets. The amber text, selection outlines and tabs follow the in-game F10 menu.</p><h2>Map & game</h2><p>The Mojave map artwork and Fallout: New Vegas belong to their respective rights holders. This is an unofficial fan project.</p><h2>Font</h2><p>Monofonto by Ray Larabie, the typeface used for the game’s menu text. This site includes the unmodified 2.000 (2004) release and its <a href="assets/monofonto-readme.html">original readme and licence</a>, which permits use and redistribution. The original package is available from <a href="https://www.abstractfonts.com/font/845">Abstract Fonts</a>; the designer’s current catalogue is at <a href="https://typodermicfonts.com/monofonto/">Typodermic Fonts</a>.</p>'''))
print('Generated locations.html and credits.html.')
