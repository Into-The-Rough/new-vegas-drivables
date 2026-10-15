"""Public vehicle specifications and course outlines from the shipped settings."""
from pathlib import Path
from site_copy import clean_copy
from sound_sources import sound_source

COURSES = [
    ('nuka_cola_speedway', 'Nuka-Cola Speedway', 'Cars',
     'A long road circuit with sweeping bends and long straights. Optional debris and roadside raiders make the same lap a different race.',
     'Road racing', 'Choose the Nuka-Cola Speedway course in race setup.'),
    ('mojave_oval', 'Mojave Oval', 'Cars',
     'A shorter oval for close racing and repeated overtaking. Choose a clear track or add debris and roadside raiders.',
     'Oval racing', 'Choose the Mojave Oval course in race setup.'),
    ('mojave_cycle', 'Mojave Cycle Circuit', 'Bicycles',
     'A compact, flat circuit with broad bends and a bicycle grid. It shares its setting with the horse steeplechase.',
     'Cycling', 'Choose the Mojave Cycle Circuit course in race setup.'),
    ('ivanpah_buggy', 'Ivanpah Buggy Race', 'Cars',
     'A tight off-road circuit set up for the Apocalyptic Buggy. A short lap puts the bends close together.',
     'Buggy racing', 'Choose the Ivanpah Buggy Race course in race setup.'),
    ('mojave_steeplechase', 'Mojave Steeplechase', 'Horses',
     'Horse racing on the cycle circuit, with eight fences around the lap. Keep enough stamina for the next jump and the final stretch.',
     'Horse racing', 'Choose the Mojave Steeplechase course in race setup.'),
    ('repconn_arena', 'The Repconn Arena', 'Go-karts',
     'A walled figure-eight with a bridge crossover, banking and grandstands under two Repconn rockets. The wide lobe rewards momentum and the tight lobe needs earlier braking. No debris or raiders.',
     'Kart racing', 'Choose The Repconn Arena course in race setup. The default field is three laps and eight go-karts, one of each colour. On foot you are lent the red kart.'),
]


def reference_content(source, config, entries, horses):
    vehicles = []
    for profile in sorted({e['profile'] for e in entries if 'profile' in e}):
        placements = [e for e in entries if e.get('profile') == profile]
        first = placements[0]
        c = config[f'Vehicle{profile}']
        metres_per_second = c.getfloat('fTopSpeed', fallback=c.getfloat('fSpeedCap', fallback=0)) / 70.0
        description = clean_copy(c.get('sTagline', ''))
        if profile == 19:
            description = 'Prototype hover bike powered by Energy Cells or Microfusion Cells. Hovers over the ground and can hop or dodge sideways.'
        vehicles.append(dict(profile=profile, name=first['name'], category=first['category'],
                             mph=round(metres_per_second * 2.23693629, 2),
                             kmh=round(metres_per_second * 3.6, 2),
                             description=description, fuel=first['fuel'],
                             entries=[e['id'] for e in placements], image=first['image'],
                             passengers=c.getint('iNumCompanions', 0),
                             passengerNote=('One dog and one humanoid' if profile == 33 else
                                            'Two humanoids and one dog' if profile == 35 else
                                            'Enclosed crew position' if c.getboolean('bPassengerEnclosed', False) else
                                            'A dog can use the rear position' if c.get('sPassenger3CreatureIdleID') else ''),
                             boost=c.getboolean('bBoost', False), parachute=c.getboolean('bParachuteSupply', False),
                             sound=sound_source(c, profile)))
    courses = []
    for key, name, kind, description, style, access in COURSES:
        lines = (source / f'mod/config/drivables/races/{key}.txt').read_text().splitlines()
        rows = [line.split() for line in lines if line and not line.startswith('#')]
        track = next(row for row in rows if row[0] == 'track')
        courses.append(dict(id=key, name=name, kind=kind, description=description,
                            style=style, access=access, metres=round(float(track[2])/70),
                            checkpoints=sum(row[0]=='gate' for row in rows),
                            fences=sum(row[0]=='jump' for row in rows),
                            outline=[[round(float(row[1])), round(float(row[2]))] for row in rows if row[0]=='point']))
    arena = []
    for folder in ('stunts', 'crush'):
        for line in (source / f'mod/config/drivables/{folder}/thunderdome.txt').read_text().splitlines():
            row = line.split()
            if not row:
                continue
            if row[0] == 'piece':
                name = ' '.join(row[3:] if folder == 'stunts' else row[2:])
                arena.append(dict(name=name, kind=row[2] if folder=='stunts' else 'ground', points=[]))
            elif row[0] == 'gate':
                arena[-1]['points'].append([round(float(row[2])), round(float(row[3]))])
            elif row[0] == 'start':
                arena[-1]['points'].append([round(float(row[1])), round(float(row[2]))])
    return dict(vehicles=vehicles, courses=courses, arena=arena,
                horseTraits=[dict(name=p['name'].replace(' (any coat)',''), survival=p['gate'],
                                  speed=p['speed'], endurance=p['endurance'], nerve=p['nerve'])
                             for p in horses['proposed_profiles']])
