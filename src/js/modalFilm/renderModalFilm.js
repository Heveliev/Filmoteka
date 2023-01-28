const filmCard = document.querySelector(".films__list");
const backdrop = document.querySelector(".backdrop-modal-film");
const closeBtn = document.querySelector(".modal__close-btn");
const filmRendering = document.querySelector(".film-render-markup");
const modalContainer = document.querySelector(".modal__container");


filmCard.addEventListener("click", openModalFilm);
closeBtn.addEventListener("click", closeModalFilm);

function openModalFilm(evt) {
    backdrop.classList.remove("is-hidden");
    const filmId = evt.target.closest("li").id;
    const filmArray = JSON.parse(localStorage.getItem("saved-movies"));
    const filmOpened = filmArray.find(film => film.id === Number(filmId));

    console.log(filmOpened);

    renderModalFilm(filmOpened);
    findGenres(filmOpened.genre_ids);
}

function closeModalFilm() {
    backdrop.classList.add("is-hidden");
}

function renderModalFilm(film) {
    return (filmRendering.innerHTML = `
        <div class="modal-img-wrapper">
          <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="film-poster" />
        </div>
        <div class="modal__wrapper">
          <h2 class="modal__film-title">${film.title}</h2>
          <table class="modal__table">
            <tr class="modal__table-row">
              <td class="modal__first-column">Vote / Votes</td>
              <td>
                <div class="modal__vote-wrapper">
                  <p class="modal__vote">${film.vote_average}</p>
                  <p>/</p>
                  <p class="modal__votes">${film.vote_count}</p>
                </div>
              </td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Popularity</td>
              <td>${Math.round(film.popularity)}</td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Original Title</td>
              <td>${film.original_title}</td>
            </tr>
            <tr class="modal__table-row">
              <td class="modal__first-column">Genre</td>
              <td>${findGenres(film.genre_ids)}</td>
            </tr>
          </table>
          <div>
            <h3 class="modal__about-title">About</h3>
            <p class="modal__about-film">
              ${film.overview}
            </p>
          </div>
          <div class="modal__buttons">
            <button class="modal-btn btn-watched">ADD TO WATCHED</button>
            <button class="modal-btn btn-queue">ADD TO QUEUE</button>
          </div>
        </div>`
    )
}

function findGenres(filmGenreIds) {
    const savedGenres = JSON.parse(localStorage.getItem('saved-genres'));
    return textGenres = filmGenreIds.map(genreId => savedGenres[genreId]).join(`, `);
}