(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-187209d9"],{3001:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l}));var a=n("328a"),r="/api/supliers",i=function(){return a["a"].get(r)},s=function(){return a["a"].get("/api/countedsupliers")},o=function(t){return a["a"].get(r+"/"+t)},c=function(t){return a["a"].post(r,t)},u=function(t,e){return a["a"].put(r+"/"+t,e)},l=function(t){return a["a"].delete(r+"/"+t)}},3126:function(t,e,n){},"8cb9":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"e",(function(){return u}));var a=n("328a"),r="/api/users",i=function(){return a["a"].get(r)},s=function(){return a["a"].get("/api/countedusers")},o=function(t){return a["a"].get(r+"/"+t)},c=function(t){return a["a"].post(r,t)},u=function(t,e){return a["a"].put(r+"/"+t,e)}},"8ce9":function(t,e,n){},bd97:function(t,e,n){"use strict";n("3126")},ce7e:function(t,e,n){"use strict";var a=n("5530"),r=(n("8ce9"),n("7560"));e["a"]=r["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(a["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(a["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},cf05:function(t,e,n){t.exports=n.p+"img/logo.218a895f.png"},d170:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"c",(function(){return l}));var a=n("328a"),r="/api/products",i=function(){return a["a"].get(r)},s=function(){return a["a"].get("/api/countedproducts")},o=function(t){return a["a"].get(r+"/"+t)},c=function(t){return a["a"].post(r,t)},u=function(t,e){return a["a"].put(r+"/"+t,e)},l=function(t){return a["a"].delete(r+"/"+t)}},d5da:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return s})),n.d(e,"e",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"c",(function(){return d}));var a=n("328a"),r="/api/clients",i=function(){return a["a"].get(r)},s=function(){return a["a"].get("/api/sortedclients")},o=function(){return a["a"].get("/api/countedclients")},c=function(t){return a["a"].get(r+"/"+t)},u=function(t){return a["a"].post(r,t)},l=function(t,e){return a["a"].put(r+"/"+t,e)},d=function(t){return a["a"].delete(r+"/"+t)}},f9ea:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("br"),a("br"),a("div",{staticClass:"row carticas"},[a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("a",{attrs:{href:"/productos"}},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-uppercase mb-1"},[t._v("\n                  Inventario\n                ")]),a("v-p",{staticClass:"bold"},[t._v(" "+t._s(t.countproduct)+" ")])],1),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-calendar fa-2x text-warning"})])])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("a",{attrs:{href:"/usuarios"}},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-uppercase mb-1"},[t._v("\n                  Usuarios\n                ")]),a("v-p",{staticClass:"bold"},[t._v(" "+t._s(t.countuser)+" ")])],1),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-user fa-2x text-warning"})])])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("a",{attrs:{href:"/clientes"}},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-uppercase mb-1"},[t._v("\n                  Clientes\n                ")]),a("v-p",{staticClass:"bold"},[t._v(" "+t._s(t.countclient)+" ")])],1),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-clipboard-list fa-2x text-warning"})])])])])])]),a("div",{staticClass:"col-xl-3 col-md-6 mb-4"},[a("a",{attrs:{href:"/proveedores"}},[a("div",{staticClass:"card border-left-warning shadow h-100 py-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row no-gutters align-items-center"},[a("div",{staticClass:"col mr-2"},[a("div",{staticClass:"text-xs font-weight-bold text-uppercase mb-1"},[t._v("\n                  Proveedores\n                ")]),a("v-p",{staticClass:"bold"},[t._v(" "+t._s(t.countsuplier)+" ")])],1),a("div",{staticClass:"col-auto"},[a("i",{staticClass:"fas fa-comments fa-2x text-warning"})])])])])])])]),a("v-row",[a("v-col",{attrs:{cols:"8",md:"8"}},[a("v-card",{staticClass:"mx-auto text-center",attrs:{color:"#dAA520",dark:"","max-width":"600"}},[a("v-card-text",[a("v-sheet",{attrs:{color:"#606161"}},[a("v-sparkline",{attrs:{value:t.value,color:"rgba(255, 255, 255, .7)",height:"100",padding:"24","stroke-linecap":"round",smooth:""},scopedSlots:t._u([{key:"label",fn:function(e){return[t._v(" $"+t._s(e.value)+" ")]}}])})],1)],1),a("v-card-text",[a("div",{staticClass:"text-h4 font-weight-bold"},[t._v("\n            Ventas de las últimas 24 horas\n          ")])]),a("v-divider"),a("v-card-actions",{staticClass:"justify-center"},[a("v-btn",{attrs:{block:"",text:"",link:"",href:"/productos"}},[t._v(" Ir al Reporte ")])],1)],1)],1),a("v-col",{staticStyle:{"text-align":"justify"},attrs:{cols:"4",md:"3"}},[a("v-img",{staticClass:"my-3 displayed",attrs:{src:n("cf05"),contain:"",height:"200"}}),a("v-p",[t._v("\n        Guarda los productos que vendes en la nube. Tu inventario no sólo\n        estará seguro, sino que será de fácil acceso siempre que necesites\n        revisarlo.\n      ")])],1)],1),a("br"),a("br"),a("br"),a("h1",{staticStyle:{color:"#daa520","text-align":"center"}},[t._v("Clientes más Recientes")]),a("br"),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover table-striped table-bordered table-sm"},[a("thead",[a("tr",{staticClass:"text-center thead-dark"},[a("th",[t._v("ID")]),a("th",[t._v("Nombre")]),a("th",[t._v("Apellido")]),a("th",[t._v("Contacto")])])]),t._l(t.clients,(function(e){return a("tbody",{key:e.identification},[a("tr",[a("td",{staticStyle:{width:"200px"}},[t._v(t._s(e.identification))]),a("td",[t._v(t._s(e.firstname))]),a("td",[t._v(t._s(e.lastname))]),a("td",[t._v("\n            "+t._s(e.contact)+"\n          ")])])])}))],2)]),a("br"),a("br")],1)},r=[],i=n("d5da"),s=n("d170"),o=n("3001"),c=n("8cb9"),u={name:"HelloWorld",data:function(){return{countclient:[],countproduct:[],countuser:[],countsuplier:[],clients:[],value:[423.956,446.548,675.325,510.615,590.258,610.954,760.985]}},mounted:function(){var t=this;Object(i["f"])().then((function(e){t.clients=e.data})).catch((function(t){return console.error(t)})),Object(i["a"])().then((function(e){t.countclient=e.data})).catch((function(t){return console.error(t)})),Object(s["a"])().then((function(e){t.countproduct=e.data})).catch((function(t){return console.error(t)})),Object(c["a"])().then((function(e){t.countuser=e.data})).catch((function(t){return console.error(t)})),Object(o["a"])().then((function(e){t.countsuplier=e.data})).catch((function(t){return console.error(t)}))}},l=u,d=(n("bd97"),n("2877")),h=n("6544"),f=n.n(h),p=n("8336"),v=n("b0af"),b=n("99d9"),g=n("62ad"),m=n("a523"),y=n("ce7e"),x=n("adda"),C=n("0fd9"),w=n("8dd9"),_=n("5530"),S=n("53ca"),$=(n("a9e3"),n("caad"),n("d81d"),n("cb29"),n("d3b7"),n("25f0"),n("99af"),n("fb6a"),n("a9ad")),L=n("58df"),k=n("2909");function V(t,e){var n=e.minX,a=e.maxX,r=e.minY,i=e.maxY,s=t.length,o=Math.max.apply(Math,Object(k["a"])(t)),c=Math.min.apply(Math,Object(k["a"])(t)),u=(a-n)/(s-1),l=(i-r)/(o-c||1);return t.map((function(t,e){return{x:n+e*u,y:i-(t-c)*l,value:t}}))}function D(t,e){var n=e.minX,a=e.maxX,r=e.minY,i=e.maxY,s=t.length,o=Math.max.apply(Math,Object(k["a"])(t)),c=Math.min.apply(Math,Object(k["a"])(t));c>0&&(c=0),o<0&&(o=0);var u=a/s,l=(i-r)/(o-c||1),d=i-Math.abs(c*l);return t.map((function(t,e){var a=Math.abs(l*t);return{x:n+e*u,y:d-a+ +(t<0)*a,height:a,value:t}}))}n("a15b");function M(t){return parseInt(t,10)}function j(t,e,n){return M(t.x+n.x)===M(2*e.x)&&M(t.y+n.y)===M(2*e.y)}function W(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function O(t,e,n){var a={x:t.x-e.x,y:t.y-e.y},r=Math.sqrt(a.x*a.x+a.y*a.y),i={x:a.x/r,y:a.y/r};return{x:e.x+i.x*n,y:e.y+i.y*n}}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,r=t.shift(),i=t[t.length-1];return(n?"M".concat(r.x," ").concat(a-r.x+2," L").concat(r.x," ").concat(r.y):"M".concat(r.x," ").concat(r.y))+t.map((function(n,a){var i=t[a+1],s=t[a-1]||r,o=i&&j(i,n,s);if(!i||o)return"L".concat(n.x," ").concat(n.y);var c=Math.min(W(s,n),W(i,n)),u=c/2<e,l=u?c/2:e,d=O(s,n,l),h=O(i,n,l);return"L".concat(d.x," ").concat(d.y,"S").concat(n.x," ").concat(n.y," ").concat(h.x," ").concat(h.y)})).join("")+(n?"L".concat(i.x," ").concat(a-r.x+2," Z"):"")}var B=Object(L["a"])($["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,a=0;t.length<n;a++){var r=e[a],i=this.labels[a];i||(i="object"===Object(S["a"])(r)?r.value:r),t.push({x:r.x,value:String(i)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?V(this.normalizedValues,this.boundary):D(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,n=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=n+" "+n,e.style.strokeDashoffset=Math.abs(n-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=n}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var a=Math.max(n.length-1,1),r=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/a,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},r)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=V(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:E(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,a){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,a)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=D(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,a){var r=this,i="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(a,"-clip")}},t.map((function(t){return r.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:i,ry:i}},[r.autoDraw?r.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(r.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(_["a"])(Object(_["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),z=Object(d["a"])(l,a,r,!1,null,"15504af7",null);e["default"]=z.exports;f()(z,{VBtn:p["a"],VCard:v["a"],VCardActions:b["a"],VCardText:b["c"],VCol:g["a"],VContainer:m["a"],VDivider:y["a"],VImg:x["a"],VRow:C["a"],VSheet:w["a"],VSparkline:B})}}]);
//# sourceMappingURL=chunk-187209d9.d9a3db68.js.map