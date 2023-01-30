import {q} from './fetchpars'
import { watch } from './fetchpars';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import {renderPagination, handlerTrendingPagination} from '../createNumbPage.js/numbPage';

let globalCurrentPage = 0;

async function handlerTrendingPagination(evt) {
  function renderNewMoviesPageQ(pageNum) {
    q.forEach(data => {
      renderMoviesCards(data.results);
      renderPagination(data.page, data.total_pages);
    });
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

function renderNewMoviesPageWatch(pageNum) {
  watch.forEach(data => {
    renderMoviesCards(data.results);
    renderPagination(data.page, data.total_pages);
  });
}

let notesOnPage;

function totalPage(totalValue) {
  notesOnPage = 20;
  let countOfItems = Math.ceil(q.length / notesOnPage);
}

function allPage(value) {
  notesOnPage = 20;
  let countOfItems = Math.ceil(watch.length / notesOnPage);
}

//   1 стр - 0 - 20
//   2 стр - 20 - 40
//   3 стр - 40 - 60

let start = (globalCurrentPage - 1) * notesOnPage;
let end = start + notesOnPage;

let notes = q.slice(start, end);
let notesWatch = watch.splice(start, end);
// console.log(notes);
// console.log(notesWatch);