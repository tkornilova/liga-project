import scrollLock from '../../vendor/scroll-lock.min';
import {FocusLock} from '../../utils/focus-lock';

export class Burger {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._burger = document.querySelector('[data-burger]');
    this._scrollLock = scrollLock;
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);

    this._window = window;
    this._contacUsBtn = document.querySelector('[data-contact-us]');
    this._breakpointDesktop = this._window.matchMedia('(min-width:1024px)');
    this._breakpointTablet = this._window.matchMedia('(max-width:1023px)');
  }

  init() {
    if (!this._burger) {
      return;
    }

    // Открывает меню при клике на бургер
    this._burger.addEventListener('click', this._onBurgerClick);

    // Закрывает меню при ресайзе
    this._window.addEventListener('resize', () => {
      if (this._breakpointDesktop.matches) {
        this._closeMenu();
      }
    });

    // Закрывает меню при клике на кнопку Contact Us
    this._contacUsBtn.addEventListener('click', () => {
      if (this._breakpointTablet.matches) {
        this._closeMenu();
      }
    });
  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-open');
    this._scrollLock.disablePageScroll();
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    this._focusLock.lock('[data-header]');
    if (window.ls) {
      window.ls.stop();
    }
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-open');
    this._scrollLock.enablePageScroll();
    this._focusLock.unlock('[data-header]');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    if (window.ls) {
      window.ls.start();
    }
  }

  _onBurgerClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      this._closeMenu();
    }
  }
}
