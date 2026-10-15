window.DRIVABLES_KEYBOARD = (() => {
  const road = [['L','Lights','Tap'],['V','Ignition','Tap'],['J','Radio on / off','Tap'],['K','Next station','Tap']];
  const drive = [['W','Accelerate','Hold'],['S','Brake / reverse','Hold'],['A / D','Steer','Hold']];
  const boost = ['Left Shift','Boost, where fitted','Hold'];
  const brake = ['Left Alt','Handbrake','Hold'];
  const horn = ['R','Horn','Press'];
  const look = ['C','Look behind','Hold'];
  const jump = ['Space','Jump','Press'];
  const rides = {
    car: {controls:[...drive,brake,boost,horn,look], extras:road},
    kart: {controls:[...drive,brake,horn,look], extras:road.slice(0,2), note:'No boost and no fuel. Reverse is available for recovery.'},
    motorcycle: {controls:[...drive,['Space','Wheelie','Hold while moving'],brake,boost,horn,look], extras:road},
    bicycle: {controls:[['W','Pedal','Hold'],['S','Brake','Hold'],['A / D','Steer','Hold'],['Left Shift','Sprint using AP','Hold'],['Space','Wheelie','Hold'],brake,['R','Bell','Press'],look], note:'Hold Left Shift and press Space for a bunny hop.'},
    skateboard: {controls:[['W','Kick to build speed','Hold'],['S','Foot brake','Hold'],['A / D','Steer','Hold'],['Space','Ollie','Press'],['Left Shift','Kickflip modifier','Hold with Space'],['Left Alt','Manual','Hold'],look]},
    hopper: {controls:[['W','Keep bouncing','Hold'],['A / D','Steer','Hold'],['Space','Charged jump','Hold on the ground, then release'],look]},
    horse: {controls:[['W','Move forward','Hold'],['S','Gait down','Tap'],['A / D','Steer','Hold'],['Left Shift','Gait up / sprint','Tap / hold'],jump,['F','Free look','Hold'],['Left Alt','Stop','Press'],['H','Reassure / pat','Press'],['R','Kick','Press'],look], note:'On foot, H interacts with a nearby horse or calls your horse from farther away. Tap Left Shift to increase gait, or hold it to sprint.'},
    hover: {controls:[...drive,brake,boost,['Space','Hop','Press'],['R','Repulsor pulse','Press'],look], extras:road, note:'Double-tap A or D to dodge sideways. Hold Left Alt to slow down and prevent boost.'},
    vtol: {controls:[['W / S','Move forward / back','Hold'],['A / D','Steer','Hold'],['Space','Climb','Hold'],['Left Ctrl','Descend','Hold'],['Left mouse','Fire weapon, where fitted','Hold'],['Q','Payload, where fitted','Press'],['R','Thermal view / stow gun','Tap / hold'],['N','Landing gear','Press'],['Numpad 1','Flares, where fitted','Press'],['Left Shift','Alien warp boost','Hold']], extras:[['L','Searchlight: aim, hold, off','Tap'],...road.slice(1)], note:'On the Alien Recon Craft, hold R for the tractor beam.'},
    plane: {controls:[['W','Increase throttle','Hold'],['S','Reduce throttle / brake','Hold'],['Mouse','Pitch / bank','Move'],['Right mouse','Free look','Hold'],['A / D','Rudder left / right','Hold'],['N','Landing gear','Press'],['Numpad 5','Cruise hold','Press'],['Q','Payload, where fitted','Press'],look], extras:road.slice(1), note:'Build speed on a clear runway before pitching up. Mouse direction follows your flight settings.'},
    boat: {controls:[...drive,horn,look], extras:road},
    tank: {controls:[...drive,['Mouse','Aim turret','Move'],['Left mouse','Fire cannon','Press'],['Right mouse','Gunner’s sight in first person','Hold'],['Q','Secondary weapon, where fitted','Press, or hold for the flamer'],brake,horn,look], extras:road},
    parachute: {controls:[['E','Deploy / cut away','Release after bailing, then press again'],['W A S D','Steer canopy','Hold'],['Left Ctrl','Faster descent','Hold'],['S','Flare for landing','Hold near the ground']], note:'Check for “Parachute packed” before bailing out. Press E again to deploy. Pressing it with the canopy open cuts it away.'}
  };
  const stunts = {
    'Cars/Handbrake skid':['Left Alt','A / D'],
    'Motorcycle/Wheelie':['Space'],
    'Motorcycle/Stoppie':['S'],
    'Motorcycle/Burnout':['W','Left Alt'],
    'Motorcycle/Donut':['W','Left Alt','A / D'],
    'Motorcycle/Air control':['W','S'],
    'Bicycle/Wheelie':['Space'],
    'Bicycle/Bunny hop':['Left Shift','Space'],
    'Skateboard/Ollie':['Space'],
    'Skateboard/Kickflip':['Left Shift','Space'],
    'Skateboard/Manual':['Left Alt'],
    'Hopper/Charged jump':['Space'],
    'Pogo Stick/Charged jump':['Space'],
    'Hover Bike/Side dodge':['A / D'],
    'Hover Bike/Hop':['Space'],
    'Hover Bike/Repulsor pulse':['R'],
    'Aircraft/Roll':['Mouse'],
    'Aircraft/Loop':['Mouse'],
    'Horse/Rear':['Left Shift','S']
  };
  return {rides, stunts};
})();
