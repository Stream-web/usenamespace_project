import{a6 as i}from"./index-7bb6e6e2.js";import{m as r}from"./mixin-3a0ecbbf.js";const s={SET_DEMO_LIST:"setDemoList",UPDATE_OVERVIEW_DATA:"updateOverviewData"},n={title:"测试标题总览",content:"测试内容 overview"},D={namespaced:!0,_name:"Result",state:{demoList:{},overviewData:{title:"",content:""}},getters:{demoList:e=>e.demoList},mutations:{[s.UPDATE_OVERVIEW_DATA](e,t){e.overviewData=t}},actions:{async getResultOverview({commit:e},t){await i(800);const o={msg:"ok",error:0,data:n};return this.filterResponse(o,({data:a})=>{e(s.UPDATE_OVERVIEW_DATA,a)},()=>{})}},...r};export{D as R};