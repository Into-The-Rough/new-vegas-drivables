(() => {
  const data = window.DRIVABLES;
  const $ = id => document.getElementById(id);
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let unit = 'mph';
  [...new Set(data.vehicles.map(v => v.category))].sort().forEach(name => {
    const option = document.createElement('option'); option.value = option.textContent = name;
    $('vehicle-category').append(option);
  });
  function render() {
    const query = $('vehicle-search').value.trim().toLowerCase();
    const category = $('vehicle-category').value;
    const vehicles = data.vehicles.filter(v => (category === 'All' || v.category === category)
      && `${v.name} ${v.fuel}`.toLowerCase().includes(query));
    const sort = $('vehicle-sort').value;
    vehicles.sort((a,b) => sort === 'name' ? a.name.localeCompare(b.name) : sort === 'fastest' ? b.mph-a.mph : a.mph-b.mph);
    $('vehicle-count').textContent = `${vehicles.length} of ${data.vehicles.length} vehicles`;
    $('speed-heading').textContent = `Top speed (${unit === 'kmh' ? 'km/h' : 'mph'})`;
    $('vehicle-rows').innerHTML = vehicles.map(vehicle => {
      const links = vehicle.entries.map(id => {
        const entry = data.entries.find(e => e.id === id);
        const label = entry.kind === 'reward' ? entry.state : entry.location.split(/: |\. /)[0];
        return `<a href="#ride=${entry.id}">${escape(label)}</a>`;
      }).join('');
      const portrait = vehicle.image ? `<a class="vehicle-portrait" href="assets/${escape(vehicle.image)}" data-lightbox data-caption="${escape(vehicle.name)} · vehicle render"><img src="assets/${escape(vehicle.image.replace('.webp','-thumb.webp'))}" alt="${escape(vehicle.name)} vehicle render" width="320" height="180" loading="lazy"></a>` : '';
      const seats = vehicle.passengers ? `<a href="#driving=companions">${vehicle.passengers} passenger${vehicle.passengers === 1 ? '' : 's'}</a>` : 'Solo';
      return `<tr data-profile="${vehicle.profile}"><th scope="row">${portrait}<a href="#ride=${vehicle.entries[0]}">${escape(vehicle.name)}</a><small>${escape(vehicle.description)}</small></th><td>${escape(vehicle.category)}<small class="seat-count">${seats}</small></td><td class="speed-value" data-unit="${unit === 'kmh' ? 'km/h' : 'mph'}">${Math.round(vehicle[unit])}</td><td>${escape(vehicle.fuel)}</td><td class="vehicle-links">${links}</td></tr>`;
    }).join('') || '<tr><td colspan="5" class="catalogue-empty">No vehicles match. <button type="button" id="reset-catalogue">Clear filters</button></td></tr>';
    $('reset-catalogue')?.addEventListener('click', () => {
      $('vehicle-search').value = ''; $('vehicle-category').value = 'All'; render(); $('vehicle-search').focus();
    });
  }
  $('vehicle-search').addEventListener('input', render);
  $('vehicle-category').addEventListener('change', render);
  $('vehicle-sort').addEventListener('change', render);
  document.querySelectorAll('#speed-units button').forEach(button => button.addEventListener('click', () => {
    unit = button.dataset.unit;
    document.querySelectorAll('#speed-units button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    render();
  }));
  render();
})();
