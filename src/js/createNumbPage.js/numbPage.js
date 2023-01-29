import axios from 'axios';
import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { saveMoviesToLoсalStorage } from '../renderTrendigMovies/renderTrendingPage';
import { refs } from '../refs/refs';

let globalCurrentPage = 0;

export function renderPagination(currentPage, allPages) {
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

export async function handlerTrendingPagination(evt) {
  function renderNewMoviesPage(pageNum) {
    fetchTrendingMoviesInfo(pageNum).then(data => {
      renderMoviesCards(data.results);
      renderPagination(data.page, data.total_pages);
      saveMoviesToLoсalStorage(data.results);
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
