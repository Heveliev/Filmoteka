const refs = {
  loader: document.querySelector('.loader'),
};

const DATA_KEY = 'saved-data';

export function saveMoviesToLoсalStorage(movies) {
  const MOVIES_KEY = 'saved-movies';

  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
}

export function setLocalData(data) {
  localStorage.setItem(DATA_KEY, JSON.stringify(data));
}

export function getLocalData() {
  data = JSON.parse(localStorage.getItem(DATA_KEY));

  return data;
}

export function removeLocalData() {
  localStorage.removeItem(DATA_KEY);
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
