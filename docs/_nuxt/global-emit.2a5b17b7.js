import{s as _,o as t,c as o,S as m,b as p,u as r}from"./entry.67d27228.js";import"./app.config.ae5c1232.js";const s=()=>_("sampleGlobal",()=>!1),u={__name:"ComponentThatEmitsGlobally",setup(n){const e=s();function a(){e.value=!e.value}return(c,l)=>(t(),o("button",{onClick:a}," Click to emit globally "))}},i={key:0},b={key:1},h={__name:"global-emit",setup(n){const e=s();return(a,c)=>{const l=u;return t(),o("div",null,[m(l),p(" 👉 "),r(e)?(t(),o("span",i,"✅")):(t(),o("span",b,"❌"))])}}};export{h as default};