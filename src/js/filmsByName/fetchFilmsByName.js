import { getData } from "../GETAPI/GETAPI";
import { createMarkup } from "./markup";
import { boxGallery, form, failureMassege } from "../refs/refs";

form.addEventListener('submit', onSearchByName)

function appendGalleryMarkup(markup) {
    // boxGallery.insertAdjacentHTML('beforeend', markup);
    boxGallery.innerHTML = markup;
}

async function fetchFilmsByName() {
    const { results }  = await getData('cat', 1);
    console.log(results);

    const create = createMarkup(results);
    appendGalleryMarkup(create);
    // console.log(create);

}
fetchFilmsByName();


async function onSearchByName(e) {
    e.preventDefault();
    const value = e.target.query.value.trim();
    // console.log(value);

    if (!value) {
        return;
    }

    const { results } = await getData(value, page = 1);

    if (!results.length) {
        // failureMassege.innerHTML = 'Search result not successful. Enter the correct movie name and search.';
        // setTimeout(() => {
        //     failureMassege.innerHTML = ''
        // }, 1000);
        console.log("error");
        return;
    }

    clearnMarkup();
    const create = createMarkup(results);
    appendGalleryMarkup(create);
}

function clearnMarkup() {
    boxGallery.innerHTML = '';
}

export {fetchFilmsByName, appendGalleryMarkup, onSearchByName, clearnMarkup};
