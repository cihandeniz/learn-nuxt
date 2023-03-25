export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H){return {data:{"content-query-IHEGqZI4XK":[{_path:"\u002Fcontent",title:"Content",position:1},{_path:"\u002Fpages",title:"Pages",position:g},{_path:"\u002Fvue-files",title:"Vue Files",position:3},{_path:"\u002Fcomponents",title:"Components",position:4},{_path:p,title:k,position:q},{_path:"\u002Fconfiguration",title:"Configuration",position:6},{_path:"\u002Fsetup-guide",title:"Setup Guide",position:100},{_path:"\u002Fbuild-and-run",title:"Build & Run",position:101},{_path:"\u002Fcontributing",title:"Contributing",position:102}],"content-query-w0XJ3twNLV":{_path:p,_dir:l,_draft:m,_partial:m,_locale:l,_empty:m,title:k,description:r,position:q,body:{type:"root",children:[{type:b,tag:"h1",props:{id:"routing"},children:[{type:a,value:k}]},{type:b,tag:d,props:{},children:[{type:a,value:r}]},{type:b,tag:i,props:{id:s},children:[{type:a,value:t}]},{type:b,tag:d,props:{},children:[{type:a,value:"Index pages are named "},{type:b,tag:c,props:{},children:[{type:a,value:"index.vue"}]},{type:a,value:" and can be accessed without a route. For\nexample; "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Findex.vue"}]},{type:a,value:" is at "},{type:b,tag:c,props:{},children:[{type:a,value:n}]},{type:a,value:h}]},{type:b,tag:d,props:{},children:[{type:a,value:u},{type:b,tag:f,props:{href:n},children:[{type:a,value:n}]},{type:a,value:h}]},{type:b,tag:i,props:{id:v},children:[{type:a,value:w}]},{type:b,tag:d,props:{},children:[{type:a,value:"File name is automatically the route name e.g. "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Fstatic.vue"}]},{type:a,value:"\nis at "},{type:b,tag:c,props:{},children:[{type:a,value:o}]}]},{type:b,tag:d,props:{},children:[{type:a,value:u},{type:b,tag:f,props:{href:o},children:[{type:a,value:o}]},{type:a,value:h}]},{type:b,tag:i,props:{id:x},children:[{type:a,value:y}]},{type:b,tag:d,props:{},children:[{type:a,value:"To create a dynamic page you need to surround the page with '"},{type:b,tag:"span",props:{},children:[]},{type:a,value:"' e.g.\n"},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002F[page].vue"}]},{type:a,value:". To make it optional surround it with "},{type:b,tag:c,props:{},children:[{type:a,value:"[[]]"}]},{type:a,value:"\ne.g. "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Foptional\u002F[[page]].vue"}]},{type:a,value:". To have a dynamic route that\ncan handle any depth in a path we use catch all routes e.g.\n"},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fpages\u002Fdemo\u002Fcatch-all\u002F[...page].vue"}]},{type:a,value:h}]},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Dynamic route:"},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:z},children:[{type:a,value:z}]}]},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:A},children:[{type:a,value:A}]}]}]}]},{type:b,tag:e,props:{},children:[{type:a,value:"Dynamic route with optional parameter:"},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:B},children:[{type:a,value:B}]}]},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:C},children:[{type:a,value:C}]}]}]}]},{type:b,tag:e,props:{},children:[{type:a,value:"Catch all route:"},{type:b,tag:j,props:{},children:[{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:D},children:[{type:a,value:D}]}]},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:E},children:[{type:a,value:E}]}]},{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{href:F},children:[{type:a,value:F}]}]}]}]}]},{type:b,tag:i,props:{id:G},children:[{type:a,value:H}]},{type:b,tag:d,props:{},children:[{type:a,value:"Nuxt generates an "},{type:b,tag:c,props:{},children:[{type:a,value:"index.html"}]},{type:a,value:" file under each route and this causes some\nstatic site hosting services, such as GitHub Pages, to add a trailing slash to\nurls. When this happens that page fails to load resources with a relative path\nbecause a trailing slash would indicate another directory in a path."}]},{type:b,tag:d,props:{},children:[{type:a,value:"To workaround this, we've added a script that checks if "},{type:b,tag:c,props:{},children:[{type:a,value:"route.path"}]},{type:a,value:" has a\ntrailing slash upon mounting."}]},{type:b,tag:"blockquote",props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:":warning:"}]},{type:b,tag:d,props:{},children:[{type:a,value:"For this solution to work correctly, you need to enable\n"},{type:b,tag:c,props:{},children:[{type:a,value:"router.options.strict"}]},{type:a,value:" in "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fnuxt.config.ts"}]},{type:a,value:" so that a path with a\ntrailing slash is not treated as same as a path without a trailing slash.\nOtherwise "},{type:b,tag:c,props:{},children:[{type:a,value:"navigateTo"}]},{type:a,value:" does not redirect and throws an error."}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"Solution is in "},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002F[...content-page].vue"}]},{type:a,value:h}]}],toc:{title:l,searchDepth:g,depth:g,links:[{id:s,depth:g,text:t},{id:v,depth:g,text:w},{id:x,depth:g,text:y},{id:G,depth:g,text:H}]}},_type:"markdown",_id:"content:routing.md",_source:"content",_file:"routing.md",_extension:"md"}},prerenderedAt:1679749765147}}("text","element","code-inline","p","li","a",2,".","h2","ul","Routing","",false,"\u002Fdemo","\u002Fdemo\u002Fstatic","\u002Frouting",5,"Here you can learn how we use routing for nuxt projects.","index-routes","Index Routes","Demo is at ","static-routes","Static Routes","dynamic-routes","Dynamic Routes","\u002Fdemo\u002Fdynamic-1","\u002Fdemo\u002Fdynamic-2","\u002Fdemo\u002Foptional","\u002Fdemo\u002Foptional\u002Fdynamic","\u002Fdemo\u002Fcatch-all","\u002Fdemo\u002Fcatch-all\u002Fdynamic","\u002Fdemo\u002Fcatch-all\u002Fwith\u002Fa\u002Fsub\u002Fdir","trailing-slash-problem-workaround","Trailing Slash Problem Workaround"))