import{d as y,u as P,i as k,f as C,o as i,c,w as _,r as m,e,g as p,t as l,s as f,q as I,v as g,x as d,y as x,z as N,E as h,_ as $}from"./index-Q3HM2ovC.js";const T={class:"project-item-container"},B={style:{flex:"1","min-width":"0"}},S={class:"project-item__name"},V={class:"project-item__name-left"},z={class:"project-item__name-desc"},E={class:"project-item__name-desc__corpname"},F={class:"project-item__name-desc__corpname-maintext text_nowrap"},L={class:"project-item__name-desc__fullname text_nowrap"},M={style:{width:"18.5%",flex:"initial"},class:"text_nowrap"},q={class:"project-item-action__icon"},A={class:"project-item-action__status"},D=y({name:"ProjectItem",__name:"ProjectItem",props:{dataset:{type:Object,default(){return{corpName:"",createTime:"",id:"",isPublished:!1,name:"",notes:""}}}},setup(t){const o=t,u=P(),s=k(!1),j=C(()=>o.dataset.isPublished?"iconstop":"iconplay");async function v(a){s.value||(s.value=!0,await N(300),s.value=!1,o.dataset.isPublished?h.info(u.t("project.publishingStop")):h.success(u.t("project.publishedSuccessfully")),o.dataset.isPublished=!o.dataset.isPublished)}return(a,n)=>{const r=m("IconFont"),b=m("TooltipCustom"),w=m("router-link");return i(),c(w,{to:`${a.$route.params.locale?"/"+a.$route.params.locale+"/":"/"}result/${t.dataset.id}/overview`},{default:_(()=>[e("ul",T,[e("li",B,[e("div",S,[e("div",V,[p(r,{icon:"iconfile"})]),e("div",z,[e("div",E,[e("span",F,l(t.dataset.corpName),1),e("span",{onClick:n[0]||(n[0]=f(()=>{},["prevent"]))},[t.dataset.notes?(i(),c(b,{key:0,content:t.dataset.notes},{default:_(()=>[p(r,{icon:"iconhelp",class:"corpname-notes"})]),_:1},8,["content"])):I("",!0)])]),e("p",L,l(t.dataset.name),1)])])]),e("li",M,l(t.dataset.createTime),1),e("li",{class:g(["project-item-action text_nowrap",{active:t.dataset.isPublished,loading:d(s)}]),onClick:n[1]||(n[1]=f(O=>v(t.dataset.id),["prevent"]))},[e("span",q,[d(s)?(i(),c(d(x),{key:1,class:"transform-rotate360"})):(i(),c(r,{key:0,icon:d(j)},null,8,["icon"]))]),e("span",A,l(t.dataset.isPublished?a._t("project.stop"):a._t("project.publish")),1)],2)])]),_:1},8,["to"])}}}),H=$(D,[["__scopeId","data-v-53b7748f"]]);export{H as default};
