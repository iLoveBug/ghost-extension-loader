!function(s){var e=s.createElement("link");e.rel="stylesheet",e.type="text/css",e.href="https://cdn.jsdelivr.net/npm/loaders.css@0.1.2",s.getElementsByTagName("head")[0].appendChild(e);var t=s.createElement("script");t.type="text/javascript",t.src="https://cdn.jsdelivr.net/npm/loaders.css@0.1.2/loaders.css.js",s.getElementsByTagName("head")[0].appendChild(t);var a=s.createElement("script");a.type="text/javascript",a.src="https://cdn.jsdelivr.net/npm/vue@2.6.10",s.getElementsByTagName("head")[0].appendChild(a),s.addEventListener("DOMContentLoaded",function(){var e=s.querySelectorAll(".kg-extension-card"),n={};e.forEach(function(e){var t,a=e.getAttribute("script");n[a]?n[a].loaded?new Vue({el:e}):n[a].cards.push(e):(n[a]={loaded:!1,cards:[e]},(t=s.createElement("script")).type="text/javascript",t.onload=function(){for(var e in n[a].loaded=!0,n[a].cards)new Vue({el:n[a].cards[e]})},t.src=a,s.getElementsByTagName("head")[0].appendChild(t))})})}((window,document));
//# sourceMappingURL=extension-loader.js.map