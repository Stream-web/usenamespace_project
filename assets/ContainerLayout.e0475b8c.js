import{e as P,f as A,S as I,A as U,_ as q,r as a,o as l,b as m,d as i,c as b,j as $,M as B,t as d,g as p,w as u,T as D,F,m as L,H as S,C as g,B as E,U as x,V as N}from"./index.1df144a8.js";import{l as j}from"./lodash.51b3f04c.js";const H=P({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default(){return[]},required:!0},formData:{type:Object,default(){return{}},required:!0},formConfig:{type:Array,default(){return[]},required:!0}},emits:["on-submit"],setup(){const{proxy:e}=U(),n=A(!1),c=A();function C(){n.value=!n.value}function h(o){const s={},r=o.type==="password";return r?s.type=n.value?"text":"password":s.type="text",{clearable:!r,placeholder:o.placeholder,...s}}function w(o){return{rules:I(o.rules)?o.rules.call(e):"",...j.exports.omit(o,["rules"])}}function _(o){const s={};return Object.keys(o).forEach(r=>{s[r]=o[r].bind(e.$parent,c.value)}),s}function y(o){o.click.call(e.$parent,c.value)}function f(){e.$emit("on-submit",c.value)}return{showPassword:n,boxForm:c,tooglePassword:C,getInputItemAttrs:h,getFormItemAttrs:w,getActionItemEvent:_,handleClickLink:y,onSubmit:f}}});const K={class:"user-account-container-layout"},O={class:"form-title"},T={class:"form-title-icon"},z={class:"form-title-text"},M={class:"form-desc-text"},G={class:"form-custom-label"};function J(e,n,c,C,h,w){const _=a("IconFont"),y=a("el-link"),f=a("FontAwesomeIcon"),o=a("el-input"),s=a("el-form-item"),r=a("el-button"),V=a("el-form");return l(),m("div",K,[i("div",O,[i("div",T,[e.titleIcon?(l(),b(_,{key:0,icon:e.titleIcon},null,8,["icon"])):$("v-if",!0),B(e.$slots,"titleIcon",{},void 0,!0)]),i("p",z,d(e.title),1),i("p",M,d(e.desc),1)]),p(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:n[1]||(n[1]=D(t=>e.onSubmit(),["enter"]))},{default:u(()=>[(l(!0),m(F,null,L(e.formConfig,(t,v)=>(l(),b(s,x(g({key:v},e.getFormItemAttrs(t.attrs))),{default:u(()=>[i("div",G,[i("p",null,d(t.label),1),t.link?(l(),b(y,{key:0,type:"primary",underline:!1,onClick:k=>e.handleClickLink(t.link)},{default:u(()=>[S(d(t.link.text),1)]),_:2},1032,["onClick"])):$("v-if",!0)]),p(o,g({modelValue:e.formData[t.attrs.prop],"onUpdate:modelValue":k=>e.formData[t.attrs.prop]=k},e.getInputItemAttrs(t)),E({_:2},[t.prefixIcon?{name:"prefix",fn:u(()=>[p(f,{class:"input-icon-prefix",icon:t.prefixIcon},null,8,["icon"])]),key:"0"}:void 0,t.type==="password"?{name:"suffix",fn:u(()=>[p(f,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:n[0]||(n[0]=k=>e.tooglePassword())},null,8,["icon"])]),key:"1"}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),m(F,null,L(e.actionList,(t,v)=>(l(),m("div",{key:`${v}-`,class:"submit-form-action-list"},[p(r,g(t.attrs,{class:"submit-form-action-button"},N(e.getActionItemEvent(t.on)||{})),{default:u(()=>[S(d(t.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}const W=q(H,[["render",J],["__scopeId","data-v-e8361b7a"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/UserAccount/components/ContainerLayout.vue"]]);export{W as default};
