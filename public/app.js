(() => {
  const data = window.DRIVABLES;
  const $ = id => document.getElementById(id);
  const escape = text => String(text ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const categories = ['All','Cars','Bikes','Air','Water','Armour','Oddballs','Horses'];
  let category = 'All';
  let selected = 'v-000caa';
  let toastTimer;
  const viewLinks = [...document.querySelectorAll('[data-view]')];
  const views = [...document.querySelectorAll('.page-view')];
  let view = 'home';
  try { $('spoilers').checked = localStorage.getItem('drivables-exact-locations') !== 'false'; } catch {}

  function showView(id) {
    view = id;
    views.forEach(section => { section.hidden = section.id !== id; });
    window.DrivablesNavigation.setCurrent(id);
    if (id === 'placements') {
      const row = $('discovery-list').querySelector('[aria-current="true"]');
      if (row) $('discovery-list').scrollTop = row.offsetTop - ($('discovery-list').clientHeight - row.offsetHeight) / 2;
    }
  }

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
    $('result-count').textContent = `${entries.length} entries`;
    if (!entries.length) {
      const empty = document.createElement('div'); empty.className='empty-state';
      empty.innerHTML = '<p>No rides match those filters.</p><button type="button">CLEAR FILTERS</button>';
      empty.querySelector('button').addEventListener('click', () => { resetFilters(); render(); $('search').focus(); });
      $('discovery-list').append(empty); return;
    }
    entries.forEach(entry => {
      const button = document.createElement('button'); button.className='ride-row'; button.type='button';
      button.dataset.id=entry.id; button.setAttribute('aria-current',String(entry.id===selected));
      const sub = $('spoilers').checked ? entry.location.split(/: |\. /)[0] : entry.state;
      button.innerHTML = `<strong>${escape(entry.name)}</strong><small>${escape(sub)}</small>`;
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
      <div class="detail-main">
      <p class="detail-index">${escape(entry.category)} / ${escape(entry.region)}</p>
      <h3>${escape(entry.name)}</h3>
      <p class="detail-state">${escape(entry.state)}</p>
      ${entry.image?`<figure class="detail-image"><a href="assets/${escape(entry.image)}" data-lightbox data-caption="${escape(entry.name)} · vehicle image"><img src="assets/${escape(entry.image)}" width="1024" height="576" alt="${escape(entry.name)} vehicle image"></a><figcaption>View image · enlarge →</figcaption></figure>`:''}
      <p class="detail-location">${escape(show?entry.location:'Exact location hidden. Enable “Show map details” to see directions.')}${show&&entry.approximate?'<small>Regional map pin · follow these directions inside the area.</small>':''}</p>
      <dl class="requirements"><div><dt>${label}</dt><dd>${escape(skill)}</dd></div><div><dt>Supplies</dt><dd>${escape(entry.parts)}</dd></div><div><dt>Runs on</dt><dd>${escape(entry.fuel)}</dd></div><div><dt>Access</dt><dd>${entry.kind==='herd'?'Tame first':entry.kind==='reward'?'Earned':entry.kind==='excluded'?'Not placed':entry.repair?'Restore':entry.state==='Quest reward'?'Quest':'Discover'}</dd></div></dl>
      </div>
      <div class="detail-description">
      <p class="detail-label acquisition-label">${entry.kind==='herd'?'Taming':'How to get it'}</p>
      <p class="body-copy acquisition-copy">${escape(show?entry.acquisition:'Unlock details are hidden in this map.')}</p>
      <p class="detail-label reserve-label">${entry.kind==='herd'?'At the herd':'Starting condition'}</p>
      <p class="body-copy reserve-copy">${escape(show ? entry.condition + ' ' + entry.reserve : 'Starting conditions are hidden in this map.')}</p>
      ${show && entry.note?`<p class="detail-note">${escape(entry.note)}</p>`:''}
      </div>
      <div class="detail-actions">${entry.mapPoint&&show?'<button type="button" id="focus-pin">Centre on map</button>':''}<button type="button" id="copy-link">Copy entry link</button></div>`;
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
    const section = location.hash.slice(1);
    if (views.some(view => view.id === section)) {
      showView(section);
      if (scroll) window.scrollTo({top:0, behavior:'instant'});
      return;
    }
    const params = new URLSearchParams(location.hash.slice(1));
    const faqTarget = section && document.getElementById(section);
    if (faqTarget && $('faq').contains(faqTarget)) {
      showView('faq');
      requestAnimationFrame(() => faqTarget.scrollIntoView({block:'start'}));
      return;
    }
    if (params.has('driving')) {
      showView('driving');
      const target = document.getElementById(`driving-${params.get('driving')}`);
      if (target) requestAnimationFrame(() => target.scrollIntoView({block:'start'}));
      else if (scroll) window.scrollTo({top:0, behavior:'instant'});
      return;
    }
    if (params.has('world')) { showView('worlds'); if (scroll) window.scrollTo({top:0, behavior:'instant'}); return; }
    if (section === 'unlocks') { showView('races'); if (scroll) window.scrollTo({top:0, behavior:'instant'}); return; }
    const id=params.get('ride'); const filter=params.get('category');
    if (id && data.entries.some(entry => entry.id===id)) { showView('placements'); resetFilters(); select(id,false); }
    else if (filter && categories.includes(filter)) { showView('placements'); resetFilters(); category=filter; render(); }
    else if (!section) { showView('home'); return; }
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
    link.innerHTML=`<span>${escape(entry.name)}<small>${escape(entry.acquisition)}</small></span><span aria-hidden="true">→</span>`;
    $('reward-links').append(link);
  });
  viewLinks.forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      showView(link.dataset.view);
      window.scrollTo({top:0, behavior:'instant'});
      if (location.hash !== link.hash) {
        try { history.pushState(null,'',link.hash); } catch { location.hash=link.hash; }
      }
    });
  });
  $('search').addEventListener('input', () => { $('discovery-list').scrollTop=0; render(); });
  $('region').addEventListener('change', () => { $('discovery-list').scrollTop=0; render(); });
  $('spoilers').addEventListener('change', () => {
    try { localStorage.setItem('drivables-exact-locations',String($('spoilers').checked)); } catch {}
    render();
  });
  document.addEventListener('keydown', event => {
    if (event.key!=='/' || event.ctrlKey || event.metaKey || event.altKey || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
    if (view !== 'placements') return;
    event.preventDefault(); $('search').focus(); $('placements').scrollIntoView({block:'start'});
  });
  window.addEventListener('hashchange', () => navigateHash());
  showView('home'); render(); navigateHash(false);
  const currentRow=$('discovery-list').querySelector('[aria-current="true"]');
  if (currentRow) $('discovery-list').scrollTop=currentRow.offsetTop-($('discovery-list').clientHeight-currentRow.offsetHeight)/2;
})();
