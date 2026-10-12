(() => {
  const data = window.DRIVABLES;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const vehicles = [...data.vehicles].sort((a,b) => a.name.localeCompare(b.name));
  const entries = vehicles.map(v => ({name:v.name, href:`#ride=${v.entries[0]}`, ...v.sound}));
  entries.push({name:'Horses', href:'#horses', source:'Horse recordings', detail:'Hoofbeats, breathing and vocal sounds support pace, movement and behaviour.'});
  const search = document.getElementById('sound-search');
  function render() {
    const query = search.value.trim().toLowerCase();
    const visible = entries.filter(e => `${e.name} ${e.source} ${e.detail}`.toLowerCase().includes(query));
    document.getElementById('sound-count').textContent = `${visible.length} of ${entries.length} sound mappings`;
    document.getElementById('sound-rows').innerHTML = visible.map(e => `<tr><th scope="row"><a href="${e.href}">${escape(e.name)}</a></th><td>${escape(e.source)}</td><td>${escape(e.detail)}</td></tr>`).join('') || '<tr><td colspan="3">No matching rides or recordings. Try another name.</td></tr>';
  }
  search.addEventListener('input', render);
  render();
  document.getElementById('passenger-rows').innerHTML = vehicles.filter(v => v.passengers).map(v => `<tr><th scope="row"><a href="#ride=${v.entries[0]}">${escape(v.name)}</a></th><td>${v.passengers}</td><td>${escape(v.passengerNote || (v.profile === 4 || v.profile === 19 ? 'Pillion' : 'Humanoid passengers'))}</td></tr>`).join('');
})();
