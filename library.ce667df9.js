!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var n,i=a("98CTD"),l=a("v4drH"),o=(l=a("v4drH"),0),s=document.querySelector(".watched-films"),c=document.querySelector(".queue-films"),d=document.querySelector(".button-list"),u=document.querySelector(".films__list"),m=document.querySelector(".logo-link"),g=document.querySelector(".page-number__list"),p="watched-films",v="queue-films";null===localStorage.getItem(p)&&(localStorage.setItem(p,JSON.stringify([])),(0,l.hidePageLoadSpinner)()),null===localStorage.getItem(v)&&(localStorage.setItem(v,JSON.stringify([])),(0,l.hidePageLoadSpinner)());var b="queue-films";c.classList.add("current-page");try{var f=localStorage.getItem(b);if((n=JSON.parse(f)).length)try{var h=S(n);(0,i.renderMoviesCards)(h.results),w(h.page,h.totalPages),g.removeEventListener("click",y),g.addEventListener("click",y),(0,l.hidePageLoadSpinner)()}catch(e){L(b),(0,l.hidePageLoadSpinner)()}else L(b),(0,l.hidePageLoadSpinner)()}catch(e){throw new Error(e)}function _(e){e.preventDefault(),function(e){e===s.id&&(c.classList.remove("current-page"),s.classList.add("current-page"),c.removeAttribute("disabled"),s.setAttribute("disabled","disabled"));e===c.id&&(s.classList.remove("current-page"),c.classList.add("current-page"),s.removeAttribute("disabled"),c.setAttribute("disabled","disabled"))}(b=e.target.id);try{var t=localStorage.getItem(b);if((n=JSON.parse(t)).length)try{var r=S(n);(0,i.renderMoviesCards)(r.results),w(r.page,r.totalPages),g.removeEventListener("click",y),g.addEventListener("click",y),(0,l.hidePageLoadSpinner)()}catch(e){L(b),(0,l.hidePageLoadSpinner)()}else L(b)}catch(e){throw new Error(e)}}function L(e){return u.innerHTML='\n  <img src="https://kartinkof.club/uploads/posts/2022-03/1648361803_4-kartinkof-club-p-mem-obezyana-smotrit-v-storonu-5.jpg" alt="monkey" width="400" height="200">\n  <p>Opss... you haven\'t added any movies to ('.concat(e,")</p>\n")}function S(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=e.length,a=[],n=20*(t-1);n<20*(t-1)+20;n++)e[n]&&a.push(e[n]);var i={results:a,totalPages:Math.ceil(r/20),page:t};return i}function y(e){function t(e){(0,l.showLoadSpinner)();var t=S(n,e);(0,i.renderMoviesCards)(t.results),(0,l.scrollToTop)(),w(t.page,t.total_pages)}"LI"===e.target.nodeName&&("..."!==e.target.textContent&&("🡸"!==e.target.textContent?"🡺"!==e.target.textContent?t(e.target.textContent):t(o+=1):t(o-=1)))}function w(e,t){var r="",a=e-1,n=e+1,i=e+2;o=e,e>1&&(r+='<li class="page-number__item arrows">&#129144;</li>',r+='<li class="page-number__item number">1</li>'),e>4&&(r+='<li class="page-number__item">...</li>'),e>3&&(r+='<li class="page-number__item number">'.concat(e-2,"</li>")),e>2&&(r+='<li class="page-number__item number">'.concat(a,"</li>")),r+='<li class="page-number__item current_page number"><b>'.concat(e,"</b></li>"),t-1>e&&(r+='<li class="page-number__item number">'.concat(n,"</li>")),t-2>e&&(r+='<li class="page-number__item number">'.concat(i,"</li>")),t-3>e&&(r+='<li class="page-number__item">...</li>'),t>e&&(r+='<li class="page-number__item number">'.concat(t,"</li>"),r+='<li class="page-number__item arrows">&#129146;</li>'),g.innerHTML=r}m.removeEventListener("click",l.removeLocalData),m.addEventListener("click",l.removeLocalData),d.removeEventListener("click",_),d.addEventListener("click",_),a("7khuo"),a("3VF7G")}();
//# sourceMappingURL=library.ce667df9.js.map
