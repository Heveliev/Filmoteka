import { getData } from "../getapi/getData";
import { createMarkup } from "./markup";
import { refs } from "../refs/refs";

refs.form.addEventListener('submit', onSearchByName)

function appendGalleryMarkup(markup) {
    // refs.boxGallery.insertAdjacentHTML('beforeend', markup);
    refs.boxGallery.innerHTML = markup;
}

async function fetchFilmsByName() {
    const { results }  = await getData('cat', 1);
    // console.log(results);

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
        // refs.failureMassege.innerHTML = 'Search result not successful. Enter the correct movie name and search.';
        // setTimeout(() => {
        //     refs.failureMassege.innerHTML = ''
        // }, 1000);
        console.log("error");
        return;
    }

    // clearnMarkup();
    const create = createMarkup(results);
    appendGalleryMarkup(create);
}

function clearnMarkup() {
    refs.boxGallery.innerHTML = '';
}

export {fetchFilmsByName, appendGalleryMarkup, onSearchByName, clearnMarkup};
