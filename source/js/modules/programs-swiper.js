import Swiper from '../vendor/swiper';

// Свайпер для Программ

export const programsSwiper = new Swiper('.programs__swiper', {
  // cssMode: true,
  slidesPerView: 1,
  spaceBetween: 3,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: '.programs__pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.programs__swiper-button--next',
    prevEl: '.programs__swiper-button--prev',
  },
  keyboard: true,
});
