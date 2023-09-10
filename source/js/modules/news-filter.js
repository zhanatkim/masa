// import {newsSwiper} from './news-swiper';
// import {newsCards} from '../mocks';
// import {createCardsList} from './render-news-cards';
// const slidesWrapper = document.querySelector('.news__wrapper');
// const buttonsWrapper = document.querySelector('.news__tubs');

// // let filteredCards = [];

// // const filterSlides = function (evt) {
// //   if (!evt.target.closest('.news__tub')) {
// //     return;
// //   }
// //   for (let i = 0; i < buttonsWrapper.children.length; i++) {
// //     buttonsWrapper.children[i]. classList.remove('news__tub--is-active');
// //   }
// //   evt.target.classList.add('news__tub--is-active');

// //   if (!slidesWrapper) {
// //     return;
// //   }
// //   slidesWrapper.querySelectorAll('.news__slide').forEach((el) => el.remove());
// //   if (evt.target.dataset.id === 'default') {
// //     filteredCards = newsCards;
// //     createCardsList(filteredCards);
// //     newsSwiper.update();
// //   }
// //   filteredCards = newsCards.filter((el) => el.theme === evt.target.dataset.id);
// //   if (filteredCards.length === 0) {
// //     return;
// //   }
// //   createCardsList(filteredCards);
// //   newsSwiper.update();
// // };

// const filterSlides = (evt) => {
//   if (!evt.target.closest('.news__tub')) {
//     return;
//   }
//   for (let i = 0; i < buttonsWrapper.children.length; i++) {
//     buttonsWrapper.children[i]. classList.remove('news__tub--is-active');
//   }
//   evt.target.classList.add('news__tub--is-active');

//   if (!slidesWrapper) {
//     return;
//   }
//   newsSwiper.slides.forEach((element) => element.classList.add('news-slide--is-hide'));
//   if (evt.target.dataset.id === 'default') {
//     newsSwiper.slides.forEach((element) => element.classList.remove('news-slide--is-hide'));
//     newsSwiper.update();
//   }
//   const filteredCards = newsSwiper.slides.filter((el) => el.theme === evt.target.dataset.id);
//   if (filteredCards.length === 0) {
//     return;
//   }
//   filteredCards.forEach((element) => element.classList.remove('news-slide--is-hide'));
// };

// export const setFilteredSlides = () => {
//   buttonsWrapper.addEventListener('click', filterSlides);
// };
