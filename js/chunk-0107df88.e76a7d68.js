(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0107df88"],{"007b":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"video"}},[n("div",{staticClass:"box"},[n("ul",t._l(t.dataSource,function(e,o){return"followCard"===e.type?n("li",{key:o,style:"background:url("+e.data.content.data.cover.detail+") no-repeat"},[n("img",{staticClass:"pic",attrs:{src:r("fd0d")},on:{click:function(r){return t.play(e,o)}}}),n("div",{staticClass:"text"},[n("h3",[t._v(t._s(e.data.content.data.title))]),n("p",[t._v(t._s(e.data.content.data.description))])])]):t._e()}),0)]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"model",on:{click:function(e){return t.close(e)}}},[n("div",{staticClass:"player"},[n("video",{ref:"videoPlay",attrs:{controls:"",preload:"",autoplay:"",src:t.videoSrc,poster:t.picture,color:"#000000"}}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.leftShow,expression:"leftShow"}],staticClass:"left",on:{click:t.left}},[n("img",{attrs:{src:r("f64e")}})]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.rightShow,expression:"rightShow"}],staticClass:"right",on:{click:t.right}},[n("img",{attrs:{src:r("d2ff")}})])])])])},o=[],i=(r("96cf"),r("1da1")),a=(r("cadf"),r("551c"),r("097d"),{data:function(){return{visible:!1,videoSrc:"",currentIndex:0,dataSource:[]}},created:function(){this.getVideo()},mounted:function(){var t=this;document.onkeydown=function(e){var r=e||window.event,n=t.$refs.videoPlay;if(console.log(r.keyCode),32===r.keyCode)n.paused?n.play():n.pause();else if(13===r.keyCode){console.log(document.webkitIsFullScreen);document.documentElement;document.webkitIsFullScreen?document.webkitCancelFullScreen():n.webkitRequestFullScreen()}n.addEventListener("ended",function(){document.webkitCancelFullScreen()},!1)}},computed:{leftShow:function(){return 1!==this.currentIndex},rightShow:function(){return this.currentIndex!==this.dataSource.length-1},picture:function(){if(this.visible&&this.dataSource[this.currentIndex].data.content)return this.dataSource[this.currentIndex].data.content.data.cover.detail}},methods:{getVideo:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios({url:"https://api.apiopen.top/todayVideo",method:"GET",data:{}});case 2:e=t.sent,200==e.status?this.dataSource=e.data.result:console.log(e);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),play:function(t,e){this.visible=!0,this.videoSrc=t.data.content.data.playUrl,this.currentIndex=e},close:function(t){"model"===t.target.className&&(this.visible=!1,this.$refs.videoPlay.pause())},left:function(){this.currentIndex--,this.dataSource[this.currentIndex].data.content&&(this.videoSrc=this.dataSource[this.currentIndex].data.content.data.playUrl)},right:function(){this.currentIndex++,this.dataSource[this.currentIndex].data.content&&(this.videoSrc=this.dataSource[this.currentIndex].data.content.data.playUrl)}}}),c=a,u=(r("ccaf"),r("2877")),s=Object(u["a"])(c,n,o,!1,null,"517458b0",null);s.options.__file="index.vue";e["default"]=s.exports},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return o})},"7edb":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",s="object"===typeof t,h=e.regeneratorRuntime;if(h)s&&(t.exports=h);else{h=e.regeneratorRuntime=s?t.exports:{},h.wrap=A;var l="suspendedStart",f="suspendedYield",d="executing",p="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(Y([])));m&&m!==n&&o.call(m,a)&&(g=m);var w=S.prototype=I.prototype=Object.create(g);k.prototype=w.constructor=S,S.constructor=k,S[u]=k.displayName="GeneratorFunction",h.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===k||"GeneratorFunction"===(e.displayName||e.name))},h.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},h.awrap=function(t){return{__await:t}},b(E.prototype),E.prototype[c]=function(){return this},h.AsyncIterator=E,h.async=function(t,e,r,n){var o=new E(A(t,e,r,n));return h.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},b(w),w[u]="Generator",w[a]=function(){return this},w.toString=function(){return"[object Generator]"},h.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},h.values=Y,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:Y(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function A(t,e,r,n){var o=e&&e.prototype instanceof I?e:I,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=D(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function I(){}function k(){}function S(){}function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var u=c.arg,s=u.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(s).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(c.arg)}var r;function n(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=n}function D(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return C()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=x(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function j(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,j(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function B(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(B,this),this.reset(!0)}function Y(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},ccaf:function(t,e,r){"use strict";var n=r("7edb"),o=r.n(n);o.a},d2ff:function(t,e,r){t.exports=r.p+"img/right.5a516215.png"},f64e:function(t,e){t.exports="data:image/png;base64,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"},fd0d:function(t,e,r){t.exports=r.p+"img/playing.5cc30f65.png"}}]);