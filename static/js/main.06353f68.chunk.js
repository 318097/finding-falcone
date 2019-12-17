(this["webpackJsonpfinding-falcone"]=this["webpackJsonpfinding-falcone"]||[]).push([[0],{41:function(e,t,n){e.exports=n(81)},46:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(32),l=n.n(r),o=(n(46),n(47),n(12)),s=n(8),u=n(9),i=n.n(u),m=function(){return c.a.createElement("header",null,c.a.createElement("h3",null,"Finding ",c.a.createElement("span",null,"Falcone!")))},p=function(){return c.a.createElement("footer",null,"Coding problem - www.geektrust.in/finding-falcone")},d=n(14),f=n(16),b=n(7),E=n.n(b),v=n(4),h=n(33),j=n(34),g=n(15),O=n.n(g),y=function(e){var t=e.id,n=e.planets,r=void 0===n?[]:n,l=e.selectedPlanet,o=void 0===l?{name:"default",distance:null}:l,s=e.vehicles,u=void 0===s?[]:s,i=e.selectedVehicle,m=void 0===i?{name:null}:i,p=e.setData,d=Object(a.useState)(!1),f=Object(v.a)(d,2),b=f[0],E=f[1],h=function(e){var n=e.target.value,a=u.find((function(e){return e.name===n}));p("VEHICLES","input".concat(t),a)};return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",null,"Destination ",t),c.a.createElement("select",{value:o.name,placeholder:"Select Planet",onChange:function(e){var n=e.target.value,a=r.find((function(e){return e.name===n}));p("PLANETS","input".concat(t),a),E(!0)}},c.a.createElement("option",{disabled:!0,value:"default"},"Select"),r.map((function(e){var t=e.name;return c.a.createElement("option",{key:t,value:t},t)}))),c.a.createElement("br",null),b&&c.a.createElement("div",null,u.map((function(e,n){var a=e.name,r=e.total_no,l=e.max_distance,s=m.name!==e.name&&r<=0||o.distance>l;return c.a.createElement("label",{key:a,htmlFor:"radio".concat(t).concat(n),className:"paper-radio"},c.a.createElement("input",{disabled:s,onChange:h,type:"radio",name:"paperRadio".concat(t),id:"radio".concat(t).concat(n),value:a}),c.a.createElement("span",{className:"".concat(s&&"disable-radio-button")},a,"(",Math.max(0,r),")"))})))))},w=function(e){var t=e.message;return c.a.createElement("div",{className:"alert-box"},c.a.createElement("div",{class:"alert alert-danger"},t))},S=function(e){return sessionStorage.setItem("falconeToken",e)},k=function(e){return Object.values(e).map((function(e){return e.name}))};function N(){var e=Object(h.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return N=function(){return e},e}var x=j.a.div(N()),C=Array(4).fill(0),F=Object(s.g)((function(e){var t=e.history,n=Object(a.useState)([]),r=Object(v.a)(n,2),l=r[0],o=r[1],s=Object(a.useState)([]),u=Object(v.a)(s,2),m=u[0],p=u[1],b=Object(a.useState)({}),h=Object(v.a)(b,2),j=h[0],g=h[1],N=Object(a.useState)({}),F=Object(v.a)(N,2),T=F[0],P=F[1],_=Object(a.useState)(0),A=Object(v.a)(_,2),I=A[0],L=A[1],D=Object(a.useState)(!1),R=Object(v.a)(D,2),V=R[0],B=R[1],H=Object(a.useState)(!1),J=Object(v.a)(H,2),W=J[0],K=J[1],M=Object(a.useState)(null),U=Object(v.a)(M,2),$=U[0],q=U[1];Object(a.useEffect)((function(){var e=function(){var e,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(i.a.get("/planets"));case 2:e=n.sent,t=e.data,o(t);case 5:case"end":return n.stop()}}))},t=function(){var e,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.awrap(i.a.get("/vehicles"));case 2:e=n.sent,t=e.data,p(t);case 5:case"end":return n.stop()}}))};!function(){var n,a;E.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,E.a.awrap(i.a.post("/token",{},{headers:{Accept:"application/json"}}));case 2:n=c.sent,a=n.data.token,S(a),e(),t();case 7:case"end":return c.stop()}}))}()}),[]),Object(a.useEffect)((function(){!function(){var e=0;C.forEach((function(t,n){var a=T["input".concat(n+1)],c=j["input".concat(n+1)];a&&c&&(e+=c.distance/a.speed)})),L(e)}()}),[j,T]),Object(a.useEffect)((function(){var e=C.reduce((function(e,t,n){return e||!T["input".concat(n+1)]}),!1);B(e)}),[T]);var z=function(e,t,n){"PLANETS"===e?g((function(e){return Object(f.a)({},e,Object(d.a)({},t,n))})):P((function(e){return Object(f.a)({},e,Object(d.a)({},t,n))}))};return c.a.createElement(a.Fragment,null,$&&c.a.createElement(w,{message:$}),c.a.createElement("section",null,c.a.createElement("h4",null,"Select the planets you want to search in:"),c.a.createElement(x,null,C.map((function(e,t){var n=l.filter((function(e){var n=k(j);return!(!j["input".concat(t+1)]||j["input".concat(t+1)].name!==e.name)||!n.includes(e.name)})),a=m.map((function(e){for(var n=0,a=1;a<=t+1;a++)T["input".concat(a)]&&T["input".concat(a)].name===e.name&&n++;return Object(f.a)({},e,{total_no:e.total_no-n})}));return c.a.createElement(y,{key:t,id:t+1,planets:n,selectedPlanet:j["input".concat(t+1)],vehicles:a,selectedVehicle:T["input".concat(t+1)],setData:z})}))),c.a.createElement("br",null),c.a.createElement("p",{className:"bold"},"Time taken: ",I),c.a.createElement("button",{disabled:V,className:"submit-button paper-btn btn-success",onClick:function(){var e,n,a,c;return E.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return K(!0),B(!0),r.prev=2,e={token:sessionStorage.getItem("falconeToken"),planet_names:k(j),vehicle_names:k(T)},r.next=6,E.a.awrap(i.a.post("/find",e,{headers:{Accept:"application/json","Content-Type":"application/json"}}));case 6:n=r.sent,a=n.data,c=O.a.stringify({planetName:a.planet_name,totalTime:I,success:a.status}),t.push("/results?".concat(c)),r.next=16;break;case 12:r.prev=12,r.t0=r.catch(2),q("Error: Refresh page or try again later."),setTimeout((function(){return q(null)}),3e3);case 16:return r.prev=16,K(!1),B(!1),r.finish(16);case 20:case"end":return r.stop()}}),null,null,[[2,12,16,20]])}},c.a.createElement("span",null,"Find Falcone"),W&&c.a.createElement("div",{className:"loader"}))))})),T=Object(s.g)((function(e){var t=e.history,n=e.location,r=Object(a.useState)({}),l=Object(v.a)(r,2),o=l[0],s=l[1];return Object(a.useEffect)((function(){var e=O.a.parse(n.search);s(e)}),[n]),c.a.createElement("section",null,o.success&&"false"!==o.success?c.a.createElement("div",null,c.a.createElement("p",null,"Success! Congratulations on Finding Falcone. King Shan is mighty pleased."),c.a.createElement("span",{className:"bold"},"Time taken: ",c.a.createElement("span",{className:"success"},o.totalTime)),c.a.createElement("br",null),c.a.createElement("span",{className:"bold"},"Planet found: ",c.a.createElement("span",{className:"success"},o.planetName))):c.a.createElement("div",null,c.a.createElement("p",null,"Failed! Could not find Falcone in targeted destinations.")),c.a.createElement("br",null),c.a.createElement("button",{className:"btn-success",onClick:function(){return t.push("/home")}},"Start Again"))})),P=Object(s.g)((function(e){var t=e.history;return c.a.createElement("section",{id:"not-found"},c.a.createElement("div",null,c.a.createElement("p",null,"404 - Page not found"),c.a.createElement("button",{className:"btn-primary",onClick:function(){return t.push("/")}},"Home")))}));i.a.defaults.baseURL="https://findfalcone.herokuapp.com";var _=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(m,null),c.a.createElement(o.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/home",exact:!0,component:F}),c.a.createElement(s.b,{path:"/results",exact:!0,component:T}),c.a.createElement(s.b,{path:"/",exact:!0,render:function(){return c.a.createElement(s.a,{to:"/home"})}}),c.a.createElement(s.b,{component:P}))),c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.06353f68.chunk.js.map