(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{273:function(t,e,r){var content=r(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("6cd9a3d1",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";var n=r(477),o=r(481),c=r(478),l=r(209),f=r(138),m=r(211),k=r(121),d=r(480),v=r(482),h=r(479),O=r(303),w=(r(37),{data:function(){return{drawer:!1,menuItems:[{name:"本棚",url:"/"},{name:"登録",url:"/add"},{name:"インポート",url:"/import"},{name:"エクスポート",url:"/export"}]}}}),B=r(101),component=Object(B.a)(w,(function(){var t=this,e=t._self._c;return e(n.a,[e(o.a,{attrs:{app:""}},[e(c.a,{on:{click:function(e){t.drawer=!0}}}),t._v(" "),e(O.a,[t._v("BOOKSHELF")]),t._v(" "),e(h.a)],1),t._v(" "),e(v.a,{attrs:{fixed:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(l.a,{attrs:{nav:"",dense:""}},[e(m.a,t._l(t.menuItems,(function(r,n){return e(f.a,{key:n,attrs:{to:r.url}},[e(k.b,[t._v(t._s(r.name))])],1)})),1)],1)],1),t._v(" "),e(d.a,[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports},312:function(t,e,r){r(313),t.exports=r(314)},357:function(t,e,r){"use strict";r(273)},358:function(t,e,r){var n=r(26)((function(i){return i[1]}));n.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),n.locals={},t.exports=n},412:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return m})),r.d(e,"getters",(function(){return k})),r.d(e,"mutations",(function(){return d})),r.d(e,"actions",(function(){return v}));r(11),r(18),r(10),r(19);var n=r(115),o=r(21),c=r(2);r(102),r(13),r(6),r(64),r(12),r(93),r(36),r(413),r(415),r(422),r(424),r(425),r(426),r(429),r(430),r(431),r(432),r(433),r(434),r(435),r(436),r(438),r(439),r(440),r(441),r(442),r(443),r(444),r(445),r(446),r(447),r(448),r(45),r(50),r(449),r(266),r(28),r(57),r(74),r(32);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=function(){return{books:null,searchBooks:null,thisBook:null}},k={gAllBooks:function(t){return t.books},gSearchBooks:function(t){return t.searchBooks},gThisBook:function(t){return t.thisBook}},d={sAllBooks:function(t,e){t.books=e},sAddBooks:function(t,e){t.books.push(e)},sDelBook:function(t,e){var r=t.books.filter((function(t){return t.id!==e}));t.books=r},sEditBook:function(t,e){var r=t.books.map((function(t){return t.id===e.id?f(f({},t),e):t}));t.books=r},sSearchBooks:function(t,e){t.searchBooks=e},sThisBook:function(t,e){t.thisBook=e}},v={load:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.commit,n=localStorage.getItem("books")?JSON.parse(localStorage.getItem("books")):[],r("sAllBooks",n);case 3:case"end":return e.stop()}}),e)})))()},addBook:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,o=t.getters,n("sAddBooks",e),c=JSON.stringify(o.gAllBooks),localStorage.setItem("books",c);case 4:case"end":return r.stop()}}),r)})))()},deleteBook:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,o=t.getters,n("sDelBook",e),c=JSON.stringify(o.gAllBooks),localStorage.setItem("books",c);case 4:case"end":return r.stop()}}),r)})))()},editBook:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=t.commit,o=t.getters,n("sEditBook",e),c=JSON.stringify(o.gAllBooks),localStorage.setItem("books",c);case 4:case"end":return r.stop()}}),r)})))()},setBook:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(0,t.commit)("sThisBook",e);case 2:case"end":return r.stop()}}),r)})))()},searchFromGoogle:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.commit,o="https://www.googleapis.com/books/v1/volumes?q=".concat(e),r.next=4,fetch(o).then((function(t){return t.json()})).catch((function(t){return console.log(t),null}));case 4:(c=r.sent)&&(l=c.items,f=l.map((function(t){return{title:t.volumeInfo.title,isbn:t.volumeInfo.industryIdentifiers[1]?t.volumeInfo.industryIdentifiers[1].identifier:null,image:t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:""}})),n("sSearchBooks",f));case 6:case"end":return r.stop()}}),r)})))()},exportCsv:function(t){t.commit;var e=t.getters.gAllBooks;console.log("items",e);var header=Object.keys(e[0]);console.log("header",header);var r=header.join(",");console.log("headerString",r);var o=function(t,e){return null!=e?e:""};console.log("replacer",o);var c=e.map((function(t){return header.map((function(e){return JSON.stringify(t[e],o)})).join(",")})),l=[r].concat(Object(n.a)(c)).join("\r\n"),f=new Uint8Array([239,187,191]),m=new Blob([f,l],{type:"text/csv"}),link=document.createElement("a");link.href=URL.createObjectURL(m),link.download="bookshelf_books.csv",link.click(),link.remove()},importCsvFromOurs:function(t,data){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,header,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.commit,n=t.getters,o=data.split("\r\n"),[],header=o[0].split(","),o.shift(),c=o.map((function(t){var e=t.replace(/\"/g,"").split(","),r={};for(var n in e){r[header[n]]=e[n]}return r})),r("sAllBooks",c),l=JSON.stringify(n.gAllBooks),localStorage.setItem("books",l);case 9:case"end":return e.stop()}}),e)})))()},importCsvFromBsy:function(t,data){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,header,c,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.commit,n=t.getters,o=data.trim().split("\n"),header=o[0].trim().split("\t"),c=[],o.shift(),c=o.map((function(t){var e=t.split("\t"),r={};for(var n in e){r[header[n]]=e[n]}return r})),l=c.map((function(t){return{id:String(Number(t._id)+9e12),title:t.title,isbn:t.isbn,image:null,type:null}})),r("sAllBooks",l),f=JSON.stringify(n.gAllBooks),localStorage.setItem("books",f);case 10:case"end":return e.stop()}}),e)})))()}}},90:function(t,e,r){"use strict";var n=r(477),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(357),r(101)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[312,19,4,20]]]);