export const initVideo = () => {
  const videoBtns = document.querySelectorAll('[data-video-btn]');

  if (!videoBtns) {
    return;
  }

  videoBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const videoContainer = btn.closest('.video');
      const video = btn.parentNode.querySelector('video');

      videoContainer.classList.add('video--play');
      video.play();

      // Если видео остановлено, добавляется обложка
      video.addEventListener('pause', () => {
        videoContainer.classList.remove('video--play');
      });

      // Если видео закончено, добавляется обложка
      video.addEventListener('ended', () => {
        videoContainer.classList.remove('video--play');
      });
    });
  });
};
