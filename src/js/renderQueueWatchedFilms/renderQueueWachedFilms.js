

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