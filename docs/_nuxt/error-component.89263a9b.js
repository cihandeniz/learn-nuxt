import{o as a,c as n,a as r,b as o,t as s,u as l,d as u}from"./entry.67d27228.js";import"./app.config.ae5c1232.js";const c=r("strong",null,"Error Status Code:",-1),d=r("strong",null,"Error Message:",-1),i={__name:"error",props:{error:{type:Object,default:null}},setup(e){return(p,t)=>(a(),n("div",null,[r("p",null,[c,o(" "+s(e.error.statusCode),1)]),r("p",null,[d,o(" "+s(e.error.statusMessage),1)]),r("button",{onClick:t[0]||(t[0]=m=>l(u)({redirect:"/"}))}," Clear errors and route home ")]))}},g=i;export{g as default};