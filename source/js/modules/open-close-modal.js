import {modals} from './modules/modals/init-modals';
const link = document.querySelector('.about__button');
const nameInput = document.querySelector('#modal-name');
export const openModal = () => {
  link.addEventListener('click', function () {
    modals.open();
    setTimeout(() => {
      nameInput.focus();
    }, 100);
  });
};

