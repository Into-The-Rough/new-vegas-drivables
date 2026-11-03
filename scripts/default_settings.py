"""Player-facing defaults from the shipped configuration, excluding saved overrides."""
import configparser


def defaults(source, config):
    traffic = configparser.ConfigParser(interpolation=None)
    traffic.read(source / 'config/DrivablesTraffic.ini')
    rows = []
    def add(label, section, key, choices=None, fallback=None):
        value = config.get(section, key, fallback=fallback)
        assert value is not None, key
        rows.append(dict(name=label, value=choices[int(value)] if choices else str(value)))
    onoff = ['Off', 'On']
    add('Handling', 'Handling', 'iHandlingPreset', ['Arcade', 'Balanced', 'Sim'])
    add('Jump assistance', 'Handling', 'iJumpAssist', ['Realistic', 'Balanced', 'Fun'])
    add('Camera motion', 'Camera', 'iCameraMotion', ['Full', 'Reduced', 'Off'])
    add('Missile camera chance', 'Camera', 'fMissileCameraChance')
    rows[-1]['value'] = f"{float(rows[-1]['value']) * 100:g}%"
    add('Speed units', 'Display', 'iSpeedUnits', ['mph', 'km/h'])
    add('Road dashboard', 'Display', 'iRoadDashboardMode', ['Full', 'Compact', 'Off'])
    for name, key in [('World discoveries', 'bWorldPlacements'), ('World deliveries', 'bWorldVehicleSpawning'), ('Debug free spawning', 'bSpawnDebug')]:
        add(name, 'World', key, onoff)
    for name, key in [('Vehicle loading screens', 'bLoadingScreens'), ('Loading wheel', 'bLoadingWheel'), ('Main menu background', 'bMainMenuBackground'), ('Stunt XP', 'bStuntXP'), ('Vehicle dust', 'bVehicleDust')]:
        add(name, 'Display', key, onoff)
    add('Horse follows your view', 'Handling', 'bMountViewSteer', onoff)
    add('Horse gait ladder', 'Horses', 'bHorseGaitLadder', onoff)
    rows.extend([
        dict(name='Ambient traffic', value=onoff[traffic.getint('Traffic', 'bTraffic')]),
        dict(name='Ambient traffic cap', value=traffic.get('Traffic', 'iMaxTraffic') + ' riders'),
        dict(name='Mounted travellers', value=onoff[traffic.getint('MountedTravellers', 'bEnabled')]),
        dict(name='Traveller groups with a horse', value=traffic.get('MountedTravellers', 'fHorseGroupChance') + '%'),
        dict(name='Bicycle journeys', value=onoff[traffic.getint('Journeys', 'bJourneys')]),
    ])
    return rows
