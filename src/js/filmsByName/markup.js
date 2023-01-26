

function createMarkup(arr = []) {
    return arr.reduce((acc, { id, poster_path, title, genre_ids, release_date, popularity }) => acc + `<div class = "js-boxGallery">
    <div class = "card" data-id = "${id}">
    <img src="${poster_path}" alt="${title}">
        <div>
            <h2>${title}</h2>
            <p>${genre_ids}</p>
            <p>${release_date}</p>
            <p>${popularity}</p>
            </div>
    </div>
</div>`, '')
}

export {createMarkup};