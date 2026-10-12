(() => {
  const root = document.querySelector('.site-navigation');
  if (!root) return;
  const primary = [...root.querySelectorAll('.primary-nav a')];
  const secondary = [...root.querySelectorAll('.section-nav')];

  function measure() {
    const offset = getComputedStyle(root).position === 'sticky' ? root.getBoundingClientRect().height + 20 : 20;
    document.documentElement.style.setProperty('--navigation-offset', `${offset}px`);
  }

  function setCurrent(page) {
    const target = [...root.querySelectorAll('[data-page]')].find(link => link.dataset.page === page);
    const section = target?.dataset.section || target?.closest('[data-section-nav]')?.dataset.sectionNav;
    for (const link of primary) {
      if (link.dataset.section === section) link.setAttribute('aria-current', secondary.some(nav => nav.dataset.sectionNav === section) ? 'true' : 'page');
      else link.removeAttribute('aria-current');
    }
    for (const nav of secondary) {
      nav.hidden = nav.dataset.sectionNav !== section;
      for (const link of nav.querySelectorAll('a')) {
        if (link.dataset.page === page) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      }
    }
    root.dataset.currentPage = page;
    measure();
  }

  window.DrivablesNavigation = {setCurrent};
  setCurrent(root.dataset.currentPage);
  if (window.ResizeObserver) new ResizeObserver(measure).observe(root);
  window.addEventListener('resize', measure);
})();
