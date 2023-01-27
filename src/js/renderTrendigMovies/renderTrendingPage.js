import {
  fetchTrendingMoviesInfo,
} from '../GETAPI/fetchTrendingMoviesInfo';
import { renderMovieDetalis } from './renderMovieDetails';
import { refs } from '../refs/refs';
import { setMoviesGenres,} from '../genres/genres';

const GENRES_KEY = 'saved-genres';
const MOVIES_KEY = 'saved-movies';

let genres = {};
let currentPage = 1;

if (localStorage.getItem(GENRES_KEY)) {
  const savedGenres = localStorage.getItem(GENRES_KEY);

  genres = JSON.parse(savedGenres);
} else {
  setMoviesGenres();
}

async function renderTrendingPage() {
  const response = await fetchTrendingMoviesInfo(currentPage);
  const moviesObj = response.results;

  refs.moviesList.innerHTML = moviesObj
    .map(
      movie => `<li class="films__card">
        <a href="" class="films__link">
          <img <img src="https://image.tmdb.org/t/p/w500/${
            movie.poster_path
          }"  alt="film poster" class="films__picture" />
          <p class="films__title">${movie.title}</p>
          <div class="films__details">
            <p class="films__genres film-font-style">${renderMovieDetalis(
              movie,
              genres
            )}</p>
            <span class="films__rate">${movie.vote_average.toFixed(1)}</span>
          </div>
        </a>
      </li>`
    )
    .join('');

  localStorage.setItem(MOVIES_KEY, JSON.stringify(moviesObj));
}

// function ganres
setMoviesGenres();

renderTrendingPage();
