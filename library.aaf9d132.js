var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("eyj3e"),a=n("kyFpU");a=n("kyFpU");let l,s=0;const o=document.querySelector(".watched-films"),c=document.querySelector(".queue-films"),u=document.querySelector(".button-list"),d=document.querySelector(".js-no_films__list"),m=document.querySelector(".films__list"),g=document.querySelector(".logo-link"),p=document.querySelector(".page-number__list");null===localStorage.getItem("watched-films")&&(localStorage.setItem("watched-films",JSON.stringify([])),(0,a.hidePageLoadSpinner)()),null===localStorage.getItem("queue-films")&&(localStorage.setItem("queue-films",JSON.stringify([])),(0,a.hidePageLoadSpinner)());let f="queue-films";c.classList.add("current-page");try{h();const e=localStorage.getItem(f);if(l=JSON.parse(e),l.length)try{const e=S(l);h(),(0,i.renderMoviesCards)(e.results),w(e.page,e.totalPages),p.removeEventListener("click",y),p.addEventListener("click",y),(0,a.hidePageLoadSpinner)()}catch(e){v(),_(),L(f),(0,a.hidePageLoadSpinner)()}else v(),_(),L(f),(0,a.hidePageLoadSpinner)()}catch(e){throw new Error(e)}function b(e){e.preventDefault(),f=e.target.id,function(e){e===o.id&&(c.classList.remove("current-page"),o.classList.add("current-page"),c.removeAttribute("disabled"),o.setAttribute("disabled","disabled"));e===c.id&&(o.classList.remove("current-page"),c.classList.add("current-page"),o.removeAttribute("disabled"),c.setAttribute("disabled","disabled"))}(f);try{const e=localStorage.getItem(f);if(l=JSON.parse(e),l.length)try{h();const e=S(l);(0,i.renderMoviesCards)(e.results),w(e.page,e.totalPages),p.removeEventListener("click",y),p.addEventListener("click",y),(0,a.hidePageLoadSpinner)()}catch(e){v(),_(),L(f),(0,a.hidePageLoadSpinner)()}else v(),_(),L(f)}catch(e){throw new Error(e)}}function _(){p.innerHTML=""}function h(){d.innerHTML=""}function v(){m.innerHTML=""}function L(e){return d.innerHTML=`\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p class="js-no_films__text">Opss... you haven't added any movies to (${e})</p>\n`}function S(e,t=1){const r=e.length,n=[];for(let r=20*(t-1);r<20*(t-1)+20;r++)e[r]&&n.push(e[r]);return{results:n,totalPages:Math.ceil(r/20),page:t}}function y(e){function t(e){(0,a.showLoadSpinner)();const t=S(l,e);(0,i.renderMoviesCards)(t.results),(0,a.hideLoadSpinner)(),(0,a.scrollToTop)(),w(t.page,t.totalPages)}if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;if("🡸"===e.target.textContent)return void t(s-=1);if("🡺"===e.target.textContent)return void t(s+=1);t(e.target.textContent)}function w(e,t){let r="";s=e,e>1&&(r+='<li class="page-number__item arrows">&#129144;</li>',r+='<li class="page-number__item number">1</li>'),e>4&&(r+='<li class="page-number__item">...</li>'),e>3&&(r+=`<li class="page-number__item number">${e-2}</li>`),e>2&&(r+=`<li class="page-number__item number">${e-1}</li>`),r+=`<li class="page-number__item current_page number"><b>${e}</b></li>`,t-1>e&&(r+=`<li class="page-number__item number">${e+1}</li>`),t-2>e&&(r+=`<li class="page-number__item number">${e+2}</li>`),t-3>e&&(r+='<li class="page-number__item">...</li>'),t>e&&(r+=`<li class="page-number__item number">${t}</li>`,r+='<li class="page-number__item arrows">&#129146;</li>'),p.innerHTML=r}g.removeEventListener("click",a.removeLocalData),g.addEventListener("click",a.removeLocalData),u.removeEventListener("click",b),u.addEventListener("click",b),n("2dyR4"),n("jTPpR"),n("hV7Xq");
//# sourceMappingURL=library.aaf9d132.js.map
