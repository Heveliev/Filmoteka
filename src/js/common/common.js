const refs = {
  loader: document.querySelector('.loader'),
};

export function saveMoviesToLoсalStorage(movies) {
  const MOVIES_KEY = 'saved-movies';

  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
}

export function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

export function showLoadSpinner() {
  refs.loader.classList.remove('hide');
}

export function hideLoadSpinner() {
  setTimeout(() => {
    refs.loader.classList.add('hide');
  }, 1000);
}

export function hidePageLoadSpinner() {
  refs.loader.classList.remove('page-load');
  refs.loader.classList.add('hide');
}
