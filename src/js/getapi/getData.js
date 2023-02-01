const axios = require('axios').default;
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c939ec4794622751dcf7fba01c4a07e9';

async function getData (value = "", page = 1){
    try {
        const axiosGet = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${value}&page=${page}`);
        return axiosGet.data;
    } catch (error) {
    throw new Error(error);
    }
};

export {getData};

