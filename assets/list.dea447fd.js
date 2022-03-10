import{s as f,Y as w,i as T,r as n,o as p,t as k,m as l,l as r,v as m,I as V,M as N,O as E,a0 as I,L as y,w as j,X as F,k as b,a2 as H,H as x,u as M,P as A,S as B}from"./vendor.12162daf.js";import{_ as g,u as L,c as R,P as v}from"./index.7a681272.js";import{N as U}from"./NavBar.2a5d56b7.js";import D from"./ProjectForm.f145b9cd.js";import K from"./TableHeader.65b982d6.js";import O from"./TableBody.e14fadf6.js";import{l as X}from"./lodash.9d6bf717.js";import"./Translations.010ed5cb.js";import"./ProjectItem.3bf91b3e.js";const Y=f({name:"NavigationSideLogo",setup(){const e=w();return{title:T(()=>e.t("base.systemTitle"))}}}),q={class:"side-logo-container"},z=(e=>(N("data-v-1207b566"),e=e(),E(),e))(()=>m("img",{class:"side-logo-img",src:"assets/vue.20be1948.svg",alt:"\u5546\u6807"},null,-1)),G={class:"side-logo-title"};var J=g(Y,[["render",function(e,a,c,o,t,d){const s=n("router-link");return p(),k("div",q,[l(s,{to:`/${e.$route.params.locale||""}`},{default:r(()=>[z,m("h1",G,V(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-1207b566"]]);const Q=f({name:"SearchSelect",components:{Loading:I},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:a}=L(),c=y(!1),o=y("");return j(()=>e.modelValue,t=>{o.value=t},{immediate:!0}),j(()=>o,X.exports.debounce(function(t){a.$emit("update:modelValue",t),a.$emit("change",t)},300)),{loading:c,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,a){const c=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!c)return void a(o);this.loading=!0,o=await this.fetch(c)||[],o.forEach(t=>{t.label=t.label.replace(new RegExp(c,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),a(o),setTimeout(()=>{F(()=>{this.loading=!1})},200)}}}),W=["title","innerHTML"],Z=f({name:"SearchCorporation",components:{SearchSelect:g(Q,[["render",function(e,a,c,o,t,d){const s=n("loading"),u=n("el-icon"),h=n("IconFont"),S=n("el-autocomplete");return p(),b(S,x({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:a[1]||(a[1]=i=>e.keydown(i))}),H({default:r(({item:i})=>[m("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,W)]),_:2},[e.loading?{name:"suffix",fn:r(()=>[l(u,{class:"search-loading-icon"},{default:r(()=>[l(s)]),_:1})])}:{name:"suffix",fn:r(()=>[m("i",{class:"search-icon"},[l(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:y("")}),methods:{handleFetchSearch:async e=>R.map(a=>({value:a,label:a})),handleSelectSearch(e){this.$emit("select",e)}}});var de=g(f({name:"ProjectList",components:{NavigationNavBar:U,NavigationSideLogo:J,ProjectTableHeader:K,ProjectTableBody:O,SearchCorporation:g(Z,[["render",function(e,a,c,o,t,d){const s=n("SearchSelect");return p(),b(s,x({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=L(),a=M(),c=w();function o(t){a.dispatch(v.getAction("getProjectList"),{kw:t})}return o(),{localeInject:c,handleCreateProject:function(){const t=B({name:"",corpName:"",notes:""});e.$ModalDialog({title:c.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:t,component:D},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await a.dispatch(v.getAction("createProject"),t);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));a.dispatch(v.getAction("getProjectList"))}})},handleSelectSearch:o}}}),[["render",function(e,a,c,o,t,d){const s=n("NavigationSideLogo"),u=n("NavigationNavBar"),h=n("IconFont"),S=n("el-button"),i=n("LayoutSection"),P=n("SearchCorporation"),_=n("ProjectTableHeader"),C=n("ProjectTableBody"),$=n("LayoutArea");return p(),b($,null,{top:r(()=>[l(u,{fixed:!1},{default:r(()=>[l(s)]),_:1})]),side:r(()=>[l(i,{title:e.localeInject.t("project.manageTitle")},{default:r(()=>[l(S,{type:"primary",class:"create-action",onClick:a[0]||(a[0]=ee=>e.handleCreateProject())},{default:r(()=>[l(h,{icon:"iconestablish"}),A(" "+V(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:r(()=>[l(i,{"has-divider":"","flex-content":""},{head:r(()=>[l(P,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:r(()=>[l(_),l(C)]),_:1})]),_:1})}],["__scopeId","data-v-6b5d9458"]]);export{de as default};
