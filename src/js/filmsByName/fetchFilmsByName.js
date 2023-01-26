import { getDataByName } from "../GETAPI/GETAPI"

async function fetchFilmsByName() {
    const data = await getDataByName('search/movie');
    console.log(data);
}
fetchFilmsByName();