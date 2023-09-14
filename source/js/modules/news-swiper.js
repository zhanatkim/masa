import Swiper from '../vendor/swiper';

// Свайпер для Новости и материалы.

const slidesWrapper = document.querySelector('.news__wrapper');
const buttonsWrapper = document.querySelector('.news__tubs');

const renderBullets = (index, className) =>
  '<span class="' + className + '">' + (index + 1) + '</span>';

const newsParams = {
  spaceBetween: 20,
  slidesPerView: 1,
  allowTouchMove: !0,
  grid: {
    rows: 2,
  },
  breakpoints: {
    768: {
      spaceBetween: 0,
      allowTouchMove: !0,
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    1200: {
      spaceBetween: 32,
      allowTouchMove: !1,
      slidesPerView: 'auto',
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
};

let newsSwiper = new Swiper('.news__swiper', newsParams);

const filterSlides = (evt) => {
  if (!evt.target.closest('.news__tub')) {
    return;
  }

  for (let i = 0; i < buttonsWrapper.children.length; i++) {
    buttonsWrapper.children[i].classList.remove('news__tub--is-active');
  }

  evt.target.classList.add('news__tub--is-active');

  if (!slidesWrapper) {
    return;
  }

  newsSwiper.slides.forEach((element) =>
    element.classList.remove('news-slide--is-hidden')
  );

  if (evt.target.dataset.id === 'default') {
    return;
  }

  const filteredCards = newsSwiper.slides.filter(
      (el) => el.dataset.theme !== evt.target.dataset.id
  );

  if (filteredCards.length) {
    filteredCards.forEach((element) =>
      element.classList.add('news-slide--is-hidden')
    );

    newsSwiper.destroy(true, true);
    newsSwiper = new Swiper('.news__swiper', newsParams);
  }
};

buttonsWrapper.addEventListener('click', filterSlides);
