import{d as p,e as h,r as k,o,f as l,F as C,g as w,a,t as r,u as i,c as u,h as m,i as f,j as v,k as I,l as A,m as D,n as E,p as M,w as _,q as S,s as $,v as B,x as F,y as N,z as P}from"./app.91692cd0.js";import{d as z}from"./dayjs.min.28e220c7.js";const Y={class:"article-heading"},j=["href"],O={class:"article-heading-title"},R=p({__name:"ArticleHeading",props:{prefix:null,headings:null},setup(e){const s=h(()=>e.prefix?e.prefix+".":"");return(t,g)=>{const d=k("article-heading",!0);return o(),l("ol",Y,[(o(!0),l(C,null,w(e.headings,(n,c)=>(o(),l("li",{key:n.title},[a("a",{href:"#"+n.title},[a("span",O,r(i(s)+(c+1))+". "+r(n.title),1)],8,j),n.children.length?(o(),u(d,{key:0,headings:n.children,prefix:String(c+1)},null,8,["headings","prefix"])):m("",!0)]))),128))])}}});const V=f(R,[["__scopeId","data-v-ef16a1ef"]]),G=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],H=p({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(e){const s=v(!1);return I(()=>{s.value=!0,A(()=>import("./giscus-BNK3dBIH.c07247d4.js"),[])}),(t,g)=>s.value?(o(),l("giscus-widget",{key:0,id:t.id,host:t.host,repo:t.repo,repoid:t.repoId,category:t.category,categoryid:t.categoryId,mapping:t.mapping,term:t.term,strict:t.strict,reactionsenabled:t.reactionsEnabled,emitmetadata:t.emitMetadata,inputposition:t.inputPosition,theme:t.theme,lang:t.lang,loading:t.loading},null,8,G)):m("",!0)}}),T=e=>(N("data-v-bb251bbf"),e=e(),P(),e),W={class:"h-55 -mt-55 flex flex-col items-center text-white"},K={class:"font-bold text-3xl"},L={class:"text-lg mt-2"},q={class:"mt-2 italic"},J={class:"flex items-start wrapper"},U={class:"content-wrapper"},X=T(()=>a("div",{class:"rounded bg-gray mt-10 p-1 text-white italic indent-md text-lg"}," CC BY-SA 3.0\u534F\u8BAE \u3002\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904! ",-1)),Q={class:"mt-20"},Z=p({__name:"ArticleWrapper",props:{frontmatter:null},setup(e){const s=e.frontmatter.headings;D({title:e.frontmatter.title,meta:[{property:"og:title",content:e.frontmatter.title}]});const[t,g]=B(),d=h(()=>t.value?"dark":"light"),n=v(!0);return E(t,()=>{n.value=!1,M(()=>{n.value=!0})}),(c,tt)=>{const y=V,x=F;return o(),u(x,null,{"left-toc":_(()=>[S(y,{headings:i(s)},null,8,["headings"])]),"title-content":_(()=>[a("div",W,[a("div",K,r(e.frontmatter.title),1),a("div",L,r(i(z)(e.frontmatter.date).format("YYYY-MM-DD")),1),a("div",q,r((e.frontmatter.tags||[]).map(b=>`#${b}`).join(" ")),1)])]),default:_(()=>[a("div",J,[a("div",U,[$(c.$slots,"default",{},void 0,!0),X,a("div",Q,[n.value?(o(),u(i(H),{key:0,ref:"giscusRef",id:"comments",repo:"ChenKS12138/ChenKS12138.github.io",repoId:"MDEwOlJlcG9zaXRvcnkyNzA4Njc3ODM=",category:"Announcements",categoryId:"DIC_kwDOECUdR84Cd10_",mapping:"og:title",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"bottom",theme:i(d),lang:"zh-CN",loading:"lazy"},null,8,["theme"])):m("",!0)])])])]),_:3})}}});const nt=f(Z,[["__scopeId","data-v-bb251bbf"]]);export{nt as _};
