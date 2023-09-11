import Swiper from '../vendor/swiper';

// Свайпер для Новости и материалы.
const breakpoint = window.matchMedia('(min-width:1200px)');
const slidesWrapper = document.querySelector('.news__wrapper');
const buttonsWrapper = document.querySelector('.news__tubs');

const renderBullets = (index, className) => '<span class="' + className + '">' + (index + 1) + '</span>';

const newsSwiper = new Swiper('.news__swiper', {
  cssMode: true,
  slidesPerView: 1,
  // slidesPerColumn: 2,
  grid: {
    rows: 2,
  },
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      // slidesPerColumn: 2,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 32,
      // slidesPerCsolumn: 1,
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

const setWideFirstSlide = () => {
  const firstSlide = Array.from(slidesWrapper.querySelectorAll('.news-slide--is-open'))[0];
  if (!firstSlide) {
    return;
  }
  if (!breakpoint.matches) {
    delete firstSlide.dataset.firstSlide;
    return;
  }
  firstSlide.dataset.firstSlide = true;
};


const filterSlides = (evt) => {
  if (!evt.target.closest('.news__tub')) {
    return;
  }
  for (let i = 0; i < buttonsWrapper.children.length; i++) {
    buttonsWrapper.children[i]. classList.remove('news__tub--is-active');
  }
  evt.target.classList.add('news__tub--is-active');

  if (!slidesWrapper) {
    return;
  }
  newsSwiper.slides.forEach((element) => element.classList.remove('news-slide--is-open'));
  newsSwiper.slides.forEach((el) => delete el.dataset.firstSlide);

  if (evt.target.dataset.id === 'default') {
    newsSwiper.slides.forEach((element) => element.classList.add('news-slide--is-open'));
    newsSwiper.update();
  }
  const filteredCards = newsSwiper.slides.filter((el) => el.dataset.theme === evt.target.dataset.id);

  if (filteredCards.length === 0) {
    return;
  }
  filteredCards.forEach((element) => element.classList.add('news-slide--is-open'));
  newsSwiper.update();
};

buttonsWrapper.addEventListener('click', filterSlides);


newsSwiper.on('afterInit', setWideFirstSlide());
newsSwiper.on('update', setWideFirstSlide);
breakpoint.addListener(setWideFirstSlide);
// newsSwiper.updateSize();
