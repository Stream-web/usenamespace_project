import x from"./ContainerLayout.b0a389cf.js";import{_ as S,u as _,U as I}from"./index.6cbd8bb6.js";import{T as R}from"./Translations.3fa17df7.js";import{s as A,a8 as E,u as T,g as U,h as C,L as g,S as O,Y as P,i as q,a9 as D,X as z,r as l,o as j,t as F,v as t,I as H,m as c,l as b,H as M,d as y,E as V,M as X,O as Y}from"./vendor.a1217d50.js";import"./lodash.c9d9d78e.js";const $=A({name:"UserAccountLogin",components:{UserAccountContainerLayout:x,Promotion:E,Translations:R},setup(){const{proxy:a}=_(),d=T(),p=U(),v=C(),i=g(!0),n=g(""),o=g(""),u=O({email:"vite.admin@gmail.com",password:"123456"}),s=P(),m=q(()=>({title:s.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:i.value,size:"large"},text:s.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:s.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:s.t("login.plscurrentemail")})]},label:s.t("login.email"),prefixIcon:"user-tie",placeholder:s.t("login.plsemail")},{attrs:{prop:"password",error:o.value,rules:()=>a.getRequiredRules({trigger:"change",message:s.t("login.plspwd")})},link:{text:s.t("login.fgtpwd"),click(){}},type:"password",label:s.t("login.pwd"),prefixIcon:"lock",placeholder:s.t("login.plspwd")}]}));function e(r=!1){i.value=r}return e(!0),D(()=>{z(()=>{e(!1)})}),{isLoading:i,inputErrorEmail:n,inputErrorPassword:o,formData:u,configLogin:m,setLoading:e,onSubmit:function(r){i.value||r.validate(async w=>{if(!w)return;n.value="",o.value="",e(!0);const{error:L,data:f,msg:k}=await d.dispatch(I.getAction("login"),u);if(L)return n.value=" ",o.value=k,void e(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{V.success({message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(X("data-v-7b9c3239"),a=a(),Y(),a),B={class:"user-account-login"},G={class:"user-account-nav"},J={class:"nav-left"},K=h(()=>t("div",{class:"nav-logo"},null,-1)),N=h(()=>t("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},W={class:"nav-right"},Z={class:"user-account-body"};var ia=S($,[["render",function(a,d,p,v,i,n){const o=l("Translations"),u=l("Promotion"),s=l("el-icon"),m=l("UserAccountContainerLayout"),e=l("Footer");return j(),F("div",B,[t("div",G,[t("div",J,[K,N,t("div",Q,H(a._t("base.systemTitle")),1)]),t("div",W,[c(o,{dark:""})])]),t("div",Z,[c(m,M(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[c(s,null,{default:b(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(e)])}],["__scopeId","data-v-7b9c3239"]]);export{ia as default};
