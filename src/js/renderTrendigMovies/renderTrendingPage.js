import { fetchTrendingMoviesInfo } from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { setMoviesGenres } from '../GETAPI/setMoviesGenres';
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
      console.log(error.toString());
    }
  }

  renderMoviesCards(data.results);
  renderPagination(data.page, data.total_pages);

  refs.paginationBox.removeEventListener('click', handlerSearchPagination);
  refs.paginationBox.addEventListener('click', handlerTrendingPagination);

  hidePageLoadSpinner();
}

renderTrendingPage();

// if (getLocalData()) {
//   data = getLocalData();

//   saveMoviesToLoсalStorage(data.results);
//   setLocalData(data);
//   hidePageLoadSpinner();
// } else {
//   renderTrendingPage();
// }

// export async function renderTrendingPage() {
//   try {
//     const data = await fetchTrendingMoviesInfo();

//     renderMoviesCards(data.results);
//     renderPagination(data.page, data.total_pages);
//     refs.paginationBox.removeEventListener('click', handlerSearchPagination);
//     refs.paginationBox.addEventListener('click', handlerTrendingPagination);

//     saveMoviesToLoсalStorage(data.results);
//     setLocalData(data);
//   } catch (error) {
//     hidePageLoadSpinner();
//     console.log(error.toString());
//   } finally {
//     hidePageLoadSpinner();
//   }
// }
console.log('hi')