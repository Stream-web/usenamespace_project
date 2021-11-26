import k from"./ContainerLayout.2ba8f099.js";import{_,u as j,U as I}from"./index.7bd6d4ac.js";import{T as R}from"./Translations.b688268d.js";import{s as S,a8 as T,u as U,g as A,h as C,M as m,O as E,V as O,i as P,a9 as q,U as D,r as c,o as V,t as $,v as s,I as z,m as u,l as b,H,d as y,a0 as M,a1 as B}from"./vendor.d9232278.js";import"./lodash.07568890.js";const F=S({name:"UserAccountLogin",components:{UserAccountContainerLayout:k,Promotion:T,Translations:R},setup(){const{proxy:a}=j(),g=U(),p=A(),v=C(),o=m(!0),n=m(""),t=m(""),l=E({email:"vite.admin@gmail.com",password:"123456"}),e=O(),d=P(()=>({title:e.t("login.hydl"),actionList:[{attrs:{type:"primary",loading:o.value,size:"large"},text:e.t("login.signin"),on:{click(r){a.onSubmit(r)}}}],formConfig:[{attrs:{prop:"email",error:n.value,rules:()=>[a.getRequiredRules({trigger:"change",message:e.t("login.plsemail")}),a.getValidatorRules("","blur",{type:"email",message:e.t("login.plscurrentemail")})]},label:e.t("login.email"),prefixIcon:"user-tie",placeholder:e.t("login.plsemail")},{attrs:{prop:"password",error:t.value,rules:()=>a.getRequiredRules({trigger:"change",message:e.t("login.plspwd")})},link:{text:e.t("login.fgtpwd"),click(){}},type:"password",label:e.t("login.pwd"),prefixIcon:"lock",placeholder:e.t("login.plspwd")}]}));function i(r=!1){o.value=r}return i(!0),q(()=>{D(()=>{i(!1)})}),{isLoading:o,inputErrorEmail:n,inputErrorPassword:t,formData:l,configLogin:d,setLoading:i,onSubmit:function(r){o.value||r.validate(async w=>{if(!w)return;n.value="",t.value="",i(!0);const{error:L,data:f,msg:x}=await g.dispatch(I.getAction("login"),l);if(L)return n.value=" ",t.value=x,void i(!1);y.set("token",f.user.token),y.set("name",f.user.username),v.replace(`/${p.params.locale||""}`).then(()=>{a.$message({type:"success",message:"\u767B\u5F55\u6210\u529F"})}).catch(()=>{})})}}}}),h=a=>(M("data-v-43dee5e5"),a=a(),B(),a),G={class:"user-account-login"},J={class:"user-account-nav"},K={class:"nav-left"},N=h(()=>s("div",{class:"nav-logo"},null,-1)),Q=h(()=>s("div",{class:"nav-circle"},null,-1)),W={class:"nav-title"},X={class:"nav-right"},Y={class:"user-account-body"};var oa=_(F,[["render",function(a,g,p,v,o,n){const t=c("Translations"),l=c("Promotion"),e=c("el-icon"),d=c("UserAccountContainerLayout");return V(),$("div",G,[s("div",J,[s("div",K,[N,Q,s("div",W,z(a._t("base.systemTitle")),1)]),s("div",X,[u(t)])]),s("div",Y,[u(d,H(a.configLogin,{"form-data":a.formData,onOnSubmit:a.onSubmit}),{titleIcon:b(()=>[u(e,null,{default:b(()=>[u(l)]),_:1})]),_:1},16,["form-data","onOnSubmit"])])])}],["__scopeId","data-v-43dee5e5"]]);export{oa as default};
