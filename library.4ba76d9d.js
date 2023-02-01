const e={moviesList:document.querySelector(".films__list")};function t(t){return e.moviesList.innerHTML=t.map((e=>{return`<li id='${e.id}' class="films__card">\n            <div class="films__overflow-wrapper">\n              <img src="${t=e.poster_path,t?`https://image.tmdb.org/t/p/w500/${t}`:"https://i.postimg.cc/KYV47028/no-poster-available.jpg"}"  alt="film poster" class="films__picture" />\n              <div class="films__overlay">\n                <p class="films__trailer-text">Watch trailer</p>\n                <img scr alt class="films__trailer-icon">\n              </div>\n            </div>\n            <p class="films__title">${e.title}</p>\n            <div class="films__details">\n              <p class="films__genres film-font-style">${function(e){const t=localStorage.getItem("saved-genres"),s=JSON.parse(t);let n=[];const l=e.release_date.slice(0,4);for(let t=0;t<e.genre_ids.length;t++)n.push(s[e.genre_ids[t]]);let a="";a=n.length>2?n.splice(0,2).join(", ")+", Other":n.join(", ");return 0!==e.genre_ids.length||e.release_date?0===e.genre_ids.length&&e.release_date?l:0===e.genre_ids.length||e.release_date?a+" | "+l:a:""}(e)}</p>\n              <span class="films__rate">${e.vote_average.toFixed(1)}</span>\n            </div>\n          </li>`;var t})).join("")}const s={loader:document.querySelector(".loader")};function n(){s.loader.classList.remove("page-load"),s.loader.classList.add("hide")}const l=document.querySelector(".watched-films"),a=document.querySelector(".queue-films"),i=document.querySelector(".button-list"),o=document.querySelector(".films__list");document.querySelector(".logo-link");let r="queue-films";a.classList.add("current-page");const d=localStorage.getItem(r),c=JSON.parse(d);if(c.length)try{t(c),n()}catch(e){m(r),n()}else m(r),n();function m(e){return o.innerHTML=`\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven't added any movies to ${e}</p>\n`}i.addEventListener("click",(function(e){e.preventDefault(),r=e.target.id,console.dir(r),function(e){e===l.id&&(a.classList.remove("current-page"),l.classList.add("current-page"),a.removeAttribute("disabled"),l.setAttribute("disabled","disabled"));e===a.id&&(l.classList.remove("current-page"),a.classList.add("current-page"),l.removeAttribute("disabled"),a.setAttribute("disabled","disabled"))}(r);const s=localStorage.getItem(r),n=JSON.parse(s);if(n.length)try{t(n)}catch(e){m(r)}else m(r)}));const u={filmCard:document.querySelector(".films__list"),backdrop:document.querySelector(".backdrop-modal-film"),filmRendering:document.querySelector(".film-render-markup")},_=document.querySelector("#js-libr"),p=document.querySelector("#queue-films"),g=document.querySelector("#watched-films");function f(e){(e.target.matches(".modal__close-btn")||e.target.matches(".modal__close-btn-icon")||e.target.matches(".modal__close-btn-icon-svg")||e.target.matches(".backdrop-modal-film")||"Escape"===e.code)&&(u.backdrop.classList.add("is-hidden"),document.body.style.overflow="auto",u.filmRendering.innerHTML="")}function v(e){const t=JSON.parse(localStorage.getItem("saved-genres"));return e.map((e=>t[e])).join(", ")}function b(e){return(JSON.parse(localStorage.getItem("watched-films"))||[]).find((t=>t.id===e.id))?"REMOVE FROM WATCHED":"ADD TO WATCHED"}function h(e){return(JSON.parse(localStorage.getItem("queue-films"))||[]).find((t=>t.id===e.id))?"REMOVE FROM QUEUE":"ADD TO QUEUE"}u.filmCard.addEventListener("click",(function(e){if("IMG"===e.target.nodeName){u.backdrop.classList.remove("is-hidden"),document.body.style.overflow="hidden";const n=e.target.closest("li").id,l=JSON.parse(localStorage.getItem("saved-movies")).find((e=>e.id===Number(n)));s=l,u.filmRendering.innerHTML=`\n        <div class="modal-img-wrapper">\n          <img src="https://image.tmdb.org/t/p/w500/${s.poster_path}" alt="film-poster" />\n        </div>\n        <div class="modal__wrapper">\n          <h2 class="modal__film-title">${s.title}</h2>\n          <table class="modal__table">\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Vote / Votes</td>\n              <td>\n                <div class="modal__vote-wrapper">\n                  <p class="modal__vote">${s.vote_average.toFixed(1)}</p>\n                  <p>/</p>\n                  <p class="modal__votes">${s.vote_count}</p>\n                </div>\n              </td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Popularity</td>\n              <td>${Math.round(10*s.popularity)/10}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Original Title</td>\n              <td>${s.original_title}</td>\n            </tr>\n            <tr class="modal__table-row">\n              <td class="modal__first-column">Genre</td>\n              <td>${v(s.genre_ids)}</td>\n            </tr>\n          </table>\n          <div>\n            <h3 class="modal__about-title">About</h3>\n            <p class="modal__about-film">\n              ${s.overview}\n            </p>\n          </div>\n          <div class="modal__buttons">\n            <button class="modal-btn btn-watched">${b(s)}</button>\n            <button class="modal-btn btn-queue">${h(s)}</button>\n          </div>\n        </div>`,v(l.genre_ids),function(e){const s=document.querySelector(".btn-watched"),n=document.querySelector(".btn-queue"),l="watched-films",a="queue-films";function i(){let n=JSON.parse(localStorage.getItem("watched-films"))||[];n.find((t=>t.id===e.id))?n=n.filter((t=>t.id!==e.id)):n.push(e),localStorage.setItem(l,JSON.stringify(n)),s.textContent=b(e),_.classList.contains("current")&&g.classList.contains("current-page")&&t(n)}function o(){let s=JSON.parse(localStorage.getItem("queue-films"))||[];s.find((t=>t.id===e.id))?s=s.filter((t=>t.id!==e.id)):s.push(e),localStorage.setItem(a,JSON.stringify(s)),n.textContent=h(e),_.classList.contains("current")&&p.classList.contains("current-page")&&t(s)}s.addEventListener("click",i),n.addEventListener("click",o)}(l),document.addEventListener("click",f),window.addEventListener("keydown",f)}var s}));
//# sourceMappingURL=library.4ba76d9d.js.map
