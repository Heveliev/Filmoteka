
// key v3 = c939ec4794622751dcf7fba01c4a07e9
// key v4 = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM5ZWM0Nzk0NjIyNzUxZGNmN2ZiYTAxYzRhMDdlOSIsInN1YiI6IjYzY2Q4M2IyMzM2ZTAxMDA4NzlkNjBhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UxkIJFiidUNSRLswrquhURkM47WvN4UyKrWuEXVy2Ks

// https://api.themoviedb.org/3/movie/550?api_key=c939ec4794622751dcf7fba01c4a07e9

const axios = require('axios').default;

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c939ec4794622751dcf7fba01c4a07e9';

async function getDataByName(value = '', page = 1) {
    try {
        const axiosGet = await axios.get(`search/movie?api_key=${API_KEY}&query=${value}&page=${page}`);

        return axiosGet.data;
    } catch (error) {
        throw new Error(error);
    }
}

export {getDataByName};