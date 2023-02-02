import { scrollToTop } from '../common/common';

const throttle = require('lodash.throttle');
const scrollUpButton = document.querySelector('.scroll-up-btn');

scrollUpButton.addEventListener('click', onScrollUpBtnClick);

function onScrollUpBtnClick(event) {
  event.preventDefault();

  scrollToTop();
}

const hideScrollUpBtn = () => {
  let scroll = window.pageYOffset;

  if (scroll > 250) {
    scrollUpButton.classList.remove('scroll-up-btn--hidden');
    return;
  }
  scrollUpButton.blur();
  scrollUpButton.classList.add('scroll-up-btn--hidden');
};

window.removeEventListener('scroll', throttle(hideScrollUpBtn, 500));
window.addEventListener('scroll', throttle(hideScrollUpBtn, 500));
