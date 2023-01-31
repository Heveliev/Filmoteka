import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';
import {
  saveMoviesToLoсalStorage,
  hidePageLoadSpinner,
} from '../common/common';
import {
  renderPagination,
  handlerTrendingPagination,
} from '../createNumbPage.js/numbPage';

const refs = {
  paginationBox: document.querySelector('.page-number__list'),
  moviesList: document.querySelector('.films__list'),
};

setMoviesGenres();

export async function renderTrendingPage() {
  try {
    const data = await fetchTrendingMoviesInfo();
    const moviesObj = data.results;

    renderMoviesCards(moviesObj);

    renderPagination(data.page, data.total_pages);
    refs.paginationBox.addEventListener('click', handlerTrendingPagination);

    saveMoviesToLoсalStorage(moviesObj);
  } catch (error) {
    hidePageLoadSpinner();
    console.log(error.toString());
  } finally {
    hidePageLoadSpinner();
  }
}

renderTrendingPage();
