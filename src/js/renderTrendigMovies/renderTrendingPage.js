import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';
import {
  renderPagination,
  handlerTrendingPagination,
} from '../createNumbPage.js/numbPage';
import { refs } from '../refs/refs';

export function saveMoviesToLoсalStorage(movies) {
  const MOVIES_KEY = 'saved-movies';
  localStorage.setItem(MOVIES_KEY, JSON.stringify(movies));
}

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
