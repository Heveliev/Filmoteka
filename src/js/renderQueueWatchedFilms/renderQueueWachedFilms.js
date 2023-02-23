import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';

import { hidePageLoadSpinner, removeLocalData } from '../common/common';
import {
  hidePageLoadSpinner,
  removeLocalData,
  showLoadSpinner,
  hideLoadSpinner,
  scrollToTop,
} from '../common/common';
let globalCurrentPage = 0;
let parseResp;
const watched = document.querySelector('.watched-films');
const queue = document.querySelector('.queue-films');
const btnList = document.querySelector('.button-list');
const librNoFilm = document.querySelector('.js-no_films__list');
const librList = document.querySelector('.films__list');
const logo = document.querySelector('.logo-link');
const paginationBox = document.querySelector('.page-number__list');

const WATCHED_KEY = 'watched-films';
const QUEUE_KEY = 'queue-films';

if (localStorage.getItem(WATCHED_KEY) === null) {
  localStorage.setItem(WATCHED_KEY, JSON.stringify([]));
  hidePageLoadSpinner();
}

if (localStorage.getItem(QUEUE_KEY) === null) {
  localStorage.setItem(QUEUE_KEY, JSON.stringify([]));
  hidePageLoadSpinner();
}

let key = 'queue-films';

queue.classList.add('current-page');
try {
  clearError();
  const resp = localStorage.getItem(key);
 parseResp = JSON.parse(resp);
if (!parseResp.length) {
  clearList()
  clearPagination();
  fooError(key);
  hidePageLoadSpinner();
} else {
  try {
    const data = createDataToRender(parseResp);
    clearError();

    renderMoviesCards(data.results);
    renderLibraryPagination(data.page, data.totalPages);

    paginationBox.removeEventListener('click', handlerLibraryPagination);
    paginationBox.addEventListener('click', handlerLibraryPagination);

    hidePageLoadSpinner();



  } catch (error) {
    clearList()
    clearPagination();
    fooError(key);
    hidePageLoadSpinner();
  }
}
} catch (error) {
  throw new Error(error);
}

logo.removeEventListener('click', removeLocalData);
logo.addEventListener('click', removeLocalData);


btnList.removeEventListener('click', onBtnClick);
btnList.addEventListener('click', onBtnClick);

export function onBtnClick(e) {
  e.preventDefault();
  key = e.target.id;
  selectCurrentPage(key);
  try {
    const resp = localStorage.getItem(key);
  parseResp = JSON.parse(resp);

  if (!parseResp.length) {
    clearList()
    clearPagination();
    fooError(key);
  } else {
    try {
      clearError();
      const data = createDataToRender(parseResp);
      renderMoviesCards(data.results);
      renderLibraryPagination(data.page, data.totalPages);

      paginationBox.removeEventListener('click', handlerLibraryPagination);
      paginationBox.addEventListener('click', handlerLibraryPagination);

      hidePageLoadSpinner();
    } catch (error) {
      clearList()
      clearPagination();
      fooError(key);
      hidePageLoadSpinner();
    }
  }
  } catch (error) {
    throw new Error(error)
  }
  
}
function clearPagination(){
  paginationBox.innerHTML = '';
}
function clearError() {
  librNoFilm.innerHTML = '';
}
function clearList() {
  librList.innerHTML = '';
}
function fooError(key) {
  return (librNoFilm.innerHTML = `
  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">
  <p class="js-no_films__text">Opss... you haven't added any movies to (${key})</p>
`);
}

function selectCurrentPage(id) {
  if (id === watched.id) {
    queue.classList.remove('current-page');
    watched.classList.add('current-page');
    queue.removeAttribute('disabled');
    watched.setAttribute('disabled', 'disabled');
  }

  if (id === queue.id) {
    watched.classList.remove('current-page');
    queue.classList.add('current-page');
    watched.removeAttribute('disabled');
    queue.setAttribute('disabled', 'disabled');
  }
}

