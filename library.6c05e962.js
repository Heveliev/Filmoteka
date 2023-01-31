!function(){var t={moviesList:document.querySelector(".films__list")};function e(e){return t.moviesList.innerHTML=e.map((function(t){return"<li id='".concat(t.id,'\' class="films__card">\n            <div class="films__overflow-wrapper">\n              <img src="').concat((e=t.poster_path,e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://i.postimg.cc/KYV47028/no-poster-available.jpg"),'"  alt="film poster" class="films__picture" />\n              <div class="films__overlay">\n                <p class="films__trailer-text">Watch trailer</p>\n                <img scr alt class="films__trailer-icon">\n              </div>\n            </div>\n            <p class="films__title">').concat(t.title,'</p>\n            <div class="films__details">\n              <p class="films__genres film-font-style">').concat(function(t){for(var e=localStorage.getItem("saved-genres"),n=JSON.parse(e),a=[],r=t.release_date.slice(0,4),i=0;i<t.genre_ids.length;i++)a.push(n[t.genre_ids[i]]);var l="";l=a.length>2?a.splice(0,2).join(", ")+", Other":a.join(", ");return 0!==t.genre_ids.length||t.release_date?0===t.genre_ids.length&&t.release_date?r:0===t.genre_ids.length||t.release_date?l+" | "+r:l:""}(t),'</p>\n              <span class="films__rate">').concat(t.vote_average.toFixed(1),"</span>\n            </div>\n          </li>");var e})).join("")}var n={loader:document.querySelector(".loader")};function a(){n.loader.classList.remove("page-load"),n.loader.classList.add("hide")}var r=document.querySelector(".watched-films"),i=document.querySelector(".queue-films"),l=document.querySelector(".button-list"),s=document.querySelector(".films__list"),o="queue-films";i.classList.add("current-page");var c=localStorage.getItem(o),d=JSON.parse(c);if(d.length)try{e(d),a()}catch(t){m(o),a()}else m(o),a();function m(t){return s.innerHTML='\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven\'t added any movies to '.concat(t,"</p>\n")}l.addEventListener("click",(function(t){t.preventDefault(),o=t.target.id,console.dir(o),function(t){t===r.id&&(i.classList.remove("current-page"),r.classList.add("current-page"),i.removeAttribute("disabled"),r.setAttribute("disabled","disabled"));t===i.id&&(r.classList.remove("current-page"),i.classList.add("current-page"),r.removeAttribute("disabled"),i.setAttribute("disabled","disabled"))}(o);var n=localStorage.getItem(o),a=JSON.parse(n);if(a.length)try{e(a)}catch(t){m(o)}else m(o)}));var u={filmCard:document.querySelector(".films__list"),backdrop:document.querySelector(".backdrop-modal-film"),filmRendering:document.querySelector(".film-render-markup")};function _(t){(t.target.matches(".modal__close-btn")||t.target.matches(".modal__close-btn-icon")||t.target.matches(".modal__close-btn-icon-svg")||t.target.matches(".backdrop-modal-film")||"Escape"===t.code)&&(u.backdrop.classList.add("is-hidden"),document.body.style.overflow="auto",u.filmRendering.innerHTML="")}function f(t){var e=JSON.parse(localStorage.getItem("saved-genres"));return t.map((function(t){return e[t]})).join(", ")}function p(t){return(JSON.parse(localStorage.getItem("watched-films"))||[]).find((function(e){return e.id===t.id}))?"REMOVE FROM WATCHED":"ADD TO WATCHED"}function g(t){return(JSON.parse(localStorage.getItem("queue-films"))||[]).find((function(e){return e.id===t.id}))?"REMOVE FROM QUEUE":"ADD TO QUEUE"}u.filmCard.addEventListener("click",(function(t){if(t.target!==t.currentTarget){u.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden";var e=t.target.closest("li").id,n=JSON.parse(localStorage.getItem("saved-movies")).find((function(t){return t.id===Number(e)}));a=n,u.filmRendering.innerHTML='\n        <div class="modal-img-wrapper">\n          <img src="https://image.tmdb.org/t/p/w500/'.concat(a.poster_path,'" alt="film-poster" />\n        </div>\n        <div class="modal__wrapper">\n          <h2 class="modal__film-title">').concat(a.title,'</h2>\n          <table class="modal__table">\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Vote / Votes</td>\n              <td>\n                <div class="modal__vote-wrapper">\n                  <p class="modal__vote">').concat(a.vote_average.toFixed(1),'</p>\n                  <p>/</p>\n                  <p class="modal__votes">').concat(a.vote_count,'</p>\n                </div>\n              </td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Popularity</td>\n              <td>').concat(Math.round(10*a.popularity)/10,'</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Original Title</td>\n              <td>').concat(a.original_title,'</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Genre</td>\n              <td>').concat(f(a.genre_ids),'</td>\n            </tr>\n          </table>\n          <div>\n            <h3 class="modal__about-title">About</h3>\n            <p class="modal__about-film">\n              ').concat(a.overview,'\n            </p>\n          </div>\n          <div class="modal__buttons">\n            <button class="modal-btn btn-watched">').concat(p(a),'</button>\n            <button class="modal-btn btn-queue">').concat(g(a),"</button>\n          </div>\n        </div>"),f(n.genre_ids),function(t){var e=document.querySelector(".btn-watched"),n=document.querySelector(".btn-queue"),a="watched-films",r="queue-films";function i(){var n=JSON.parse(localStorage.getItem("watched-films"))||[];n.find((function(e){return e.id===t.id}))?n=n.filter((function(e){return e.id!==t.id})):n.push(t),localStorage.setItem(a,JSON.stringify(n)),e.textContent=p(t)}function l(){var e=JSON.parse(localStorage.getItem("queue-films"))||[];e.find((function(e){return e.id===t.id}))?e=e.filter((function(e){return e.id!==t.id})):e.push(t),localStorage.setItem(r,JSON.stringify(e)),n.textContent=g(t)}e.addEventListener("click",i),n.addEventListener("click",l)}(n),document.addEventListener("click",_),window.addEventListener("keydown",_)}var a}))}();
//# sourceMappingURL=library.6c05e962.js.map