import { getData } from "../getapi/getData";
import { refs } from "../refs/refs";
import { renderMoviesCards } from "../createMoviesMarkup/renderMoviesCards";
import { renderTrendingPage, saveMoviesToLoсalStorage } from "../renderTrendigMovies/renderTrendingPage";
import { renderPagination } from "../createNumbPage.js/numbPage"
// import { renderPagination } from "../createNumbPage.js/numbPage"

refs.form.addEventListener('submit', onSearchByName)
let value;

async function onSearchByName(e) {
    e.preventDefault();
    value = e.target.query.value.trim();

    if (!value) {
        return;
    }

    const data = await getData(value);
        
    if (!data.results.length) {
        refs.failureMassege.innerHTML = 'Search result not successful. Enter the correct movie name and try again.';
        setTimeout(() => {
            refs.failureMassege.innerHTML = ''
        }, 2000);
        renderTrendingPage();
        return;
    }

    renderMoviesCards(data.results);

    renderPagination(data.page, data.total_pages);
    refs.paginationBox.addEventListener('click', handlerTrendingPagination);

    localStorage.setItem('saved-movies', JSON.stringify(data.results));
}


async function handlerTrendingPagination(evt) {
    function renderNewMoviesPage(pageNum) {
        getData(value, pageNum).then(data => {
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



export {onSearchByName};
