import{_ as p,e as i,u as c,f,g as V,r as s,o as g,b as h,h as a,w as r}from"./index.f013e1fd.js";const w=i({name:"ProjectForm",props:{modelValue:{type:Object,default:()=>({})}},setup(e){c(),f();const l=V();return{refForm:l,validateRules:async()=>new Promise(u=>{l.value.validate(d=>{u(!!d)})})}}}),_={class:"project-form-container"};var x=p(w,[["render",function(e,l,u,d,v,b){const t=s("el-input"),m=s("el-form-item"),n=s("el-form");return g(),h("div",_,[a(n,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"120px"},{default:r(()=>[a(m,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"})},{default:r(()=>[a(t,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=o=>e.modelValue.name=o),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u9879\u76EE\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["label","rules"]),a(m,{prop:"corpName",label:"\u516C\u53F8\u540D\u79F0",rules:e.getRequiredRules({trigger:"change",message:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"})},{default:r(()=>[a(t,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=o=>e.modelValue.corpName=o),maxlength:"30","show-word-limit":"",placeholder:"\u8BF7\u8F93\u5165\u516C\u53F8\u540D\u79F0"},null,8,["modelValue"])]),_:1},8,["rules"]),a(m,{prop:"notes",label:"\u5907\u6CE8"},{default:r(()=>[a(t,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=o=>e.modelValue.notes=o),type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])}],["__scopeId","data-v-cae39d4a"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/Project/components/ProjectForm.vue"]]);export{x as default};
