(() => {
  const data = window.DRIVABLES;
  const $ = id => document.getElementById(id);
  const escape = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const categories = ['All','Cars','Bikes','Air','Water','Armour','Oddballs','Horses'];
  let category = 'All';
  let selected = 'v-000caa';
  let toastTimer;
  try { $('spoilers').checked = localStorage.getItem('drivables-exact-locations') !== 'false'; } catch {}

  function filtered() {
    const query = $('search').value.trim().toLowerCase();
    return data.entries.filter(entry => (category==='All' || entry.category===category)
      && ($('region').value==='All' || entry.region===$('region').value)
      && [entry.name,entry.category,entry.state,$('spoilers').checked?entry.location:''].join(' ').toLowerCase().includes(query));
  }

  function shareHash(id) { return `#ride=${encodeURIComponent(id)}`; }

  function select(id, updateURL = true) {
    if (!data.entries.some(entry => entry.id===id)) return;
    selected = id;
    if (updateURL) { try { history.replaceState(null,'',shareHash(id)); } catch {} }
    render();
  }

  function resetFilters() { category='All'; $('search').value=''; $('region').value='All'; }

  function renderList(entries) {
    $('discovery-list').replaceChildren();
    $('result-count').textContent = `${String(entries.length).padStart(2,'0')} ENTRIES`;
    if (!entries.length) {
      const empty = document.createElement('div'); empty.className='empty-state';
      empty.innerHTML = '<p>No rides match those filters.</p><button type="button">CLEAR FILTERS</button>';
      empty.querySelector('button').addEventListener('click', () => { resetFilters(); render(); $('search').focus(); });
      $('discovery-list').append(empty); return;
    }
    entries.forEach(entry => {
      const button = document.createElement('button'); button.className='ride-row'; button.type='button';
      button.dataset.id=entry.id; button.setAttribute('aria-current',String(entry.id===selected));
      const sub = $('spoilers').checked ? entry.location.split(/ — |: |;/)[0] : entry.state;
      button.innerHTML = `<span class="row-type"><span>${escape(entry.category)}</span><span>${entry.kind==='reward'?'UNLOCK':entry.kind==='herd'?'WILD HERD':entry.region==='Big MT'?'BIG MT':''}</span></span><strong>${escape(entry.name)}</strong><small>${escape(sub)}</small>`;
      button.addEventListener('click', () => {
        select(entry.id);
        $('discovery-list').querySelector(`[data-id="${entry.id}"]`)?.focus({preventScroll:true});
      });
      $('discovery-list').append(button);
    });
  }

  function renderDetail(entry) {
    if (!entry) { $('discovery-detail').innerHTML='<p class="empty-state">Try a different search or category.</p>'; return; }
    const show = $('spoilers').checked;
    const label = entry.kind==='herd' ? 'Survival' : 'Repair';
    const skill = entry.kind==='herd' ? entry.survival : entry.repair || 'None';
    $('discovery-detail').innerHTML = `
      <div class="detail-index"><span>${escape(entry.category.toUpperCase())} / ${escape(entry.region.toUpperCase())}</span><span>${entry.kind==='herd'?'◇':'⌖'}</span></div>
      <h3>${escape(entry.name)}</h3>
      <p class="detail-state">${escape(entry.state)}</p>
      <p class="detail-location">${escape(show?entry.location:'Exact location hidden. Explore the wasteland, or reveal the guide when you need a hint.')}${show&&entry.approximate?'<small>Regional map pin · follow these directions inside the area.</small>':''}</p>
      <dl class="requirements"><div><dt>${label}</dt><dd>${escape(skill)}</dd></div><div><dt>Supplies</dt><dd>${escape(entry.parts)}</dd></div><div><dt>Runs on</dt><dd>${escape(entry.fuel)}</dd></div><div><dt>Access</dt><dd>${entry.kind==='herd'?'Tame first':entry.kind==='reward'?'Earned':entry.kind==='excluded'?'Not placed':entry.repair?'Restore':entry.state==='Quest reward'?'Quest':'Discover'}</dd></div></dl>
      <p class="detail-label acquisition-label">${entry.kind==='herd'?'TAMING':'HOW TO GET IT'}</p>
      <p class="body-copy acquisition-copy">${escape(show?entry.acquisition:'Unlock instructions are hidden with exact locations.')}</p>
      <p class="detail-label reserve-label">${entry.kind==='herd'?'AT THE HERD':'STARTING CONDITION'}</p>
      <p class="body-copy reserve-copy">${escape(entry.condition)} ${escape(entry.reserve)}</p>
      ${entry.note?`<p class="detail-note">${escape(entry.note)}</p>`:''}
      <div class="detail-actions">${entry.mapPoint&&show?'<button type="button" id="focus-pin">CENTRE ON MAP</button>':''}<button type="button" id="copy-link">COPY ENTRY LINK ↗</button></div>`;
    $('focus-pin')?.addEventListener('click', () => {
      window.DrivablesMap.focus(entry);
      if (window.matchMedia('(max-width:620px)').matches) $('map-stage').scrollIntoView({block:'center'});
    });
    $('copy-link').addEventListener('click', async () => {
      const url = new URL(location.href); url.hash=shareHash(entry.id);
      try { await navigator.clipboard.writeText(url.href); toast('Entry link copied.'); }
      catch {
        const field=document.createElement('textarea'); field.value=url.href; field.style.position='fixed'; field.style.opacity='0'; document.body.append(field); field.select();
        const copied=document.execCommand('copy'); field.remove(); toast(copied?'Entry link copied.':'Copy this page’s address to share the selected entry.');
      }
    });
  }

  function render() {
    document.querySelectorAll('#filters button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.category===category)));
    const entries = filtered();
    if (!entries.some(entry => entry.id===selected)) selected=entries[0]?.id;
    const current = entries.find(entry => entry.id===selected);
    const top=$('discovery-list').scrollTop;
    renderList(entries); $('discovery-list').scrollTop=top;
    renderDetail(current);
    window.DrivablesMap.update(entries,current,$('spoilers').checked, id => {
      const keyboardFocus=document.activeElement?.classList.contains('map-marker');
      select(id);
      if (keyboardFocus) document.querySelector(`.map-marker[data-id="${id}"]`)?.focus({preventScroll:true});
      const row=$('discovery-list').querySelector(`[data-id="${id}"]`);
      if (row) $('discovery-list').scrollTop=row.offsetTop-$('discovery-list').offsetTop;
    });
  }

  function navigateHash(scroll = true) {
    const params = new URLSearchParams(location.hash.slice(1));
    const id=params.get('ride'); const filter=params.get('category');
    if (id && data.entries.some(entry => entry.id===id)) { resetFilters(); select(id,false); }
    else if (filter && categories.includes(filter)) { resetFilters(); category=filter; render(); }
    else return;
    if (scroll) $('placements').scrollIntoView({block:'start'});
    const row=$('discovery-list').querySelector(`[data-id="${selected}"]`);
    if (row) $('discovery-list').scrollTop=row.offsetTop-$('discovery-list').offsetTop;
  }

  function toast(text) {
    clearTimeout(toastTimer); $('toast').textContent=text; $('toast').hidden=false;
    toastTimer=setTimeout(() => $('toast').hidden=true,3500);
  }

  categories.forEach(name => {
    const button=document.createElement('button'); button.textContent=name; button.dataset.category=name; button.type='button';
    button.setAttribute('aria-pressed',String(name==='All'));
    button.addEventListener('click', () => { category=name; $('discovery-list').scrollTop=0; render(); });
    $('filters').append(button);
  });
  ['formula-racer','stunt-biplane','monster-truck'].forEach(id => {
    const entry=data.entries.find(e=>e.id===id); const link=document.createElement('a'); link.className='reward-link'; link.href=shareHash(id);
    link.innerHTML=`<span>${escape(entry.name)}<small>${escape(entry.state)}</small></span><span aria-hidden="true">↗</span>`;
    $('reward-links').append(link);
  });
  $('search').addEventListener('input', () => { $('discovery-list').scrollTop=0; render(); });
  $('region').addEventListener('change', () => { $('discovery-list').scrollTop=0; render(); });
  $('spoilers').addEventListener('change', () => {
    try { localStorage.setItem('drivables-exact-locations',String($('spoilers').checked)); } catch {}
    render();
  });
  document.addEventListener('keydown', event => {
    if (event.key!=='/' || event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    event.preventDefault(); $('search').focus(); $('placements').scrollIntoView({block:'start'});
  });
  window.addEventListener('hashchange', () => navigateHash());
  render(); navigateHash();
})();
