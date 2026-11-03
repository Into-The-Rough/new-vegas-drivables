"""Current discoveries and awards, checked against the shipped form records."""
import hashlib
import json
import re
import struct


def records_in(node):
    if isinstance(node, dict):
        if 'form_id' in node:
            yield node
        for key in ('groups', 'records', 'children'):
            for child in node.get(key, []):
                yield from records_in(child)


def field(record, name):
    value = next(s for s in record['subrecords'] if s['type'] == name)
    return value['text'].encode() if 'text' in value else bytes.fromhex(value['hex'])


def supply(config):
    if config.getboolean('bFlamerFuel', fallback=False): return 'Flamer Fuel'
    if config.getboolean('bReactorCoolant', fallback=False): return 'Reactor Coolant'
    if config.getboolean('bFuelCells', fallback=False): return 'Energy Cells / MFCs'
    return 'Jerry Cans' if config.getboolean('bFuel', fallback=False) else 'None'


DISCOVERIES = [
    ('000D50', 49, 'Street Cleaner', 'Industrial', 'Northern El Dorado Dry Lake, southeast of Vault 11. Inspect the old street cleaner beside the wreck pile.', 25),
    ('000D52', 50, 'Bucket Loader', 'Industrial', 'Quarry Junction, northern workings.', 35),
    ('000D54', 50, 'Bucket Loader', 'Industrial', 'Quarry Junction, western workings.', 35),
    ('000D56', 50, 'Bucket Loader', 'Industrial', 'Quarry Junction, southern approach northwest of Sloan.', 35),
    ('000D58', 50, 'Bucket Loader', 'Industrial', 'Northeast of Sloan, east of Quarry Junction.', 35),
    ('000D5A', 50, 'Bucket Loader', 'Industrial', 'East-northeast of HELIOS One, southwest of El Dorado Gas & Service.', 35),
    ('000D5C', 50, 'Bucket Loader', 'Industrial', 'Southern Gypsum Train Yard.', 35),
    ('000DA3', 51, 'Fighter Jet', 'Air', 'Nellis apron, beside the B-29 position and facing the long runway.', 0),
    ('000D72', 55, 'Army Truck', 'Cars', 'Camp Searchlight, southern truck position.', 50),
    ('000D74', 55, 'Army Truck', 'Cars', 'Camp Searchlight, central truck position.', 50),
    ('000D76', 55, 'Army Truck', 'Cars', 'Camp Searchlight, northern truck position.', 50),
    ('000D78', 56, 'Fire Engine', 'Cars', 'Camp Searchlight fire station, northern engine.', 50),
    ('000D7A', 56, 'Fire Engine', 'Cars', 'Camp Searchlight fire station, southern engine.', 50),
    ('000DC8', 53, 'Scrambler', 'Bikes', 'Red Rock Canyon, by the Great Khan drug lab.', 0),
    ('000DCA', 53, 'Scrambler', 'Bikes', 'Red Rock Canyon, by Papa Khan’s longhouse.', 0),
]

AWARDS = [
    ('shuriken', 52, 'Shuriken', 'Bikes', 'Win a motorcycle race',
     'Finish first on a motorcycle against at least one opponent. Finish the race yourself, then return home and collect the award in F10 → Garage.'),
    ('observation-balloon', 54, 'Observation Balloon', 'Air', 'Complete Come Fly With Me',
     'Complete Come Fly With Me successfully, then collect the balloon in F10 → Garage. Its burner uses Flamer Fuel.'),
    ('supercharged-highwayman', 57, 'Supercharged Highwayman', 'Cars', 'Podium in all six races',
     'Finish in the top three on every course: Nuka-Cola Speedway, Mojave Oval, Mojave Cycle Circuit, Ivanpah Buggy Race, Mojave Steeplechase and The Repconn Arena. Race against at least one opponent and finish each event yourself. Return home and collect it in F10 → Garage.'),
    ('brotherhood-vertibird', 20, 'Brotherhood Vertibird', 'Air', 'Complete Still in the Dark',
     'Complete Still in the Dark successfully, then collect the Brotherhood Vertibird in F10 → Garage. This is a separate award from repairing the crashed Vertibird.'),
    ('nuka-monster-truck', 46, 'Nuka-Cola Monster Truck', 'Cars', 'Win Nuka-Cola Speedway',
     'Win Nuka-Cola Speedway against at least one opponent and finish the race yourself. Return from the race, visit the Thunderdome and collect the award in F10 → Garage. The truck stays in the Thunderdome.'),
    ('sunset-monster-truck', 46, 'Sunset Sarsaparilla Monster Truck', 'Cars', 'Complete A Valuable Lesson',
     'Complete A Valuable Lesson successfully, then collect the award from F10 → Garage inside the Thunderdome. The truck stays in the Thunderdome.'),
]


def update_catalogue(source, config, entries):
    manifest = json.loads((source / 'tools/esp_manifest.json').read_text())
    assert hashlib.sha256((source / 'dist/DrivablesNVSE.esm').read_bytes()).hexdigest() == manifest['expected_sha256'], 'refresh the form manifest before exporting'
    records = {int(r['form_id'], 16): r for r in records_in(manifest)}
    for entry in entries:
        if 'profile' not in entry: continue
        entry['fuel'] = supply(config[f'Vehicle{entry["profile"]}'])
        if entry['fuel'] == 'Reactor Coolant' and entry['reserve'].startswith('Empty:'):
            entry['reserve'] = 'Empty coolant reservoir'
        if entry['kind'] == 'discovery':
            record = records[0x01000000 | int(entry['ref'], 16)]
            if not entry['approximate'] and entry['region'] == 'Mojave':
                entry['mapPoint'] = list(struct.unpack('<6f', field(record, 'DATA'))[:2])
        if entry['profile'] == 38:
            entry['name'] = 'Golf Cart'
        if entry['id'] in ('stunt-biplane', 'monster-truck'):
            entry.update(state='Arena loan', location='Thunderdome arrival area',
                         acquisition='Enter through F10 → Racing → Thunderdome. The plain H1 Monster Truck and Stunt Biplane are parked near the arrival point, ready to use. Both stay in the arena when you leave and cannot be retrieved through your garage or taken to another race.',
                         condition='Repaired, refuelled and returned to their parking spots when you come back. Loading a save during a visit keeps their current condition and position.',
                         reserve='Full tank on arrival',
                         note='The Nuka-Cola and Sunset Sarsaparilla Monster Truck awards have their own unlocks.' if entry['profile'] == 46 else '')
        if entry['id'] == 'go-kart':
            entry.update(state='Race loan', location='The Repconn Arena',
                         acquisition='Choose The Repconn Arena in F10 → Racing. Starting on foot lends you the red kart against the other seven colours. This is a race loan, not a free garage unlock.')
    for ref, profile, name, category, location, repair in DISCOVERIES:
        record = records[0x01000000 | int(ref, 16)]
        expected = int(config[f'Vehicle{profile}']['sForm'].split('|')[1], 16)
        assert int.from_bytes(field(record, 'NAME'), 'little') & 0xFFFFFF == expected
        industrial = profile in (49, 50)
        acquisition = (f'Inspect the original machinery. Repair {repair} and one carried box of Car Repair Tools restore it. The toolbox is consumed. Add Reactor Coolant before starting.' if industrial else
                       f'Repair {repair} and one box of Car Repair Tools restore the engine. The toolbox is consumed. Fill with Jerry Cans before driving.' if repair else
                       'Board the aircraft at Nellis. It has no quest or restoration gate. Check the fuel before take-off.')
        reserve = 'Empty' if repair else 'Check before departure'
        state = 'Repair needed' if repair else 'Ready to fly'
        note = ''
        if profile == 53:
            state, reserve = 'Khan-owned', 'Quarter tank'
            acquisition = ('This is a working Great Khan bike. Taking it before it is yours counts as theft.' if ref == '000DC8' else
                           'Complete Oh My Papa successfully. The bike by Papa Khan’s longhouse is given to you and listed in your garage. Taking it beforehand counts as theft.')
        if profile == 49:
            note = 'Restoration moves the cleaner onto nearby ground beside the wreckage.'
        if profile == 51:
            note = 'The separate museum exhibit is unchanged. Completing Volare! is not required for this jet.'
        entries.append(dict(id='v-' + ref.lower(), profile=profile, name=name, category=category,
                            kind='discovery', ref=ref, location=location, state=state,
                            condition='Seized machinery' if repair else 'Working vehicle', reserve=reserve,
                            acquisition=acquisition, fuel=supply(config[f'Vehicle{profile}']), repair=repair,
                            tools=1 if repair else 0, region='Mojave',
                            mapPoint=list(struct.unpack('<6f', field(record, 'DATA'))[:2]), approximate=False,
                            parts='1 Car Repair Tools' if repair else 'No repair items', image=None, note=note))
    for ident, profile, name, category, requirement, acquisition in AWARDS:
        entries.append(dict(id=ident, profile=profile, name=name, category=category, kind='reward',
                            ref=None, location='F10 → Garage', state=requirement, condition='One award per character',
                            reserve='Award delivery', acquisition=acquisition, fuel=supply(config[f'Vehicle{profile}']),
                            repair=0, tools=0, region='Unlocks', mapPoint=None, approximate=False,
                            parts='No repair items', image=None, note='Use the owned entry to retrieve it after collection.'))
    for ident, location in [('long15-construction', 'Long 15, overpass construction site'), ('long15-junkyard', 'Long 15, Baker Junkyard')]:
        entries.append(dict(id=ident, profile=50, name='Bucket Loader', category='Industrial', kind='discovery',
                            ref=None, location=location, state='Optional patch', condition='Seized machinery', reserve='Empty',
                            acquisition='Requires Long15Reloaded.esm and DrivablesNVSE - Long15.esp. Inspect the original cabin, with Repair 35 and one carried box of Car Repair Tools. The toolbox is consumed. Add Reactor Coolant before driving.',
                            fuel='Reactor Coolant', repair=35, tools=1, region='Long 15', mapPoint=None,
                            approximate=False, parts='1 Car Repair Tools', image=None, note='Outside the Mojave map.'))
    policy = (source / 'drivables/WorldDistributionPolicy.h').read_text()
    managed = {f'{int(value, 16):06X}' for value in re.findall(r'0x[0-9A-Fa-f]+', re.search(r'kVehicleIDs\[kCount\] = \{([^}]+)', policy)[1])}
    exported = {e['ref'] for e in entries if e['kind'] == 'discovery'}
    assert managed <= exported, f'undocumented managed placements: {managed - exported}'
    expected_profiles = {int(s[7:]) for s in config.sections() if s.startswith('Vehicle') and s[7:].isdigit() and not 21 <= int(s[7:]) <= 32 and s != 'Vehicle15'}
    assert {e['profile'] for e in entries if 'profile' in e} == expected_profiles, 'undocumented vehicle profile'
