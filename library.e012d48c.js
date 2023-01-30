const t=document.querySelector(".films__list-libr"),e=document.querySelector(".backdrop-modal-film"),n=document.querySelector(".film-render-markup");function l(t){(t.target.matches(".modal__close-btn")||t.target.matches(".modal__close-btn-icon")||t.target.matches(".modal__close-btn-icon-svg")||t.target.matches(".backdrop-modal-film")||"Escape"===t.code)&&(e.classList.add("is-hidden"),document.body.style.overflow="auto",n.innerHTML="")}function o(t){const e=JSON.parse(localStorage.getItem("saved-genres"));return t.map((t=>e[t])).join(", ")}function a(t){return(JSON.parse(localStorage.getItem("watched-films"))||[]).find((e=>e.id===t.id))?"REMOVE FROM WATCHED":"ADD TO WATCHED"}function d(t){return(JSON.parse(localStorage.getItem("queue-films"))||[]).find((e=>e.id===t.id))?"REMOVE FROM QUEUE":"ADD TO QUEUE"}t.addEventListener("click",(function(t){e.classList.remove("is-hidden"),document.body.style.overflow="hidden";const s=t.target.closest("li").id,i=JSON.parse(localStorage.getItem("saved-movies")).find((t=>t.id===Number(s)));r=i,n.innerHTML=`\n        <div class="modal-img-wrapper">\n          <img src="https://image.tmdb.org/t/p/w500/${r.poster_path}" alt="film-poster" />\n        </div>\n        <div class="modal__wrapper">\n          <h2 class="modal__film-title">${r.title}</h2>\n          <table class="modal__table">\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Vote / Votes</td>\n              <td>\n                <div class="modal__vote-wrapper">\n                  <p class="modal__vote">${r.vote_average}</p>\n                  <p>/</p>\n                  <p class="modal__votes">${r.vote_count}</p>\n                </div>\n              </td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Popularity</td>\n              <td>${Math.round(10*r.popularity)/10}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Original Title</td>\n              <td>${r.original_title}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Genre</td>\n              <td>${o(r.genre_ids)}</td>\n            </tr>\n          </table>\n          <div>\n            <h3 class="modal__about-title">About</h3>\n            <p class="modal__about-film">\n              ${r.overview}\n            </p>\n          </div>\n          <div class="modal__buttons">\n            <button class="modal-btn btn-watched">${a(r)}</button>\n            <button class="modal-btn btn-queue">${d(r)}</button>\n          </div>\n        </div>`,o(i.genre_ids),function(t){const e=document.querySelector(".btn-watched"),n=document.querySelector(".btn-queue"),l="watched-films",o="queue-films";function s(){let n=JSON.parse(localStorage.getItem("watched-films"))||[];n.find((e=>e.id===t.id))?n=n.filter((e=>e.id!==t.id)):n.push(t),localStorage.setItem(l,JSON.stringify(n)),e.textContent=a(t)}function i(){let e=JSON.parse(localStorage.getItem("queue-films"))||[];e.find((e=>e.id===t.id))?e=e.filter((e=>e.id!==t.id)):e.push(t),localStorage.setItem(o,JSON.stringify(e)),n.textContent=d(t)}e.addEventListener("click",s),n.addEventListener("click",i)}(i),document.addEventListener("click",l),window.addEventListener("keydown",l);var r}));
//# sourceMappingURL=library.e012d48c.js.map
