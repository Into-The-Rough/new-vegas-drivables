window.DRIVABLES_CONTROLS = (() => {
  const road = [['DUp','Lights','Tap'],['DDown','Ignition','Tap'],['DLeft','Radio on / off','Tap'],['DRight','Next station','Tap']];
  const look = ['R3','Look behind','Hold'];
  const horn = ['L3','Horn','Press'];
  const drive = [['RT','Accelerate','Hold'],['LT','Brake / reverse','Hold'],['LS','Steer','Left / right']];
  const rides = {
    car: {name:'Car & truck', weapon:true, recover:true, controls:[...drive,['LB','Handbrake','Hold'],['RB','Boost, where fitted','Hold'],horn,look], extras:road},
    motorcycle: {name:'Motorcycle', weapon:true, recover:true, controls:[...drive,['Y','Wheelie','Hold while moving'],['LB','Handbrake','Hold'],['RB','Boost','Hold'],horn,look], extras:road},
    bicycle: {name:'Bicycle', weapon:true, recover:true, controls:[['RT','Pedal','Hold'],['LT','Brake','Hold'],['LS','Steer','Left / right'],['RB','Sprint using AP','Hold'],['Y','Wheelie','Hold'],['L3','Bell','Press'],look], note:'For a bunny hop, hold Sprint and press Jump together.'},
    skateboard: {name:'Skateboard', recover:true, controls:[['RT','Kick to build speed','Hold'],['LT','Foot brake','Hold'],['LS','Steer','Left / right'],['Y','Ollie','Press'],['RB','Kickflip modifier','Hold with Jump'],['LB','Manual','Hold'],look]},
    hopper: {name:'Pogo Stick & Hopper', weapon:true, recover:true, controls:[['RT','Keep bouncing','Hold'],['LS','Steer','Left / right'],['Y','Charged jump','Hold on the ground, then release'],look]},
    horse: {name:'Horse', weapon:true, controls:[['RT','Move forward','Hold'],['LT','Gait down','Tap'],['LS','Steer','Left / right'],['RB','Gait up / sprint','Tap / hold'],['Y','Jump','Press'],['LB','Free look','Hold'],['DDown','Stop','Press'],['DUp','Reassure / pat','Press'],['L3','Kick','Press'],look], note:'Tap the sprint button to increase gait. Hold it for a sprint. On foot, hold D-pad down to open horse care.'},
    hover: {name:'Hover Bike', weapon:true, controls:[...drive,['RB','Boost','Hold'],['Y','Hop','Press'],['L3','Repulsor pulse','Press'],look], extras:road, note:'Double-tap the left stick sideways to dodge. Use the brake trigger to slow down. Handbrake has no default pad button.'},
    vtol: {name:'Vertibird & Alien Recon Craft', controls:[['LS','Move / steer','Tilt'],['RB','Climb','Hold'],['LB','Descend','Hold'],['RT','Fire weapon, where fitted','Hold'],['Y','Payload, where fitted','Press'],['X','Reload weapon','Press'],['R3','Landing gear','Press']], extras:road, note:'Flares and the Alien Recon Craft’s warp boost have no default controller button. Assign them in the in-game Controls menu if you want to use them on a pad.'},
    plane: {name:'Propeller aircraft', controls:[['RT','Increase throttle','Hold'],['LT','Reduce throttle / brake','Hold'],['LS','Pitch / bank','Pull back to raise the nose'],['RS','Free look','Tilt'],['LB','Rudder left','Hold'],['RB','Rudder right','Hold'],['L3','Landing gear','Press'],['DUp','Cruise hold','Press'],['Y','Payload, where fitted','Press'],look], extras:road.slice(1), note:'Build speed before pulling back. Gear controls only retract gear on aircraft fitted with retractable gear.'},
    boat: {name:'Boat', controls:[...drive,horn,look], extras:road},
    tank: {name:'Tank', recover:true, controls:[['LS','Drive / steer','Tilt'],['RS','Aim turret','Tilt'],['RT','Fire cannon','Press'],['LT','Aim','Hold'],['Y','Secondary weapon, where fitted','Press'],['LB','Handbrake','Hold'],horn,look], extras:road},
    parachute: {name:'Parachute', controls:[['A','Deploy / cut away','Release after bailing, then press again'],['LS','Steer canopy','Tilt'],['L3','Faster descent','Hold'],['LS','Flare for landing','Pull back near the ground']], note:'Check for “Parachute packed” before leaving the aircraft. Pressing Activate again under an open canopy cuts it away.'}
  };
  const stunts = {
    'Cars/Handbrake skid': ['Hold',['LB','LS'],'Steer while applying the handbrake.'],
    'Motorcycle/Wheelie': ['Hold',['Y'],'While moving. Release to lower the front wheel.'],
    'Motorcycle/Stoppie': ['Hold',['LT'],'At speed, with the throttle released.'],
    'Motorcycle/Burnout': ['Hold together',['RT','LB'],'Near a standstill, with steering centred.'],
    'Motorcycle/Donut': ['Hold together',['RT','LB','LS'],'Start the burnout, then steer.'],
    'Motorcycle/Air control': ['Use either',['RT','LT'],'Adjust pitch while airborne.'],
    'Bicycle/Wheelie': ['Hold',['Y'],'While moving.'],
    'Bicycle/Bunny hop': ['Press together',['RB','Y'],'Sprint and jump.'],
    'Skateboard/Ollie': ['Press',['Y'],'While rolling.'],
    'Skateboard/Kickflip': ['Press together',['RB','Y'],'Hold the modifier as you jump.'],
    'Skateboard/Manual': ['Hold',['LB'],'Release before you lose balance.'],
    'Hopper/Charged jump': ['Hold, then release',['Y'],'Charge while grounded.'],
    'Pogo Stick/Charged jump': ['Hold, then release',['Y'],'Charge while grounded.'],
    'Hover Bike/Side dodge': ['Double-tap',['LS'],'Left or right. Let the stick return between taps.'],
    'Hover Bike/Hop': ['Press',['Y'],'Settle back down before hopping again.'],
    'Hover Bike/Repulsor pulse': ['Press',['L3'],'Click the left stick. Two-second cooldown.'],
    'Aircraft/Roll': ['Hold sideways',['LS'],'Use the Stunt Biplane and leave room.'],
    'Aircraft/Loop': ['Pull back',['LS'],'Build speed and leave plenty of height.'],
    'Horse/Rear': ['Press together',['RB','LT'],'While standing still.']
  };
  return {rides, stunts};
})();
