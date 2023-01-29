function createMarkup(arr = []) {
    return arr.reduce((acc, {id, poster_path, title, genre_ids, release_date, vote_average}) => acc + `<li class="films__card" data-id = ${id}>
        <a href="" class="films__link">
            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film poster" class="films__picture" />
            <p class="films__title">${title}</p>
            <div class="films__details">
                <p class="films__genres film-font-style">${genre_ids}</p>
                <p class="films__slash film-font-style">|</p>
                <p class="films__year film-font-style">${release_date}</p>
                <p class="films__rate">${vote_average}</p>
            </div>
        </a>
    </li>`, '')
}

export { createMarkup };











// export { boxGallery, form, failureMassege, moviesList};