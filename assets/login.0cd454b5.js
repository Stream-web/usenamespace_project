import{_,e as x,W as A,u as R,f as S,K as C,J as E,g as m,H as I,x as T,i as U,X as q,A as P,r as l,o as D,b as O,d as t,t as z,h as c,w as b,k as F,C as j,Y as H,L as w,E as J,q as K,v as V}from"./index.fd51f41e.js";import W from"./ContainerLayout.277498aa.js";import{T as X}from"./Translations.0679d81b.js";import"./lodash.ed67837b.js";const Y=x({name:"UserAccountLogin",components:{UserAccountContainerLayout:W,Promotion:A,Translations:X},setup(){const{proxy:a}=R(),d=S(),p=C(),v=E(),n=m(!0),r=m(""),o=m(""),u=I({email:"vite.admin@gmail.com",password:"123456"}),e=T(),g=U(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:n.value,size:"large"},text:e.t("login.signin"),on:{click(i){a.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules:()=>[a.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:o.value,rules:()=>a.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function s(i=!1){n.value=i}return s(!0),q(()=>{P(()=>{s(!1)})}),{isLoading:n,inputErrorEmail:r,inputErrorPassword:o,formData:u,configLogin:g,setLoading:s,onSubmit:function(i){n.value||i.validate(async h=>{if(!h)return;r.value="",o.value="",s(!0);const{error:k,data:f,msg:L}=await d.dispatch(H.getAction("login"),u);if(k)return r.value=" ",o.value=L,void s(!1);w.set("token",f.user.token),w.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{J.success({message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),y=a=>(K("data-v-3c9ba2c0"),a=a(),V(),a),$={class:"user-account-login"},B={class:"user-account-nav"},G={class:"nav-left"},M=y(()=>t("div",{class:"nav-logo"},null,-1)),N=y(()=>t("div",{class:"nav-circle"},null,-1)),Q={class:"nav-title"},Z={class:"nav-right"},aa={class:"user-account-body"};var na=_(Y,[["render",function(a,d,p,v,n,r){const o=l("Translations"),u=l("Promotion"),e=l("el-icon"),g=l("UserAccountContainerLayout"),s=l("Footer");return D(),O("div",$,[t("div",B,[t("div",G,[M,N,t("div",Q,z(a._t("base.systemTitle")),1)]),t("div",Z,[c(o,{dark:""})])]),t("div",aa,[c(g,j(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[F(` <img
          src="@/assets/images/vue.svg"
          alt=""
        > `),c(e,null,{default:b(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(s)])}],["__scopeId","data-v-3c9ba2c0"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/UserAccount/pages/login.vue"]]);export{na as default};