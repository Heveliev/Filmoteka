

const watched = document.querySelector('.watched-films');
const queue = document.querySelector('.queue-films');
const btnList = document.querySelector('.button-list');
const librList = document.querySelector('.films__list-libr')


let key = 'queue-films';
queue.classList.add('current-page');
const resp = localStorage.getItem(key);
const parseResp = JSON.parse(resp);

if(!parseResp.length){
  fooError(key);
  
} else{try {
  renderMoviesCardsLibr(parseResp);
} catch (error) {
  fooError(key);
}}


btnList.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  e.preventDefault();
  key = e.target.id;
  console.dir(key);
  selectCurrentPage(key);
  const resp = localStorage.getItem(key);
  const parseResp = JSON.parse(resp);
if(!parseResp.length){
  fooError(key);
} else{
  try {
    renderMoviesCardsLibr(parseResp)
  } catch (error) {
    fooError(key);
  }
}

}

function fooError(key) {
  return (librList.innerHTML = `
  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">
  <p>Opss... you haven't added any movies to ${key}</p>
`);
}

function selectCurrentPage(id) {
  if (id === watched.id) {
    queue.classList.remove('current-page');
    watched.classList.add('current-page');
    queue.removeAttribute('disabled');
    watched.setAttribute('disabled', 'disabled');
  }

  if (id === queue.id) {
    watched.classList.remove('current-page');
    queue.classList.add('current-page');
    watched.removeAttribute('disabled');
    queue.setAttribute('disabled', 'disabled');
  }
}


function renderMoviesCardsLibr(moviesObjects) {
  return (librList.innerHTML = moviesObjects
    .map(
      movie => `<li class="films__card" id=${movie.id}> <div class="films__link">
        <div class="films__overflow-wrapper"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"  alt="film poster" class="films__picture" />
        <div class="films__overlay">
        <p class="films__trailer-text">Watch trailer</p>
        <img src="" alt="" class="films__trailer-icon">
      </div>
        </div>
          <p class="films__title">${movie.title}</p>
          <div class="films__details">
            <p class="films__genres film-font-style">${createMovieDetalisMarkup(
              movie
            )}</p>
            <span class="films__rate">${movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
      </li>`
    )
    .join(''));
}



function createMovieDetalisMarkup(movie) {
  // console.log(movie.id);

  const savedGenres = localStorage.getItem('saved-genres');
  const genres = JSON.parse(savedGenres);

  let movieGenres = [];
  const movieReleaseYear = movie.release_date.slice(0, 4);

  for (let i = 0; i < movie.genre_ids.length; i++) {
    movieGenres.push(genres[movie.genre_ids[i]]);
  }

  let moviesGenresMarkup = '';

  if (movieGenres.length > 2) {
    moviesGenresMarkup = movieGenres.splice(0, 2).join(', ') + ', Other';
  } else {
    moviesGenresMarkup = movieGenres.join(', ');
  }

  if (movie.genre_ids.length === 0 && !movie.release_date) {
    return '';
  }

  if (movie.genre_ids.length === 0 && movie.release_date) {
    return movieReleaseYear;
  }

  if (movie.genre_ids.length !== 0 && !movie.release_date) {
    return moviesGenresMarkup;
  }

  return moviesGenresMarkup + ' | ' + movieReleaseYear;
}


function createDataToRender(data, pageNum = 1) {
  const dataLength = data.length;
  const resultsArr = [];

  for (let i = (pageNum - 1) * 20; i < (pageNum - 1) * 20 + 20; i++) {
    if (!data[i]) {
      continue;
    }
    resultsArr.push(data[i]);
  }

  const objToRender = {
    results: resultsArr,
    totalPages: Math.ceil(dataLength / 20),
    page: pageNum,
  };

  return objToRender;
}

function handlerLibraryPagination(evt) {
  function renderNewMoviesPage(pageNum) {
    showLoadSpinner();
    const data = createDataToRender(parseResp, pageNum);
    renderMoviesCards(data.results);
    hideLoadSpinner();
    scrollToTop();
    renderLibraryPagination(data.page, data.totalPages);
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

function renderLibraryPagination(currentPage, allPages) {
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

  paginationBox.innerHTML = markup;
}
