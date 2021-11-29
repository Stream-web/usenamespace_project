var $=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(e,t,a)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&g(e,a,t[a]);if(x)for(var a of x(t))V.call(t,a)&&g(e,a,t[a]);return e};import{s as E,M as h,r as n,o as l,t as f,v as c,k as v,K as w,J as U,I as d,m,l as u,D as A,C,a5 as K,S as _,H as I,a2 as O,x as H,a6 as J}from"./vendor.83f1166e.js";import{l as M}from"./lodash.1a5c32a2.js";import{_ as z,u as B,i as G}from"./index.2441190a.js";const N=E({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=B(),t=h(!1),a=h();return{showPassword:t,boxForm:a,tooglePassword:function(){t.value=!t.value},getInputItemAttrs:function(s){const r={},i=s.type==="password";return r.type=i?t.value?"text":"password":"text",k({clearable:!i,placeholder:s.placeholder},r)},getFormItemAttrs:function(s){return k({rules:G(s.rules)?s.rules.call(e):""},M.exports.omit(s,["rules"]))},getActionItemEvent:function(s){const r={};return Object.keys(s).forEach(i=>{r[i]=s[i].bind(e.$parent,a.value)}),r},handleClickLink:function(s){s.click.call(e.$parent,a.value)},onSubmit:function(){e.$emit("on-submit",a.value)}}}}),Q={class:"user-account-container-layout"},R={class:"form-title"},T={class:"form-title-icon"},W={class:"form-title-text"},X={class:"form-desc-text"},Y={class:"form-custom-label"};var oe=z(N,[["render",function(e,t,a,s,r,i){const D=n("IconFont"),F=n("el-link"),b=n("FontAwesomeIcon"),S=n("el-input"),j=n("el-form-item"),q=n("el-button"),L=n("el-form");return l(),f("div",Q,[c("div",R,[c("div",T,[e.titleIcon?(l(),v(D,{key:0,icon:e.titleIcon},null,8,["icon"])):w("",!0),U(e.$slots,"titleIcon",{},void 0,!0)]),c("p",W,d(e.title),1),c("p",X,d(e.desc),1)]),m(L,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[1]||(t[1]=K(o=>e.onSubmit(),["enter"]))},{default:u(()=>[(l(!0),f(A,null,C(e.formConfig,(o,p)=>(l(),v(j,H(I({key:p},e.getFormItemAttrs(o.attrs))),{default:u(()=>[c("div",Y,[c("p",null,d(o.label),1),o.link?(l(),v(F,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(o.link)},{default:u(()=>[_(d(o.link.text),1)]),_:2},1032,["onClick"])):w("",!0)]),m(S,I({modelValue:e.formData[o.attrs.prop],"onUpdate:modelValue":y=>e.formData[o.attrs.prop]=y},e.getInputItemAttrs(o)),O({_:2},[o.prefixIcon?{name:"prefix",fn:u(()=>[m(b,{class:"input-icon-prefix",icon:o.prefixIcon},null,8,["icon"])])}:void 0,o.type==="password"?{name:"suffix",fn:u(()=>[m(b,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:t[0]||(t[0]=y=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),f(A,null,C(e.actionList,(o,p)=>(l(),f("div",{key:`${p}-`,class:"submit-form-action-list"},[m(q,I(o.attrs,{class:"submit-form-action-button"},J(e.getActionItemEvent(o.on)||{})),{default:u(()=>[_(d(o.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-493bf324"]]);export{oe as default};
