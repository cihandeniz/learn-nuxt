import{m as f,_ as v,k as l,t as d,b as _,p as g,a as h,l as r}from"./entry.3726d9a4.js";import{u as y}from"./asyncData.20c43fe8.js";import{q as w,h as u,e as C,j as $}from"./query.e3a3a1b5.js";import{_ as N}from"./nuxt-link.8bc35823.js";import{w as c,s as P,u as j,a as T}from"./utils.5d945d47.js";/* empty css                            *//* empty css                                        *//* empty css                              *//* empty css                      */const b=async n=>{const{content:t}=f().public;typeof(n==null?void 0:n.params)!="function"&&(n=w(n));const a=n.params(),s=t.experimental.stripQueryParameters?c(`/navigation/${`${u(a)}.${t.integrity}`}/${C(a)}.json`):c(`/navigation/${u(a)}.${t.integrity}.json`);if(P())return(await v(()=>import("./client-db.702bac31.js"),["./client-db.702bac31.js","./entry.3726d9a4.js","./entry.0002879e.css","./utils.5d945d47.js","./query.e3a3a1b5.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const A=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=d(n),a=_(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&g("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await y(`content-navigation-${u(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=h(),{navigation:a}=n,s=o=>r(N,{to:o._path},()=>o.title),e=(o,p)=>r("ul",p?{"data-level":p}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,p+1)]):r("li",null,s(i)))),m=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):m(a)}});export{A as default};
