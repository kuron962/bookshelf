(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{490:function(t,e,o){var content=o(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(27).default)("3f8c8da8",content,!0,{sourceMap:!1})},508:function(t,e,o){"use strict";o.r(e);var n=o(306),d=o(511),r=o(483),c=o(588),l=o(21),k=(o(102),{props:{book:{type:Object}},data:function(){return{editedbook:{id:this.book.id,title:this.book.title,isbn:this.book.isbn,image:this.book.image,type:this.book.type},types:["紙","電子"]}},watch:{book:function(t){this.editedbook.id=t.id,this.editedbook.title=t.title,this.editedbook.isbn=t.isbn,this.editedbook.image=t.image,this.editedbook.type=t.type}},methods:{edit:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$emit("edit",t.editedbook);case 1:case"end":return e.stop()}}),e)})))()}}}),f=(o(514),o(101)),component=Object(f.a)(k,(function(){var t=this,e=t._self._c;return e(d.a,{staticClass:"pa-3",attrs:{"max-width":"100%"}},[e("div",{staticClass:"parent_box"},[e("img",{staticClass:"card-img",attrs:{src:t.editedbook.image}}),t._v(" "),e(r.b,[t._v(" "+t._s(t.editedbook.title)+" ")])],1),t._v(" "),e(c.a,{attrs:{items:t.types},model:{value:t.editedbook.type,callback:function(e){t.$set(t.editedbook,"type",e)},expression:"editedbook.type"}}),t._v(" "),e(r.a,{staticClass:"justify-end"},[e(n.a,{staticClass:"ma-3 center",on:{click:t.edit}},[t._v(" 編集 ")])],1)],1)}),[],!1,null,"7f3e0456",null);e.default=component.exports},514:function(t,e,o){"use strict";o(490)},515:function(t,e,o){var n=o(26)((function(i){return i[1]}));n.push([t.i,".parent_box[data-v-7f3e0456]{display:flex}",""]),n.locals={},t.exports=n}}]);