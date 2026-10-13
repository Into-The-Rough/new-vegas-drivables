(() => {
  const buttons = document.querySelectorAll('[data-reading-font]');
  let enabled = false;
  try { enabled = localStorage.getItem('drivables-reading-font') === 'true'; } catch {}
  function render() {
    document.documentElement.classList.toggle('reading-font', enabled);
    buttons.forEach(button => {
      button.hidden = false;
      button.setAttribute('aria-pressed', String(enabled));
    });
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    enabled = !enabled;
    try { localStorage.setItem('drivables-reading-font', String(enabled)); } catch {}
    render();
  }));
  render();
})();
