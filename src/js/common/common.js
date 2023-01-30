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
