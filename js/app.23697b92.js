(function(t){function e(e){for(var n,i,o=e[0],l=e[1],u=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},s=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/stuff/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view",{staticClass:"style-router"})],1)},s=[],i={name:"App"},o=i,l=(r("034f"),r("2877")),u=Object(l["a"])(o,a,s,!1,null,null,null),c=u.exports,f=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{staticClass:"nav-bar",attrs:{url:"/anasaraid",text:"about"}}),r("header-info",{attrs:{title:"Stuff"}}),t._m(0),r("br"),r("div",{staticStyle:{"text-align":"center"}},[r("router-link",{staticClass:"style-link",staticStyle:{"font-size":"1.4rem"},attrs:{to:"/articles"}},[t._v("Articles")]),r("br"),r("router-link",{staticClass:"style-link",staticStyle:{"font-size":"1.4rem"},attrs:{to:"/guides"}},[t._v("Guides")])],1),t._m(1)],1)},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("p",[t._v("Just some random articles written in order to stay "),r("i",[t._v('"su co le rece"'),r("sup",[t._v("1")])]),t._v(" with latest technologies.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("i",[r("sup",[t._v("1")]),t._v(" stay up to date in Trentino dialect")]),r("br"),r("span",[t._v("Built using "),r("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(", "),r("a",{attrs:{href:"https://edwardtufte.github.io/tufte-css/"}},[t._v("tufte.css")]),t._v(", open sourced and deployed on "),r("a",{attrs:{href:"https://github.com/asdf1899/stuff/"}},[t._v("Github")])])])}],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("h1",[t._v(t._s(t.title))]),r("h4",[r("i",[t._v(t._s(t.date))])])])},v=[],m={name:"Header",props:["title","date"]},g=m,_=Object(l["a"])(g,p,v,!1,null,null,null),b=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[this.isUrl?r("a",{attrs:{href:t.backUrl}},[t._v("about")]):t._e(),0==this.isUrl?r("router-link",{attrs:{to:t.backUrl}},[t._v(t._s(this.NavbarText))]):t._e(),t._v(" | "),r("a",{staticClass:"style-link",on:{click:function(e){return t.toggle()}}},[t._v(" "+t._s(this.toggleText)+" ")])],1)},x=[],k={name:"NavBar",props:["url","text"],data:function(){var t=this.text,e=!1,r=this.url,n="dark mode";"/anasaraid"==r?(e=!0,r="https://anasaraid.me"):e=!1;var a=document.querySelector("#dark-theme-style");return n=a?"light mode":"dark mode",{backUrl:r,isUrl:e,NavbarText:t,toggleText:n}},methods:{toggle:function(){var t=document.querySelector("#dark-theme-style");t?this.setLight():this.setDark()},setDark:function(){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("href","/stuff/css/darktheme.css"),t.setAttribute("id","dark-theme-style");var e=document.querySelector("head");e.append(t),document.querySelector("#theme-color").content="#212121",this.toggleText="light mode"},setLight:function(){var t=document.querySelector("#dark-theme-style"),e=t.parentNode;e.removeChild(t),document.querySelector("#theme-color").content="#fffff8",this.toggleText="dark mode"}}},w=k,j=Object(l["a"])(w,y,x,!1,null,null,null),S=j.exports,C={name:"Homepage",components:{"nav-bar":S,"header-info":b}},O=C,E=Object(l["a"])(O,d,h,!1,null,null,null),$=E.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{staticClass:"nav-bar",attrs:{url:this.url,text:"back"}}),r("br"),r("header-info",{attrs:{title:t.currentArticle.title,date:t.currentArticle.date}}),r("br"),t.isMobile?r("vue-markdown",{key:this.refresh,staticStyle:{"text-align":"left!important"}},[t._v(t._s(this.fileContent))]):r("vue-markdown",{key:this.refresh,staticStyle:{"text-align":"justify!important","text-justify":"inter-word"}},[t._v(t._s(this.fileContent))]),this.errored?r("div",{key:this.refresh,staticStyle:{"text-align":"center"}},[r("h3",[t._v("Internal Error (Content not found)")])]):t._e()],1)},T=[],P=(r("4de4"),r("baa5"),r("d3b7"),r("9ce6")),G=r.n(P),M=r("9029"),U=r("bc3a"),q=r.n(U),B={name:"Content",components:{"nav-bar":S,"vue-markdown":G.a,"header-info":b},props:{id:{type:String}},data:function(){var t=this.$router.currentRoute.fullPath;return t=t.substring(0,t.lastIndexOf("/")),{isMobile:M["isMobile"],url:t,currentArticle:[],fileContent:"",refresh:0,errored:!1}},mounted:function(){var t=this,e="https://anasaraid.me/stuff-data/markdowns/"+this.id+".md";q.a.get(e).then((function(e){t.fileContent=e.data,t.refresh+=1})).catch((function(e){console.log(e),t.errored=!0,t.refresh+=1})).finally((function(){return t.loading=!1})),q.a.get("https://anasaraid.me/stuff-data/articles.json").then((function(e){t.currentArticle=e.data.filter((function(e){return e.id==t.id}))[0],t.refresh+=1})).catch((function(e){console.log(e),t.errored=!0,t.refresh+=1})).finally((function(){return t.loading=!1}))}},N=B,H=Object(l["a"])(N,A,T,!1,null,null,null),I=H.exports,L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{staticClass:"nav-bar",attrs:{url:"/",text:"home"}}),r("header-info",{attrs:{title:"Guides"}}),t._m(0),r("articles-list",{key:this.refresh,attrs:{articles:t.guides.slice().reverse()}}),this.errored?r("div",{key:this.refresh,staticStyle:{"text-align":"center"}},[r("h3",[t._v("Internal Error (Content not found)")])]):t._e(),t._m(1)],1)},D=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("p",[t._v("Development guides geared towards Computer Science and Web Programming.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("span",[t._v("Built using "),r("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(", "),r("a",{attrs:{href:"https://edwardtufte.github.io/tufte-css/"}},[t._v("tufte.css")]),t._v(", open sourced and deployed on "),r("a",{attrs:{href:"https://github.com/asdf1899/stuff/"}},[t._v("Github")])])])}],J=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"max-height":"500px",overflow:"auto"}},[r("ul",{staticStyle:{"text-align":"center",display:"table",margin:"0 auto","margin-top":"15px"}},t._l(t.articles,(function(e){return r("li",{key:e.title,staticStyle:{"list-style":"upper-roman","text-align":"left"}},[r("router-link",{attrs:{to:t.$route.path+"/"+e.id}},[t._v(t._s(e.title))])],1)})),0)])},V=[],z={name:"NavBar",props:{articles:{type:Array}}},R=z,W=Object(l["a"])(R,J,V,!1,null,null,null),F=W.exports,K={name:"Guides",components:{"articles-list":F,"nav-bar":S,"header-info":b},data:function(){return{guides:[],refresh:0,errored:!1}},mounted:function(){var t=this,e="https://anasaraid.me/stuff-data/articles.json";q.a.get(e).then((function(e){var r=e.data,n=r.filter((function(t){return"guides"==t.tag}));t.guides=n,t.refresh+=1})).catch((function(e){console.log(e),t.errored=!0,t.refresh+=1})).finally((function(){return t.loading=!1}))}},Q=K,X=Object(l["a"])(Q,L,D,!1,null,null,null),Y=X.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav-bar",{staticClass:"nav-bar",attrs:{url:"/",text:"home"}}),r("header-info",{attrs:{title:"Articles"}}),t._m(0),r("articles-list",{key:this.refresh,attrs:{articles:t.articles.slice().reverse()}}),this.errored?r("div",{key:this.refresh,staticStyle:{"text-align":"center"}},[r("h3",[t._v("Internal Error (Content not found)")])]):t._e(),t._m(1)],1)},tt=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{"text-align":"center"}},[r("p",[t._v("Random articles about personal experiences, self improvement and latest tech stacks.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer"},[r("span",[t._v("Built using "),r("a",{attrs:{href:"https://vuejs.org/"}},[t._v("Vue.js")]),t._v(", "),r("a",{attrs:{href:"https://edwardtufte.github.io/tufte-css/"}},[t._v("tufte.css")]),t._v(", open sourced and deployed on "),r("a",{attrs:{href:"https://github.com/asdf1899/stuff/"}},[t._v("Github")])])])}],et={name:"Articles",components:{"articles-list":F,"nav-bar":S,"header-info":b},data:function(){return{articles:[],refresh:0,errored:!1}},mounted:function(){var t=this,e="https://anasaraid.me/stuff-data/articles.json";q.a.get(e).then((function(e){var r=e.data,n=r.filter((function(t){return"articles"==t.tag}));t.articles=n,t.refresh+=1})).catch((function(e){console.log(e),t.errored=!0,t.refresh+=1})).finally((function(){return t.loading=!1}))}},rt=et,nt=Object(l["a"])(rt,Z,tt,!1,null,null,null),at=nt.exports;n["a"].use(f["a"]);var st=new f["a"]({routes:[{path:"/",name:"Homepage",component:$,meta:{title:"Stuff - Homepage",metaTags:[{name:"description",content:"Lightweight personal journal that parse markdown writing into articles."},{property:"og:description",content:"Lightweight personal journal that parse markdown writing into articles."}]}},{path:"/guides",name:"Guides",component:Y},{path:"/articles",name:"Article",component:at},{path:"/articles/:id",name:"ArticleContent",component:I,props:!0},{path:"/guides/:id",name:"GuideContent",component:I,props:!0}]}),it=r("0284"),ot=r.n(it);n["a"].config.productionTip=!1,n["a"].use(ot.a,{id:"UA-118641473-2",router:st}),new n["a"]({el:"#app",router:st,render:function(t){return t(c)}})},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.23697b92.js.map