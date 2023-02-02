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
  const resp = localStorage.getItem(key);
 parseResp = JSON.parse(resp);
if (!parseResp.length) {
  clearPagination();
  fooError(key);
  hidePageLoadSpinner();
} else {
  try {
    const data = createDataToRender(parseResp);


    renderMoviesCards(data.results);
    renderLibraryPagination(data.page, data.totalPages);

    paginationBox.removeEventListener('click', handlerLibraryPagination);
    paginationBox.addEventListener('click', handlerLibraryPagination);

    hidePageLoadSpinner();



  } catch (error) {
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
    clearPagination();
    fooError(key);
  } else {
    try {
      const data = createDataToRender(parseResp);
      renderMoviesCards(data.results);
      renderLibraryPagination(data.page, data.totalPages);

      paginationBox.removeEventListener('click', handlerLibraryPagination);
      paginationBox.addEventListener('click', handlerLibraryPagination);

      hidePageLoadSpinner();
    } catch (error) {
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

function createDataToRender(data, pageNum = 1) {
  const dataLength = data.length;
  const resultsArr = [];

  for (let i = (pageNum - 1) * 20; i < (pageNum - 1) * 20 + 20; i++) {
    if (!data[i]) {
      continue;
    }
    resultsArr.push(data[i]);
  }

  const objToRender = {
    results: resultsArr,
    totalPages: Math.ceil(dataLength / 20),
    page: pageNum,
  };

  return objToRender;
}

function handlerLibraryPagination(evt) {
  function renderNewMoviesPage(pageNum) {
    showLoadSpinner();
    const data = createDataToRender(parseResp, pageNum);
    renderMoviesCards(data.results);
    hideLoadSpinner();
    scrollToTop();
    renderLibraryPagination(data.page, data.total_pages);

  }
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === '🡸') {
    renderNewMoviesPage((globalCurrentPage -= 1));
    return;
  }
  if (evt.target.textContent === '🡺') {
    renderNewMoviesPage((globalCurrentPage += 1));
    return;
  }
  const page = evt.target.textContent;
  renderNewMoviesPage(page);
}

function renderLibraryPagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    markup += `<li class="page-number__item arrows">&#129144;</li>`;
    markup += `<li class="page-number__item number">1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li class="page-number__item">...</li>`;
  }

  if (currentPage > 3) {
    markup += `<li class="page-number__item number">${beforeTwoPage}</li>`;
  }

  if (currentPage > 2) {
    markup += `<li class="page-number__item number">${beforePage}</li>`;
  }

  markup += `<li class="page-number__item current_page number"><b>${currentPage}</b></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li class="page-number__item number">${afterPage}</li>`;
  }

  if (allPages - 2 > currentPage) {
    markup += `<li class="page-number__item number">${afterTwoPage}</li>`;
  }

  if (allPages - 3 > currentPage) {
    markup += `<li class="page-number__item">...</li>`;
  }

  if (allPages > currentPage) {
    markup += `<li class="page-number__item number">${allPages}</li>`;
    markup += `<li class="page-number__item arrows">&#129146;</li>`;
  }

  paginationBox.innerHTML = markup;
}
