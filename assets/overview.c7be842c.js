import{_ as i,e as n,f as v,K as c,i as l,r as u,o as d,c as p,w as f,d as w,t as m,R as _}from"./index.f013e1fd.js";const R=n({name:"ResultOverView",setup(){const t=v(),e=c(),a=l(()=>t.state.Result.overviewData);return async function(){const{error:s,data:r}=await t.dispatch(_.getAction("getResultOverview"),{projectId:e.params.projectId})}(),{overviewData:a}}}),g={style:{height:"100%",flex:"1",border:"1px solid"}};var D=i(R,[["render",function(t,e,a,s,r,h){const o=u("LayoutSection");return d(),p(o,{"flex-content":"",title:t.overviewData.title},{default:f(()=>[w("div",g,m(t.overviewData.content),1)]),_:1},8,["title"])}],["__scopeId","data-v-d49caa36"],["__file","/home/runner/work/vite-ts-starter/vite-ts-starter/src/modules/Result/pages/overview.vue"]]);export{D as default};
