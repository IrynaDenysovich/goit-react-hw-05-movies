"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[357],{8830:function(e,t,r){r.d(t,{Hx:function(){return v},Ny:function(){return p},Tg:function(){return o},on:function(){return i},xc:function(){return f}});var n=r(5861),a=r(4687),u=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="f42f2f62d598d39d316744d8859de3e9",i=function(){var e=(0,n.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie",{params:{query:t,api_key:s,page:r}});case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day",{params:{api_key:s}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t),{params:{api_key:s}});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6357:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),u=r(4687),c=r.n(u),s=r(2791),i=r(7689),o=r(8830),p=r(184);t.default=function(){var e=(0,i.UO)().moviesId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),u=r[0],f=r[1],v=(0,s.useState)(""),d=(0,a.Z)(v,2),h=d[0],l=d[1];return(0,s.useEffect)((function(){function t(){return(t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Hx)(e);case 3:r=t.sent,f(r.slice(0,5)),l(0===r.length?"We don't have any reviews for this movie.":""),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}l("Loading..."),function(){t.apply(this,arguments)}()}),[e]),(0,p.jsxs)("div",{children:[h.length>0&&(0,p.jsx)("div",{children:h}),(0,p.jsx)("ul",{children:u.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,p.jsxs)("li",{children:[(0,p.jsx)("h3",{children:t}),(0,p.jsx)("p",{children:r})]},n)}))})]})}}}]);
//# sourceMappingURL=357.ccaf2adf.chunk.js.map