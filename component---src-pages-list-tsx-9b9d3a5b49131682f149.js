(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0qtJ":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),i=a("Z+rF"),o=a("z5LY");a("AhK/");t.default=function(e){var t=e.data,a=Object(n.useState)("ALL"),l=a[0],s=a[1],d=t.allMarkdownRemark.totalCount,u=t.allMarkdownRemark.nodes,m=Object(n.useMemo)((function(){return Array.from(new Set(u.reduce((function(e,t){var a,n;return e.concat(Array.isArray(null==t||null===(a=t.frontmatter)||void 0===a?void 0:a.tags)?null==t||null===(n=t.frontmatter)||void 0===n?void 0:n.tags:[])}),["ALL"])))}),[u]),v=u.reduce((function(e,t){var a=t.frontmatter,n=a.date,r=a.title,c=a.tags,i=t.id,o=n.split(" "),s=o[0],d=o[1],u=e.find((function(e){return e.year===s})),m={MMDD:d,title:r,tags:c,id:i};return"ALL"===l||c.includes(l)?(u?u.nodes.push(m):e.push({year:s,nodes:[m]}),e):e}),[]);return r.a.createElement(i.a,{backgroundSrc:o.a.headerImages.archives,height:"500px",content:r.a.createElement("div",{className:"list-header-content"},"Archive"),title:"Archives"},r.a.createElement("div",{className:"list-container"},r.a.createElement("div",{className:"tags-container"},m.map((function(e){return r.a.createElement("div",{className:"tag "+(e===l?"tag-selected":""),key:e,onClick:function(){return s(e)}},e)}))),"ALL"===l&&r.a.createElement("div",{className:"total-count-container"},"Total:",d),r.a.createElement("div",{className:"group-container"},v.map((function(e){return r.a.createElement("div",{className:"group",key:e.year},r.a.createElement("div",{className:"group-year"},e.year),r.a.createElement("div",{className:"group-nodes-container"},e.nodes.map((function(e){return r.a.createElement("div",{className:"node",onClick:function(){return Object(c.navigate)("/detail/"+e.id)},key:e.id},r.a.createElement("div",{className:"node-title"},e.title),r.a.createElement("div",{className:"node-date"},e.MMDD))}))))})))))};var l="4181242274"},"AhK/":function(e,t,a){}}]);