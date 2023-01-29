import axios from 'axios';
import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { refs } from '../refs/refs';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';

fetchTrendingMoviesInfo().then(data => {
  renderMoviesCards(data.results);
  pagination(data.page, data.total_pages);
});
let globalCurrentPage = 0;

function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    markup += `<li class="page-number__item">&#129144;</li>`;
    markup += `<li class="page-number__item">1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li class="page-number__item">...</li>`;
  }

  if (currentPage > 3) {
    markup += `<li class="page-number__item">${beforeTwoPage}</li>`;
  }

  if (currentPage > 2) {
    markup += `<li class="page-number__item">${beforePage}</li>`;
  }

  markup += `<li class="page-number__item current_page"><b>${currentPage}</b></li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li class="page-number__item">${afterPage}</li>`;
  }

  if (allPages - 2 > currentPage) {
    markup += `<li class="page-number__item">${afterTwoPage}</li>`;
  }

  if (allPages - 3 > currentPage) {
    markup += `<li class="page-number__item">...</li>`;
  }

  if (allPages > currentPage) {
    markup += `<li class="page-number__item">${allPages}</li>`;
    markup += `<li class="page-number__item">&#129146;</li>`;
  }

  refs.paginationBox.innerHTML = markup;
}

refs.paginationBox.addEventListener('click', handlerPagination);

async function handlerPagination(evt) {
  if (evt.target.nodeName !== 'LI') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === '🡸') {
    fetchTrendingMoviesInfo((globalCurrentPage -= 1)).then(data => {
      renderMoviesCards(data.results);
      pagination(data.page, data.total_pages);
    });
    return;
  }
  if (evt.target.textContent === '🡺') {
    fetchTrendingMoviesInfo((globalCurrentPage += 1)).then(data => {
      renderMoviesCards(data.results);
      pagination(data.page, data.total_pages);
    });
    return;
  }
  const page = evt.target.textContent;
  fetchTrendingMoviesInfo(page).then(data => {
    renderMoviesCards(data.results);
    pagination(data.page, data.total_pages);
  });
}


// paginationBox: document.querySelector('.page-number__list'),