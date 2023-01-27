import { getData } from "../GETAPI/GETAPI";

async function fetchFilmsByName() {
    const { results }  = await getData('cat', 1);
    console.log(results);
}
fetchFilmsByName();

export {fetchFilmsByName};