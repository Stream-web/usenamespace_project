import{_ as s}from"./index.3ee2b183.js";import{s as r,r as t,o as c,t as k,m as a,l as o,v as i,I as N,h as b,u as B,k as S}from"./vendor.22065a87.js";import{N as j}from"./NavBar.45194d04.js";import"./Translations.a824c57c.js";const y=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),h={class:"go-back-container"},w={class:"go-back-title"},x=r({name:"LayoutView",components:{NavigationNavBar:j,NavigationSideGoBack:s(y,[["render",function(e,u,d,f,v,p){const n=t("IconFont"),l=t("router-link");return c(),k("div",h,[a(l,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[a(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",w,N(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(b(),B(),{})}),G=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var F=s(x,[["render",function(e,u,d,f,v,p){const n=t("NavigationSideGoBack"),l=t("NavigationNavBar"),m=t("LayoutSection"),g=t("router-view"),_=t("LayoutArea");return c(),S(_,null,{top:o(()=>[a(l,{fixed:!1},{default:o(()=>[a(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[a(m,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[G]),_:1},8,["title"])]),content:o(()=>[a(g)]),_:1})}]]);export{F as default};
