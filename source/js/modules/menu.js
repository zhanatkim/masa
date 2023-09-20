import '../utils/scroll-lock';
import '../utils/focus-lock';
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
  menuList.classList.remove('is-active');
  header.classList.remove('is-active');
  menuToggle.classList.remove('is-active');
  window.scrollLock.enableScrolling();
  window.focusLock.unlock();
  menuList.removeEventListener('click', onNaVLinkCloseMenu);
  menuList.removeEventListener('click', onNavOutsideClick);
  menuToggle.removeEventListener('click', closeMenu);
}

const openMenu = () => {
  if (!menuToggle) {
    return;
  }
  header.classList.add('is-active');
  menuToggle.classList.add('is-active');
  menuList.classList.add('is-active');
  window.scrollLock.disableScrolling();
  window.focusLock.lock('.nav', false);
  menuList.addEventListener('click', onNaVLinkCloseMenu);
  menuList.addEventListener('click', onNavOutsideClick);
  menuToggle.addEventListener('click', closeMenu);
};

menuToggle.addEventListener('click', openMenu);
