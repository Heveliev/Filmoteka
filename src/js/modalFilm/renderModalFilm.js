import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';  



const refs = {
  filmCard: document.querySelector('.films__list'),
  backdrop: document.querySelector('.backdrop-modal-film'),
  filmRendering: document.querySelector('.film-render-markup'),
  // librPage: document.querySelector('.js-libr'),
};

const librPage = document.querySelector("#js-libr");
const queuePage = document.querySelector("#queue-films");
const watchedPage = document.querySelector("#watched-films");

refs.filmCard.removeEventListener('click', openModalFilm);
refs.filmCard.addEventListener('click', openModalFilm);

function openModalFilm(evt) {
  if (evt.target.nodeName === 'IMG') {
  refs.backdrop.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';

  const filmId = evt.target.closest('li').id;
  try {
    const filmArray = JSON.parse(localStorage.getItem('saved-movies'));
    const filmOpened = filmArray.find(film => film.id === Number(filmId));
    
    renderModalFilm(filmOpened);
    findGenres(filmOpened.genre_ids);
    localStorageHandler(filmOpened);
  } catch (error) {
    throw new Error(error);
  }
  document.removeEventListener('click', closeModalFilm);
  window.removeEventListener('keydown', closeModalFilm);

  document.addEventListener('click', closeModalFilm);
  window.addEventListener('keydown', closeModalFilm);
  }
}

function closeModalFilm(evt) {
  if (
    evt.target.matches('.modal__close-btn') ||
    evt.target.matches('.modal__close-btn-icon') ||
    evt.target.matches('.modal__close-btn-icon-svg') ||
    evt.target.matches('.backdrop-modal-film') ||
    evt.code === 'Escape'
  ) {
    refs.backdrop.classList.add('is-hidden');
    document.body.style.overflow = 'auto';
    clearModalFilm();

  }
} 

function renderModalFilm(film) {
  return (refs.filmRendering.innerHTML = `
        <div class="modal-img-wrapper">
          <img src="https://image.tmdb.org/t/p/w500/${
            film.poster_path
          }" alt="film-poster" />
        </div>
        <div class="modal__wrapper">
          <h2 class="modal__film-title">${film.title}</h2>
          <table class="modal__table">
            <tr class="modal__table-row">
              <td class="modal__first-column">Vote / Votes</td>
              <td>
                <div class="modal__vote-wrapper">
                  <p class="modal__vote">${film.vote_average.toFixed(1)}</p>
                  <p>/</p>
                  <p class="modal__votes">${film.vote_count}</p>
                </div>
              </td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Popularity</td>
              <td>${Math.round(film.popularity * 10) / 10}</td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Original Title</td>
              <td>${film.original_title}</td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Genre</td>
              <td>${findGenres(film.genre_ids)}</td>
            </tr>
          </table>
          <div>
            <h3 class="modal__about-title">About</h3>
            <p class="modal__about-film">
              ${film.overview}
            </p>
          </div>
          <div class="modal__buttons">
            <button class="modal-btn btn-watched">${getWatchActionText(
              film
            )}</button>
            <button class="modal-btn btn-queue">${getQueueActiontext(
              film
            )}</button>
          </div>
        </div>`);
}

function clearModalFilm() {
  return (refs.filmRendering.innerHTML = '');
}

function findGenres(filmGenreIds) {
  try {
    const savedGenres = JSON.parse(localStorage.getItem('saved-genres'));
    return filmGenreIds.map(genreId => savedGenres[genreId]).join(`, `);
  } catch (error) {
    throw new Error(error);
  }
}

function localStorageHandler(film) {
  const toWatchedBtn = document.querySelector('.btn-watched');
  const queueBtn = document.querySelector('.btn-queue');

  const WATCHED_KEY = 'watched-films';
  const QUEUE_KEY = 'queue-films';
  toWatchedBtn.removeEventListener('click', addToWatched);
  queueBtn.removeEventListener('click', addToQueue);
  toWatchedBtn.addEventListener('click', addToWatched);
  queueBtn.addEventListener('click', addToQueue);

  function addToWatched() {
    try {
      let watchedData = JSON.parse(localStorage.getItem('watched-films')) || [];
    if (!watchedData.find(item => item.id === film.id)) {
      watchedData.push(film);
    } else {
      watchedData = watchedData.filter(item => item.id !== film.id);
    }
    localStorage.setItem(WATCHED_KEY, JSON.stringify(watchedData));
    toWatchedBtn.textContent = getWatchActionText(film);
    if (librPage.classList.contains("current") && watchedPage.classList.contains("current-page")) {
      renderMoviesCards(watchedData);
    }
    } catch (error) {
      throw new Error(error)
    }
    
  }

  function addToQueue() {
    try {
      let queueData = JSON.parse(localStorage.getItem('queue-films')) || [];
    if (!queueData.find(item => item.id === film.id)) {
      queueData.push(film);
    } else {
      queueData = queueData.filter(item => item.id !== film.id);
    }
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queueData));
    queueBtn.textContent = getQueueActiontext(film);
        if (librPage.classList.contains("current") && queuePage.classList.contains("current-page")) {
      renderMoviesCards(queueData);
    }
    } catch (error) {
      throw new Error(error)
    }
    
  }
}

function getWatchActionText(film) {
  try {
    let watchedData = JSON.parse(localStorage.getItem('watched-films')) || [];
  return watchedData.find(item => item.id === film.id)
    ? 'REMOVE FROM WATCHED'
    : 'ADD TO WATCHED';
  } catch (error) {
    throw new Error(error)
  }
  
}

function getQueueActiontext(film) {
  try {
    let queueData = JSON.parse(localStorage.getItem('queue-films')) || [];
  return queueData.find(item => item.id === film.id)
    ? 'REMOVE FROM QUEUE'
    : 'ADD TO QUEUE';
  } catch (error) {
    throw new Error(error)
  }
  
}
