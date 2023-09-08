import Swiper from '../vendor/swiper';
// Свайпер для Новости и материалы.

const renderBullets = (index, className) => {
  return '<span class="' + className + '">' + (index + 1) + '</span>';
};

export const newsSwiper = new Swiper('.news__swiper', {
  cssmode: true,
  // centeredSlides: true,
  slidesPerView: 1,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
    },
  },
  pagination: {
    el: '.news__pagination',
    clickable: true,
    renderBullet: renderBullets,
  },
  navigation: {
    nextEl: '.news__button--next',
    prevEl: '.news__button--prev',
  },
});
// newsSwiper.on('afterInit', setWideFirstSlide());
// newsSwiper.on('update', setWideFirstSlide);
