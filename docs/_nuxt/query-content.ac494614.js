import i from"./ContentRenderer.be8c9301.js";import{y as p,V as s,o as n,c,Q as d,u,R as f,S as h,g as y}from"./entry.6196bb68.js";import{q as l}from"./query.587b2a3f.js";import"./ContentRendererMarkdown.7e6c2c50.js";import"./index.a6ef77ff.js";import"./utils.d7728ea3.js";const g={__name:"query-content",async setup(q){let e,t;const r=p(),m=([e,t]=s(()=>l("/demo/query-content").where({_path:{$eq:r.path}}).findOne()),e=await e,t(),e),_=([e,t]=s(()=>l("/demo/query-content").where({_path:{$ne:r.path}}).find()),e=await e,t(),e);return(v,w)=>{const o=i;return n(),c("div",null,[d(o,{value:u(m)},null,8,["value"]),(n(!0),c(f,null,h(u(_),a=>(n(),y(o,{key:a.title,value:a},null,8,["value"]))),128))])}}};export{g as default};
