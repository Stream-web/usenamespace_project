import{a3 as o}from"./index-7ba2458a.js";function m(e,t,n){return new Promise(s=>{e&&e.error===0?t&&t(e):n?n(e):o({type:"error",message:e.msg,showClose:!0}),s(e)})}const r={getAction(e){const t=this;return`${t._name}/${Object.keys(t.actions)[Object.keys(t.actions).indexOf(e)]}`},getMutation(e){const t=this;return`${t._name}/${Object.keys(t.mutations)[Object.keys(t.mutations).indexOf(e)]}`}};export{m as g,r as m};
