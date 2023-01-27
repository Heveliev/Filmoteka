import {fetchMoviesGenres} from '../getapi/fetchTrendingMoviesInfo';
export async function setMoviesGenres() {
    const response = await fetchMoviesGenres();
  
    for (const genre of response.genres) {
      const { id, name } = genre;
      genres[id] = name;
    }
  
    localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
  };