var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},l=t.parcelRequired7c6;null==l&&((l=function(t){if(t in e)return e[t].exports;if(t in n){var l=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,l.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequired7c6=l);var a=l("3ILHO");function i(t){const e=JSON.parse(localStorage.getItem("saved-genres"));return t.map((t=>e[t])).join(", ")}function d(t){return(JSON.parse(localStorage.getItem("watched-films"))||[]).find((e=>e.id===t.id))?"REMOVE FROM WATCHED":"ADD TO WATCHED"}function o(t){return(JSON.parse(localStorage.getItem("queue-films"))||[]).find((e=>e.id===t.id))?"REMOVE FROM QUEUE":"ADD TO QUEUE"}a.refs.filmCard.addEventListener("click",(function(t){a.refs.backdrop.classList.remove("is-hidden");const e=t.target.closest("li").id,n=JSON.parse(localStorage.getItem("saved-movies")).find((t=>t.id===Number(e)));l=n,a.refs.filmRendering.innerHTML=`\n        <div class="modal-img-wrapper">\n          <img src="https://image.tmdb.org/t/p/w500/${l.poster_path}" alt="film-poster" />\n        </div>\n        <div class="modal__wrapper">\n          <h2 class="modal__film-title">${l.title}</h2>\n          <table class="modal__table">\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Vote / Votes</td>\n              <td>\n                <div class="modal__vote-wrapper">\n                  <p class="modal__vote">${l.vote_average}</p>\n                  <p>/</p>\n                  <p class="modal__votes">${l.vote_count}</p>\n                </div>\n              </td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Popularity</td>\n              <td>${Math.round(l.popularity)}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Original Title</td>\n              <td>${l.original_title}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Genre</td>\n              <td>${i(l.genre_ids)}</td>\n            </tr>\n          </table>\n          <div>\n            <h3 class="modal__about-title">About</h3>\n            <p class="modal__about-film">\n              ${l.overview}\n            </p>\n          </div>\n          <div class="modal__buttons">\n            <button class="modal-btn btn-watched">${d(l)}</button>\n            <button class="modal-btn btn-queue">${o(l)}</button>\n          </div>\n        </div>`,i(n.genre_ids),function(t){const e=document.querySelector(".btn-watched"),n=document.querySelector(".btn-queue"),l="watched-films",a="queue-films";function i(){let n=JSON.parse(localStorage.getItem("watched-films"))||[];n.find((e=>e.id===t.id))?n=n.filter((e=>e.id!==t.id)):n.push(t),localStorage.setItem(l,JSON.stringify(n)),e.textContent=d(t)}function r(){let e=JSON.parse(localStorage.getItem("queue-films"))||[];e.find((e=>e.id===t.id))?e=e.filter((e=>e.id!==t.id)):e.push(t),localStorage.setItem(a,JSON.stringify(e)),n.textContent=o(t)}e.addEventListener("click",i),n.addEventListener("click",r)}(n);var l})),a.refs.closeBtn.addEventListener("click",(function(){a.refs.backdrop.classList.add("is-hidden"),a.refs.filmRendering.innerHTML=""}));
//# sourceMappingURL=index.925aea66.js.map