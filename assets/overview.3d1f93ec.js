import{_ as i,R as n}from"./index.8b97e5fb.js";import{s as c,u as d,g as v,i as u,r as l,o as p,k as f,l as w,v as m,I as b}from"./vendor.e6bdc36a.js";const g=c({name:"ResultOverView",setup(){const e=d(),t=v(),a=u(()=>e.state.Result.overviewData);return async function(){const{error:s,data:o}=await e.dispatch(n.getAction("getResultOverview"),{projectId:t.params.projectId})}(),{overviewData:a}}}),j={style:{height:"100%",border:"1px solid"}};var R=i(g,[["render",function(e,t,a,s,o,x){const r=l("LayoutSection");return p(),f(r,{"flex-content":"",title:e.overviewData.title},{default:w(()=>[m("div",j,b(e.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-1d9f879a"]]);export{R as default};
