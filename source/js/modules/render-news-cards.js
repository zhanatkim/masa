
const slidesWrapper = document.querySelector('.news__wrapper');
const cardTemplate = document.querySelector('#news-card').content;
const breakpoint = window.matchMedia('(min-width:1200px)');

const setWideFirstSlide = () => {
  if (!breakpoint.matches) {
    return;
  }
  const firstSlide = Array.from(slidesWrapper.children)[0];
  firstSlide.dataset.firstSlide = true;
};

const cardContentFragment = document.createDocumentFragment();

const renderCard = ({id, theme, date, title, text}) => {
  const cardTemplateClone = cardTemplate.cloneNode(true);
  cardTemplateClone.querySelector('.news__slide').dataNewsId = id;
  cardTemplateClone.querySelector('.news__slide').dataTheme = theme;
  cardTemplateClone.querySelector('.news__slide').dataFirstSlide = false;
  cardTemplateClone.querySelector('.news-slide__date').textContent = date;
  cardTemplateClone.querySelector('.news-slide__title').textContent = title;
  cardTemplateClone.querySelector('.news-slide__text').textContent = text;
  cardTemplateClone.querySelector('.news-slide__photo').innerHTML = `<picture><source type="image/webp" srcset="img/photos/news-card-${id}-2x.webp 2x, img/photos/news-card-${id}-1x.webp 1x">
  <img src="img/photos/news-card-${id}-1x.jpg" srcset="img/photos/news-card-${id}-2x.jpg 2x" alt="${title}"></picture>`;
  return cardTemplateClone;
};

export const createCardsList = (cards) => {
  cards.forEach((card) => {
    cardContentFragment.appendChild(renderCard(card));
  });
  slidesWrapper.appendChild(cardContentFragment);
  setWideFirstSlide();

  breakpoint.addListener(setWideFirstSlide);
};

breakpoint.addListener(setWideFirstSlide);
