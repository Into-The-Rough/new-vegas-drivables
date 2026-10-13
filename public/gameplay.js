(() => {
  const video = document.getElementById('gameplay-preview');
  const poster = document.querySelector('.gameplay-poster');
  const status = document.getElementById('gameplay-status');
  document.querySelectorAll('[data-play-gameplay]').forEach(trigger => trigger.addEventListener('click', async event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button > 0) return;
    event.preventDefault();
    if (!video.getAttribute('src')) video.src = 'assets/gameplay-preview.mp4';
    poster.hidden = true;
    video.hidden = false;
    video.focus();
    try { await video.play(); }
    catch { status.textContent = 'Use the player controls to start, or watch the full video on YouTube.'; }
  }));
  video.addEventListener('error', () => {
    status.textContent = 'The preview could not load. Watch the full video on YouTube below.';
  });
  new MutationObserver(() => {
    if (document.getElementById('home').hidden) video.pause();
  }).observe(document.getElementById('home'), {attributes:true, attributeFilter:['hidden']});
  document.addEventListener('visibilitychange', () => { if (document.hidden) video.pause(); });
})();
