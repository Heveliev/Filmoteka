import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { hidePageLoadSpinner,removeLocalData} from '../common/common';

const watched = document.querySelector('.watched-films');
const queue = document.querySelector('.queue-films');
const btnList = document.querySelector('.button-list');
const librList = document.querySelector('.films__list');
const logo = document.querySelector('.logo-link');

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
const resp = localStorage.getItem(key);
const parseResp = JSON.parse(resp);

logo.addEventListener('click', removeLocalData);

if (!parseResp.length) {
  fooError(key);
  hidePageLoadSpinner();
} else {
  try {
    renderMoviesCards(parseResp);
    hidePageLoadSpinner();
  } catch (error) {
    fooError(key);
    hidePageLoadSpinner();
  }
}

btnList.addEventListener('click', onBtnClick);

export function onBtnClick(e) {
  e.preventDefault();
  key = e.target.id;
  console.dir(key);
  selectCurrentPage(key);
  const resp = localStorage.getItem(key);
  const parseResp = JSON.parse(resp);
  if (!parseResp.length) {
    fooError(key);
  } else {
    try {
      renderMoviesCards(parseResp);
    } catch (error) {
      fooError(key);
    }
  }
}

function fooError(key) {
  return (librList.innerHTML = `
  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">
  <p>Opss... you haven't added any movies to (${key})</p>
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
