(() => {
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('world-map');
  const layer = document.getElementById('map-markers');
  const message = document.getElementById('map-message');
  const {map} = window.DRIVABLES;
  let view = {x:0, y:0, size:1024};
  let drag = null;
  let suppressClick = false;
  let visible = [];
  let selected = null;
  let reveal = true;
  let selectRide = () => {};

  function node(tag, attributes = {}) {
    const element = document.createElementNS(NS, tag);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function point(x, y) {
    const b = map.bounds;
    return [(map.border + (x-b.west)/(b.east-b.west)*map.area)*1024,
      (map.border + (b.north-y)/(b.north-b.south)*map.area)*1024];
  }

  function applyView() {
    view.x = Math.max(-60, Math.min(1084-view.size, view.x));
    view.y = Math.max(-60, Math.min(1084-view.size, view.y));
    svg.setAttribute('viewBox', `${view.x} ${view.y} ${view.size} ${view.size}`);
    document.getElementById('zoom-out').disabled = view.size >= 1024;
    document.getElementById('zoom-in').disabled = view.size <= 190;
  }

  function zoom(factor) {
    const next = Math.max(190, Math.min(1024, view.size*factor));
    view.x += (view.size-next)/2;
    view.y += (view.size-next)/2;
    view.size = next;
    applyView();
  }

  function reset() { view = {x:0, y:0, size:1024}; applyView(); }

  function focus(entry) {
    if (!entry?.mapPoint || !reveal) return;
    const [x,y] = point(...entry.mapPoint);
    view = {x:x-210, y:y-210, size:420};
    applyView();
  }

  function drawMarkers() {
    layer.replaceChildren();
    const order = [...visible].filter(entry => entry.mapPoint);
    order.sort((a,b) => Number(a.id===selected?.id)-Number(b.id===selected?.id));
    order.forEach(entry => {
      const [x,y] = point(...entry.mapPoint);
      const active = entry.id === selected?.id;
      const group = node('g', {transform:`translate(${x} ${y})`, class:`map-marker ${entry.kind==='herd'?'horse':''} ${active?'active':''}`,
        tabindex:0, role:'button', 'aria-label':`${entry.name}: ${entry.location}`, 'aria-pressed':String(active), 'data-id':entry.id});
      const title = node('title'); title.textContent = `${entry.name} — ${entry.location}`; group.append(title);
      if (active) group.append(node('circle', {r:21, class:'marker-ring'}));
      group.append(node('circle', {r:active?12:9}));
      group.append(node('rect', {x:-2.6, y:-2.6, width:5.2, height:5.2, class:'pin-core', transform:entry.kind==='herd'?'rotate(45)':''}));
      if (active) {
        const label = node('text', {x:x>680?-24:24, y:4, 'text-anchor':x>680?'end':'start'});
        label.textContent = entry.name.toUpperCase(); group.append(label);
      }
      const choose = () => { if (!suppressClick) selectRide(entry.id); };
      group.addEventListener('click', choose);
      group.addEventListener('keydown', event => {
        if (event.key==='Enter' || event.key===' ') { event.preventDefault(); selectRide(entry.id); }
      });
      layer.append(group);
    });
  }

  function update(entries, current, show, callback) {
    visible = entries; selected = current; reveal = show; selectRide = callback;
    layer.style.display = show ? '' : 'none';
    document.getElementById('landmarks').style.display = show ? '' : 'none';
    svg.style.opacity = !show || (current && !current.mapPoint) ? '.25' : '1';
    drawMarkers();
    message.replaceChildren();
    message.hidden = show && (!current || !!current.mapPoint);
    if (!message.hidden) {
      const title = document.createElement('strong');
      const body = document.createElement('p');
      title.textContent = !show ? 'KEEP A LITTLE MYSTERY.' : current.region==='Big MT' ? 'BEYOND THE MOJAVE.' : 'EARN IT. THEN DRIVE IT.';
      body.textContent = !show ? 'Turn on exact locations when you’re ready to track down a ride.' : current.region==='Big MT' ? 'This discovery is in Big MT. Follow the directions in its entry.' : 'This entry has no fixed Mojave discovery. Check its unlock conditions.';
      message.append(title, body);
    }
  }

  map.landmarks.forEach(landmark => {
    const [x,y] = point(landmark.x, landmark.y);
    const label = node('text', {x:x+10,y:y-10,class:'landmark-label'});
    label.textContent = landmark.name.replace(' Air Force Base','').toUpperCase();
    document.getElementById('landmarks').append(label);
  });
  document.getElementById('zoom-in').addEventListener('click', () => zoom(.7));
  document.getElementById('zoom-out').addEventListener('click', () => zoom(1/.7));
  document.getElementById('map-reset').addEventListener('click', reset);
  svg.addEventListener('wheel', event => {
    if (!event.ctrlKey) return;
    event.preventDefault(); zoom(event.deltaY>0?1.12:1/1.12);
  }, {passive:false});
  svg.addEventListener('pointerdown', event => {
    if (event.button!==0) return;
    drag = {x:event.clientX, y:event.clientY, vx:view.x, vy:view.y, moved:false, pointer:event.pointerId};
    suppressClick = false;
    svg.classList.add('dragging');
  });
  svg.addEventListener('pointermove', event => {
    if (!drag || drag.pointer!==event.pointerId) return;
    const dx = event.clientX-drag.x, dy = event.clientY-drag.y;
    if (!drag.moved && Math.hypot(dx,dy)<5) return;
    if (!drag.moved) svg.setPointerCapture(event.pointerId);
    drag.moved = true;
    const rect = svg.getBoundingClientRect();
    const scale = view.size/Math.min(rect.width,rect.height);
    view.x = drag.vx-dx*scale; view.y = drag.vy-dy*scale; applyView();
  });
  function endDrag() { if (drag?.moved) suppressClick = true; drag = null; svg.classList.remove('dragging'); }
  window.addEventListener('pointerup', endDrag);
  svg.addEventListener('pointercancel', endDrag);
  reset();
  window.DrivablesMap = {update, focus, reset};
})();
