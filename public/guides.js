(() => {
  const data = window.DRIVABLES;
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const tricks = [
    ['Cars','Handbrake skid','At speed, steer and apply Handbrake.','Release and correct the steering to recover the slide. Grip and surface affect the result.'],
    ['Motorcycle','Wheelie','Hold Jump while moving.','Release to bring the front wheel down.'],
    ['Motorcycle','Stoppie','Brake at speed with the throttle released.','The rear wheel lifts as you slow down.'],
    ['Motorcycle','Burnout','Near a standstill, hold Throttle and Handbrake.','Keep the steering centred. Release either action to finish.'],
    ['Motorcycle','Donut','Start a burnout, then steer left or right.','Hold Throttle and Handbrake briefly before steering.'],
    ['Motorcycle','Air control','Use Forward and Backward to pitch while airborne.','Adjust the bike’s attitude before landing.'],
    ['Bicycle','Wheelie','Hold Jump while moving.','Balance on the rear wheel.'],
    ['Bicycle','Bunny hop','Use Sprint and Jump together.','Sprint also increases pedalling effort and spends AP.'],
    ['Skateboard','Ollie','Press Jump while moving.','Get rolling before the jump.'],
    ['Skateboard','Kickflip','Use Boost and Jump together.','Land the trick to keep riding.'],
    ['Skateboard','Manual','Hold Handbrake while moving.','Holding it too long can throw you off.'],
    ['Hopper','Charged jump','Hold Jump while grounded, then release.','Forward keeps the ride bouncing. Steer to change direction.'],
    ['Pogo Stick','Charged jump','Hold Jump while grounded, then release.','Use Forward to bounce and steer to change direction. No fuel is needed.'],
    ['Hover Bike','Side dodge','Double-tap left or right.','A quick sideways move while travelling.'],
    ['Hover Bike','Hop','Press Jump.','Lift over a small obstacle.'],
    ['Hover Bike','Repulsor pulse','Use Horn / Repulsor.','Push nearby actors away. The standard cooldown is two seconds.'],
    ['Aircraft','Roll','Hold the flight control sideways.','The Stunt Biplane is built for aerobatics.'],
    ['Aircraft','Loop','Pull back on the flight control at speed.','Leave room above and below for the full manoeuvre.'],
    ['Horse','Rear','While standing still, use Sprint and Brake together.','Check the horse guide for gaits, stamina and taming.'],
  ];
  function renderTricks(category) {
    document.querySelectorAll('#stunt-filters button').forEach(b => b.setAttribute('aria-pressed', String(b.textContent === category)));
    $('stunt-list').innerHTML = tricks.filter(t => category === 'All' || t[0] === category).map(t =>
      `<article class="stunt-row"><div><p class="detail-index">${escape(t[0])}</p><h3>${escape(t[1])}</h3></div><div>${window.DrivablesControls.stunt(t[0],t[1])}<p>${escape(t[2])}</p><small>${escape(t[3])}</small></div></article>`).join('');
  }
  ['All',...new Set(tricks.map(t => t[0]))].forEach(category => {
    const button = document.createElement('button'); button.type = 'button'; button.textContent = category;
    button.addEventListener('click', () => renderTricks(category)); $('stunt-filters').append(button);
  });
  renderTricks('Motorcycle');

  const length = course => course.metres >= 1000 ? `${(course.metres/1000).toFixed(2)} km` : `${course.metres} m`;
  function projection(points, width=620, height=370) {
    const xs = points.map(p => p[0]), ys = points.map(p => p[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const scale = Math.min((width-80)/(maxX-minX || 1), (height-80)/(maxY-minY || 1));
    return p => [width/2+(p[0]-(minX+maxX)/2)*scale, height/2-(p[1]-(minY+maxY)/2)*scale];
  }
  function courseMap(course) {
    const project = projection(course.outline);
    const points = [...course.outline,course.outline[0]].map(p => project(p).map(v => v.toFixed(1)).join(',')).join(' ');
    const [x,y] = project(course.outline[0]);
    return `<svg class="course-plan" viewBox="0 0 620 370" role="img" aria-label="${escape(course.name)} circuit outline"><title>${escape(course.name)} circuit outline</title><polyline points="${points}" class="course-road"/><polyline points="${points}" class="course-line"/><circle cx="${x}" cy="${y}" r="7" class="course-start"/><text x="18" y="28">N ↑</text></svg><p class="plan-caption"><span class="legend-pin selected"></span> Start / finish. Each layout uses its own scale.</p>`;
  }
  function arenaMap() {
    const project = projection(data.arena.flatMap(piece => piece.points));
    const lines = data.arena.map(piece => {
      const points = piece.points.map(project);
      const [x,y] = points[0];
      const path = points.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
      return `<g><title>${escape(piece.name)}</title>${points.length > 1 ? `<polyline points="${path}" class="arena-route ${piece.kind}"/>` : ''}<circle cx="${x}" cy="${y}" r="5" class="arena-point ${piece.kind}"/></g>`;
    }).join('');
    return `<svg class="course-plan" viewBox="0 0 620 370" role="img" aria-label="Thunderdome challenge positions. Air routes to the north and ground challenges to the south."><title>Thunderdome challenge positions</title><text x="18" y="28">N ↑</text>${lines}</svg><p class="plan-caption">Amber: ground challenges. Pale: air challenges. Positions are shown within the arena.</p>`;
  }
  const worlds = data.courses.filter(c => c.id !== 'mojave_steeplechase').map(c => ({id:c.id, name:c.name, style:c.style}));
  worlds.push({id:'thunderdome', name:'Thunderdome', style:'Stunt arena'});
  let selectedWorld = worlds[0].id;
  function selectWorld(id) {
    if (id === 'mojave_steeplechase') id = 'mojave_cycle';
    if (!worlds.some(w => w.id === id)) return;
    selectedWorld = id;
    document.querySelectorAll('#world-list button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.world === id)));
    if (id === 'thunderdome') {
      $('world-detail').innerHTML = `<h3>Thunderdome</h3><p>A dedicated arena for jumps, flight challenges and crushing cars. Enter through F10 → Racing → Thunderdome, then use Return Home when you are finished.</p>${arenaMap()}<div class="arena-features"><div><h4>On the ground</h4><p>Ramps and loops, a truck jump, ring of fire and wall of fire. The crush line, crush pit and car tower give heavy vehicles their own challenges.</p></div><div><h4>In the air</h4><p>A ten-hoop course and pylon race, a knife-edge gap, a hangar fly-through, and low passes beneath the bridge and wires.</p></div></div><p class="world-access">The Monster Truck stays in the arena. Visiting once unlocks world spawning for the Stunt Biplane when the general spawning setting allows it.</p><a class="button" href="#stunts">Stunt controls</a>`;
      return;
    }
    const course = data.courses.find(c => c.id === id);
    $('world-detail').innerHTML = `<h3>${escape(course.name)}</h3><p>${escape(course.description)}</p>${courseMap(course)}<dl class="course-specs"><div><dt>Lap length</dt><dd>${length(course)}</dd></div><div><dt>Checkpoints</dt><dd>${course.checkpoints}</dd></div><div><dt>Event</dt><dd>${escape(course.style)}</dd></div></dl><p class="world-access">${escape(course.access)}${id === 'mojave_cycle' ? ' Choose Mojave Steeplechase to race horses over eight fences in the same location.' : ''}</p><a class="button" href="#races">Race setup & rules</a>`;
  }
  worlds.forEach(world => {
    const button = document.createElement('button'); button.className = 'world-row'; button.type = 'button'; button.dataset.world = world.id;
    button.innerHTML = `<strong>${escape(world.name)}</strong><small>${escape(world.style)}</small>`;
    button.addEventListener('click', () => {
      selectWorld(world.id);
      try { history.replaceState(null,'',`#world=${world.id}`); } catch {}
    });
    $('world-list').append(button);
  });
  function locationHash() {
    const id = new URLSearchParams(location.hash.slice(1)).get('world');
    selectWorld(id || selectedWorld);
  }
  locationHash(); window.addEventListener('hashchange', locationHash);
  $('race-courses').innerHTML = data.courses.map(course => `<a href="#world=${course.id}" class="race-course"><span><strong>${escape(course.name)}</strong><small>${length(course)} per lap · ${course.checkpoints} checkpoints${course.fences ? ` · ${course.fences} fences` : ''}</small></span><span>${escape(course.kind)} ↗</span></a>`).join('');
  $('horse-traits').innerHTML = data.horseTraits.map(horse => `<tr><th scope="row">${escape(horse.name)}</th><td>${horse.survival || 'None'}</td>${['speed','endurance','nerve'].map(stat => `<td><span class="trait-score" aria-label="${horse[stat]} out of 5"><span aria-hidden="true">${'●'.repeat(horse[stat])}${'○'.repeat(5-horse[stat])}</span><small>${horse[stat]}/5</small></span></td>`).join('')}</tr>`).join('');
})();
