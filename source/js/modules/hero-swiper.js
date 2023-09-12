import Swiper from '../vendor/swiper';
import {renderSlide} from './render-slide';
// Свайпер для хиро-хедера

export const heroSwiper = new Swiper('.page-header__swiper', {
  cssmode: true,
  loop: true,
  pagination: {
    el: '.page-header-swiper__pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
heroSwiper.on('afterInit', renderSlide());
heroSwiper.on('slideChangeTransitionEnd', renderSlide);
