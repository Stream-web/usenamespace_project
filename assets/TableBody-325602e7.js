import{u as p}from"./useBaseStore-f74bbca7.js";import i from"./ProjectItem-e758edd4.js";import{x as m,e as d,ai as _,y as t,z as o,A as s,F as l,a0 as u,O as j,L as y,H as f,ak as b,al as h,a7 as v}from"./_plugin-vue_export-helper-7d8c4552.js";import"./vuex.esm-bundler-a9f4b4b2.js";import"./index-cf9eead9.js";import"./index-7ba2458a.js";import"./type-fc9595d5.js";import"./index-615fdd16.js";const B=m({name:"ProjectTableBody",components:{ProjectItem:i},setup(){const e=p();return{projectList:d(()=>e.state.Project.projectList)}}}),L=""+new URL("project-empty-f8dbf7fc.svg",import.meta.url).href;const I=e=>(b("data-v-0a5855a3"),e=e(),h(),e),g={class:"project-table-body-container"},k={class:"project-table-body-container__inner"},P={key:0,class:"project-empty-box"},S=I(()=>s("img",{src:L,alt:"Empty"},null,-1));function $(e,a,x,C,T,w){const r=v("ProjectItem");return t(),o("div",g,[s("div",k,[(t(!0),o(l,null,u(e.projectList,(c,n)=>(t(),f(r,{key:n,dataset:c},null,8,["dataset"]))),128)),e.projectList.length?y("",!0):(t(),o("div",P,[S,s("span",null,j(e._t("base.empty")),1)]))])])}const O=_(B,[["render",$],["__scopeId","data-v-0a5855a3"]]);export{O as default};
