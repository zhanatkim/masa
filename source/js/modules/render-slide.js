
export const renderSlide = () => {
  const wrapper = document.querySelector('.page-header-swiper__wrapper');
  const activeSlide = document.querySelector('.page-header-swiper__slide.swiper-slide-active');
  const bgImages = document.querySelectorAll('.page-header__photo');
  if (!bgImages && !wrapper) {
    return;
  }
  bgImages.forEach((el) => el.classList.remove('page-header__photo--is-active'));

  if (!activeSlide) {
    return;
  }

  const activeImage = Array.from(bgImages).find((item) => item.dataset.index === activeSlide.dataset.swiperSlideIndex);
  activeImage.classList.add('page-header__photo--is-active');

  const focusableSlides = Array.from(wrapper.querySelectorAll('.page-header-swiper__slide')).filter((item) => !item.classList.contains('swiper-slide-active'));
  focusableSlides.forEach((el) => el.setAttribute('inert', true));
  activeSlide.removeAttribute('inert');
};
