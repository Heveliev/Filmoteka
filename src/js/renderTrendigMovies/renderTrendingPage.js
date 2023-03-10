import { fetchTrendingMoviesInfo } from '../getapi/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../getapi/setMoviesGenres';
import {
  saveMoviesToLoсalStorage,
  hidePageLoadSpinner,
  setLocalData,
  getLocalData,
  removeLocalData,
} from '../common/common';
import {
  renderPagination,
  handlerTrendingPagination,
} from '../createNumbPage.js/numbPage';
import { handlerSearchPagination } from '../filmsByName/fetchFilmsByName';

const refs = {
  paginationBox: document.querySelector('.page-number__list'),
  moviesList: document.querySelector('.films__list'),
  logo: document.querySelector('.logo-link'),
};

setMoviesGenres();
refs.logo.removeEventListener('click', removeLocalData);
refs.logo.addEventListener('click', removeLocalData);

export async function renderTrendingPage() {
  let data = [];

  if (getLocalData()) {
    data = getLocalData();
  } else {
    try {
      data = await fetchTrendingMoviesInfo();
      saveMoviesToLoсalStorage(data.results);
      setLocalData(data);
    } catch (error) {
      hidePageLoadSpinner();
    }
  }

  renderMoviesCards(data.results);
  renderPagination(data.page, data.total_pages);

  refs.paginationBox.removeEventListener('click', handlerSearchPagination);
  refs.paginationBox.addEventListener('click', handlerTrendingPagination);

  hidePageLoadSpinner();
}

renderTrendingPage();

