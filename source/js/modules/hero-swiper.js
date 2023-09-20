import Swiper from '../vendor/swiper';
import {renderSlide} from './render-slide';
import {blockFocusSlide} from './swiper-focus-block';
// Свайпер для хиро-хедера

export const heroSwiper = new Swiper('.page-header__swiper', {
  cssmode: true,
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.page-header-swiper__pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   paused: true,
  //   timeLeft: 4000,
  // },
});
heroSwiper.on('afterInit', renderSlide());
heroSwiper.on('slideChangeTransitionEnd', renderSlide);
heroSwiper.on('afterInit', blockFocusSlide());
heroSwiper.on('slideChangeTransitionEnd', blockFocusSlide);
