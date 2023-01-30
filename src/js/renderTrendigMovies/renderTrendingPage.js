import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';
import { saveMoviesToLoсalStorage, scrollToTop } from '../common/common';
import {
  renderPagination,
  handlerTrendingPagination,
} from '../createNumbPage.js/numbPage';
import { refs } from '../refs/refs';

setMoviesGenres();

export async function renderTrendingPage() {
  refs.loader.style.display = 'none';

  const response = await fetchTrendingMoviesInfo();
  const moviesObj = response.results;

  renderMoviesCards(moviesObj);

  renderPagination(response.page, response.total_pages);
  refs.paginationBox.addEventListener('click', handlerTrendingPagination);

  saveMoviesToLoсalStorage(moviesObj);
  // scrollToTop();
}

renderTrendingPage();
