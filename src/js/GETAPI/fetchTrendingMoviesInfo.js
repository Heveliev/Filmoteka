import axios from 'axios';

const API_KEY = 'c939ec4794622751dcf7fba01c4a07e9';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMoviesInfo(currentPage = 1) {
  const searchOptions = 'trending/movie/week';
  const url = `${BASE_URL}${searchOptions}?api_key=${API_KEY}&page=${currentPage}`;
try {
  const trend = await axios.get(url);
  return trend.data;
} catch (error) {
  throw new Error(error);
}

}

export async function fetchMoviesGenres() {
  const searchOptions = 'genre/movie/list';
  const url = `${BASE_URL}${searchOptions}?api_key=${API_KEY}&language=en-US`;
try {
 const genr = await axios.get(url);
 return genr.data
} catch (error) {
  throw new Error(error);
}

}
