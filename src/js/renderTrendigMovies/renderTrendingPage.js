import {
  fetchMoviesGenres,
  fetchTrendingMoviesInfo,
} from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';

const MOVIES_KEY = 'saved-movies';

let currentPage = 1;

setMoviesGenres();

export async function renderTrendingPage() {
  const response = await fetchTrendingMoviesInfo(currentPage);
  const moviesObj = response.results;

  renderMoviesCards(moviesObj);

  localStorage.setItem(MOVIES_KEY, JSON.stringify(moviesObj));
}

renderTrendingPage();
