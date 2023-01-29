import { getData } from "../getapi/getData";
import { refs } from "../refs/refs";
import { renderMoviesCards } from "../createMoviesMarkup/renderMoviesCards";
import { renderTrendingPage } from "../renderTrendigMovies/renderTrendingPage";

refs.form.addEventListener('submit', onSearchByName)


async function onSearchByName(e) {
    e.preventDefault();
    const value = e.target.query.value.trim();

    if (!value) {
        return;
    }

    const { results } = await getData(value, page = 1);

    if (!results.length) {
        refs.failureMassege.innerHTML = 'Search result not successful. Enter the correct movie name and search.';
        setTimeout(() => {
            refs.failureMassege.innerHTML = ''
        }, 2000);
        renderTrendingPage();
        return;
    }

    renderMoviesCards(results);
    localStorage.setItem('saved-movies', JSON.stringify(results));
}




export {fetchFilmsByName, onSearchByName};
// form: document.querySelector(".header-form"),
//   failureMassege: document.querySelector(".js-failure-massege"),
//   paginationBox: document.querySelector('.page-number__list'),