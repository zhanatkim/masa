const wrapper = document.querySelector('.swiper-wrapper');
const activeSlide = wrapper.querySelector('.page-header-swiper__slide.swiper-slide-active');

export const unfocusSlides = () => {
  const inactiveSlides = Array.from(wrapper.querySelectorAll('.page-header-swiper__slide')).filter((item) => !item.classList.contains('swiper-slide-active'));
  inactiveSlides.forEach((el) => el.setAttribute('inert', true));
  activeSlide.removeAttribute('inert');
};
