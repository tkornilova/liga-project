export const showMessage = () => {
  const form = document.querySelector('[data-form]');

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    form.classList.toggle('form--hidden');

    setTimeout(() => {
      form.classList.toggle('form--hidden');
    }, 3000);
  });
};
