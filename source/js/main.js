import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {Form} from './modules/form-validate/form';
import {initHeader} from './modules/header/init-header.js';
import {initAccordions} from './modules/accordion/init-accordion.js';
import {showMessage} from './modules/init-subscription.js';
import {Animations} from './modules/init-animation.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();
  initHeader();
  initAccordions();
  showMessage();
  // Подключает анимацию (паралакс, проявление блоков)
  const animations = new Animations();
  animations.init();

  // Modules
  // ---------------------------------

  window.addEventListener('load', () => {
    const form = new Form();
    window.form = form;
    form.init();
  });
});
