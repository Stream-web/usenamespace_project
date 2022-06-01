var $=Object.defineProperty;var x=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,v=(e,t)=>{for(var o in t||(t={}))D.call(t,o)&&g(e,o,t[o]);if(x)for(var o of x(t))P.call(t,o)&&g(e,o,t[o]);return e};import{_ as j,e as E,u as O,g as w,r as s,o as r,b as f,d as c,c as k,k as A,M as B,t as d,h as m,w as u,F as h,p as C,S as G,T as K,G as _,C as b,B as M,U as T,V as z}from"./index.e39a1020.js";import{l as H}from"./lodash.0177f59f.js";const J=E({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=O(),t=w(!1),o=w();return{showPassword:t,boxForm:o,tooglePassword:function(){t.value=!t.value},getInputItemAttrs:function(n){const l={},i=n.type==="password";return l.type=i?t.value?"text":"password":"text",v({clearable:!i,placeholder:n.placeholder},l)},getFormItemAttrs:function(n){return v({rules:K(n.rules)?n.rules.call(e):""},H.exports.omit(n,["rules"]))},getActionItemEvent:function(n){const l={};return Object.keys(n).forEach(i=>{l[i]=n[i].bind(e.$parent,o.value)}),l},handleClickLink:function(n){n.click.call(e.$parent,o.value)},onSubmit:function(){e.$emit("on-submit",o.value)}}}}),N={class:"user-account-container-layout"},Q={class:"form-title"},R={class:"form-title-icon"},W={class:"form-title-text"},X={class:"form-desc-text"},Y={class:"form-custom-label"};var oe=j(J,[["render",function(e,t,o,n,l,i){const F=s("IconFont"),L=s("el-link"),I=s("FontAwesomeIcon"),S=s("el-input"),U=s("el-form-item"),q=s("el-button"),V=s("el-form");return r(),f("div",N,[c("div",Q,[c("div",R,[e.titleIcon?(r(),k(F,{key:0,icon:e.titleIcon},null,8,["icon"])):A("v-if",!0),B(e.$slots,"titleIcon",{},void 0,!0)]),c("p",W,d(e.title),1),c("p",X,d(e.desc),1)]),m(V,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[1]||(t[1]=G(a=>e.onSubmit(),["enter"]))},{default:u(()=>[(r(!0),f(h,null,C(e.formConfig,(a,p)=>(r(),k(U,T(b({key:p},e.getFormItemAttrs(a.attrs))),{default:u(()=>[c("div",Y,[c("p",null,d(a.label),1),a.link?(r(),k(L,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(a.link)},{default:u(()=>[_(d(a.link.text),1)]),_:2},1032,["onClick"])):A("v-if",!0)]),m(S,b({modelValue:e.formData[a.attrs.prop],"onUpdate:modelValue":y=>e.formData[a.attrs.prop]=y},e.getInputItemAttrs(a)),M({_:2},[a.prefixIcon?{name:"prefix",fn:u(()=>[m(I,{class:"input-icon-prefix",icon:a.prefixIcon},null,8,["icon"])])}:void 0,a.type==="password"?{name:"suffix",fn:u(()=>[m(I,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:t[0]||(t[0]=y=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(r(!0),f(h,null,C(e.actionList,(a,p)=>(r(),f("div",{key:`${p}-`,class:"submit-form-action-list"},[m(q,b(a.attrs,{class:"submit-form-action-button"},z(e.getActionItemEvent(a.on)||{})),{default:u(()=>[_(d(a.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-c1522f00"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/UserAccount/components/ContainerLayout.vue"]]);export{oe as default};