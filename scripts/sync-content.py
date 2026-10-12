"""Export the public field guide from the mod's authored placement records."""
import argparse
import base64
import configparser
import io
import json
import re
from pathlib import Path
from PIL import Image
from site_copy import clean_copy
from reference_content import reference_content
from media_sources import apply_images, export_renders

ROOT = Path(__file__).resolve().parents[1]


def export(source):
    audit = json.loads((source / 'docs/VEHICLE_PLACEMENT_AUDIT.json').read_text())
    horses = json.loads((source / 'docs/WILD_HORSES.json').read_text())
    config = configparser.ConfigParser(interpolation=None, strict=False)
    config.read(source / 'config/DrivablesNVSE.ini')
    picker = (source / 'docs/WILD_HORSE_MAP.html').read_text()
    chart = json.loads(re.search(r'<script id="mapData" type="application/json">(.*?)</script>', picker, re.S)[1])
    png = re.search(r'id="mapImage"[^>]+src="data:image/png;base64,([^"]+)"', picker)[1]
    assets = ROOT / 'public/assets'
    assets.mkdir(parents=True, exist_ok=True)
    Image.open(io.BytesIO(base64.b64decode(png))).save(assets / 'mojave.webp', 'WEBP', lossless=True)
    for name, rel in {
        'highwayman.webp': 'assets/work/highwayman-bonnet/fleet_view.png',
        'corvega.webp': 'assets/work/corvega-bonnet/fleet_view.png',
        'buggy.webp': 'assets/work/buggy-bonnet/fleet_view.png',
    }.items():
        Image.open(source / rel).save(assets / name, 'WEBP', quality=88, method=6)

    families = {3: 'Bikes', 4: 'Bikes', 6: 'Oddballs', 8: 'Oddballs', 12: 'Oddballs',
                17: 'Oddballs', 18: 'Oddballs', 19: 'Bikes', 20: 'Air', 35: 'Water',
                36: 'Air', 37: 'Air', 39: 'Armour', 40: 'Air', 41: 'Armour',
                42: 'Armour', 45: 'Air'}
    repairs = {4: (100, 0), 7: (75, 0), 14: (75, 0), 20: (100, 0), 10: (75, 1),
               9: (50, 1), 13: (100, 2), 2: (75, 1), 11: (50, 1), 16: (75, 1),
               43: (75, 1), 44: (50, 1), 39: (100, 2), 40: (100, 2),
               41: (100, 2), 42: (100, 2), 33: (50, 1)}
    landmarks = {v['name']: v for v in chart['landmarks']}
    regional = {'000C45': "Freeside's North Gate", '000C47': "Freeside's East Gate",
                '000C4D': "Freeside's East Gate", '000C4B': 'Westside South Entrance',
                '000C55': 'Camp McCarran', '000C57': 'Camp McCarran'}
    regional_offsets = {'000C45': (-2400, 1300), '000C47': (2400, 600),
                        '000C4D': (-2400, -2500), '000C55': (-1800, -1600), '000C57': (1800, 1600)}
    location_overrides = {
        '000CA8': 'Brooks Tumbleweed Ranch — inside the curved metal shelter, facing its southern opening.',
        '000CD0': 'HELIOS One — beside the western approach, under camouflage netting.',
        '000CE0': 'Quarry Junction — tucked away on the western side, under a fitted canvas tarp.',
    }
    names = {16: 'Vikki and Vance Death Car', 45: 'Stunt Biplane', 46: 'H1 Monster Truck'}
    entries = []
    for raw in audit['active_placements']:
        n = int(raw['profile'].replace('Vehicle', ''))
        c = config[raw['profile']]
        local = raw['ref'][2:]
        supply = ('Reactor Coolant' if c.getboolean('bReactorCoolant', fallback=False) else
                  'Energy Cells / MFCs' if c.getboolean('bFuelCells', fallback=False) else
                  'Jerry Cans' if c.getboolean('bFuel', fallback=False) else 'None')
        gate, tools = repairs.get(n, (0, 0))
        condition = 'Quest reward' if n in (16, 19, 37) else 'Recovery' if n == 40 else 'Repair needed' if gate else 'Ready to ride'
        entry = dict(id='v-' + local.lower(), profile=n, name=names.get(n, raw['name']),
                     category=families.get(n, 'Cars'), kind='discovery', ref=local,
                     location=location_overrides.get(local, raw['location']), state=condition,
                     condition=raw['initial_mechanics'], reserve=raw['initial_reserve'],
                     acquisition=re.sub(r' \([0-9A-F]{8}\)', '', raw['acquisition']), fuel=supply, repair=gate, tools=tools,
                     region='Mojave', mapPoint=raw['pose'][:2], approximate=False,
                     parts='1 Sensor Module' if n == 20 else f'{tools} Car Repair Tools' if tools else 'No parts',
                     image={13: 'highwayman.webp', 10: 'corvega.webp', 1: 'buggy.webp'}.get(n),
                     note='')
        if local in regional:
            anchor = landmarks[regional[local]]
            dx, dy = regional_offsets.get(local, (0, 0))
            entry.update(mapPoint=[anchor['x'] + dx, anchor['y'] + dy], approximate=True)
        if local == '000CAD':
            entry.update(mapPoint=[-24000, 97000], approximate=True)
        if n == 19:
            entry.update(region='Big MT', mapPoint=None,
                         acquisition='Complete Old World Blues. Find your reward outside the Think Tank / Sink entrances, then charge it with Energy Cells or Microfusion Cells. No repair or caps required.',
                         note='The reward bike currently stays in Big MT. Transportalponder transfer to the Mojave is not implemented.')
        if n == 37:
            entry['note'] = 'The Volare! unlock is implemented. A reported runway / ground-support fault still affects takeoff.'
        if n == 40:
            entry['acquisition'] = 'Requires the Wild Wasteland alien encounter. Defeat all three aliens, then use F10 → Garage → Alien Recon Craft → Recover UFO at the camp. Repair 100 and two carried Car Repair Tools are consumed. The original UFO is replaced by your craft on reachable ground.'
        if n == 16:
            entry['acquisition'] = 'Resolve My Kind of Town with any successful sheriff ending and wait for the casino to reopen. Inspect the original display: Repair 75 and one carried Car Repair Tools. Repair consumes the toolbox and moves the restored car and you outside.'
        if n == 17:
            entry['note'] = 'The Strip-door transfer fix is implemented; its corrected round-trip test is still pending.'
        entries.append(entry)

    for i, site in enumerate(horses['proposed_sites']):
        gate = ['None / 50', '50', '50 / 75'][i]
        entries.append(dict(id=f'herd-{i+1}', name=f'Wild horses · Herd {i+1}', category='Horses',
                            kind='herd', region='Mojave', mapPoint=site['suggested_centre_xyz'][:2],
                            approximate=False, location=site['name'], state='Tame with Survival',
                            condition='2–4 wild horses. Inspect each horse for its traits and requirement.',
                            reserve='Stamina, not fuel', fuel='None', repair=0, tools=0, parts='No items',
                            survival=gate, ref=horses['travel_refs_local'][i], image=None,
                            acquisition=f'Inspect and tame a horse with effective Survival {gate}. Complete the calming interaction out of combat. Taming costs no items. Eligible horses can roll rare: Survival 100 and 5/5/5 traits.',
                            note='Ordinary wild horses replenish after three in-game days away. Tamed and rare individuals stay dead. A later new horse can roll rare.'))

    for raw in audit['unplaced_profiles']:
        n = int(raw['profile'].replace('Vehicle', ''))
        if n == 15:
            continue
        entries.append(dict(id={15:'original-golf-cart',34:'formula-racer',45:'stunt-biplane',46:'monster-truck'}[n],
                            profile=n, name=names.get(n, raw['name']), category=families.get(n, 'Cars'),
                            kind='excluded' if n == 15 else 'reward', region='Unlocks', mapPoint=None,
                            approximate=False, location=raw['proposed_location'],
                            state={15:'No separate discovery',34:'First race win',45:'Visit Thunderdome',46:'Arena only'}[n],
                            condition={15:'Camp Golf provides the world cart.',34:'One free car per character; fully repaired, 40 L fuel.',45:'Available in the Thunderdome.',46:'Available only in the Thunderdome.'}[n],
                            acquisition={15:'There is no separate discovery for this older cart. Find the Camp Golf Cart at the resort forecourt.',
                                         34:'Finish first in a completed race against at least one opponent. Return from the race, then F10 → Garage → Formula Racer → Claim Prize. One free car per character.',
                                         45:'Visit the Thunderdome once to unlock world spawning. The general World vehicle spawning setting must also be enabled.',
                                         46:'Use the garage inside the Thunderdome. The Monster Truck cannot be brought home or spawned outside the arena.'}[n],
                            fuel=raw['fuel_type'].replace('Jerry Can','Jerry Cans'), reserve='See unlock conditions',
                            repair=0, tools=0, parts='No repair items', image=None, ref=None, note=''))
    key_landmarks = ['Goodsprings','Primm','Novac','Jacobstown','Nellis Air Force Base','Hoover Dam',
                     'Boulder City','Camp Searchlight','Camp McCarran']
    for entry in entries:
        for key in ('location', 'condition', 'reserve', 'acquisition', 'note'):
            entry[key] = clean_copy(entry[key])
    data = dict(counts=dict(vehicles=32, placements=36, herds=3),
                map=dict(bounds=chart['bounds'], border=chart['border'], area=chart['area'],
                         landmarks=[landmarks[n] for n in key_landmarks]), entries=entries)
    data.update(reference_content(source, config, entries, horses))
    export_renders(source, assets)
    apply_images(data)
    assert len(entries) == 42 and len({v['id'] for v in entries}) == 42
    assert sum(v['kind']=='discovery' for v in entries) == 36
    (ROOT/'public/content.js').write_text('window.DRIVABLES = '+json.dumps(data, ensure_ascii=False, indent=2)+';\n')
    print(f'Exported {len(entries)} guide entries and image assets.')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('source', type=Path, help='DrivablesNVSE source checkout')
    export(parser.parse_args().source)
