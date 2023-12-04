import gsap from '../utils/gsap.min';
import ScrollTrigger from '../utils/scrollTrigger.min';

gsap.registerPlugin(ScrollTrigger);

export class Animations {
  constructor() {
    this._blocks = document.querySelectorAll('[data-animation-fade]');
    this._batchArray = [];
  }

  init() {
    this._startFadeAnimation();
  }

  // Анимация проявления блоков при скролле
  _startFadeAnimation() {
    if (!this._blocks) {
      return;
    }

    this._blocks.forEach((block) => {
      gsap.to(block, {
        opacity: 1,
        duration: 0.5,
        translateY: 0,
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      });
    });

    // ScrollTrigger.create({
    //   trigger: 'body',
    //   start: 'top top',
    //   end: 'bottom bottom',
    //   onLeave: () => {
    //     this._batchArray.forEach((array) => {
    //       array.forEach((batch) => {
    //         batch.vars.onEnter(batch);
    //       });
    //     });
    //   },
    // });
  }
}
