var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=i);var n=i("eyj3e"),o=i("kyFpU");const a=document.querySelector(".watched-films"),l=document.querySelector(".queue-films"),d=document.querySelector(".button-list"),s=document.querySelector(".films__list"),c=document.querySelector(".logo-link");null===localStorage.getItem("watched-films")&&(localStorage.setItem("watched-films",JSON.stringify([])),(0,o.hidePageLoadSpinner)()),null===localStorage.getItem("queue-films")&&(localStorage.setItem("queue-films",JSON.stringify([])),(0,o.hidePageLoadSpinner)());let u="queue-films";l.classList.add("current-page");const g=localStorage.getItem(u),p=JSON.parse(g);if(c.addEventListener("click",o.removeLocalData),p.length)try{(0,n.renderMoviesCards)(p),(0,o.hidePageLoadSpinner)()}catch(e){f(u),(0,o.hidePageLoadSpinner)()}else f(u),(0,o.hidePageLoadSpinner)();function f(e){return s.innerHTML=`\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven't added any movies to (${e})</p>\n`}d.addEventListener("click",(function(e){e.preventDefault(),u=e.target.id,console.dir(u),function(e){e===a.id&&(l.classList.remove("current-page"),a.classList.add("current-page"),l.removeAttribute("disabled"),a.setAttribute("disabled","disabled"));e===l.id&&(a.classList.remove("current-page"),l.classList.add("current-page"),a.removeAttribute("disabled"),l.setAttribute("disabled","disabled"))}(u);const t=localStorage.getItem(u),r=JSON.parse(t);if(r.length)try{(0,n.renderMoviesCards)(r)}catch(e){f(u)}else f(u)})),i("2dyR4"),i("jTPpR");
//# sourceMappingURL=library.83dbe4bf.js.map
