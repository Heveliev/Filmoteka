var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i=n("eyj3e"),a=n("kyFpU");a=n("kyFpU");let l,o=0;const s=document.querySelector(".watched-films"),c=document.querySelector(".queue-films"),u=document.querySelector(".button-list"),d=document.querySelector(".films__list"),m=document.querySelector(".logo-link"),g=document.querySelector(".page-number__list");null===localStorage.getItem("watched-films")&&(localStorage.setItem("watched-films",JSON.stringify([])),(0,a.hidePageLoadSpinner)()),null===localStorage.getItem("queue-films")&&(localStorage.setItem("queue-films",JSON.stringify([])),(0,a.hidePageLoadSpinner)());let p="queue-films";c.classList.add("current-page");try{const e=localStorage.getItem(p);if(l=JSON.parse(e),l.length)try{const e=v(l);(0,i.renderMoviesCards)(e.results),L(e.page,e.totalPages),g.removeEventListener("click",_),g.addEventListener("click",_),(0,a.hidePageLoadSpinner)()}catch(e){b(),h(p),(0,a.hidePageLoadSpinner)()}else b(),h(p),(0,a.hidePageLoadSpinner)()}catch(e){throw new Error(e)}function f(e){e.preventDefault(),p=e.target.id,function(e){e===s.id&&(c.classList.remove("current-page"),s.classList.add("current-page"),c.removeAttribute("disabled"),s.setAttribute("disabled","disabled"));e===c.id&&(s.classList.remove("current-page"),c.classList.add("current-page"),s.removeAttribute("disabled"),c.setAttribute("disabled","disabled"))}(p);try{const e=localStorage.getItem(p);if(l=JSON.parse(e),l.length)try{const e=v(l);(0,i.renderMoviesCards)(e.results),L(e.page,e.totalPages),g.removeEventListener("click",_),g.addEventListener("click",_),(0,a.hidePageLoadSpinner)()}catch(e){b(),h(p),(0,a.hidePageLoadSpinner)()}else b(),h(p)}catch(e){throw new Error(e)}}function b(){g.innerHTML=""}function h(e){return d.innerHTML=`\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven't added any movies to (${e})</p>\n`}function v(e,t=1){const r=e.length,n=[];for(let r=20*(t-1);r<20*(t-1)+20;r++)e[r]&&n.push(e[r]);return{results:n,totalPages:Math.ceil(r/20),page:t}}function _(e){function t(e){(0,a.showLoadSpinner)();const t=v(l,e);(0,i.renderMoviesCards)(t.results),(0,a.hideLoadSpinner)(),(0,a.scrollToTop)(),L(t.page,t.total_pages)}if("LI"!==e.target.nodeName)return;if("..."===e.target.textContent)return;if("🡸"===e.target.textContent)return void t(o-=1);if("🡺"===e.target.textContent)return void t(o+=1);t(e.target.textContent)}function L(e,t){let r="";o=e,e>1&&(r+='<li class="page-number__item arrows">&#129144;</li>',r+='<li class="page-number__item number">1</li>'),e>4&&(r+='<li class="page-number__item">...</li>'),e>3&&(r+=`<li class="page-number__item number">${e-2}</li>`),e>2&&(r+=`<li class="page-number__item number">${e-1}</li>`),r+=`<li class="page-number__item current_page number"><b>${e}</b></li>`,t-1>e&&(r+=`<li class="page-number__item number">${e+1}</li>`),t-2>e&&(r+=`<li class="page-number__item number">${e+2}</li>`),t-3>e&&(r+='<li class="page-number__item">...</li>'),t>e&&(r+=`<li class="page-number__item number">${t}</li>`,r+='<li class="page-number__item arrows">&#129146;</li>'),g.innerHTML=r}m.removeEventListener("click",a.removeLocalData),m.addEventListener("click",a.removeLocalData),u.removeEventListener("click",f),u.addEventListener("click",f),n("2dyR4"),n("jTPpR"),n("hV7Xq");
//# sourceMappingURL=library.db1655f9.js.map
