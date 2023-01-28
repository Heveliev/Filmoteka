import { refs } from '../refs/refs';

export function renderMoviesCards(moviesObjects) {
  return (refs.moviesList.innerHTML = moviesObjects
    .map(
      movie => `<li class="films__card">
        <a href="" class="films__link">
        <div class="films__overflow-wrapper"><img src="https://image.tmdb.org/t/p/w500/${movie.poster_path
        }"  alt="film poster" class="films__picture" /></div>
          <p class="films__title">${movie.title}</p>
          <div class="films__details">
            <p class="films__genres film-font-style">${createMovieDetalisMarkup(
          movie
        )}</p>
            <span class="films__rate">${movie.vote_average.toFixed(1)}</span>
          </div>
        </a>
      </li>`
    )
    .join(''));
}

export function createMovieDetalisMarkup(movie) {
  const savedGenres = localStorage.getItem('saved-genres');
  const genres = JSON.parse(savedGenres);

  let movieGenres = [];
  const movieReleaseYear = movie.release_date.slice(0, 4);

  if (!movie.genre_ids.length) {
    return '';
  }

  for (let i = 0; i < movie.genre_ids.length; i++) {
    movieGenres.push(genres[movie.genre_ids[i]]);
  }

  if (movieGenres.length > 2) {
    return (
      movieGenres.splice(0, 2).join(', ') + ', Other | ' + movieReleaseYear
    );
  }

  return movieGenres.join(', ') + ' | ' + movieReleaseYear;
}
