import{d as i,i as f,j as c,_ as V,r as m,o as g,b as h,g as o,w as t}from"./index-Gwu7Z9L-.js";const b=i({name:"ProjectForm",props:{modelValue:{type:Object,default(){return{}}}},setup(e){f();const l=c();return{refForm:l,validateRules:async()=>new Promise(r=>{l.value.validate(p=>{r(!!p)})})}}}),_={class:"project-form-container"};function j(e,l,d,r,p,w){const n=m("el-input"),s=m("el-form-item"),u=m("el-form");return g(),h("div",_,[o(u,{ref:"refForm",model:e.modelValue,"label-position":"right","label-width":"145px"},{default:t(()=>[o(s,{prop:"name",label:e._t("project.name"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(n,{modelValue:e.modelValue.name,"onUpdate:modelValue":l[0]||(l[0]=a=>e.modelValue.name=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(s,{prop:"corpName",label:e._t("project.corpName"),rules:e.getRequiredRules({trigger:"change",message:e._t("base.pleaseInput")})},{default:t(()=>[o(n,{modelValue:e.modelValue.corpName,"onUpdate:modelValue":l[1]||(l[1]=a=>e.modelValue.corpName=a),maxlength:"30","show-word-limit":"",placeholder:e._t("project.corpName")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),o(s,{prop:"notes",label:e._t("project.notes")},{default:t(()=>[o(n,{modelValue:e.modelValue.notes,"onUpdate:modelValue":l[2]||(l[2]=a=>e.modelValue.notes=a),type:"textarea",placeholder:e._t("project.notes"),maxlength:"200",autosize:{minRows:2},"show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])])}const v=V(b,[["render",j],["__scopeId","data-v-75504109"]]);export{v as default};