import{d as g,u as h,f as L,_ as v,r as t,o as j,b as $,g as o,w as a,e as P,t as b,p as C,h as S,i as k,j as B,k as I,P as _,l as T,c as A,m as V}from"./index-0_koFRYh.js";import{N as E}from"./NavBar-noFcxGiU.js";import x from"./ProjectForm-0u5zPKUO.js";import D from"./TableHeader-KlYuOh4L.js";import F from"./TableBody-AjhcjP7x.js";import"./Translations-bCtNnzcn.js";import"./ProjectItem-WMITn4VO.js";const H=g({name:"NavigationSideLogo",setup(){const e=h();return{title:L(()=>e.t("base.systemTitle"))}}}),M="data:image/svg+xml,%3csvg%20viewBox='0%200%202500%202165.1'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m1538.7%200-288.7%20500-288.7-500h-961.3l1250%202165.1%201250-2165.1z'%20fill='%234dba87'/%3e%3cpath%20d='m1538.7%200-288.7%20500-288.7-500h-461.3l750%201299%20750-1299z'%20fill='%23435466'/%3e%3c/svg%3e",z=e=>(C("data-v-f1bcf7c3"),e=e(),S(),e),O={class:"side-logo-container"},R=z(()=>P("img",{class:"side-logo-img",src:M,alt:"商标"},null,-1)),q={class:"side-logo-title"};function G(e,n,r,p,c,i){const s=t("router-link");return j(),$("div",O,[o(s,{to:`/${e.$route.params.locale||""}`},{default:a(()=>[R,P("h1",q,b(e.title),1)]),_:1},8,["to"])])}const J=v(H,[["render",G],["__scopeId","data-v-f1bcf7c3"]]),K=g({name:"ProjectList",components:{NavigationNavBar:E,NavigationSideLogo:J,ProjectTableHeader:D,ProjectTableBody:F},setup(){const{proxy:e}=T(),n=k(),r=h();function p(){const s=I({name:"",corpName:"",notes:""});e.$ModalDialog({title:r.t("project.create"),top:"10vh",width:"50vw",showClose:!0,closeOnClickModal:!1,closeOnPressEscape:!1,renderComponent:{data:s,component:x},async onConfirm(m,l){if(!await m.validateRules())return Promise.reject(new Error("error"));l.fullLoading=!0;const{error:d,data:f}=await n.dispatch(_.getAction("createProject"),s);if(l.fullLoading=!1,d)return Promise.reject(new Error("error"));n.dispatch(_.getAction("getProjectList"))}})}const c=B(!0),i=async s=>{c.value=!0,await n.dispatch(_.getAction("getProjectList"),{kw:s}),c.value=!1};return i(),{localeInject:r,loadingContent:c,handleCreateProject:p,handleSelectSearch:i}}});function Q(e,n,r,p,c,i){const s=t("NavigationSideLogo"),m=t("NavigationNavBar"),l=t("IconFont"),u=t("el-button"),d=t("LayoutSection"),f=t("el-date-picker"),w=t("ProjectTableHeader"),y=t("ProjectTableBody"),N=t("LayoutArea");return j(),A(N,null,{top:a(()=>[o(m,{fixed:!1},{default:a(()=>[o(s)]),_:1})]),side:a(()=>[o(d,{title:e.localeInject.t("project.manageTitle")},{default:a(()=>[o(u,{type:"primary",class:"create-action",onClick:n[0]||(n[0]=U=>e.handleCreateProject())},{default:a(()=>[o(l,{icon:"iconestablish"}),V(" "+b(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:a(()=>[o(d,{"has-divider":"","flex-content":"",loading:e.loadingContent},{head:a(()=>[o(f,{"start-placeholder":e._t("base.i18nTest"),"end-placeholder":e._t("base.i18nTest"),type:"datetimerange"},null,8,["start-placeholder","end-placeholder"])]),default:a(()=>[o(w),o(y)]),_:1},8,["loading"])]),_:1})}const ae=v(K,[["render",Q],["__scopeId","data-v-646ea6eb"]]);export{ae as default};
