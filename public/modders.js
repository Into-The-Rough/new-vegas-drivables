(() => {
  const root = document.querySelector('.modders-page');
  if (!root) return;
  root.classList.add('modder-interactive');
  const search = document.querySelector('#command-search');
  const category = document.querySelector('#command-category');
  const conditions = document.querySelector('#command-conditions');
  const entries = [...document.querySelectorAll('.command-entry')];
  const count = document.querySelector('#command-count');
  const empty = document.querySelector('#command-empty');
  document.querySelector('.command-controls').hidden = false;
  const text = new Map(entries.map(entry => [entry, entry.textContent.toLowerCase()]));

  function filter() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const entry of entries) {
      entry.hidden = !(terms.every(term => text.get(entry).includes(term))
        && (!category.value || entry.dataset.group === category.value)
        && (!conditions.checked || entry.dataset.condition === 'true'));
      if (!entry.hidden) visible++;
    }
    count.textContent = `${visible} of ${entries.length} commands`;
    empty.hidden = visible !== 0;
  }

  function reset() {
    search.value = '';
    category.value = '';
    conditions.checked = false;
    filter();
  }

  function revealHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target || !root.contains(target)) return;
    if (target.classList.contains('command-entry')) {
      reset();
      target.open = true;
    } else if (target.tagName === 'DETAILS') target.open = true;
    requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
  }

  search.addEventListener('input', filter);
  category.addEventListener('change', filter);
  conditions.addEventListener('change', filter);
  document.querySelector('#command-reset').addEventListener('click', () => { reset(); search.focus(); });
  window.addEventListener('hashchange', revealHash);
  root.addEventListener('click', async event => {
    const button = event.target.closest('[data-copy]');
    if (!button) return;
    const code = button.parentElement.querySelector('code');
    const status = document.querySelector('#copy-status');
    try {
      await navigator.clipboard.writeText(code.textContent);
      const label = button.textContent;
      button.textContent = 'Copied';
      status.textContent = 'Copied to clipboard.';
      setTimeout(() => { button.textContent = label; }, 1600);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Select Copy from your browser, or press Control C to copy the selected text.';
      button.textContent = 'Text selected: Ctrl+C';
    }
  });
  filter();
  revealHash();
})();
