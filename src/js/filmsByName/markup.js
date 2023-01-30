function createMarkup(arr = []) {
    return arr.reduce((acc, { id, poster_path, title, genre_ids, release_date, vote_average }) => acc +
        `<li class="films__card" data-id=${id}>
        <a href="" class="films__link">
        <div class="films__overflow-wrapper"><img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="film poster" class="films__picture" />
        <div class="films__overlay">
        <p class="films__trailer-text">&#10005 Watch trailer</p>
        <img src="" alt="" class="films__trailer-icon">
      </div>
        </div>    
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