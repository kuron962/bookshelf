(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{488:function(t,e,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("23f62d91",content,!0,{sourceMap:!1})},505:function(t,e,r){"use strict";r.r(e);var o=r(306),n=r(506),c=r(484),l=r(576),f=(r(12),r(11),r(13),r(18),r(10),r(19),r(23)),d=r(2),y=(r(102),r(6),r(83),r(123));function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={data:function(){return{type:"紙",types:["紙","電子"]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(y.b)({gThisBook:"books/gThisBook",gAllBooks:"books/gAllBooks"})),methods:{add:function(){var t=this;return Object(f.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:(new Date).getTime().toString(),title:t.gThisBook.title,isbn:t.gThisBook.isbn,image:t.gThisBook.image,type:t.type},e.next=3,t.$store.dispatch("books/addBook",r);case 3:t.$emit("added");case 4:case"end":return e.stop()}}),e)})))()}}},h=v,k=(r(507),r(101)),component=Object(k.a)(h,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"pa-3",attrs:{"max-width":"100%"}},[e("div",{staticClass:"parent_box"},[e("img",{staticClass:"card-img",attrs:{src:t.gThisBook.image}}),t._v(" "),e(c.b,[t._v(" "+t._s(t.gThisBook.title)+" ")])],1),t._v(" "),e(l.a,{attrs:{items:t.types},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),e(c.a,{staticClass:"justify-end"},[e(o.a,{staticClass:"ma-3 center",on:{click:t.add}},[t._v(" 登録 ")])],1)],1)}),[],!1,null,"a5a2e166",null);e.default=component.exports},507:function(t,e,r){"use strict";r(488)},508:function(t,e,r){var o=r(26)((function(i){return i[1]}));o.push([t.i,".parent_box[data-v-a5a2e166]{display:flex}",""]),o.locals={},t.exports=o}}]);