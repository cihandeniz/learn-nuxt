import s from"./ContentSlot.8a244035.js";import{k as o,q as u,a as f,b as m}from"./entry.e8886508.js";import"./utils.7792773a.js";const l=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=f(),r=m(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{l as default};