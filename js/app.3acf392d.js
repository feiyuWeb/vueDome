(function(e){function n(n){for(var r,o,c=n[0],i=n[1],f=n[2],l=0,s=[];l<c.length;l++)o=c[l],a[o]&&s.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);h&&h(n);while(s.length)s.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,o=1;o<t.length;o++){var c=t[o];0!==a[c]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1e13abf2":"8fa36e66","chunk-1f8eea90":"c03d8f7a","chunk-2d4caf12":"3336298c","chunk-388681a0":"9c76cf70","chunk-5ad8f2c5":"ef765664","chunk-5bfacbe8":"a6d861e8","chunk-b6d16402":"cd04e399"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-1e13abf2":1,"chunk-1f8eea90":1,"chunk-2d4caf12":1,"chunk-388681a0":1,"chunk-5ad8f2c5":1,"chunk-5bfacbe8":1,"chunk-b6d16402":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise(function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-1e13abf2":"bf69b65f","chunk-1f8eea90":"eb8a7c5e","chunk-2d4caf12":"103e02d2","chunk-388681a0":"e1feece3","chunk-5ad8f2c5":"20867e9f","chunk-5bfacbe8":"5f7722fd","chunk-b6d16402":"52d77af4"}[e]+".css",a=i.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var f=u[c],l=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===r||l===a))return n()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){f=s[c],l=f.getAttribute("data-href");if(l===r||l===a)return n()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=n,h.onerror=function(n){var r=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],h.parentNode.removeChild(h),t(u)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise(function(n,t){r=a[e]=[n,t]});n.push(r[2]=u);var f,l=document.getElementsByTagName("head")[0],s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=c(e),f=function(n){s.onerror=s.onload=null,clearTimeout(h);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,t[1](u)}a[e]=void 0}};var h=setTimeout(function(){f({type:"timeout",target:s})},12e4);s.onerror=s.onload=f,l.appendChild(s)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/vueDome/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var s=0;s<f.length;s++)n(f[s]);var h=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),t("router-link",{attrs:{to:"/about"}},[e._v("douban")]),e._v("|\n    "),t("router-link",{attrs:{to:"/film"}},[e._v("film")]),e._v("|\n    "),t("router-link",{attrs:{to:"/joke"}},[e._v("joke")]),e._v("|\n    "),t("router-link",{attrs:{to:"/music"}},[e._v("music")]),e._v("|\n    "),t("router-link",{attrs:{to:"/video"}},[e._v("video")]),e._v("|\n    "),t("router-link",{attrs:{to:"/moive"}},[e._v("movie")])],1),t("router-view")],1)},a=[],u=(t("7c55"),t("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null);i.options.__file="App.vue";var f=i.exports,l=t("8c4f");r["a"].use(l["a"]);var s=new l["a"]({mode:"hash",base:"/vueDome/",routes:[{path:"/",name:"home",component:function(e){return t.e("chunk-5bfacbe8").then(function(){var n=[t("7abe")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/about",name:"about",component:function(e){return t.e("chunk-1f8eea90").then(function(){var n=[t("613f")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/film",name:"film",component:function(e){return t.e("chunk-388681a0").then(function(){var n=[t("8337")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/joke",name:"joke",component:function(e){return t.e("chunk-2d4caf12").then(function(){var n=[t("35d6")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/moive",name:"moive",component:function(e){return t.e("chunk-1e13abf2").then(function(){var n=[t("ad70")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/music",name:"music",component:function(e){return t.e("chunk-b6d16402").then(function(){var n=[t("aa6a")];e.apply(null,n)}.bind(this)).catch(t.oe)}},{path:"/video",name:"video",component:function(e){return t.e("chunk-5ad8f2c5").then(function(){var n=[t("007b")];e.apply(null,n)}.bind(this)).catch(t.oe)}}]}),h=t("2f62");r["a"].use(h["a"]);var p=new h["a"].Store({state:{},mutations:{},actions:{}}),d=t("bc3a"),v=t.n(d),m=t("f2e8"),b=t.n(m);r["a"].config.productionTip=!1,r["a"].prototype.axios=v.a,r["a"].prototype.jsonp=b.a,new r["a"]({router:s,store:p,render:function(e){return e(f)}}).$mount("#app")},"5c48":function(e,n,t){},"7c55":function(e,n,t){"use strict";var r=t("5c48"),o=t.n(r);o.a}});