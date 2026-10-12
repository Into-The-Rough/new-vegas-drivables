"""Generate a no-JavaScript companion guide from the exported public content."""
import json
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
public = ROOT / 'public'
data = json.loads((public / 'content.js').read_text().removeprefix('window.DRIVABLES = ').removesuffix(';\n'))


def page(title, body):
    return f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#11110d"><title>{title} — Drivables NVSE</title><link rel="icon" href="assets/mark.svg"><link rel="stylesheet" href="style.css"></head>
<body><header class="site-header"><a class="brand" href="index.html"><img src="assets/mark.svg" width="38" height="38" alt=""><span>DRIVABLES <small>NVSE</small></span></a><a class="text-link" href="index.html#placements">← INTERACTIVE GUIDE</a></header><main class="section-wrap plain-page">{body}</main><footer class="site-footer section-wrap"><p>Drivables NVSE by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>.</p><a href="index.html" class="text-link">BACK TO HOME ↑</a></footer></body></html>'''


rows = []
for entry in data['entries']:
    gate = f"Survival {entry['survival']}" if entry['kind'] == 'herd' else f"Repair {entry['repair']}" if entry['repair'] else 'No repair skill gate'
    rows.append(f'''<tr id="{entry['id']}"><td><a href="index.html#ride={entry['id']}">{escape(entry['name'])}</a><br>{escape(entry['category'])} · {escape(entry['region'])}</td><td>{escape(entry['location'])}<br><small>{escape(entry['state'])}</small></td><td>{escape(gate)} · {escape(entry['parts'])}<br>{escape(entry['acquisition'])}{'<br><em>'+escape(entry['note'])+'</em>' if entry['note'] else ''}</td><td>{escape(entry['fuel'])}<br>{escape(entry['reserve'])}</td></tr>''')
(public / 'locations.html').write_text(page('Complete location guide', f'''<p class="eyebrow">THE FULL FIELD GUIDE</p><h1>EVERY RIDE. EVERY ROUTE.</h1><p>36 vehicle placements, three horse herds and the deliberate reward / arena exceptions. This page includes exact location spoilers and works without JavaScript.</p><p>World placements must be enabled in F10 preferences. Starting conditions are for discoveries before you use or repair them. Updated {data['updated']}.</p><div class="table-scroll"><table class="location-table"><thead><tr><th scope="col">Vehicle</th><th scope="col">Location / route</th><th scope="col">How to acquire it</th><th scope="col">Supply / starting reserve</th></tr></thead><tbody>{''.join(rows)}</tbody></table></div>'''))
(public / 'credits.html').write_text(page('Credits', '''<p class="eyebrow">DRIVABLES NVSE</p><h1>CREDITS & SOURCES.</h1><h2>THE MOD</h2><p>Drivables NVSE is a Fallout: New Vegas mod by <a href="https://www.nexusmods.com/profile/intotherough">intotherough</a>. This is its companion field guide.</p><h2>THE GUIDE</h2><p>Locations, restoration requirements and unlock routes are drawn from the mod’s authored placement records and implementation notes. Vehicle images are renders of the mod’s assets. The page’s palette, condensed type, framing and category tabs follow the in-game F10 garage.</p><h2>MAP & GAME</h2><p>The Mojave map artwork and Fallout: New Vegas belong to their respective rights holders. This is an unofficial fan project, not an official Bethesda or Obsidian website.</p><h2>TYPE</h2><p>Barlow Condensed by Jeremy Tribby, distributed under the <a href="assets/OFL.txt">SIL Open Font License</a>. The web font is locally hosted and is a substitute for the game’s fonts.</p>'''))
print('Generated locations.html and credits.html.')
