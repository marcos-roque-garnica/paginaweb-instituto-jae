document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".dropdown-menu").forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))})),window.innerWidth<992&&(document.querySelectorAll(".navbar .dropdown").forEach((function(e){e.addEventListener("hidden.bs.dropdown",(function(){this.querySelectorAll(".megasubmenu-ipad").forEach((function(e){e.style.display="none"})),this.querySelectorAll(".megasubmenu2-ipad").forEach((function(e){e.style.display="none"}))}))})),document.querySelectorAll(".has-megasubmenu-ipad a").forEach((function(e){e.addEventListener("click",(function(e){let n=this.nextElementSibling;n&&n.classList.contains("megasubmenu-ipad")&&(e.preventDefault(),"block"==n.style.display?n.style.display="none":n.style.display="block"),n&&n.classList.contains("megasubmenu2-ipad")&&(e.preventDefault(),"block"==n.style.display?n.style.display="none":n.style.display="block")}))})))})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".navbar .dropdown").forEach((function(e){e.addEventListener("shown.bs.dropdown",(function(){el_overlay=document.createElement("span"),el_overlay.className="screen-darken",document.body.appendChild(el_overlay)})),e.addEventListener("hide.bs.dropdown",(function(){document.body.removeChild(document.querySelector(".screen-darken"))}))}))}));let ps={scrollPosition:0,menu:document.querySelector("#menu"),logo:document.querySelector("#logo"),gost:document.getElementById("gost"),agendacita:document.getElementById("agendacita"),agendacita2:document.getElementById("agendacita2"),social:document.getElementById("socialicon")},sm={scrollStart:()=>{document.addEventListener("scroll",sm.navEffect)},agendaremove:()=>{window.innerWidth<1360&&(ps.agendacita.style.display="none",ps.agendacita2.style.display="none")},navEffect:()=>{ps.scrollPosition=window.pageYOffset,ps.scrollPosition>55&&window.innerWidth>991&&(ps.menu.style.position="fixed",ps.logo.style.width="150px",ps.menu.style.right="0",ps.menu.style.left="0",ps.menu.style.top="0",ps.gost.style.display="block",ps.agendacita.style.display="none",ps.agendacita2.style.display="none",ps.social.style.display="none"),ps.scrollPosition<55&&window.innerWidth>991&&(ps.gost.style.display="none",ps.menu.style.position="",ps.menu.style.right="",ps.menu.style.left="",ps.menu.style.top="0",ps.logo.style.width="240px",ps.agendacita.style.display="block",ps.agendacita2.style.display="block",ps.social.style.display="block"),ps.scrollPosition<55&&window.innerWidth<1360&&(ps.agendacita.style.display="none",ps.agendacita2.style.display="none",ps.social.style.display="none")}};function removeCita(){window.innerWidth<1360&&(ps.agendacita.style.display="none",ps.agendacita2.style.display="none",ps.social.style.display="none"),window.innerWidth>1360&&(ps.agendacita.style.display="block",ps.agendacita2.style.display="block",ps.social.style.display="block")}sm.scrollStart(),window.onresize=removeCita,document.addEventListener("DOMContentLoaded",(function(){let e=[].slice.call(document.querySelectorAll("img.lazy")),n=!1;const t=function(){!1===n&&(n=!0,setTimeout((function(){e.forEach((function(n){n.getBoundingClientRect().top<=window.innerHeight&&n.getBoundingClientRect().bottom>=0&&"none"!==getComputedStyle(n).display&&(n.src=n.dataset.src,n.classList.remove("lazy"),e=e.filter((function(e){return e!==n})),0===e.length&&(document.removeEventListener("scroll",t),window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t)))})),n=!1}),200))};document.addEventListener("scroll",t),window.addEventListener("resize",t),window.addEventListener("orientationchange",t)}));