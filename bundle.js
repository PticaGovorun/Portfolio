!function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(10)},function(e,t,r){},function(e,t){
/*! Licensed under MIT License - http://github.com/impress/impress.js */
!function(e,t){"use strict";var r,n,i,s,a=(n=e.createElement("dummy").style,i="Webkit Moz O ms Khtml".split(" "),s={},function(e){if(void 0===s[e]){var t=e.charAt(0).toUpperCase()+e.substr(1),r=(e+" "+i.join(t+" ")+t).split(" ");for(var a in s[e]=null,r)if(void 0!==n[r[a]]){s[e]=r[a];break}}return s[e]}),o=function(e,t){var r="xyz",n="";if("string"==typeof e)for(var i in e.split(""))r.indexOf(e[i])>=0&&(n+=e[i],r=r.split(e[i]).join(""));return n||(void 0!==t?t:"xyz")},l=function(e,t){var r,n;for(r in t)t.hasOwnProperty(r)&&null!==(n=a(r))&&(e.style[n]=t[r]);return e},u=function(e){return" translate3d("+e.x+"px,"+e.y+"px,"+e.z+"px) "},c=function(e,t){var r="",n=(e.order?e.order:"xyz").split("");t&&(n=n.reverse());for(var i=0;i<n.length;i++)r+=" rotate"+n[i].toUpperCase()+"("+e[n[i]]+"deg)";return r},d=function(e){return" scale("+e+") "},p=function(e){var r=t.innerHeight/e.height,n=t.innerWidth/e.width,i=r>n?n:r;return e.maxScale&&i>e.maxScale&&(i=e.maxScale),e.minScale&&i<e.minScale&&(i=e.minScale),i},m=e.body,f=null!==a("perspective")&&m.classList&&m.dataset;f||(m.className+=" impress-not-supported ");var v={},y=[],h=[],g=1024,b=768,L=1,x=0,E=1e3,w=1e3,S=function(){return!1},N=t.impress=function(n){if(!f)return{init:S,goto:S,prev:S,next:S,swipe:S,tear:S,lib:{}};if(v["impress-root-"+(n=n||"impress")])return v["impress-root-"+n];r=C(n),m.classList.remove("impress-not-supported"),m.classList.add("impress-supported");var i={},s=null,a=null,y=null,h=null,N=null,z=r.util.byId(n),P=e.createElement("div"),k=!1,A=null,M=function(e,t){var n=e.dataset,s={translate:{x:r.util.toNumber(n.x),y:r.util.toNumber(n.y),z:r.util.toNumber(n.z)},rotate:{x:r.util.toNumber(n.rotateX),y:r.util.toNumber(n.rotateY),z:r.util.toNumber(n.rotateZ||n.rotate),order:o(n.rotateOrder)},scale:r.util.toNumber(n.scale,1),transitionDuration:r.util.toNumber(n.transitionDuration,h.transitionDuration),el:e};e.id||(e.id="step-"+(t+1)),i["impress-"+e.id]=s,l(e,{position:"absolute",transform:"translate(-50%,-50%)"+u(s.translate)+c(s.rotate)+d(s.scale),transformStyle:"preserve-3d"})},H=function(){(y=r.util.$$(".step",z)).forEach(M)},I=null,T=function(e,n,o,f){if(o=o||"goto",f=f||null,!k)return!1;if(H(),!(e=function(e){return"number"==typeof e?e=e<0?y[y.length+e]:y[e]:"string"==typeof e&&(e=r.util.byId(e)),e&&e.id&&i["impress-"+e.id]?e:null}(e)))return!1;t.scrollTo(0,0);var v=i["impress-"+e.id];if(n=void 0!==n?n:v.transitionDuration,s&&s!==e){var g={target:s,detail:{}};if(g.detail.next=e,g.detail.transitionDuration=n,g.detail.reason=o,f&&(g.origEvent=f),!1===O(g))return!1;e=g.detail.next,v=i["impress-"+e.id],n=g.detail.transitionDuration}s&&(s.classList.remove("active"),m.classList.remove("impress-on-"+s.id)),e.classList.add("active"),m.classList.add("impress-on-"+e.id);var b={rotate:{x:-v.rotate.x,y:-v.rotate.y,z:-v.rotate.z,order:v.rotate.order},translate:{x:-v.translate.x,y:-v.translate.y,z:-v.translate.z},scale:1/v.scale},L=b.scale>=a.scale,x=(n=r.util.toNumber(n,h.transitionDuration))/2;e===s&&(N=p(h));var E,w,S=b.scale*N;return s&&s!==e&&(w=e,A===(E=s)&&(r.util.triggerEvent(E,"impress:stepleave",{next:w}),A=null)),l(z,{perspective:h.perspective/S+"px",transform:d(S),transitionDuration:n+"ms",transitionDelay:(L?x:0)+"ms"}),l(P,{transform:c(b.rotate,!0)+u(b.translate),transitionDuration:n+"ms",transitionDelay:(L?0:x)+"ms"}),(a.scale===b.scale||a.rotate.x===b.rotate.x&&a.rotate.y===b.rotate.y&&a.rotate.z===b.rotate.z&&a.translate.x===b.translate.x&&a.translate.y===b.translate.y&&a.translate.z===b.translate.z)&&(x=0),a=b,s=e,t.clearTimeout(I),I=t.setTimeout((function(){!function(e){A!==e&&(r.util.triggerEvent(e,"impress:stepenter"),A=e),r.util.triggerEvent(e,"impress:steprefresh")}(s)}),n+x),e},q=function(e,t,r){return e+(t-e)*r};return r.gc.addEventListener(z,"impress:init",(function(){y.forEach((function(e){e.classList.add("future")})),r.gc.addEventListener(z,"impress:stepenter",(function(e){e.target.classList.remove("past"),e.target.classList.remove("future"),e.target.classList.add("present")}),!1),r.gc.addEventListener(z,"impress:stepleave",(function(e){e.target.classList.remove("present"),e.target.classList.add("past")}),!1)}),!1),r.gc.addEventListener(z,"impress:init",(function(){var e="";r.gc.addEventListener(z,"impress:stepenter",(function(r){t.location.hash=e="#/"+r.target.id}),!1),r.gc.addEventListener(t,"hashchange",(function(){t.location.hash!==e&&T(r.util.getElementFromHash())}),!1),T(r.util.getElementFromHash()||y[0],0)}),!1),m.classList.add("impress-disabled"),v["impress-root-"+n]={init:function(){if(!k){D(z);var t=r.util.$("meta[name='viewport']")||e.createElement("meta");t.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",t.parentNode!==e.head&&(t.name="viewport",e.head.appendChild(t));var i=z.dataset;h={width:r.util.toNumber(i.width,g),height:r.util.toNumber(i.height,b),maxScale:r.util.toNumber(i.maxScale,L),minScale:r.util.toNumber(i.minScale,x),perspective:r.util.toNumber(i.perspective,E),transitionDuration:r.util.toNumber(i.transitionDuration,w)},N=p(h),r.util.arrayify(z.childNodes).forEach((function(e){P.appendChild(e)})),z.appendChild(P),e.documentElement.style.height="100%",l(m,{height:"100%",overflow:"hidden"});var s={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};l(z,s),l(z,{top:"50%",left:"50%",perspective:h.perspective/N+"px",transform:d(N)}),l(P,s),m.classList.remove("impress-disabled"),m.classList.add("impress-enabled"),H(),a={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0,order:"xyz"},scale:1},k=!0,r.util.triggerEvent(z,"impress:init",{api:v["impress-root-"+n]})}},goto:T,next:function(e){var t=y.indexOf(s)+1;return t=t<y.length?y[t]:y[0],T(t,void 0,"next",e)},prev:function(e){var t=y.indexOf(s)-1;return t=t>=0?y[t]:y[y.length-1],T(t,void 0,"prev",e)},swipe:function(e){if(!(Math.abs(e)>1)){var t,r={target:s,detail:{}};if(r.detail.swipe=e,r.detail.transitionDuration=h.transitionDuration,e<0)t=y.indexOf(s)+1,r.detail.next=t<y.length?y[t]:y[0],r.detail.reason="next";else{if(!(e>0))return;t=y.indexOf(s)-1,r.detail.next=t>=0?y[t]:y[y.length-1],r.detail.reason="prev"}if(!1===O(r))return!1;var n=r.detail.next,o=i["impress-"+n.id],p=o.scale*N,m=Math.abs(e),f={translate:{x:q(a.translate.x,-o.translate.x,m),y:q(a.translate.y,-o.translate.y,m),z:q(a.translate.z,-o.translate.z,m)},rotate:{x:q(a.rotate.x,-o.rotate.x,m),y:q(a.rotate.y,-o.rotate.y,m),z:q(a.rotate.z,-o.rotate.z,m),order:m<.7?a.rotate.order:o.rotate.order},scale:q(a.scale*N,p,m)};l(z,{perspective:h.perspective/f.scale+"px",transform:d(f.scale),transitionDuration:"0ms",transitionDelay:"0ms"}),l(P,{transform:c(f.rotate,!0)+u(f.translate),transitionDuration:"0ms",transitionDelay:"0ms"})}},tear:function(){r.gc.teardown(),delete v["impress-root-"+n]},lib:r}};N.supported=f;var z={};N.addLibraryFactory=function(e){for(var t in e)e.hasOwnProperty(t)&&(z[t]=e[t])};var C=function(e){var t={};for(var r in z)if(z.hasOwnProperty(r)){if(void 0!==t[r])throw"impress.js ERROR: Two libraries both tried to use libname: "+r;t[r]=z[r](e)}return t};N.addPreInitPlugin=function(e,t){if((t=parseInt(t)||10)<=0)throw"addPreInitPlugin: weight must be a positive integer";void 0===y[t]&&(y[t]=[]),y[t].push(e)};var D=function(e){for(var t=0;t<y.length;t++){var r=y[t];if(void 0!==r)for(var n=0;n<r.length;n++)r[n](e)}};N.addPreStepLeavePlugin=function(e,t){if((t=parseInt(t)||10)<=0)throw"addPreStepLeavePlugin: weight must be a positive integer";void 0===h[t]&&(h[t]=[]),h[t].push(e)};var O=function(e){for(var t=0;t<h.length;t++){var r=h[t];if(void 0!==r)for(var n=0;n<r.length;n++)if(!1===r[n](e))return!1}}}(document,window)},function(e,t){!function(e,t){"use strict";var r=[];t.impress.addLibraryFactory({util:function(n){if(r[n])return r[n];var i=function(e){return[].slice.call(e)},s=function(t){return e.getElementById(t)},a={$:function(t,r){return(r=r||e).querySelector(t)},$$:function(t,r){return i((r=r||e).querySelectorAll(t))},arrayify:i,byId:s,getElementFromHash:function(){return s(t.location.hash.replace(/^#\/?/,""))},throttle:function(e,r){var n=null;return function(){var i=this,s=arguments;t.clearTimeout(n),n=t.setTimeout((function(){e.apply(i,s)}),r)}},toNumber:function(e,t){return isNaN(e)?t||0:Number(e)},triggerEvent:function(t,r,n){var i=e.createEvent("CustomEvent");i.initCustomEvent(r,!0,!0,n),t.dispatchEvent(i)}};return r[n]=a,a}})}(document,window)},function(e,t){!function(e,t){"use strict";var r=[],n=0,i={roots:[]};t.impress.addLibraryFactory({gc:function(e){if(r[e])return r[e];var t=[],i=[],o=[];s(e);var l=function(e){t.push(e)},u=function(e,t,r){i.push({target:e,type:t,listener:r})},c=function(e){o.push(e)};c((function(e){a(e)}));var d={pushElement:l,appendChild:function(e,t){e.appendChild(t),l(t)},pushEventListener:u,addEventListener:function(e,t,r){e.addEventListener(t,r),u(e,t,r)},pushCallback:c,teardown:function(){var r;for(r=o.length-1;r>=0;r--)o[r](e);for(o=[],r=0;r<t.length;r++)t[r].parentElement.removeChild(t[r]);for(t=[],r=0;r<i.length;r++){var n=i[r].target,s=i[r].type,a=i[r].listener;n.removeEventListener(s,a)}}};return r[e]=d,n++,d}});var s=function(t){i.roots[t]={},i.roots[t].steps=[];for(var r=e.getElementById(t).querySelectorAll(".step"),s=0;s<r.length;s++){var a=r[s];i.roots[t].steps.push({el:a,id:a.getAttribute("id")})}if(0===n){i.body={},e.body.classList.contains("impress-not-supported")?i.body.impressNotSupported=!0:i.body.impressNotSupported=!1;var o=e.head.querySelectorAll("meta");for(s=0;s<o.length;s++){var l=o[s];"viewport"===l.name&&(i.meta=l.content)}}},a=function(t){e.body.classList.remove("impress-enabled"),e.body.classList.remove("impress-disabled");var s=e.getElementById(t),a=s.querySelector(".active").id;e.body.classList.remove("impress-on-"+a),e.documentElement.style.height="",e.body.style.height="",e.body.style.overflow="";for(var o,l=s.querySelectorAll(".step"),u=0;u<l.length;u++)l[u].classList.remove("future"),l[u].classList.remove("past"),l[u].classList.remove("present"),l[u].classList.remove("active"),l[u].style.position="",l[u].style.transform="",l[u].style["transform-style"]="";for(s.style.position="",s.style["transform-origin"]="",s.style.transition="",s.style["transform-style"]="",s.style.top="",s.style.left="",s.style.transform="",l=i.roots[t].steps;o=l.pop();)null===o.id?o.el.removeAttribute("id"):o.el.setAttribute("id",o.id);delete i.roots[t];var c=s.firstChild.innerHTML;if(s.innerHTML=c,void 0!==r[t]&&(delete r[t],n--),0===n){e.body.classList.remove("impress-supported"),i.body.impressNotSupported&&e.body.classList.add("impress-not-supported");var d=e.head.querySelectorAll("meta");for(u=0;u<d.length;u++){var p=d[u];"viewport"===p.name&&(void 0!==i.meta?p.content=i.meta:p.parentElement.removeChild(p))}}}}(document,window)},function(e,t){!function(e){"use strict";e.addEventListener("impress:init",(function(t){var r=t.detail.api,n=r.lib.gc,i=r.lib.util,s=function(e){return!(e.altKey||e.ctrlKey||e.metaKey)&&(9===e.keyCode||!e.shiftKey&&(e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40||void 0))};n.addEventListener(e,"keydown",(function(e){s(e)&&e.preventDefault()}),!1),n.addEventListener(e,"keyup",(function(e){if(s(e)){if(e.shiftKey)switch(e.keyCode){case 9:r.prev()}else switch(e.keyCode){case 33:case 37:case 38:r.prev(e);break;case 9:case 32:case 34:case 39:case 40:r.next(e)}e.preventDefault()}}),!1),n.addEventListener(e,"click",(function(t){var n=t.target;try{for(;"A"!==n.tagName&&n!==e.documentElement;)n=n.parentNode;if("A"===n.tagName){var i=n.getAttribute("href");i&&"#"===i[0]&&(n=e.getElementById(i.slice(1)))}r.goto(n)&&(t.stopImmediatePropagation(),t.preventDefault())}catch(e){if(e instanceof TypeError&&"target is null"===e.message)return;throw e}}),!1),n.addEventListener(e,"click",(function(t){var n=t.target;try{for(;(!n.classList.contains("step")||n.classList.contains("active"))&&n!==e.documentElement;)n=n.parentNode;r.goto(n)&&t.preventDefault()}catch(e){if(e instanceof TypeError&&"target is null"===e.message)return;throw e}}),!1),i.triggerEvent(e,"impress:help:add",{command:"Left &amp; Right",text:"Previous &amp; Next step",row:1})}),!1)}(document)},function(e,t){!function(e){"use strict";e.addEventListener("impress:init",(function(t){var r=e.body;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&r.classList.add("impress-mobile"),t.detail.api.lib.gc.pushCallback((function(){e.body.classList.remove("impress-mobile");var t=e.getElementsByClassName("prev")[0],r=e.getElementsByClassName("next")[0];void 0!==t&&t.classList.remove("prev"),void 0!==r&&r.classList.remove("next")}))})),e.addEventListener("impress:stepenter",(function(t){var r=e.getElementsByClassName("prev")[0],n=e.getElementsByClassName("next")[0];(function(t){for(var r=e.querySelectorAll(".step"),n=r.length-1;n>=0;n--)if(r[n]===t)return n-1>=0?r[n-1]:r[r.length-1]})(t.target).classList.add("prev"),function(t){for(var r=e.querySelectorAll(".step"),n=0;n<r.length;n++)if(r[n]===t)return n+1<r.length?r[n+1]:r[0]}(t.target).classList.add("next"),void 0!==r&&r.classList.remove("prev"),void 0!==n&&n.classList.remove("next")}))}(document)},function(e,t){!function(e,t){"use strict";e.addEventListener("impress:init",(function(r){var n=r.detail.api;n.lib.gc.addEventListener(t,"resize",n.lib.util.throttle((function(){n.goto(e.querySelector(".step.active"),500)}),250),!1)}),!1)}(document,window)},function(e,t){!function(e,t){"use strict";var r=0,n=0,i=0,s=t.innerHeight/20;e.addEventListener("touchstart",(function(e){n=r=e.touches[0].clientY})),e.addEventListener("touchmove",(function(e){var s=e.touches[0].clientY,a=s-r;i=n-s,n=s,t.impress().swipe(a/t.innerHeight)})),e.addEventListener("touchend",(function(){var a=n-r;Math.abs(a)>t.innerHeight/5&&a*i<=0?a>t.innerHeight/5&&i<=0?t.impress().prev():a<-t.innerHeight/5&&i>=0&&t.impress().next():Math.abs(i)>s?i<-s?t.impress().prev():i>s&&t.impress().next():t.impress().goto(e.querySelector("#impress .step.active"))})),e.addEventListener("touchcancel",(function(){t.impress().goto(e.querySelector("#impress .step.active"))}))}(document,window)},function(e,t){const r=document.querySelector(".hint");"ontouchstart"in document.documentElement?r.innerHTML="Swipe up to start":r.innerHTML="Use a spacebar or arrow keys to navigate"},function(e,t,r){"use strict";r.r(t);r.p,r(1),r.p,r.p,r.p,r(2),r(3),r(4),r(5),r(6),r(7),r(8),r(9);const n=document.getElementById("impress");if(window.innerWidth>768){const e=1.5;n.dataset.height=window.innerHeight*e,n.dataset.width=window.innerWidth*e}impress().init()}]);