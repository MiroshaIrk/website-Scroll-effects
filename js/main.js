gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  // настраеваем плавный скрол и работу эффектов(скорость прокрутки,
  // запаздывание прокрутки (data-lag=".7" data-speed=".6") нужных элементов)
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 2,
    effects: true
  });

  // настраиваю исчезновение элементов .header
  gsap.fromTo('.hero-section', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero-section',
      start: 'center',
      end: '820',

      scrub: true
    }
  });

  // настраиваю появление элементов .gallery
  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsLeft.forEach(item => {
    gsap.fromTo(item, { x: -150, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-1000',
        end: '-500',

        scrub: true
      }
    });
  });

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

  itemsRight.forEach(item => {
    gsap.fromTo(item, { x: 150, opacity: 0 }, {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: item,
        start: '-1000',
        end: '-500',

        scrub: true
      }
    });
  });
}