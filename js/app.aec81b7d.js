(function(e){function t(t){for(var o,r,c=t[0],i=t[1],l=t[2],f=0,d=[];f<c.length;f++)r=c[f],a[r]&&d.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);s&&s(t);while(d.length)d.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a={app:0},u=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0107df88":"e76a7d68","chunk-1467f88d":"b42f0c4d","chunk-19e6c250":"a0cb89d9","chunk-27c4a4c0":"db8f0562","chunk-34443ce6":"5d552d3e","chunk-502e3a14":"158e91de","chunk-572d3aa7":"0658c1e3","chunk-64d2b1ad":"5b36a54f"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-0107df88":1,"chunk-1467f88d":1,"chunk-19e6c250":1,"chunk-27c4a4c0":1,"chunk-34443ce6":1,"chunk-502e3a14":1,"chunk-572d3aa7":1,"chunk-64d2b1ad":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-0107df88":"f5e1d0be","chunk-1467f88d":"ad7e76bc","chunk-19e6c250":"8ceb96fc","chunk-27c4a4c0":"996a8d37","chunk-34443ce6":"e9230789","chunk-502e3a14":"464c7d59","chunk-572d3aa7":"b224ec2b","chunk-64d2b1ad":"f84dba82"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=u[c],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===o||f===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],f=l.getAttribute("data-href");if(f===o||f===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");u.request=o,delete r[e],s.parentNode.removeChild(s),n(u)},s.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(s)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var u=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=u);var l,f=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=c(e),l=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,n[1](u)}a[e]=void 0}};var s=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,f.appendChild(d)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vueDome/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v("|\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("douban")]),e._v("|\n    "),n("router-link",{attrs:{to:"/film"}},[e._v("film")]),e._v("|\n    "),n("router-link",{attrs:{to:"/joke"}},[e._v("joke")]),e._v("|\n    "),n("router-link",{attrs:{to:"/music"}},[e._v("music")]),e._v("|\n    "),n("router-link",{attrs:{to:"/video"}},[e._v("video")]),e._v("|\n    "),n("router-link",{attrs:{to:"/moive"}},[e._v("movie")]),e._v("|\n    "),n("router-link",{attrs:{to:"/viewImg?id=666"}},[e._v("viewImage")])],1),n("router-view")],1)},a=[],u=(n("7c55"),n("2877")),c={},i=Object(u["a"])(c,r,a,!1,null,null,null);i.options.__file="App.vue";var l=i.exports,f=n("8c4f");o["default"].use(f["a"]);var d,s=new f["a"]({mode:"hash",base:"/vueDome/",routes:[{path:"/",name:"home",component:function(e){return n.e("chunk-27c4a4c0").then(function(){var t=[n("7abe")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/about",name:"about",component:function(e){return n.e("chunk-19e6c250").then(function(){var t=[n("613f")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/film",name:"film",component:function(e){return n.e("chunk-502e3a14").then(function(){var t=[n("8337")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/joke",name:"joke",component:function(e){return n.e("chunk-572d3aa7").then(function(){var t=[n("35d6")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/moive",name:"moive",component:function(e){return n.e("chunk-64d2b1ad").then(function(){var t=[n("ad70")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/music",name:"music",component:function(e){return n.e("chunk-1467f88d").then(function(){var t=[n("aa6a")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/video",name:"video",component:function(e){return n.e("chunk-0107df88").then(function(){var t=[n("007b")];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/viewImg",name:"viewImg",component:function(e){return n.e("chunk-34443ce6").then(function(){var t=[n("1ae0")];e.apply(null,t)}.bind(this)).catch(n.oe)}}]}),p=n("ade3"),h=n("2f62");o["default"].use(h["a"]);var m=new h["a"].Store({state:{num:10,time:(new Date).getTime()},mutations:(d={},Object(p["a"])(d,"addNum",function(e,t){e.num+=t.number}),Object(p["a"])(d,"getTime",function(e,t){e.time=(new Date).toLocaleTimeString()}),d),actions:{}}),v=n("bc3a"),b=n.n(v),k=n("f2e8"),g=n.n(k),y=n("5c96"),w=n.n(y),_=n("323e"),j=n.n(_),T=n("283e"),O=n.n(T);n("0fae"),n("a5d8");o["default"].config.productionTip=!1,o["default"].prototype.axios=b.a,o["default"].prototype.jsonp=g.a,o["default"].use(w.a),o["default"].use(O.a,{preLoad:1.3,error:"http://bpic.588ku.com/element_pic/00/16/09/0957d2353800e6e.jpg",loading:"https://loading.io/spinners/comets/lg.comet-spinner.gif",attempt:1}),s.beforeEach(function(e,t,n){j.a.start(e,t,n),setTimeout(function(){return n()},300)}),s.afterEach(function(e){j.a.done(),j.a.remove()}),o["default"].directive("drag",{bind:function(e,t){e.onmousedown=function(n){var o=n.clientX-e.offsetLeft,r=n.clientY-e.offsetTop;return document.onmousemove=function(n){var a=n.clientX-o,u=n.clientY-r;t.modifiers.limit&&(a<0&&(a=0),u<0&&(u=0)),e.style.left=a+"px",e.style.top=u+"px"},document.onmouseup=function(e){document.onmousemove=null},!1}}}),o["default"].use({install:function(e){e.prototype.$eventBus=new e}}),new o["default"]({router:s,store:m,render:function(e){return e(l)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var o=n("5c48"),r=n.n(o);r.a}});