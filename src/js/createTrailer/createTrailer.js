import * as basicLightbox from 'basiclightbox';
import axios from 'axios';
import Notiflix from "notiflix";



const getRefs = () => {
    return {
        galleryItemsOverlay: document.querySelector('.films__list'),
    }
}
const API_KEY = "7752b7319b478a62fea227c419e04b15";
const API_URL = "https://api.themoviedb.org/3/";

const refs = getRefs();
// axios.defaults.baseURL = API_URL;

refs.galleryItemsOverlay.addEventListener('click', onGalleryItemsClick);

function onGalleryItemsClick(e) {
    // console.log(e.target.className);
    if (e.target.className !== 'films__overlay' && e.target.className !== 'films__trailer-text') {
        console.log("Click Error!");
        return
    }
    else {
        e.preventDefault;
        const cardId = (e.target.parentNode.parentNode.parentNode.parentNode.dataset.id);
        openVideoTrailer(cardId);
    }
}

function openVideoTrailer(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;//&language=en-US
    // Notiflix.Loading.pulse();
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0].key + " : Youtube key");
            const id = data.results[0].key;
            // const instance = basicLightbox.create(`<iframe src="https://www.youtube.com/embed/${id}" width="560" height="315" frameborder="0"></iframe>`);

            const instance = basicLightbox.create(`<iframe width="80%" height="80%" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
            console.log("instance");
            instance.show();
        })
        .catch(() => {
            console.log("Catch Error!");;
        });
}


/* <script type="module" src="./js/renderTrendigMovies/renderTrendingPage.js"></script> */
// galleryItemsOverlay: document.querySelector('.films__overlay'),