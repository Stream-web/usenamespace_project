import{e as i,u as c,K as u,h as d,R as v,_,r as l,o as p,c as f,w,d as m,t as h}from"./index.1df144a8.js";const y=i({name:"ResultOverView",setup(){const e=c(),t=u(),o=d(()=>e.state.Result.overviewData);async function s(){const{error:a,data:r}=await e.dispatch(v.getAction("getResultOverview"),{projectId:t.params.projectId})}return s(),{overviewData:o}}});const R={style:{height:"100%",flex:"1",border:"1px solid"}};function g(e,t,o,s,a,r){const n=l("LayoutSection");return p(),f(n,{"flex-content":"",title:e.overviewData.title},{default:w(()=>[m("div",R,h(e.overviewData.content),1)]),_:1},8,["title"])}const D=_(y,[["render",g],["__scopeId","data-v-23a8a6cd"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/Result/pages/overview.vue"]]);export{D as default};
