"""Public recording identities, checked against active audio banks and provenance."""

SOURCES = {
    'apocalyptic_buggy': ('Subaru Impreza GC8', '2.0-litre boxer engine and exhaust recordings.'),
    'hotrod': ('Dodge Challenger 426 Hemi', 'V8 engine and exhaust recordings. Shared by the Hotrod and Ford Falcon Interceptor.'),
    'old_rusty_car': ('Toyota Corolla E30', '1.2-litre four-cylinder engine and exhaust recordings.'),
    'type_736_buggy': ('Subaru Impreza GD WRX', '2.0-litre boxer engine and exhaust recordings.'),
    'corvega_atomic_v8': ('Shelby GT500', '5.4-litre V8 recordings give the nuclear Corvega its engine sound.'),
    'flatbed_truck': ('Dodge Ram 2500 Cummins', '5.9-litre straight-six diesel engine and exhaust recordings.'),
    'highwayman': ('Dodge Challenger 426 Hemi', 'V8 recordings provide the sound of the fuel-cell-powered Highwayman.'),
    'patrol_car': ('Ford Crown Victoria', '4.6-litre V8 engine and exhaust recordings.'),
    'death_car': ('BMW 420d', '2.0-litre N47 engine recordings.'),
    'formula_racer': ('Datsun 240Z', '2.4-litre straight-six engine and exhaust recordings.'),
    'desoto': ('Buick Regal', 'V8 exhaust-microphone recordings form the main engine layer.'),
    'monster_truck': ('Dodge Ram 1500 Hemi', '5.7-litre V8 engine and exhaust recordings.'),
    'marine_apc': ('Peterbilt 359', '14.9-litre Caterpillar engine and exhaust recordings, with separate track sounds.'),
    'commonwealth_hetzer': ('Hetzer', 'Tank engine recordings with matching start and shutdown sounds.'),
    'pershing': ('Panther and Hetzer', 'Panther engine recordings with Hetzer start and shutdown sounds.'),
    'motorcycle': ('Honda 450cc four-stroke', 'Exhaust-microphone recordings, pitched down for the bike. Also used by the Motor Chariot.'),
    'boat02': ('Dodge Challenger 426 Hemi', 'The boat currently shares the Challenger engine bank.'),
    'hoverbike': ('Jet aircraft recordings', 'Jet tarmac and take-off recordings shaped into the Hover Bike’s thrusters, with separate hop, dodge and repulsor effects.'),
    'golf_cart': ('Electric monowheel recordings', 'Compact electric drive sounds. Silent at rest, with a reversing beep and small horn.'),
    'vertibird': ('Military helicopter recordings', 'Separate idle, cruising and strained rotor sounds, plus landing gear and warning effects.'),
    'smallplane': ('Propeller aircraft recordings', 'Separate idle, cruise and power loops, with start and shutdown cues.'),
    'b29': ('Fallout: New Vegas B-29 flyby', 'The vanilla flyby is reshaped into sustained, layered four-engine sounds.'),
    'biplane': ('B-29-derived propeller bank', 'Uses the bomber’s propeller recordings with its own playback settings.'),
    'alien_craft': ('Designed science-fiction sound set', 'Staged propulsion, warp boost, landing gear and weapon effects.'),
    'racing.karts:engine': ('250cc dirt bike recordings', 'Stationary idle, separate on-load and off-load loops across eight engine stages, with their own start and shutdown cues.'),
}

UNPOWERED = {
    3: ('Bicycle recordings', 'Pedalling, chain, freewheel, tyres, brakes, bell and landing sounds.'),
    6: ('Skateboard recordings', 'Wheel roll, kicks, deck pops, landings and scrapes.'),
    8: ('Cycle and contact sounds', 'Wheel movement and contact sounds without an engine layer.'),
    12: ('Wheel and contact sounds', 'Rolling and movement sounds without an engine layer.'),
    17: ('Bounce effects', 'Bouncing and landing sounds without an engine layer.'),
    18: ('Spring and bounce effects', 'Spring movement and landing sounds without an engine layer.'),
    47: ('Towing and contact sounds', 'Coupler, axle and bump sounds behind the towing car, no engine of its own.'),
    48: ('Cart and harness sounds', 'Wheel, shaft and harness sounds, no engine of its own.'),
}


def sound_source(config, profile):
    key = config.get('sAudioProfile', '')
    title, detail = SOURCES[key] if key else UNPOWERED[profile]
    return dict(source=title, detail=detail)
