import {fetchMoviesGenres} from '../getapi/fetchTrendingMoviesInfo';
console.log(fetchMoviesGenres());
let genres = {};
const GENRES_KEY = 'saved-genres';
async function setMoviesGenres() {
    const response = await fetchMoviesGenres();
  
    for (const genre of response.genres) {
      const { id, name } = genre;
      genres[id] = name;
    }
  
    localStorage.setItem(GENRES_KEY, JSON.stringify(genres));
  };

  export{ genres, setMoviesGenres};