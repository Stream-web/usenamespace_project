import{e as I,J as S,i as d,v as x,u as C,f as R,K as A,n as E,U as M,L as v,E as T,x as U,I as P,M as $,k as q,_ as B,o as D,b as V,d as s,t as F,g as c,w as h,q as N,r as l,p as O,h as j}from"./index-a659999e.js";import z from"./ContainerLayout-ed13d369.js";import{T as J}from"./Translations-40d170dc.js";import"./lodash-eff20709.js";const K=I({name:"UserAccountLogin",components:{UserAccountContainerLayout:z,Promotion:S,Translations:J},setup(){const{proxy:e}=q(),m=U(),g=P(),_=$(),a=d(!0),r=d(""),n=d(""),u=x({email:"vite.admin@gmail.com",password:"123456"}),o=C(),p=R(()=>({title:o.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:a.value,size:"large"},text:o.t("login.signin"),on:{click(i){e.onSubmit(i)}}}],formConfig:[{attrs:{prop:"email",error:r.value,rules(){return[e.getRequiredRules({trigger:"change",message:o.t("login.plsemail")}),e.getValidatorRules("","blur",{type:"email",message:o.t("login.plscurrentemail")})]}},label:o.t("login.email"),prefixIcon:"user-tie",placeholder:o.t("login.plsemail")},{attrs:{prop:"password",error:n.value,rules(){return e.getRequiredRules({trigger:"change",message:o.t("login.plspwd")})}},link:{text:o.t("login.fgtpwd"),click(){}},type:"password",label:o.t("login.pwd"),prefixIcon:"lock",placeholder:o.t("login.plspwd")}]}));function t(i=!1){a.value=i}function w(i){a.value||i.validate(async b=>{if(!b)return;r.value="",n.value="",t(!0);const{error:k,data:f,msg:L}=await m.dispatch(M.getAction("login"),u);if(k){r.value=" ",n.value=L,t(!1);return}v.set("token",f.user.token),v.set("name",f.user.username),_.replace(`/${g.params.locale||""}`).then(()=>{T.success({message:"登录成功"})}).catch(()=>{})})}return t(!0),A(()=>{E(()=>{t(!1)})}),{isLoading:a,inputErrorEmail:r,inputErrorPassword:n,formData:u,configLogin:p,setLoading:t,onSubmit:w}}});const y=e=>(O("data-v-38894e88"),e=e(),j(),e),G={class:"user-account-login"},H={class:"user-account-nav"},Q={class:"nav-left"},W=y(()=>s("div",{class:"nav-logo"},null,-1)),X=y(()=>s("div",{class:"nav-circle"},null,-1)),Y={class:"nav-title"},Z={class:"nav-right"},ee={class:"user-account-body"};function oe(e,m,g,_,a,r){const n=l("Translations"),u=l("Promotion"),o=l("el-icon"),p=l("UserAccountContainerLayout"),t=l("MyFooter");return D(),V("div",G,[s("div",H,[s("div",Q,[W,X,s("div",Y,F(e._t("base.systemTitle")),1)]),s("div",Z,[c(n,{dark:""})])]),s("div",ee,[c(p,N(e.configLogin,{"form-data":e.formData,onOnSubmit:e.onSubmit}),{titleIcon:h(()=>[c(o,null,{default:h(()=>[c(u)]),_:1})]),_:1},16,["form-data","onOnSubmit"])]),c(t)])}const re=B(K,[["render",oe],["__scopeId","data-v-38894e88"]]);export{re as default};
