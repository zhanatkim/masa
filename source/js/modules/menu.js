import '../utils/scroll-lock';
const header = document.querySelector('.page-header');
const menuList = header.querySelector('.nav');
const menuToggle = header.querySelector('.page-header__toggle');

const onNavOutsideClick = (evt) => {
  if (!evt.target.closest('.nav__list')) {
    closeMenu();
  }
};

const onNaVLinkCloseMenu = (evt) => {
  if (!evt.target.closest('.nav__link')) {
    return;
  }
  closeMenu();
};

function closeMenu() {
  menuList.classList.remove('nav--is-active');
  header.classList.remove('page-header--is-active');
  menuToggle.classList.remove('page-header__toggle--is-active');
  window.scrollLock.enableScrolling();
  menuList.removeEventListener('click', onNaVLinkCloseMenu);
  menuList.removeEventListener('click', onNavOutsideClick);
  menuToggle.removeEventListener('click', closeMenu);
}

const openMenu = () => {
  if (!menuToggle) {
    return;
  }
  header.classList.add('page-header--is-active');
  menuToggle.classList.add('page-header__toggle--is-active');
  menuList.classList.add('nav--is-active');
  window.scrollLock.disableScrolling();
  menuList.addEventListener('click', onNaVLinkCloseMenu);
  menuList.addEventListener('click', onNavOutsideClick);
  menuToggle.addEventListener('click', closeMenu);
};

menuToggle.addEventListener('click', openMenu);
