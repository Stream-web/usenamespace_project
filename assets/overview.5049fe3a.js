import{_ as i,R as n}from"./index.0d6b950d.js";import{s as c,u as v,g as d,i as l,r as u,o as p,k as f,l as w,v as m,I as g}from"./vendor.8d0c97e8.js";const x=c({name:"ResultOverView",setup(){const t=v(),e=d(),a=l(()=>t.state.Result.overviewData);return async function(){const{error:s,data:o}=await t.dispatch(n.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),D={style:{height:"100%",flex:"1",border:"1px solid"}};var h=i(x,[["render",function(t,e,a,s,o,I){const r=u("LayoutSection");return p(),f(r,{"flex-content":"",title:t.overviewData.title},{default:w(()=>[m("div",D,g(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-74588d19"]]);export{h as default};
