import { getData } from "../getapi/getData";
import { renderMoviesCards } from "../createMoviesMarkup/renderMoviesCards";
import { renderTrendingPage } from "../renderTrendigMovies/renderTrendingPage";
import { saveMoviesToLoсalStorage} from "../common/common";
// import { renderPagination } from "../createNumbPage.js/numbPage";
const refs = {
    form: document.querySelector('.header-form'),
    failureMassege: document.querySelector('.js-failure-massege'),
    paginationBox: document.querySelector('.page-number__list'),
  };

refs.form.addEventListener('submit', onSearchByName)
let value;
let globalCurrentPage = 0;

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


function renderPagination(currentPage, allPages) {
    let markup = '';
    let beforeTwoPage = currentPage - 2;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    let afterTwoPage = currentPage + 2;
    globalCurrentPage = currentPage;
  
    if (currentPage > 1) {
      markup += `<li class="page-number__item arrows">&#129144;</li>`;
      markup += `<li class="page-number__item number">1</li>`;
    }
  
    if (currentPage > 4) {
      markup += `<li class="page-number__item">...</li>`;
    }
  
    if (currentPage > 3) {
      markup += `<li class="page-number__item number">${beforeTwoPage}</li>`;
    }
  
    if (currentPage > 2) {
      markup += `<li class="page-number__item number">${beforePage}</li>`;
    }
  
    markup += `<li class="page-number__item current_page number"><b>${currentPage}</b></li>`;
  
    if (allPages - 1 > currentPage) {
      markup += `<li class="page-number__item number">${afterPage}</li>`;
    }
  
    if (allPages - 2 > currentPage) {
      markup += `<li class="page-number__item number">${afterTwoPage}</li>`;
    }
  
    if (allPages - 3 > currentPage) {
      markup += `<li class="page-number__item">...</li>`;
    }
  
    if (allPages > currentPage) {
      markup += `<li class="page-number__item number">${allPages}</li>`;
      markup += `<li class="page-number__item arrows">&#129146;</li>`;
    }
  
    refs.paginationBox.innerHTML = markup;
  }

  export {onSearchByName};