!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o);var a=o("cqmI4");function r(t){(t.target.matches(".modal__close-btn")||t.target.matches(".modal__close-btn-icon")||t.target.matches(".modal__close-btn-icon-svg")||t.target.matches(".backdrop-modal-film")||"Escape"===t.code)&&(a.refs.backdrop.classList.add("is-hidden"),document.body.style.overflow="auto",a.refs.filmRendering.innerHTML="")}function d(t){var e=JSON.parse(localStorage.getItem("saved-genres"));return t.map((function(t){return e[t]})).join(", ")}function i(t){return(JSON.parse(localStorage.getItem("watched-films"))||[]).find((function(e){return e.id===t.id}))?"REMOVE FROM WATCHED":"ADD TO WATCHED"}function l(t){return(JSON.parse(localStorage.getItem("queue-films"))||[]).find((function(e){return e.id===t.id}))?"REMOVE FROM QUEUE":"ADD TO QUEUE"}a.refs.filmCard.addEventListener("click",(function(t){a.refs.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden";var e=t.target.closest("li").id,n=JSON.parse(localStorage.getItem("saved-movies")).find((function(t){return t.id===Number(e)}));o=n,a.refs.filmRendering.innerHTML='\n        <div class="modal-img-wrapper">\n          <img src="https://image.tmdb.org/t/p/w500/'.concat(o.poster_path,'" alt="film-poster" />\n        </div>\n        <div class="modal__wrapper">\n          <h2 class="modal__film-title">').concat(o.title,'</h2>\n          <table class="modal__table">\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Vote / Votes</td>\n              <td>\n                <div class="modal__vote-wrapper">\n                  <p class="modal__vote">').concat(o.vote_average,'</p>\n                  <p>/</p>\n                  <p class="modal__votes">').concat(o.vote_count,'</p>\n                </div>\n              </td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Popularity</td>\n              <td>').concat(Math.round(10*o.popularity)/10,'</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Original Title</td>\n              <td>').concat(o.original_title,'</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Genre</td>\n              <td>').concat(d(o.genre_ids),'</td>\n            </tr>\n          </table>\n          <div>\n            <h3 class="modal__about-title">About</h3>\n            <p class="modal__about-film">\n              ').concat(o.overview,'\n            </p>\n          </div>\n          <div class="modal__buttons">\n            <button class="modal-btn btn-watched">').concat(i(o),'</button>\n            <button class="modal-btn btn-queue">').concat(l(o),"</button>\n          </div>\n        </div>"),d(n.genre_ids),function(t){var e=document.querySelector(".btn-watched"),n=document.querySelector(".btn-queue"),o="watched-films",a="queue-films";function r(){var n=JSON.parse(localStorage.getItem("watched-films"))||[];n.find((function(e){return e.id===t.id}))?n=n.filter((function(e){return e.id!==t.id})):n.push(t),localStorage.setItem(o,JSON.stringify(n)),e.textContent=i(t)}function d(){var e=JSON.parse(localStorage.getItem("queue-films"))||[];e.find((function(e){return e.id===t.id}))?e=e.filter((function(e){return e.id!==t.id})):e.push(t),localStorage.setItem(a,JSON.stringify(e)),n.textContent=l(t)}e.addEventListener("click",r),n.addEventListener("click",d)}(n),document.addEventListener("click",r),window.addEventListener("keydown",r);var o}))}();
//# sourceMappingURL=index.00e53d47.js.map
