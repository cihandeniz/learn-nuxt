import{_ as f,o as _,c as l,G as p,a as r,b as t,S as s,t as i,u as m}from"./entry.62f9adcd.js";const d={};function v(n,e){return _(),l("button",{onClick:e[0]||(e[0]=o=>n.$emit("sample-emit"))}," Click to emit ")}const x=f(d,[["render",v]]),S={__name:"emit-and-ref",setup(n){let e=0;function o(){e++}const c=p(0);function u(){c.value++}return(k,E)=>{const a=x;return _(),l("div",null,[r("div",null,[t(" No ref: "),s(a,{onSampleEmit:o}),t(" 👉 "+i(m(e)),1)]),r("div",null,[t(" Ref: "),s(a,{onSampleEmit:u}),t(" 👉 "+i(m(c)),1)])])}}};export{S as default};
