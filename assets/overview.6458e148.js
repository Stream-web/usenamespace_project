import{_ as i,R as n}from"./index.101e269d.js";import{I as c,u as d,g as v,i as u,r as l,o as p,k as f,l as w,v as m,H as g}from"./vendor.94295d97.js";const j=c({name:"ResultOverView",setup(){const e=d(),t=v(),a=u(()=>e.state.Result.overviewData);return async function(){const{error:s,data:o}=await e.dispatch(n.getAction("getResultOverview"),{projectId:t.params.projectId})}(),{overviewData:a}}}),x={style:{height:"100%",border:"1px solid"}};var _=i(j,[["render",function(e,t,a,s,o,D){const r=l("LayoutSection");return p(),f(r,{"flex-content":"",title:e.overviewData.title},{default:w(()=>[m("div",x,g(e.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-ea915b2c"]]);export{_ as default};
