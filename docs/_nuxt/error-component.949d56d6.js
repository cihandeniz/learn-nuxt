import{o as a,c as n,a as e,b as o,t as s,u as l,d as u}from"./entry.555b5f3f.js";const c=e("strong",null,"Error Status Code:",-1),d=e("strong",null,"Error Message:",-1),i={__name:"error",props:{error:{type:Object,default:null}},setup(r){return(p,t)=>(a(),n("div",null,[e("p",null,[c,o(" "+s(r.error.statusCode),1)]),e("p",null,[d,o(" "+s(r.error.statusMessage),1)]),e("button",{onClick:t[0]||(t[0]=_=>l(u)({redirect:"/"}))}," Clear errors and route home ")]))}},f=i;export{f as default};