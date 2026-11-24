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
    add('Handling preset', 'Handling', 'iHandlingPreset', ['Arcade', 'Balanced', 'Sim'])
    add('Jump assist', 'Handling', 'iJumpAssist', ['Realistic', 'Balanced', 'Fun'])
    add('Camera motion', 'Camera', 'iCameraMotion', ['Full', 'Reduced', 'Off'])
    add('Mount camera behind', 'Camera', 'bCamMountBehind', onoff)
    add('Exit keeps camera heading', 'Camera', 'bCamExitKeepsLook', onoff)
    add('Missile camera chance', 'Camera', 'fMissileCameraChance')
    rows[-1]['value'] = f"{float(rows[-1]['value']) * 100:g}%"
    add('Speed units', 'Display', 'iSpeedUnits', ['mph', 'km/h'])
    add('Road dashboard', 'Display', 'iRoadDashboardMode', ['Full', 'Compact', 'Off'])
    add('Vehicles to find', 'World', 'bWorldPlacements', onoff)
    add('Wild horses', 'Horses', 'bWildHorses', onoff)
    add('Debug free spawning', 'World', 'bSpawnDebug', onoff)
    add('Debug spawning in the world', 'World', 'bWorldVehicleSpawning', onoff)
    for name, key in [('Loading screens', 'bLoadingScreens'), ('Loading wheel', 'bLoadingWheel'), ('Main menu background', 'bMainMenuBackground'), ('Stunt XP', 'bStuntXP'), ('Dust', 'bVehicleDust')]:
        add(name, 'Display', key, onoff)
    add('Horse view steering', 'Handling', 'bMountViewSteer', onoff)
    add('Horse gait ladder', 'Horses', 'bHorseGaitLadder', onoff)
    density = ['Quiet', 'Normal', 'Busy'][traffic.getint('Traffic', 'iDensity')]
    rows.extend([
        dict(name='Road traffic', value=density if traffic.getint('Traffic', 'bTraffic') else 'Off'),
        dict(name='Traffic rides', value=['Everything', 'Horses', 'No horses'][traffic.getint('Traffic', 'iRides')]),
        dict(name='Mounted travellers', value=onoff[traffic.getint('MountedTravellers', 'bEnabled')]),
        dict(name='Traveller groups with a horse', value=traffic.get('MountedTravellers', 'fHorseGroupChance') + '%'),
        dict(name='Bicycle journeys', value=onoff[traffic.getint('Journeys', 'bJourneys')]),
    ])
    return rows
