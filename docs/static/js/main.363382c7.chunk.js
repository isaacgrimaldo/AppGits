(this.webpackJsonpreactgif=this.webpackJsonpreactgif||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(8),i=n.n(c),r=(n(15),n(2)),s=n(5),u=n(0),o=function(e){var t=e.AddSerieHook,n=Object(a.useState)(" "),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2?(t((function(e){return[i].concat(Object(s.a)(e))})),o("")):console.log("aaaaaa malll")},children:[Object(u.jsx)("p",{children:"Ingrese una nueva serie"}),Object(u.jsx)("input",{type:"text",onChange:function(e){o((function(t){return e.target.value}))},placeholder:"El nombre de una serie",value:i})]})},j=n(10),d=function(e){e.id;var t=e.gif,n=e.title;return Object(u.jsxs)("div",{className:"gif-cpntent animate__animated animate__fadeInUp animate__fast ",children:[Object(u.jsx)("img",{src:t,alt:n,className:"animate__animated animate__backInDown"}),Object(u.jsx)("p",{className:"animate__animated animate__fadeInDownBig animate__slow",children:n})]})},l=n(7),m=n.n(l),f=n(9),b=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,a,c,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=18&q=".concat(encodeURI(t),"&api_key=BvVSkWPflAOjzoBRdJqFICzCh2eWayUw"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,i=c.data,r=i.map((function(e){return{id:e.id,title:e.title,gif:e.images.downsized_medium.url}})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=Object(a.useState)({Data:[],load:!1}),n=Object(r.a)(t,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){setTimeout((function(){b(e).then((function(e){i({Data:Object(s.a)(e),load:!0})}))}),2200)}),[e]),c},h=function(e){var t=e.Series,n=O(t),a=n.Data,c=n.load;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:t}),c?"":Object(u.jsx)("p",{className:"animate__animated animate__fadeOutDown animate__delay-2s",children:"Cargando Gits...."}),Object(u.jsx)("div",{className:"box-Gifs",children:a.map((function(e){return Object(u.jsx)(d,Object(j.a)({},e),e.id)}))})]})},p=function(){var e=Object(a.useState)(["re:zero"]),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Git load"}),Object(u.jsx)("hr",{}),Object(u.jsx)(o,{AddSerieHook:c}),Object(u.jsx)("ul",{children:n.map((function(e){return Object(u.jsx)(h,{Series:e},e)}))})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.363382c7.chunk.js.map