// Progressive enhancement: without JavaScript the preview opens the MP4 directly.
for (const trigger of document.querySelectorAll('[data-video-open]')) {
  const dialog = document.getElementById(trigger.dataset.videoOpen);
  if (!dialog || typeof dialog.showModal !== 'function') continue;
  const video = dialog.querySelector('video');
  trigger.addEventListener('click', (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    dialog.showModal();
    document.documentElement.classList.add('video-dialog-open');
    video.play().catch(() => {});
  });
  dialog.addEventListener('close', () => {
    video.pause();
    document.documentElement.classList.remove('video-dialog-open');
    trigger.focus({ preventScroll: true });
  });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
}
