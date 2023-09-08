import Swiper from '../vendor/swiper';

// Свайпер для Отзывов

export const reviewsSwiper = new Swiper('.reviews__swiper', {
  slidesPerView: 1,
  spaceBetween: 3,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
  pagination: {
    el: '.reviews__pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.reviews__button--next',
    prevEl: '.reviews__button--prev',
  },
  keyboard: true,
});
