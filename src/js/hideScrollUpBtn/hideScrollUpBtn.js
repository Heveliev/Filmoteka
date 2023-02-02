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

window.addEventListener('scroll', hideScrollUpBtn);


{/* <a href="#top" class="scroll-up-btn scroll-up-btn--hidden">
<svg class="scroll-up-btn__icon" width="30" height="30">
  <use href="./images/sprite.svg#arrow-up"></use>
</svg>
</a>


import './js/hideScrollUpBtn'; */}


{/* <a href="#top" class="scroll-up-btn scroll-up-btn--hidden">
      <svg class="scroll-up-btn__icon" width="30" height="30">
        <use href="./images/sprite.svg#arrow-up"></use>
      </svg>
    </a> */}

    // import './js/hideScrollUpBtn';

    // @import './components/scroll-button';