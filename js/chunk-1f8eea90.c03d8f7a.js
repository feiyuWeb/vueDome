(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f8eea90"],{4121:function(t,e,a){},"613f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("MV与豆瓣TOP30")]),a("div",{staticClass:"mvBox"},[a("ul",t._l(t.mvList,function(t){return a("li",[a("img",{attrs:{src:t.cover}})])}),0)]),a("div",{staticClass:"topFilm"},[a("h3",[t._v(t._s(t.title))]),a("ul",t._l(t.dataSource,function(e,s){return a("li",{key:s,style:"background:url("+e.images.medium+") no-repeat",on:{click:function(a){t.jump(e)}}},[a("p",[a("span",[t._v(t._s(e.title))]),a("span",[t._v(t._s(e.year))])])])}),0)])])},n=[],i=a("d447"),r={data:function(){return{dataSource:[],mvList:[],title:""}},mounted:function(){console.log(i.data),this.mvList=i.data,this.getFilm()},methods:{getFilm:function(){var t=this;this.jsonp("http://api.douban.com/v2/movie/top250?start=0&count=36",{method:"GET"},function(e,a){if(e)throw new Error(e);console.log(a),t.dataSource=a.subjects,t.title=a.title})},jump:function(t){window.open(t.alt,"_blank")}}},o=r,u=(a("db85"),a("2877")),c=Object(u["a"])(o,s,n,!1,null,"1bcd1998",null);c.options.__file="index.vue";e["default"]=c.exports},d447:function(t){t.exports={updateTime:1544801808289,data:[{id:10840056,cover:"http://p1.music.126.net/1eX-3jEZZZG3xZKCnNgMDQ==/109951163698173550.jpg",name:"Stage第2季 09期  盘尼西林 寒冬里的温暖便利店",playCount:2995922,briefDesc:null,desc:null,artistName:"盘尼西林",artistId:900021,duration:0,mark:0,lastRank:1,score:47071,subed:!1,artists:[{id:900021,name:"盘尼西林"}]},{id:10808948,cover:"http://p1.music.126.net/9oFSHhnMKVZgi2yxRR38Hw==/109951163689387898.jpg",name:"倾城时光",playCount:999469,briefDesc:"电视剧《你和我的倾城时光》浪漫主题曲",desc:null,artistName:"金瀚",artistId:30618494,duration:0,mark:0,lastRank:2,score:36599,subed:!1,artists:[{id:30618494,name:"金瀚"}]},{id:10836089,cover:"http://p1.music.126.net/n2Tm0yTXwwR6YVo9ecP4zA==/109951163711987668.jpg",name:"Higher Brothers_16 Hours",playCount:246774,briefDesc:null,desc:null,artistName:"Higher Brothers",artistId:12002201,duration:0,mark:0,lastRank:10,score:32034,subed:!1,artists:[{id:12002201,name:"Higher Brothers"}]},{id:10808802,cover:"http://p1.music.126.net/Jtl0X0DIz7yhfO-w9vIGLg==/109951163670043745.jpg",name:"天亮以前说再见",playCount:329412,briefDesc:null,desc:null,artistName:"何野",artistId:30471284,duration:0,mark:0,lastRank:3,score:31501,subed:!1,artists:[{id:30471284,name:"何野"}]},{id:10838057,cover:"http://p1.music.126.net/0z2Q96rP7sMMzz3luCr77Q==/109951163699163000.jpg",name:"如果遇见",playCount:546305,briefDesc:null,desc:null,artistName:"孙伯纶",artistId:5022,duration:0,mark:0,lastRank:4,score:21688,subed:!1,artists:[{id:5022,name:"孙伯纶"}]},{id:10808706,cover:"http://p1.music.126.net/echSrSuRcnB0va9p0PJ1wQ==/109951163665268180.jpg",name:"喜新恋旧",playCount:2027138,briefDesc:"Jony J最新MV《喜新恋旧》",desc:null,artistName:"Jony J",artistId:784257,duration:0,mark:0,lastRank:5,score:21480,subed:!1,artists:[{id:784257,name:"Jony J"}]},{id:10808873,cover:"http://p1.music.126.net/MxReOixxxdo1qIQWGOK9cA==/109951163680011325.jpg",name:"云村听歌会 第10期 谢春花： 把昨夜的你谱成明日的梦",playCount:2118320,briefDesc:null,desc:null,artistName:"谢春花",artistId:1039895,duration:0,mark:0,lastRank:6,score:19293,subed:!1,artists:[{id:1039895,name:"谢春花"}]},{id:10808874,cover:"http://p1.music.126.net/N1v_W4k1DSXOM9UUWKHdMw==/109951163680010448.jpg",name:"昨夜梦 今辰你 明日念 Live版",playCount:720323,briefDesc:null,desc:null,artistName:"谢春花",artistId:1039895,duration:0,mark:0,lastRank:7,score:15260,subed:!1,artists:[{id:1039895,name:"谢春花"}]},{id:10831185,cover:"http://p1.music.126.net/-1geADf8EbOtR5Ndp2uYnA==/109951163642051709.jpg",name:"Stage第2季 06期  GALA 了不起的你",playCount:7685520,briefDesc:null,desc:null,artistName:"GALA",artistId:11679,duration:0,mark:0,lastRank:8,score:13963,subed:!1,artists:[{id:11679,name:"GALA"}]},{id:10808763,cover:"http://p1.music.126.net/eToFdoK0egXwhq_Ut1KYkQ==/109951163669319777.jpg",name:"倾城之恋 ",playCount:642759,briefDesc:null,desc:null,artistName:"周华健",artistId:6456,duration:0,mark:0,lastRank:9,score:12882,subed:!1,artists:[{id:6456,name:"周华健"}]}],hasMore:!0,code:200}},db85:function(t,e,a){"use strict";var s=a("4121"),n=a.n(s);n.a}}]);