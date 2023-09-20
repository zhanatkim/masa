export const blockFocusSlide = () => {
  const wrapper = document.querySelector('.swiper-wrapper');
  const activeSlide = wrapper.querySelector('.swiper-slide-active');

  if (!activeSlide) {
    return;
  }

  const focusableSlides = Array.from(wrapper.querySelectorAll('.swiper-slide')).filter((item) => !item.classList.contains('swiper-slide-active'));
  focusableSlides.forEach((el) => el.setAttribute('inert', true));
  activeSlide.removeAttribute('inert');
};
