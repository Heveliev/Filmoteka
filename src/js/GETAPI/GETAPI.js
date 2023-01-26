
// key v3 = c939ec4794622751dcf7fba01c4a07e9
// key v4 = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM5ZWM0Nzk0NjIyNzUxZGNmN2ZiYTAxYzRhMDdlOSIsInN1YiI6IjYzY2Q4M2IyMzM2ZTAxMDA4NzlkNjBhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UxkIJFiidUNSRLswrquhURkM47WvN4UyKrWuEXVy2Ks

// https://api.themoviedb.org/3/movie/550?api_key=c939ec4794622751dcf7fba01c4a07e9

import axios from 'axios';
// const axios = require('axios').default;

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c939ec4794622751dcf7fba01c4a07e9';

// async function getDataByName(value, page) {
//     try {
//         const url = `?api_key=${API_KEY}&query=${value}&page=${page}`;
//         const axiosGet = await axios.get(url);
//         return axiosGet.data;
//     } catch (error) {
//         throw new Error(error);
//     }
// }

async function getDataByName(path = '') {
    try {
        // const url = `?api_key=${API_KEY}&query=${value}&page=${page}`;
        const axiosGet = await axios.get(`path?api_key=${API_KEY}`);
        return axiosGet.data;
    } catch (error) {
        throw new Error(error);
    }
}

export {getDataByName};



// const refs = {
//     searchForm: document.querySelector('#search-form'),
    
// };

// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearchByName);

// function onSearchByName(e) {
//     e.preventDefault();
//     newsApiService.searchByName = e.currentTarget.elements.searchByName.value.trim();

//     async function fetchFilmsByName() {
//         try {
//             if (!newsApiService.searchByName) {
//             Notify.failure('Please, enter text in the box!');
//             return;
//             }

//             if (newsApiService.searchByName) {

//             }
//         }
//     }

    
// }



// export {GETAPI};

/**Пример по использованию */
// import { GETAPI } from "./js/GETAPI/GETAPI";

// async function init () {
//     const data = await GETAPI('trending/all/day')
//     console.log(data)
// }


// init()