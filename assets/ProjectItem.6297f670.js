import{s as f,$ as h,M as b,i as g,r as o,o as n,k as i,l as d,v as t,m as p,I as c,G as m,K as x,A as y}from"./vendor.d9232278.js";import{_ as w,u as P,s as k}from"./index.7bd6d4ac.js";const I=f({name:"ProjectItem",components:{Loading:h},props:{dataset:{type:Object,default:()=>({})}},setup(a){const{proxy:s}=P(),e=b(!1),r=g(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:e,getActionIcon:r,handlePublish:async function(u){e.value||(e.value=!0,await k(300),e.value=!1,s.$message({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),$={class:"project-item-container"},L={style:{flex:"1","min-width":"0"}},A={class:"project-item__name"},C={class:"project-item__name-left"},T={class:"project-item__name-desc"},F={class:"project-item__name-desc__corpname"},G={class:"project-item__name-desc__corpname-maintext text_nowrap"},K={class:"project-item__name-desc__fullname text_nowrap"},M={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},N={class:"project-item-action__icon"},O={class:"project-item-action__status"};var D=w(I,[["render",function(a,s,e,r,u,S){const l=o("IconFont"),_=o("TooltipCustom"),j=o("Loading"),v=o("router-link");return n(),i(v,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:d(()=>[t("ul",$,[t("li",L,[t("div",A,[t("div",C,[p(l,{icon:"iconfile"})]),t("div",T,[t("div",F,[t("span",G,c(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=m(()=>{},["prevent"]))},[a.dataset.notes?(n(),i(_,{key:0,content:a.dataset.notes},{default:d(()=>[p(l,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):x("",!0)])]),t("p",K,c(a.dataset.name),1)])])]),t("li",M,c(a.dataset.createTime),1),t("li",{class:y(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=m(q=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",N,[a.isLoading?(n(),i(j,{key:1,class:"transform-rotate360"})):(n(),i(l,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",O,c(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-323b9732"]]);export{D as default};
