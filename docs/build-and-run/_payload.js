export default (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:{"content-query-R06bpTvUhn":[{_path:"\u002Fcontent",title:"Content",position:1},{_path:"\u002Fpages",title:"Pages",position:i},{_path:"\u002Ftemplate-syntax",title:"Template Syntax",position:e},{_path:"\u002Fcomponents",title:"Components",position:4},{_path:"\u002Frouting",title:"Routing",position:5},{_path:"\u002Fconfiguration",title:"Configuration",position:6},{_path:"\u002Fsetup-guide",title:"Setup Guide",position:100},{_path:o,title:l,position:p},{_path:"\u002Fcontributing",title:"Contributing",position:102}],"content-query-ObUSS2f4jF":{_path:o,_dir:j,_draft:m,_partial:m,_locale:j,_empty:m,title:l,description:"To create a static site we use nuxt generate, to run the project in\ndevelopment mode we use nuxt dev.",position:p,body:{type:"root",children:[{type:b,tag:"h1",props:{id:"build-run"},children:[{type:a,value:l}]},{type:b,tag:d,props:{},children:[{type:a,value:"To create a static site we use "},{type:b,tag:c,props:{},children:[{type:a,value:"nuxt generate"}]},{type:a,value:", to run the project in\ndevelopment mode we use "},{type:b,tag:c,props:{},children:[{type:a,value:"nuxt dev"}]},{type:a,value:"."}]},{type:b,tag:d,props:{},children:[{type:a,value:"For unix-like systems use "},{type:b,tag:c,props:{},children:[{type:a,value:"Makefile"}]},{type:a,value:q}]},{type:b,tag:k,props:{code:r,language:s,meta:t},children:[{type:b,tag:u,props:{},children:[{type:b,tag:k,props:{__ignoreMap:j},children:[{type:a,value:r}]}]}]},{type:b,tag:d,props:{},children:[{type:a,value:"For Windows systems use "},{type:b,tag:c,props:{},children:[{type:a,value:"build.bat"}]},{type:a,value:q}]},{type:b,tag:k,props:{code:v,language:s,meta:t},children:[{type:b,tag:u,props:{},children:[{type:b,tag:k,props:{__ignoreMap:j},children:[{type:a,value:v}]}]}]},{type:b,tag:w,props:{id:x},children:[{type:a,value:y}]},{type:b,tag:d,props:{},children:[{type:a,value:"Process consists of 4 stages;"}]},{type:b,tag:z,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Lint checking using eslint"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Prebuild, markdowns are preprocessed in this stage"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Nuxt build"}]},{type:b,tag:h,props:{},children:[{type:a,value:"Last stage differs between "},{type:b,tag:c,props:{},children:[{type:a,value:"build"}]},{type:a,value:" & "},{type:b,tag:c,props:{},children:[{type:a,value:"run"}]},{type:b,tag:z,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"When building, it creates a static site for deployment"}]},{type:b,tag:h,props:{},children:[{type:a,value:"When running locally, it runs application in development mode"}]}]}]}]},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"diagram",src:".\u002Fbuild-and-run-1.png"},children:[]}]},{type:b,tag:w,props:{id:n},children:[{type:a,value:A}]},{type:b,tag:d,props:{},children:[{type:a,value:"We've built a task based "},{type:b,tag:c,props:{},children:[{type:a,value:n}]},{type:a,value:" mechanism to preprocess markdown files\nbefore nuxt build. This was needed to have pure markdown content at the root of\nthe repository without the boilerplate code of a nuxt project."}]},{type:b,tag:f,props:{id:B},children:[{type:a,value:C}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002Fclean.js"}]},{type:a,value:") deletes files with the given\nparameters, including subfolders."}]},{type:b,tag:f,props:{id:D},children:[{type:a,value:E}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002Fcopy.js"}]},{type:a,value:") copies files with the given\nextension to the desired location."}]},{type:b,tag:f,props:{id:F},children:[{type:a,value:G}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002FextractDiagrams.js"}]},{type:a,value:") processes markdown files\nand extracts diagrams as "},{type:b,tag:c,props:{},children:[{type:a,value:".png"}]},{type:a,value:" files and modifies markdowns to replace\nmarkdown code with diagram images."}]},{type:b,tag:f,props:{id:H},children:[{type:a,value:I}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002Fmove.js"}]},{type:a,value:") moves files with given extension\nfrom source directory to target directory."}]},{type:b,tag:f,props:{id:J},children:[{type:a,value:K}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002Frename.js"}]},{type:a,value:") renames files with the given\nname in the given location to the desired name in the same location."}]},{type:b,tag:f,props:{id:L},children:[{type:a,value:M}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002FreplaceContent.js"}]},{type:a,value:") replaces given old text\nto new text in files with given extension. We used this one to replace\n"},{type:b,tag:c,props:{},children:[{type:a,value:N}]},{type:a,value:" with "},{type:b,tag:c,props:{},children:[{type:a,value:N}]},{type:a,value:" before fixing links."}]},{type:b,tag:f,props:{id:O},children:[{type:a,value:P}]},{type:b,tag:d,props:{},children:[{type:a,value:g},{type:b,tag:c,props:{},children:[{type:a,value:".theme\u002Fprebuild\u002Ftasks\u002Ftouch.js"}]},{type:a,value:") checks whether file with a given\npath exists, if not, it creates an empty file at the specified path."}]}],toc:{title:j,searchDepth:i,depth:i,links:[{id:x,depth:i,text:y},{id:n,depth:i,text:A,children:[{id:B,depth:e,text:C},{id:D,depth:e,text:E},{id:F,depth:e,text:G},{id:H,depth:e,text:I},{id:J,depth:e,text:K},{id:L,depth:e,text:M},{id:O,depth:e,text:P}]}]}},_type:"markdown",_id:"content:build-and-run.md",_source:"content",_file:"build-and-run.md",_extension:"md"}},prerenderedAt:1677846839573}}("text","element","code-inline","p",3,"h3","This task (","li",2,"","code","Build & Run",false,"prebuild","\u002Fbuild-and-run",101,";","make build\nmake run\n","bash",null,"pre",".\\build.bat\n.\\run.bat\n","h2","process","Process","ol","Prebuild","clean","Clean","copy","Copy","extract-diagrams","Extract Diagrams","move","Move","rename","Rename","replace-content","Replace Content","index.md","touch","Touch"))