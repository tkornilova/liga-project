import {Burger} from './burger';
// import {StickyHeader} from './sticky-header';

const handleScroll = () => {
  let isScrolling = false;
  const header = document.querySelector('[data-header]');

  // добавляет стили при скролле
  if (!isScrolling) {
    header.classList.add('header--scroll');
    isScrolling = true;

    setTimeout(() => {
      header.classList.remove('header--scroll');
      isScrolling = false;
    }, 50);
  }

  // добавляет стили шапке, если она не top: 0
  if (window.scrollY > 0) {
    header.classList.add('header--bg');
  } else {
    header.classList.remove('header--bg');
  }
};

export const initHeader = () => {
  const burger = new Burger();
  burger.init();

  window.addEventListener('scroll', handleScroll);
};
