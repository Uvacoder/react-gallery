(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports={name:"react-gallery",version:"1.0.0",description:"",keywords:[],license:"MIT",author:"Adi Sahar",main:"src/index.jsx",homepage:"https://adi518.github.io/react-gallery",dependencies:{"@material-ui/core":"^4.9.0",classnames:"^2.2.6","cross-fetch":"3.0.4",lodash:"^4.17.15",react:"16.8.4","react-dom":"16.8.4","react-modal":"^3.11.1","react-redux":"7.1.3","react-scripts":"2.1.3","react-use":"^13.22.3",redux:"4.0.5","redux-actions":"2.6.5","redux-devtools-extension":"2.13.8","redux-thunk":"^2.3.0"},devDependencies:{"gh-pages":"^2.2.0"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject",predeploy:"yarn build",deploy:"node ./gh-pages"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}},27:function(e,t,a){e.exports=a.p+"static/media/pusheencat.50dbdbc4.png"},28:function(e,t,a){e.exports=a.p+"static/media/GitHub_Logo_White.064ace47.png"},36:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a(8),s=a(5),l=(a(45),a(26)),i=function(e){return function(e){return function(t){return e(t)}}},u=a(9),m=a(83),d=a(3),p=a.n(d),b=a(10),h=a(13),f=a.n(h),E="Set Albums";function v(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).limit;return function(){var t=Object(b.a)(p.a.mark(function t(a,n){var r,o;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()("https://jsonplaceholder.typicode.com/albums");case 2:return r=t.sent,t.next=5,r.json();case 5:return t.t0=e,o=t.sent.slice(0,t.t0),t.abrupt("return",a({type:E,payload:o}));case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}()}var g=[],j=Object(m.a)(Object(u.a)({},E,function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).payload}),g),O="Set Photos";var y={},P=Object(m.a)(Object(u.a)({},O,function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(arguments.length>1?arguments[1]:void 0).payload.reduce(function(e,t){return e[t.albumId]=e[t.albumId]||[],e[t.albumId].push(t),e},{})}),y),N=Object(s.combineReducers)({albums:j,photos:P});var x=a(27),k=a.n(x),w=(a(48),function(){return r.a.createElement("a",{href:"https://github.com/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{className:"Octocat",src:k.a,alt:"Octocat"}))}),I=a(19),A=a(28),C=a.n(A),S=function(){return n.createElement("footer",{className:"Footer"},n.createElement("span",{className:"Footer-credits"},"Made by\xa0",n.createElement("a",{href:"https://github.com/adi518"},I.author),"\xa0\u2014\xa0",(new Date).getFullYear(),"\xa0\u2014\xa0",I.version),n.createElement("a",{className:"Footer-github",href:"https://github.com/adi518/rapyd"},n.createElement("img",{src:C.a,alt:"GitHub"})))},z=a(4),M=a(6),B=a(81),F=a(29),L=function(){var e={},t=new Promise(function(t,a){e.resolve=t,e.reject=a});return Object(F.a)({},e,{promise:t})},G=a(82),_=(a(51),function(e){var t=e.albums,a=e.albumId,n=e.allPhotos,o=e.setPhotos,c=e.setAlbumId,s=Boolean(Object(M.size)(t)),l=Boolean(Object(M.size)(n));return r.a.createElement("section",{className:"Albums"},r.a.createElement("h2",null,"Albums"),s&&l?r.a.createElement("div",{className:"grid"},t.map(function(e){return r.a.createElement("div",{key:e.id,title:e.title,className:"Albums-album grid-item",onClick:function(){e.id===a?(c(null),o([])):(c(e.id),o(n[e.id].slice(0,36)))}},r.a.createElement("span",{className:"Albums-album-id"},e.id),r.a.createElement("span",{className:"Albums-album-title line-clamp"},e.title),l&&r.a.createElement("div",{className:"Albums-album-photos"},"(",Object(M.size)(n[e.id]),"\xa0Photos)"))})):r.a.createElement(G.a,{color:"inherit",size:20}))}),T=a(31),U=a.n(T),D=(a(53),1e3),H=r.a.memo(function(e){var t=e.photo,a=e.photos,o=e.setPhotos,c=e.onClick,s=Object(n.useState)(!1),l=Object(z.a)(s,2),i=l[0],u=l[1],m=!1;return Object(B.a)(function(){function e(){return(e=Object(b.a)(p.a.mark(function e(){var a,n,r,o,c;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Image,n=new Promise(function(e){return setTimeout(e,D)}),r=L(),o=r.resolve,c=r.promise,a.onload=function(){return o()},a.src=t.thumbnailUrl,e.next=7,Promise.all([n,c]);case 7:m&&u(!0);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}return m=!0,function(){e.apply(this,arguments)}(),function(){return m=!1}}),r.a.createElement("div",{title:t.title,className:"Photo grid-item",onClick:function(){return c(t.id)}},r.a.createElement("div",{style:{backgroundImage:"url(".concat(t.thumbnailUrl,")")},className:U()("Photo-image",{"Photo-image-is-loaded":i})}),i?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Photo-title line-clamp"},t.title),r.a.createElement("div",{className:"Photo-dismiss",onClick:function(e){e.stopPropagation(),o(a.filter(function(e){return e.id!==t.id}))}})):r.a.createElement(G.a,{color:"inherit",size:20}))}),J=(a(55),function(e){var t=e.isLoading,a=e.photos,n=e.setPhotos,o=e.onPhotoClick;return r.a.createElement("section",{className:"Photos"},r.a.createElement("h2",null,"Photos"),t?r.a.createElement(G.a,{color:"inherit",size:20}):Object(M.size)(a)?r.a.createElement("div",{className:"grid"},a.map(function(e){return r.a.createElement(H,Object.assign({key:e.id},{photo:e,photos:a,setPhotos:n,onClick:o}))})):r.a.createElement("div",{className:"Photos-placeholder"},r.a.createElement("span",{className:"Photos-placeholder-text"},"SELECT ALBUM")))}),R=a(32),q=a.n(R),W=(a(65),{content:{display:"flex",border:"none",background:"rgba(23, 20, 29, 0.95)"},overlay:{zIndex:4,backgroundColor:"rgba(0, 0, 0, 0.5)"}}),Y=function(e){var t=e.photo,a=e.modalIsOpen,n=e.closeModal;return r.a.createElement(q.a,{style:W,isOpen:a,contentLabel:"Photo Modal",onRequestClose:n,appElement:document.getElementById("root")},r.a.createElement("div",{className:"Modal-dismiss",onClick:n}),t&&r.a.createElement("div",{className:"Modal-photo"},r.a.createElement("img",{src:t.url,alt:t.title})))},K=(a(67),r.a.memo(function(){var e,t=function(e,t){return Object.entries(t).reduce(function(t,a){var r=Object(z.a)(a,2),o=r[0],c=r[1];return t[o]=Object(n.useCallback)(function(){return e(c)},[e]),t},{})}(Object(c.c)(),{listAlbums:v({limit:36}),listPhotos:function(){var e=Object(b.a)(p.a.mark(function e(t,a){var n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://jsonplaceholder.typicode.com/photos");case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",t({type:O,payload:r}));case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}),a=t.listAlbums,o=t.listPhotos,s=Object(n.useState)(null),l=Object(z.a)(s,2),i=l[0],u=l[1],m=Object(n.useState)([]),d=Object(z.a)(m,2),h=d[0],E=d[1],g=Object(n.useState)(null),j=Object(z.a)(g,2),y=j[0],P=j[1],N=Object(n.useState)(!1),x=Object(z.a)(N,2),k=x[0],w=x[1],I=(e=function(e){return{albums:e.albums,photos:e.photos}},Object(c.d)(e,c.b)),A=I.albums,C=I.photos;return Object(B.a)(function(){a(),o()}),r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"Gallery"},r.a.createElement("div",{className:"Gallery-grid"},r.a.createElement(_,{albums:A,albumId:y,allPhotos:C,setAlbumId:P,setPhotos:E}),r.a.createElement(J,{photos:h,setPhotos:E,isLoading:0===Object(M.size)(A),onPhotoClick:function(e){var t=C[y].find(function(t){return t.id===e});u(t),w(!0)}}))),r.a.createElement(Y,{photo:i,modalIsOpen:k,closeModal:function(){return w(!1)}}))})),Q=(a(69),function(e){var t=Object(s.applyMiddleware)(l.a,i);return Object(s.createStore)(N,e,t)}()),V=function(e){var t=e.children;return r.a.createElement("main",{className:"Body"},t)};var X=document.getElementById("root");Object(o.render)(r.a.createElement(function(){return r.a.createElement(c.a,{store:Q},r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(V,null,r.a.createElement(K,null)),r.a.createElement(S,null)))},null),X)}},[[36,2,1]]]);
//# sourceMappingURL=main.c5de880a.chunk.js.map