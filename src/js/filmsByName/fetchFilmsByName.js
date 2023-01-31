import { getData } from '../getapi/getData';
import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
import { renderTrendingPage } from '../renderTrendigMovies/renderTrendingPage';

const refs = {
  failureMassege: document.querySelector('.js-failure-massege'),
  form: document.querySelector('.header-form'),
};

refs.form.addEventListener('submit', onSearchByName);

async function onSearchByName(e) {
  e.preventDefault();
  const value = e.target.query.value.trim();

  if (!value) {
    return;
  }

  const { results } = await getData(value, 1);

  if (!results.length) {
    refs.failureMassege.innerHTML =
      'Search result not successful. Enter the correct movie name and search.';
    setTimeout(() => {
      refs.failureMassege.innerHTML = '';
    }, 2000);
    renderTrendingPage();
    return;
  }

  renderMoviesCards(results);
  localStorage.setItem('saved-movies', JSON.stringify(results));
}

export { fetchFilmsByName, onSearchByName };
