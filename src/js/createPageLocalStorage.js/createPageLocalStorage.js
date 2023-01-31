import {q} from './fetchpars'
import { watch } from './fetchpars';
// import '../renderQueueWatchedFilms/renderQueueWachedFilms';
// import { renderMoviesCards } from '../createMoviesMarkup/renderMoviesCards';
// import {renderPagination, handlerTrendingPagination} from '../createNumbPage.js/numbPage';

const list = document.querySelector('.films__list-lib');
const paginationBox = document.querySelector('.page-number__list');

paginationBox.addEventListener('click', handlerTrendingPagination);
const local = JSON.parse(localStorage.getItem('queue-films'));

async function handlerTrendingPagination(evt) {
  function renderNewMoviesPageQ(pageNum) {
    q.forEach(data => {
      renderMoviesCards(data.results);
      renderPagination(data.page, data.total_pages);
    });
  }

  // function watchLocal() {
  //   q.length -
  // }

  function renderNewMoviesPage(evt) {
    renderMoviesCards(local);
    renderPagination(local.length / 20);
  }
  // renderNewMoviesPage()
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

//   handlerTrendingPagination();

function renderMoviesCards(moviesObjects) {
  return (list.innerHTML = moviesObjects
  .map(movie => `<li id='${movie.id}' class="films__card">
            <div class="films__overflow-wrapper">
              <img src="${checkPosterImg(
                movie.poster_path
              )}"  alt="film poster" class="films__picture" />
            </div>
            <p class="films__title">${movie.title}</p>
            <div class="films__details">
              <p class="films__genres film-font-style">${createMovieDetalisMarkup(
                movie
              )}</p>
              <span class="films__rate">${movie.vote_average.toFixed(1)}</span>
            </div>
          </li>`
      )
      .join(''));
  }

  if (movie.genre_ids.length === 0 && movie.release_date) {
      return movieReleaseYear;
    }
  
    if (movie.genre_ids.length !== 0 && !movie.release_date) {
      return moviesGenresMarkup;
    }
  
    return moviesGenresMarkup + ' | ' + movieReleaseYear;
  
  function checkPosterImg(posterPath) {
    if (!posterPath) {
      return 'https://i.postimg.cc/KYV47028/no-poster-available.jpg';
    } else {
      return `https://image.tmdb.org/t/p/w500/${posterPath}`;
    }
  }

  function renderPagination(currentPage, allPages) {
    let markup = '';
    let beforeTwoPage = currentPage - 2;
    let beforePage = currentPage - 1;
    let afterPage = currentPage + 1;
    let afterTwoPage = currentPage + 2;
    globalCurrentPage = currentPage;
  
    if (currentPage > 1) {
      markup += `<li class="page-number__item">&#129144;</li>`;
      markup += `<li class="page-number__item">1</li>`;
    }
  
    if (currentPage > 4) {
      markup += `<li class="page-number__item">...</li>`;
    }
  
    if (currentPage > 3) {
      markup += `<li class="page-number__item">${beforeTwoPage}</li>`;
    }
  
    if (currentPage > 2) {
      markup += `<li class="page-number__item">${beforePage}</li>`;
    }
  
    markup += `<li class="page-number__item current_page"><b>${currentPage}</b></li>`;
  
    if (allPages - 1 > currentPage) {
      markup += `<li class="page-number__item">${afterPage}</li>`;
    }
  
    if (allPages - 2 > currentPage) {
      markup += `<li class="page-number__item">${afterTwoPage}</li>`;
    }
  
    if (allPages - 3 > currentPage) {
      markup += `<li class="page-number__item">...</li>`;
    }
  
    if (allPages > currentPage) {
      markup += `<li class="page-number__item">${allPages}</li>`;
      markup += `<li class="page-number__item">&#129146;</li>`;
    }
  
   paginationBox.innerHTML = markup;
  }

// function renderNewMoviesPageWatch(pageNum) {
//   watch.forEach(data => {
//     renderMoviesCards(data.results);
//     renderPagination(data.page, data.total_pages);
//   });
// }

// let notesOnPage;

// function totalPage(totalValue) {
//   notesOnPage = 20;
//   let countOfItems = Math.ceil(q.length / notesOnPage);
// }

// function allPage(value) {
//   notesOnPage = 20;
//   let countOfItems = Math.ceil(watch.length / notesOnPage);


//   1 стр - 0 - 20
//   2 стр - 20 - 40
//   3 стр - 40 - 60

// let start = (globalCurrentPage - 1) * notesOnPage;
// let end = start + notesOnPage;

// let notes = q.slice(start, end);
// let notesWatch = watch.splice(start, end);
// console.log(notes);
// console.log(notesWatch);