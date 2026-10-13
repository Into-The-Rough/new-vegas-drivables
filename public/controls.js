(() => {
  const {rides, stunts} = window.DRIVABLES_CONTROLS;
  const $ = id => document.getElementById(id);
  const smallScreen = matchMedia('(max-width: 620px)');
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let device = 'xbox';
  const deck = {LB:'L1', RB:'R1', LT:'L2', RT:'R2'};
  const names = {LS:'Left stick', RS:'Right stick', L3:'Left stick click', R3:'Right stick click', DUp:'D-pad up', DDown:'D-pad down', DLeft:'D-pad left', DRight:'D-pad right', Back:'View / Back'};
  const labels = {DUp:'↑', DDown:'↓', DLeft:'←', DRight:'→', Back:'View'};
  const label = key => device === 'deck' && deck[key] || labels[key] || key;
  const cap = key => `<kbd class="pad-cap ${device !== 'keyboard' && ['A','B','X','Y'].includes(key) ? 'pad-face' : ''}" aria-label="${escape(device === 'keyboard' ? key : names[key] || label(key))}">${escape(device === 'keyboard' ? key : label(key))}</kbd>`;
  const combo = (keys, separate = false) => keys.map(cap).join(`<span class="pad-plus">${separate ? ' / ' : ' + '}</span>`);
  const positions = {LT:[260,40],RT:[500,40],LB:[260,95],RB:[500,95],LS:[260,180],RS:[435,260],L3:[260,180],R3:[435,260],A:[510,220],B:[552,180],X:[468,180],Y:[510,140],DUp:[335,220],DDown:[335,280],DLeft:[305,250],DRight:[365,250],Back:[352,162]};
  const marker = (key, x, y, active) => `<g class="pad-button${active ? ' is-used' : ''}"><${key === 'LS' || key === 'RS' ? 'circle' : 'rect'} ${key === 'LS' || key === 'RS' ? `cx="${x}" cy="${y}" r="31"` : `x="${x-23}" y="${y-18}" width="46" height="36" rx="8"`}/><text x="${x}" y="${y+6}" text-anchor="middle">${escape(label(key))}</text></g>`;
  function diagram(rows, name) {
    const used = new Set(rows.map(r => r[0]));
    if (used.has('L3')) used.add('LS');
    if (used.has('R3')) used.add('RS');
    const points = ['LT','RT','LB','RB','LS','RS','A','B','X','Y','DUp','DDown','DLeft','DRight','Back'];
    const calls = [['LT',20,35],['LB',20,96],['LS',20,185],['RT',578,35],['RB',578,96],['RS',578,305]];
    const find = key => rows.find(r => r[0] === key);
    return `<svg class="controller-diagram" viewBox="0 0 760 375" role="img" aria-label="${escape(name)} controller. The full controls are listed below."><title>${escape(name)} controller</title><path class="pad-body" d="M243 112 Q213 121 205 165 L174 309 Q169 350 201 353 Q225 354 277 298 L480 298 Q525 351 551 353 Q587 352 583 312 L552 165 Q544 121 514 112 Z"/>${points.map(key=>marker(key,...positions[key],used.has(key))).join('')}${calls.map(([key,x,y])=>{const row=find(key);if(!row)return '';const [px,py]=positions[key];return `<path class="pad-leader" d="M${x<100?180:574} ${y+5} H${px+(x<100?-44:44)} V${py}"/><text class="pad-callout" x="${x}" y="${y}">${escape(label(key))}<tspan x="${x}" dy="22">${escape(row[1].split(' / ')[0].replace(', where fitted',''))}</tspan></text>`;}).join('')}<text class="pad-legend" x="380" y="365" text-anchor="middle">L3 / R3 = click a stick</text></svg>`;
  }
  const rowMarkup = row => `<li><div>${cap(row[0])}<span class="press-kind">${escape(row[2])}</span></div><strong>${escape(row[1])}</strong></li>`;
  function keyboardDiagram(ride) {
    return `<div class="keyboard-diagram"><div><div class="movement-keys" aria-label="Movement keys"><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></div><p>Movement, steering or throttle</p></div><div class="keyboard-shortcuts"><div>${cap('F10')}<span>Drivables menu</span></div><div>${cap('F')}<span>Camera</span></div><div>${cap('E')}<span>${ride === 'parachute' ? 'Deploy / cut away' : 'Get off / exit'}</span></div></div></div>`;
  }
  function stuntMarkup(key) {
    const [how, padKeys, originalTip] = stunts[key];
    const keys = device === 'keyboard' ? window.DRIVABLES_KEYBOARD.stunts[key] : padKeys;
    const tips = {'Hover Bike/Side dodge':'Double-tap A or D. Release between taps.', 'Hover Bike/Repulsor pulse':'Press R. Two-second cooldown.', 'Aircraft/Roll':'Move the mouse sideways. Use the Stunt Biplane and leave room.', 'Aircraft/Loop':'Pitch up with the mouse. Build speed and leave plenty of height.'};
    const tip = device === 'keyboard' ? tips[key] || originalTip : originalTip;
    const instruction = device === 'keyboard' && key.startsWith('Aircraft/') ? 'Move' : how;
    return `<span class="press-kind">${escape(instruction)}</span><span class="pad-combo">${combo(keys, how === 'Use either')}</span><span>${escape(tip)}</span>`;
  }
  function render() {
    const id = $('control-ride').value;
    const keyboard = device === 'keyboard';
    const ride = keyboard ? {...rides[id], ...window.DRIVABLES_KEYBOARD.rides[id], note:window.DRIVABLES_KEYBOARD.rides[id].note} : rides[id];
    $('weapon-choice').hidden = !ride.weapon;
    const drawn = ride.weapon && $('control-weapon').checked;
    let rows = ride.controls.map(row => row.slice());
    if (keyboard && ride.weapon) {
      if (drawn) {
        rows = rows.filter(r => r[0] !== 'R');
        rows.push(['Left mouse','Fire weapon','Hold'],['Right mouse','Aim weapon','Hold'],['R','Holster weapon','Press']);
      }
      rows.push(['G', drawn ? 'Holster weapon' : 'Draw weapon','Press']);
    } else if (drawn) {
      rows = rows.filter(r => r[0] !== 'LB' && r[0] !== 'RB');
      rows.push(['LB','Aim weapon','Hold'],['RB','Fire weapon','Hold'],['X','Reload / holster','Tap / hold']);
    } else if (ride.weapon) rows.push(['X','Draw weapon','Press']);
    if (id !== 'parachute') rows.push([keyboard ? 'E' : 'A','Get off / exit','Press'],[keyboard ? 'Tab' : 'B','Open Pip-Boy','Press']);
    rows.push([keyboard ? 'F' : 'Back','Change camera','Tap']);
    if (ride.recover) rows.push([keyboard ? 'T' : 'Back','Recover when safe',keyboard ? 'Press' : 'Hold for 0.7 seconds']);
    $('control-title').textContent = `${ride.name}${drawn ? ' · weapon drawn' : ''}`;
    $('controller-picture').innerHTML = keyboard ? keyboardDiagram(id) : diagram([...rows,...(ride.extras || [])],ride.name);
    $('control-diagram-note').textContent = keyboard ? 'Standard keyboard and mouse defaults. Game control remaps and F10 settings can change these.' : 'Default bindings. Bright buttons are used by this ride.';
    sizeDiagram();
    $('control-rows').innerHTML = rows.map(rowMarkup).join('');
    $('control-extras').hidden = !ride.extras;
    $('control-extra-rows').innerHTML = (ride.extras || []).map(rowMarkup).join('');
    $('control-note').textContent = drawn ? keyboard ? 'With a weapon drawn, use the mouse buttons to aim and fire. R or G holsters it while riding.' : 'With a weapon drawn, the bumpers aim and fire. Tap the reload button to reload, hold it to holster and restore your riding controls.' : ride.note || 'Controls shown are the defaults. Equipment such as boost, lights and radio is only available where fitted.';
    $('menu-chord').innerHTML = combo(keyboard ? ['F10'] : ['L3','R3']);
    document.querySelectorAll('[data-pad-stunt]').forEach(node => {
      node.innerHTML = stuntMarkup(node.dataset.padStunt);
    });
  }
  window.DrivablesControls = {
    stunt(category, name) {
      const key = `${category}/${name}`;
      if (!stunts[key]) return '';
      return `<div class="stunt-pad" data-pad-stunt="${escape(key)}">${stuntMarkup(key)}</div>`;
    }
  };
  $('control-ride').innerHTML = Object.entries(rides).map(([id,ride])=>`<option value="${id}">${escape(ride.name)}</option>`).join('');
  $('control-ride').addEventListener('change',()=>{$('control-weapon').checked=false;render();});
  $('control-weapon').addEventListener('change',render);
  document.querySelectorAll('[data-control-device]').forEach(select=>select.addEventListener('change',()=>{
    device=select.value;
    document.querySelectorAll('[data-control-device]').forEach(other=>other.value=device);
    render();
  }));
  function sizeDiagram() {
    $('controller-picture').querySelector('svg')?.setAttribute('viewBox', smallScreen.matches ? '165 15 430 350' : '0 0 760 375');
  }
  smallScreen.addEventListener('change', sizeDiagram);
  render();
})();
