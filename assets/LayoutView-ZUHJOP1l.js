import{d as c,_ as r,r as t,o as l,b as k,g as e,w as o,e as n,t as N,G as $,i as B,c as S}from"./index-0_koFRYh.js";import{N as h}from"./NavBar-noFcxGiU.js";import"./Translations-bCtNnzcn.js";const y=c({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),b={class:"go-back-container"},w={class:"go-back-title"};function L(a,_,u,p,d,m){const i=t("IconFont"),s=t("router-link");return l(),k("div",b,[e(s,{to:`/${a.$route.params.locale||""}`},{default:o(()=>[e(i,{icon:"iconarrow_left",class:"go-back-icon"}),n("h1",w,N(a.title),1)]),_:1},8,["to"])])}const G=r(y,[["render",L],["__scopeId","data-v-684c4b0a"]]),V=c({name:"LayoutView",components:{NavigationNavBar:h,NavigationSideGoBack:G},setup(){return $(),B(),{}}}),C=n("ul",null,[n("li",null,"111"),n("li",null,"222"),n("li",null,"333")],-1);function I(a,_,u,p,d,m){const i=t("NavigationSideGoBack"),s=t("NavigationNavBar"),f=t("LayoutSection"),v=t("router-view"),g=t("LayoutArea");return l(),S(g,null,{top:o(()=>[e(s,{fixed:!1},{default:o(()=>[e(i,{title:a._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[e(f,{"has-divider":"",title:a._t("result.title")},{default:o(()=>[C]),_:1},8,["title"])]),content:o(()=>[e(v)]),_:1})}const D=r(V,[["render",I]]);export{D as default};
