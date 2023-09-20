import Swiper from '../vendor/swiper';

const swiperContainer = document.querySelector('.programs__wrapper');
const swiperLinks = swiperContainer.querySelectorAll('a[href]');

export const programsSwiper = new Swiper('.programs__swiper', {
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

const setActiveTabIndex = () => {
  if (window.matchMedia('(min-width:1200px)').matches) {
    programsSwiper.slides[programsSwiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
    programsSwiper.slides[programsSwiper.activeIndex + 1].querySelector('a').setAttribute('tabindex', '0');
    programsSwiper.slides[programsSwiper.activeIndex + 2].querySelector('a').setAttribute('tabindex', '0');
  } else if (window.matchMedia('(min-width:768px)').matches) {
    programsSwiper.slides[programsSwiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
    programsSwiper.slides[programsSwiper.activeIndex + 1].querySelector('a').setAttribute('tabindex', '0');
  }
  programsSwiper.slides[programsSwiper.activeIndex].querySelector('a').setAttribute('tabindex', '0');
};

const setTabIndex = () => {
  if (swiperLinks) {
    for (let link of swiperLinks) {
      link.setAttribute('tabindex', '-1');
      setActiveTabIndex();
    }
  }
};
programsSwiper.on('init', setTabIndex());
programsSwiper.on('activeIndexChange', setTabIndex);
