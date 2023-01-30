// import { refs } from '../refs/refs';
// import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
const moviesList = document.querySelector('.films__list');
const watched = document.querySelector('.watched-films');
const queue = document.querySelector('.queue-films');
const btnList = document.querySelector('.button-list');

let key = 'queue-films';
queue.classList.add('current-page');
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

btnList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
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
  return (moviesList.innerHTML = `
  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">
  <p>Opss... you haven't added any movies to ${key}</p>
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
