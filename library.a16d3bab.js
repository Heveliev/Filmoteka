!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var i=a("98CTD"),n=a("v4drH"),o=document.querySelector(".watched-films"),l=document.querySelector(".queue-films"),d=document.querySelector(".button-list"),s=document.querySelector(".films__list"),c=document.querySelector(".logo-link"),u="watched-films",g="queue-films";null===localStorage.getItem(u)&&(localStorage.setItem(u,JSON.stringify([])),(0,n.hidePageLoadSpinner)()),null===localStorage.getItem(g)&&(localStorage.setItem(g,JSON.stringify([])),(0,n.hidePageLoadSpinner)());var f="queue-films";l.classList.add("current-page");var p=localStorage.getItem(f),m=JSON.parse(p);if(c.addEventListener("click",n.removeLocalData),m.length)try{(0,i.renderMoviesCards)(m),(0,n.hidePageLoadSpinner)()}catch(e){v(f),(0,n.hidePageLoadSpinner)()}else v(f),(0,n.hidePageLoadSpinner)();function v(e){return s.innerHTML='\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven\'t added any movies to ('.concat(e,")</p>\n")}d.addEventListener("click",(function(e){e.preventDefault(),f=e.target.id,console.dir(f),function(e){e===o.id&&(l.classList.remove("current-page"),o.classList.add("current-page"),l.removeAttribute("disabled"),o.setAttribute("disabled","disabled"));e===l.id&&(o.classList.remove("current-page"),l.classList.add("current-page"),o.removeAttribute("disabled"),l.setAttribute("disabled","disabled"))}(f);var t=localStorage.getItem(f),r=JSON.parse(t);if(r.length)try{(0,i.renderMoviesCards)(r)}catch(e){v(f)}else v(f)})),a("7khuo"),a("3VF7G")}();
//# sourceMappingURL=library.a16d3bab.js.map
