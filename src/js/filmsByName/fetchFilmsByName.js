import { getDataByName } from "../GETAPI/GETAPI";
import { createMarkup } from "./markup";
import { boxGallery, form } from "../refs/refs";


function appendGalleryMarkup(markup) {
    boxGallery.insertAdjacentHTML('beforeend', markup);
}

async function fetchFilmsByName() {
    const data = await getDataByName('search/movie');
    console.log(data);

    const create = createMarkup('search/movie');
    appendGalleryMarkup(create);
    console.log(create);
}
fetchFilmsByName();

