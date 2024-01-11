import {Burger} from './burger';
// import {StickyHeader} from './sticky-header';

const _handleScroll = () => {
  const header = document.querySelector('[data-header]');

  // добавляет стили шапке, если она не top: 0
  if (window.scrollY > 0) {
    header.classList.add('header--scroll');
  } else {
    header.classList.remove('header--scroll');
  }
};

export const initHeader = () => {
  const header = document.querySelector('[data-header]');

  if (!header) {
    return;
  }

  const burger = new Burger();
  burger.init();

  window.addEventListener('scroll', _handleScroll);
};
