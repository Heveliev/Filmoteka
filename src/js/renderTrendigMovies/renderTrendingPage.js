import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';
import { saveMoviesToLoсalStorage } from '../common/common';
import {
  renderPagination,
  handlerTrendingPagination,
} from '../createNumbPage.js/numbPage';

const refs = {
  paginationBox: document.querySelector('.page-number__list'),
};

setMoviesGenres();

export async function renderTrendingPage() {
  const response = await fetchTrendingMoviesInfo();
  const moviesObj = response.results;

  renderMoviesCards(moviesObj);

  renderPagination(response.page, response.total_pages);
  refs.paginationBox.addEventListener('click', handlerTrendingPagination);

  saveMoviesToLoсalStorage(moviesObj);
}

renderTrendingPage();
