(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),i=n.n(r),o=(n(14),n(6)),a=n.n(o),u=n(8),l=n(4),h=(n(16),n(0)),j=function(e){var t=e.loadResults;return Object(h.jsxs)("div",{className:"search box",children:[Object(h.jsx)("h1",{children:"The Shoppies"}),Object(h.jsx)("p",{children:"Search for your favorite movie. "}),Object(h.jsx)("input",{onChange:function(e){e.preventDefault(),t(e.target.value)},type:"text",placeholder:"Enter title or keyword"})]})},d=function(e){var t=e.noms,n=e.setNoms,c=e.setBanner;function s(e){n((function(t){return t.filter((function(t){return t!==e}))})),t.length<=5&&c(!1)}return Object(h.jsxs)("div",{className:"container box",children:[Object(h.jsxs)("h2",{children:["Nominations ",Object(h.jsx)("span",{children:"(up to five)"})]}),t.length?function(e){var t=e.map((function(e,t){return Object(h.jsxs)("li",{children:[e,Object(h.jsx)("button",{onClick:function(){return s(e)},children:"Delete"})]},t)}));return Object(h.jsx)("div",{className:"noms-list",children:Object(h.jsx)("ul",{children:t})})}(t):Object(h.jsx)("p",{children:"There are no nominations to show - add some from the search results!"})]})},b=n(9),f=function(e){var t=e.results,n=e.setNoms,c=e.noms,s=e.setBanner;return Object(h.jsxs)("div",{className:"container box",children:[Object(h.jsx)("h2",{children:"Search Results"}),t.length?function(e){var t=e.map((function(e,t){var r=!1;return function(e,t){if(t.includes(e))return!0}(e,c)&&(r=!0),Object(h.jsxs)("li",{children:[e,Object(h.jsx)("button",{disabled:r,onClick:function(){return function(e){c.length>=5?s(!0):n((function(t){return[].concat(Object(b.a)(t),[e])}))}(e)},children:"Nominate"})]},t)}));return Object(h.jsx)("div",{className:"results-list",children:Object(h.jsx)("ul",{children:t})})}(t):Object(h.jsx)("p",{children:"No results to show - enter one in the search (or check your spelling!)"})]})},p=function(){var e="7cdec98b",t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(c.useState)([]),o=Object(l.a)(i,2),b=o[0],p=o[1],O=Object(c.useState)(!1),x=Object(l.a)(O,2),m=x[0],v=x[1];function g(){return(g=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://www.omdbapi.com/?s=".concat(n,"&apikey=").concat(e)).then((function(e){return e.json()})).then((function(e){if(e.Search){var t=[];e.Search.forEach((function(e){var n=e.Title,c=e.Year,s="".concat(n," (").concat(c,")");t.push(s)})),r([].concat(t))}else r([])}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"App",children:[m&&Object(h.jsx)("div",{class:"warning-banner",children:Object(h.jsx)("p",{children:m?"You already have five nominees!":""})}),Object(h.jsx)(j,{loadResults:function(e){return g.apply(this,arguments)}}),Object(h.jsxs)("div",{className:"results-nominations",children:[Object(h.jsx)(f,{results:s,setNoms:p,noms:b,setBanner:v}),Object(h.jsx)(d,{noms:b,setNoms:p,setBanner:v})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};i.a.render(Object(h.jsxs)(s.a.StrictMode,{children:[Object(h.jsx)(p,{}),","]}),document.getElementById("root")),O()}},[[18,1,2]]]);
//# sourceMappingURL=main.4434bb24.chunk.js.map