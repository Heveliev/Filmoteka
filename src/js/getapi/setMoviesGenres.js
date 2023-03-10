
import { fetchMoviesGenres } from './fetchTrendingMoviesInfo';

export async function setMoviesGenres() {
  const GENRES_KEY = 'saved-genres';
  let genres = {};

  if (localStorage.getItem(GENRES_KEY)) {
    return;
  } else {
    const response = await fetchMoviesGenres();

    for (const genre of response.genres) {
      const { id, name } = genre;
      genres[id] = name;
    }

    localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
  }
}
