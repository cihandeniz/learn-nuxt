import i from"./ContentRenderer.5bbbb266.js";import{x as p,X as s,o as n,e as c,P as d,u,U as f,V as h,c as y}from"./entry.3726d9a4.js";import{q as l}from"./query.e3a3a1b5.js";import"./ContentRendererMarkdown.e801327f.js";import"./index.a6ef77ff.js";import"./utils.5d945d47.js";const V={__name:"query-content",async setup(q){let e,t;const r=p(),m=([e,t]=s(()=>l("/demo/query-content").where({_path:{$eq:r.path}}).findOne()),e=await e,t(),e),_=([e,t]=s(()=>l("/demo/query-content").where({_path:{$ne:r.path}}).find()),e=await e,t(),e);return(v,w)=>{const o=i;return n(),c("div",null,[d(o,{value:u(m)},null,8,["value"]),(n(!0),c(f,null,h(u(_),a=>(n(),y(o,{key:a.title,value:a},null,8,["value"]))),128))])}}};export{V as default};