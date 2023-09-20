import {Accordions} from './accordions';
let accordions;

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};

function onButtonFocus(evt) {
  if (evt.target.closest('.nav__submenu')) {
    accordions._documentClickHandler();
  }
}

const nav = document.querySelector('.nav');

nav.addEventListener('focus', onButtonFocus);
