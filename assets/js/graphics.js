(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const updateThemeLabel = () => {
    toggle.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  };
  updateThemeLabel();
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = theme;
    try { localStorage.setItem('theme', theme); } catch { /* Storage may be disabled. */ }
    updateThemeLabel();
  });

  const dialog = document.querySelector('.lightbox');
  const image = dialog.querySelector('img');
  const caption = dialog.querySelector('p');
  let opener;
  document.querySelectorAll('a[data-preview]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !dialog.showModal) return;
      event.preventDefault();
      opener = link;
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      caption.textContent = image.alt;
      dialog.showModal();
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    image.removeAttribute('src');
    opener?.focus({ preventScroll: true });
  });

  // Pause demos when they leave the viewport; playback is always visitor initiated.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (!entry.isIntersecting) entry.target.pause(); });
    });
    document.querySelectorAll('video').forEach(video => observer.observe(video));
  }
})();
