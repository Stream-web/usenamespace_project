import{s as v,a0 as j,L as h,i as b,r as e,o,k as i,l as r,v as t,m as d,J as n,H as p,G as g,A as w,E as x}from"./vendor.e6256443.js";import{_ as y,u as P,s as k}from"./index.5a47511f.js";const L=v({name:"ProjectItem",components:{Loading:j},props:{dataset:{type:Object,default:()=>({})}},setup(a){P();const s=h(!1),l=b(()=>a.dataset.isPublished?"iconstop":"iconplay");return{isLoading:s,getActionIcon:l,handlePublish:async function(m){s.value||(s.value=!0,await k(300),s.value=!1,x.success({message:"Successful!"}),a.dataset.isPublished=!a.dataset.isPublished)}}}}),I={class:"project-item-container"},C={style:{flex:"1","min-width":"0"}},$={class:"project-item__name"},A={class:"project-item__name-left"},T={class:"project-item__name-desc"},E={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},G={class:"project-item__name-desc__fullname text_nowrap"},H={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},J={class:"project-item-action__icon"},N={class:"project-item-action__status"};var D=y(L,[["render",function(a,s,l,m,O,S){const c=e("IconFont"),_=e("TooltipCustom"),u=e("Loading"),f=e("router-link");return o(),i(f,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${a.dataset.id}/overview`},{default:r(()=>[t("ul",I,[t("li",C,[t("div",$,[t("div",A,[d(c,{icon:"iconfile"})]),t("div",T,[t("div",E,[t("span",F,n(a.dataset.corpName),1),t("span",{onClick:s[0]||(s[0]=p(()=>{},["prevent"]))},[a.dataset.notes?(o(),i(_,{key:0,content:a.dataset.notes},{default:r(()=>[d(c,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):g("v-if",!0)])]),t("p",G,n(a.dataset.name),1)])])]),t("li",H,n(a.dataset.createTime),1),t("li",{class:w(["project-item-action text_nowrap",{active:a.dataset.isPublished,loading:a.isLoading}]),onClick:s[1]||(s[1]=p(q=>a.handlePublish(a.dataset.id),["prevent"]))},[t("span",J,[a.isLoading?(o(),i(u,{key:1,class:"transform-rotate360"})):(o(),i(c,{key:0,icon:a.getActionIcon},null,8,["icon"]))]),t("span",N,n(a.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}],["__scopeId","data-v-76fc3fac"]]);export{D as default};
