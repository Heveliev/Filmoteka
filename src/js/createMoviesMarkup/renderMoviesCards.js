import { refs } from '../refs/refs';

export function renderMoviesCards(moviesObjects) {
  return (refs.moviesList.innerHTML = moviesObjects
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

export function createMovieDetalisMarkup(movie) {
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

function checkPosterImg(posterPath) {
  if (!posterPath) {
    return 'https://i.postimg.cc/KYV47028/no-poster-available.jpg';
  } else {
    return `https://image.tmdb.org/t/p/w500/${posterPath}`;
  }
}
