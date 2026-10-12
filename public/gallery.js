(() => {
  let dialog;
  document.addEventListener('click', event => {
    const link = event.target.closest('a[data-lightbox]');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'image-viewer';
      dialog.setAttribute('aria-label', 'Image viewer');
      dialog.innerHTML = '<button type="button" class="image-close" aria-label="Close image">Close ×</button><figure><img alt=""><figcaption></figcaption></figure>';
      document.body.append(dialog);
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
      dialog.addEventListener('close', () => document.body.classList.remove('image-open'));
    }
    if (!dialog.showModal) return;
    event.preventDefault();
    const image = dialog.querySelector('img');
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    dialog.querySelector('figcaption').textContent = link.dataset.caption || image.alt;
    document.body.classList.add('image-open');
    dialog.showModal();
  });
})();
