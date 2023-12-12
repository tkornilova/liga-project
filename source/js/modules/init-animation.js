import gsap from '../vendor/gsap.min';
import ScrollTrigger from '../vendor/scrollTrigger.min';

gsap.registerPlugin(ScrollTrigger);

export class Animations {
  constructor() {
    this.window = window;
    this._blocks = document.querySelectorAll('[data-animation-fade]');
    this._batchArray = [];

    this._parallaxContainer = document.querySelectorAll('.img-set');
    this._parallaxItems = document.querySelectorAll('[data-parallax-mouse]');
    this._mouseCords = {x: 0, y: 0};
    this._handleMouseMove = this._handleMouseMove.bind(this);
    this._updateParallax = this._updateParallax.bind(this);
  }

  init() {
    this.startParalaxAnimation();
    this.startFadeAnimation();
  }

  // Анимация паралакса при движении мышки
  startParalaxAnimation() {
    if (!this._parallaxItems) {
      return;
    }

    this._parallaxContainer.forEach((container) => {
      container.addEventListener('mousemove', this._handleMouseMove);
    });
    gsap.ticker.add(this._updateParallax);
  }

  _handleMouseMove(e) {
    this._mouseCords.x = e.clientX - this.window.innerWidth / 2;
    this._mouseCords.y = e.clientY - this.window.innerHeight / 2;
  }

  _updateParallax() {
    this._parallaxItems.forEach((item) => {
      this._movement = item.dataset.movement ? item.dataset.movement : 1;

      gsap.to(item, {
        x: this._mouseCords.x / this._movement,
        y: this._mouseCords.y / this._movement,
        duration: item.dataset.duration ? item.dataset.duration : 0.5,
        ease: 'power1.out',
      });
    });
  }

  // Анимация проявления блоков при скролле
  startFadeAnimation() {
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
