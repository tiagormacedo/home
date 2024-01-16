(function(){"use strict";var e={7394:function(e,t,a){var n=a(9242),l=a(3396),o=a(7139),i=a(4852),r=a(702),d=a(9721),s=a(1888),u=a(4075),m=a(6824),c=a(8521),f=a(7471),w=a(5030);const p=(0,l._)("strong",null," Data ",-1),h=(0,l._)("strong",null," Descrição ",-1),v=(0,l._)("strong",null," Valor ",-1);function _(e,t,a,n,_,W){const y=(0,l.up)("save-button"),g=(0,l.up)("item-row"),D=(0,l.up)("add-item-form");return(0,l.wg)(),(0,l.j4)(i.q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(f.i,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Wm)(w.q,{class:"headline text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Gastos de Vocy ")])),_:1}),(0,l.Wm)(y,{itemsList:_.itemsList},null,8,["itemsList"])])),_:1}),(0,l.Wm)(d._,{align:"end",elevation:"0",class:"mt-5 mr-2",color:"primary",variant:"text"},{default:(0,l.w5)((()=>[(0,l.Wm)(s.Z,{style:{"font-size":"110%"}},{default:(0,l.w5)((()=>[(0,l._)("strong",null," Total:   R$ "+(0,o.zw)(this.sumValues),1)])),_:1})])),_:1}),(0,l.Wm)(d._,{align:"center",elevation:"0",class:"ma-15"},{default:(0,l.w5)((()=>[(0,l.Wm)(m.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[p])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[h])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(c.D)])),_:1}),(0,l.Wm)(u.J,{class:"mt-2 mb-4"}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(_.itemsList,(e=>((0,l.wg)(),(0,l.j4)(g,{key:e.id,id:e.id,data:e.date,descricao:e.desc,valor:e.value,onDeleteItem:t=>W.deleteItem(e.id),onEditItem:t=>W.editItem(e.id,t)},null,8,["id","data","descricao","valor","onDeleteItem","onEditItem"])))),128)),(0,l.Wm)(m.o,{class:"mt-15"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.D),(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{onClick:t[0]||(t[0]=e=>_.showAddItemForm=!0),color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Adicionar item ")])),_:1}),(0,l.Wm)(D,{modelValue:_.showAddItemForm,"onUpdate:modelValue":t[1]||(t[1]=e=>_.showAddItemForm=e),onAddItem:t[2]||(t[2]=e=>W.addItem(e)),onCloseForm:t[3]||(t[3]=e=>_.showAddItemForm=!1)},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{onClick:W.removeAll,color:"#d33"},{default:(0,l.w5)((()=>[(0,l.Uk)("Apagar tudo")])),_:1},8,["onClick"])])),_:1}),(0,l.Wm)(c.D)])),_:1})])),_:1})])),_:1})}a(560);var W=a(1076),y=a(6572),g=a(1334),D=a(72),b=a(9234),I=a(5848);const V=(0,l._)("span",{class:"text-h5"},"Adicionar gasto",-1);function k(e,t,a,o,i,u){return(0,l.wg)(),(0,l.j4)(D.B,{width:"1024"},{default:(0,l.w5)((()=>[(0,l.Wm)(d._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y.E,null,{default:(0,l.w5)((()=>[V])),_:1}),(0,l.Wm)(s.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m.o,{"align-content":"space-evenly"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Data",type:"Date",modelValue:i.date,"onUpdate:modelValue":t[0]||(t[0]=e=>i.date=e),modelModifiers:{lazy:!0,trim:!0}},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Descrição","prepend-inner-icon":"mdi-pencil",modelValue:i.desc,"onUpdate:modelValue":t[1]||(t[1]=e=>i.desc=e),modelModifiers:{lazy:!0,trim:!0}},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Valor","prepend-inner-icon":"mdi-cash",prefix:"R$ ",type:"number",min:"0",step:".01",modelValue:i.value,"onUpdate:modelValue":t[2]||(t[2]=e=>i.value=e),modelModifiers:{lazy:!0,number:!0}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(g.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b.C),(0,l.Wm)(r.T,{color:"blue-darken-1",variant:"text",onClick:t[3]||(t[3]=(0,n.iM)((e=>u.sendAddItem()),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Adicionar ")])),_:1}),(0,l.Wm)(r.T,{color:"blue-darken-1",variant:"text",onClick:t[4]||(t[4]=e=>this.$emit("close-form"))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1})])),_:1})])),_:1})])),_:1})}var j={methods:{sendAddItem(){""!==this.date&&""!==this.desc&&""!==this.value&&(this.$emit("add-item",[this.date,this.desc,this.value]),this.date="",this.desc="",this.value="")}},data(){return{date:"",desc:"",value:""}}},U=a(89);const E=(0,U.Z)(j,[["render",k]]);var F=E,L=a(3289);function x(e,t,a,n,i,d){const s=(0,l.up)("edit-item-form");return(0,l.wg)(),(0,l.j4)(m.o,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(d.formatDate(a.data)),1)])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(a.descricao),1)])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,o.zw)(d.formatValue(a.valor)),1)])),_:1}),(0,l.Wm)(c.D,{align:"start"},{default:(0,l.w5)((()=>[(0,l.Wm)(r.T,{onClick:t[0]||(t[0]=e=>i.showEditItemForm=!0),elevation:"0",class:"pa-0 ml-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(L.t,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-square-edit-outline")])),_:1})])),_:1}),(0,l.Wm)(s,{data:a.data,descricao:a.descricao,valor:a.valor,modelValue:i.showEditItemForm,"onUpdate:modelValue":t[1]||(t[1]=e=>i.showEditItemForm=e),onEditItem:t[2]||(t[2]=e=>d.sendEditItem(e)),onCloseForm:t[3]||(t[3]=e=>i.showEditItemForm=!1)},null,8,["data","descricao","valor","modelValue"]),(0,l.Wm)(r.T,{onClick:t[4]||(t[4]=e=>this.$emit("delete-item")),elevation:"0",class:"pa-0 ml-2"},{default:(0,l.w5)((()=>[(0,l.Wm)(L.t,{color:"primary"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-delete")])),_:1})])),_:1})])),_:1})])),_:1})}const C=(0,l._)("span",{class:"text-h5"},"Editar gasto",-1);function A(e,t,a,o,i,u){return(0,l.wg)(),(0,l.j4)(D.B,{width:"1024"},{default:(0,l.w5)((()=>[(0,l.Wm)(d._,null,{default:(0,l.w5)((()=>[(0,l.Wm)(y.E,null,{default:(0,l.w5)((()=>[C])),_:1}),(0,l.Wm)(s.Z,null,{default:(0,l.w5)((()=>[(0,l.Wm)(m.o,{"align-content":"space-evenly"},{default:(0,l.w5)((()=>[(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Data",type:"Date",modelValue:i.newDate,"onUpdate:modelValue":t[0]||(t[0]=e=>i.newDate=e),modelModifiers:{lazy:!0,trim:!0}},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Descrição","prepend-inner-icon":"mdi-pencil",modelValue:i.newDesc,"onUpdate:modelValue":t[1]||(t[1]=e=>i.newDesc=e),modelModifiers:{lazy:!0,trim:!0}},null,8,["modelValue"])])),_:1}),(0,l.Wm)(c.D,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I.h,{label:"Valor","prepend-inner-icon":"mdi-cash",prefix:"R$ ",type:"number",min:"0",step:".01",modelValue:i.newValue,"onUpdate:modelValue":t[2]||(t[2]=e=>i.newValue=e),modelModifiers:{lazy:!0,number:!0}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),(0,l.Wm)(g.h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(b.C),(0,l.Wm)(r.T,{color:"blue-darken-1",variant:"text",onClick:t[3]||(t[3]=(0,n.iM)((e=>u.sendEditItem()),["prevent"]))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Editar ")])),_:1}),(0,l.Wm)(r.T,{color:"blue-darken-1",variant:"text",onClick:t[4]||(t[4]=e=>this.$emit("close-form"))},{default:(0,l.w5)((()=>[(0,l.Uk)(" Cancelar ")])),_:1})])),_:1})])),_:1})])),_:1})}var O={props:{data:{required:!0,type:String},descricao:{required:!0,type:String},valor:{required:!0,type:Number}},methods:{sendEditItem(){""!==this.newDate&&""!==this.newDesc&&""!==this.newValue&&this.$emit("edit-item",[this.newDate,this.newDesc,this.newValue])}},data(){return{newDate:this.data,newDesc:this.descricao,newValue:this.valor}}};const S=(0,U.Z)(O,[["render",A]]);var T=S,q={components:{EditItemForm:T},props:{id:{required:!0,type:String},data:{required:!0,type:String},descricao:{required:!0,type:String},valor:{required:!0,type:Number}},data(){return{showEditItemForm:!1}},methods:{formatDate(e){var t=e.split("-");t.reverse();const a=t.join("/");return a},formatValue(e){e=Math.round(100*e)/100;var t=e.toFixed(2);return t="R$ "+t,t},sendEditItem(e){this.$emit("edit-item",e),this.showEditForm=!0}}};const z=(0,U.Z)(q,[["render",x]]);var M=z,$=a(1615);const Z={action:"https://tmacedo.pythonanywhere.com/setjson/gastos_vocy.json",method:"post",enctype:"application/json"},B=(0,l._)("input",{type:"hidden",id:"hiddenInput",name:"jsondata"},null,-1);function N(e,t,a,n,o,i){return(0,l.wg)(),(0,l.j4)($.l,null,{default:(0,l.w5)((()=>[(0,l._)("form",Z,[B,(0,l.Wm)(r.T,{type:"submit",onClick:t[0]||(t[0]=e=>i.sendData(a.itemsList))},{default:(0,l.w5)((()=>[(0,l.Wm)(L.t,{size:"275%",class:"mt-3"},{default:(0,l.w5)((()=>[(0,l.Uk)("mdi-content-save-alert")])),_:1})])),_:1})])])),_:1})}var R={props:{itemsList:{required:!0,type:Object}},methods:{sendData(e){const t=JSON.stringify(e);document.getElementById("hiddenInput").value=t}}};const P=(0,U.Z)(R,[["render",N]]);var J=P,G={components:{AddItemForm:F,ItemRow:M,SaveButton:J},data(){return{itemsList:null,showAddItemForm:!1}},created(){const e="https://tmacedo.pythonanywhere.com/getjson/gastos_vocy.json";W.Z.get(e).then((e=>{this.itemsList=this.sortListByDate(JSON.parse(e.data.message))}))},methods:{addItem(e){const t="gasto-"+Date.now().toString();this.itemsList.push({id:t,date:e[0].toString(),desc:e[1].toString(),value:Number(e[2])}),this.itemsList=this.sortListByDate(this.itemsList),this.showAddItemForm=!1},deleteItem(e){const t=this.itemsList.findIndex((t=>t.id===e));this.itemsList.splice(t,1)},editItem(e,t){this.deleteItem(e),this.addItem(t)},removeAll(){confirm("Tem certeza que você quer apagar tudo?")&&(this.itemsList={})},sortListByDate(e){return e.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),e}},computed:{sumValues(){var e=Number(0);for(const t in this.itemsList)e+=Number(this.itemsList[t].value);return e=(Math.round(100*e)/100).toFixed(2),e}}};const H=(0,U.Z)(G,[["render",_]]);var K=H,Y=(a(9773),a(8753)),Q=(0,Y.Rd)();(0,n.ri)(K).use(Q).mount("#app")}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,l,o){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],o=e[u][2];for(var r=!0,d=0;d<n.length;d++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[d])}))?n.splice(d--,1):(r=!1,o<i&&(i=o));if(r){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,l,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,o,i=n[0],r=n[1],d=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(l in r)a.o(r,l)&&(a.m[l]=r[l]);if(d)var u=d(a)}for(t&&t(n);s<i.length;s++)o=i[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkgastos_vocy"]=self["webpackChunkgastos_vocy"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(7394)}));n=a.O(n)})();
//# sourceMappingURL=app.1938f27e.js.map