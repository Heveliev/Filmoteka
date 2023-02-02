const throttle = require('lodash.throttle');

const hideScrollUpBtn = () => {
    let scroll = window.pageYOffset;
  
    const scrollUpButton = document.querySelector('.scroll-up-btn');
  
    if (scroll > 250) {
      scrollUpButton.classList.remove('scroll-up-btn--hidden');
      return;
    }
    scrollUpButton.blur();
    scrollUpButton.classList.add('scroll-up-btn--hidden');
  };
  window.removeEventListener('scroll',throttle(hideScrollUpBtn,500));
window.addEventListener('scroll',throttle(hideScrollUpBtn,500));