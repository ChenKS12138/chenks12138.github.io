import{_ as o}from"./ArticleWrapper.f9e95eb4.js";import{c,w as p,o as l,a as n,b as t}from"./app.606baedb.js";import"./dayjs.min.28e220c7.js";const u="/assets/example.ce5ef05e.gif",i=n("div",{class:"markdown-body"},[n("h1",{id:"stream-%E7%9A%84%E6%A6%82%E5%BF%B5",tabindex:"-1"},"Stream \u7684\u6982\u5FF5"),n("p",null,"Steram \u662F Nodejs \u4E2D\u6BD4\u8F83\u91CD\u8981\u7684\u6982\u5FF5\uFF0C\u5B83\u662F\u5BF9\u4E00\u4E9B\u6D41\u52A8\u6570\u636E\u7684\u5904\u7406\u8FC7\u7A0B\u7684\u62BD\u8C61\u3002\u5E38\u89C1\u7684\u50CF\u6807\u51C6\u8F93\u5165/\u8F93\u51FA\u6D41\u3001\u6587\u4EF6\u3001Socket\u3001\u538B\u7F29\u8FC7\u7A0B\u90FD\u53EF\u4EE5\u88AB\u62BD\u8C61\u6210 Nodejs \u4E2D\u7684\u6D41\u3002\u6240\u6709\u7684\u6D41\u672C\u8D28\u4E0A\u90FD\u662F EventEmitter\u3002"),n("blockquote",null,[n("p",null,"A stream is an abstract interface for working with streaming data in Node.js. The stream module provides an API for implementing the stream interface."),n("p",null,"There are many stream objects provided by Node.js. For instance, a request to an HTTP server and process.stdout are both stream instances."),n("p",null,"Streams can be readable, writable, or both. All streams are instances of EventEmitter.")]),n("p",null,[t("\u5E38\u89C1\u7684\u6D41\u6709 Writable\uFF0CReadable\uFF0CDuplex\uFF0CTransform \u7B49"),n("sup",null,[n("a",{href:"#reference-1"},"[1]")]),t("\u3002Readable \u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u751F\u4EA7\u8005\uFF0C\u63D0\u4F9B\u4E00\u4E2A read \u65B9\u6CD5\uFF0C\u5904\u5728\u4E00\u4E2A pipeline \u7684\u4E0A\u6E38\uFF0CWriteable \u53EF\u4EE5\u7406\u89E3\u4E3A\u6D88\u8D39\u8005\uFF0C\u63D0\u4F9B\u4E00\u4E2A write \u65B9\u6CD5\uFF0C\u5904\u5728\u4E00\u4E2A pipeline \u7684\u4E0B\u6E38\uFF0CDuplex \u517C\u5177 read \u548C write \u65B9\u6CD5\uFF0CTransform \u548C Duplex \u5F88\u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8E Transform \u7684\u6570\u636E\u7684\u6D41\u5165\u548C\u6D41\u51FA\u6709\u6BD4\u8F83\u5F3A\u7684\u5173\u7CFB\uFF0C\u53EF\u4EE5\u7528\u4E8E\u538B\u7F29\u7B49\u573A\u666F\u3002")]),n("h1",{id:"%E5%9F%BA%E4%BA%8E-tcp-%E7%99%BD%E6%9D%BF%E5%BA%94%E7%94%A8",tabindex:"-1"},"\u57FA\u4E8E TCP \u767D\u677F\u5E94\u7528"),n("p",null,"\u8FD9\u662F\u4E00\u4E2A\u57FA\u4E8E TCP \u901A\u4FE1\u7684\u7535\u5B50\u767D\u677F Electron \u5E94\u7528\uFF0C\u591A\u4E2A\u5E94\u7528\u5B9E\u4F8B\u542F\u52A8\uFF0C\u5176\u4E2D\u4E00\u4E2A\u5B9E\u4F8B\u4F5C\u4E3A TCP \u670D\u52A1\u7AEF\uFF0C\u5176\u4ED6\u5B9E\u4F8B\u52A0\u5165\u3002\u670D\u52A1\u7AEF\u5B9E\u4F8B\u53EF\u4EE5\u5411\u81EA\u8EAB\u7684\u4FE1\u606F\uFF0C\u6BCF\u4E2A\u5BA2\u6237\u7AEF\u5B9E\u4F8B\u53EF\u4EE5\u63A5\u53D7\u670D\u52A1\u7AEF\u7684\u4FE1\u606F\u5E76\u540C\u6B65\u5230\u81EA\u5DF1\u7684\u753B\u5E03\u4E0A\uFF0C\u53C8\u6216\u8005\u662F\u5C06\u81EA\u5DF1\u7684\u4FE1\u606F\u900F\u8FC7\u670D\u52A1\u7AEF\u5B9E\u4F8B\u5E7F\u64AD\u7ED9\u5176\u4ED6\u5BA2\u6237\u7AEF\u5B9E\u4F8B\u3002\u5F53\u670D\u52A1\u7AEF\u5B9E\u4F8B\u76D1\u542C\u5230\u6709\u65B0\u7684\u5BA2\u6237\u7AEF\u5B9E\u4F8B\u4E2D\u9014\u52A0\u5165\u65F6\uFF0C\u4F1A\u5C06\u81EA\u8EAB\u7684\u753B\u5E03\u4FE1\u606F\u540C\u6B65\u7ED9\u5B83\u3002"),n("p",null,[n("img",{src:u,alt:"example"})]),n("p",null,"\u8FD9\u4E2A\u753B\u5E03\u529F\u80FD\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u901A\u8FC7\u76D1\u542C\u9F20\u6807\u5728 canvas \u4E0A\u7684\u64CD\u4F5C\uFF0C\u83B7\u53D6\u548C\u4FEE\u6539 canvas \u7684 imageData \u5B9E\u73B0\u7684\u3002\u4F7F\u7528 ipc \u901A\u4FE1\uFF0C\u5C06\u6570\u636E\u4F20\u9012\u7ED9 main process\u3002\u518D\u7ECF\u8FC7\u8282\u6D41\u3001\u5DEE\u5F02\u6BD4\u5BF9\u3001\u6570\u636E\u538B\u7F29\u3001\u5C06\u6570\u636E\u5757\u5927\u5C0F\u7F16\u7801\u81F3\u6570\u636E\u5757\u524D\u90E8\u8FD9\u6837\u4E00\u4E9B\u64CD\u4F5C\u540E\uFF0C\u518D\u5E7F\u64AD\u7ED9\u5176\u4ED6\u5B9E\u4F8B\u3002"),n("pre",{class:"language-javascript"},[n("code",{class:"language-javascript"},[n("span",{class:"token comment"},`/**
 * Server Instance
 */`),t(`

`),n("span",{class:"token comment"},"// Pipe Msg, Server -> Client"),t(`
stream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pipeline"),n("span",{class:"token punctuation"},"("),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"EmitterEventStream"),n("span",{class:"token punctuation"},"("),t("ipcMain"),n("span",{class:"token punctuation"},","),t(" events"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SERVER_BROADCAST_MESSAGE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ThrottleStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"GenerateDiffStream"),n("span",{class:"token punctuation"},"("),t("bitmapBuffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"CompressStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"SizePrefixedChunkEncodeStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  broadcastStream`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// Pipe Msg, Client -> Server"),t(`
stream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pipeline"),n("span",{class:"token punctuation"},"("),t(`
  broadcastStream`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"SizePrefixedChunkDecodeStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"960000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"DecompressStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ApplyDiffStream"),n("span",{class:"token punctuation"},"("),t("bitmapBuffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"WebContentsEventStream"),n("span",{class:"token punctuation"},"("),t(`
    mainWindow`),n("span",{class:"token punctuation"},"."),t("webContents"),n("span",{class:"token punctuation"},","),t(`
    events`),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"SERVER_ON_RECERIVED_BROADCAST_MESSAGE"),t(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},`/**
 * Client Instance
 */`),t(`

`),n("span",{class:"token comment"},"// Pipe Msg, Server -> Client"),t(`
stream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pipeline"),n("span",{class:"token punctuation"},"("),t(`
  connection`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"SizePrefixedChunkDecodeStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"960000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"DecompressStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ApplyDiffStream"),n("span",{class:"token punctuation"},"("),t("bitmapBuffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"WebContentsEventStream"),n("span",{class:"token punctuation"},"("),t(`
    mainWindow`),n("span",{class:"token punctuation"},"."),t("webContents"),n("span",{class:"token punctuation"},","),t(`
    events`),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"CLIENT_ON_RECEIVED_BROADCAST_MESSAGE"),t(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// Pipe Msg, Client -> Server"),t(`
stream`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pipeline"),n("span",{class:"token punctuation"},"("),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"EmitterEventStream"),n("span",{class:"token punctuation"},"("),t("ipcMain"),n("span",{class:"token punctuation"},","),t(" events"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"CLIENT_BROADCAST_MESSAGE"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"ThrottleStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"GenerateDiffStream"),n("span",{class:"token punctuation"},"("),t("bitmapBuffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"CompressStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"SizePrefixedChunkEncodeStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
  connection`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("p",null,[t("TCP \u662F\u9762\u5411\u6D41\u7684\u534F\u8BAE"),n("sup",null,[n("a",{href:"#reference-1"},"[2]")]),t("\uFF0C\u53D1\u9001\u4E00\u4E2A chunk \u540E\uFF0Cchunk \u53EF\u80FD\u4F1A\u88AB\u62C6\u5206\u3002\u63A5\u6536\u7AEF\u9700\u8981\u4E00\u4E2A\u957F\u5EA6\u4FE1\u606F\uFF0C\u5C06 chunk \u91CD\u65B0\u7EC4\u5408\u3002\u6211\u901A\u8FC7"),n("code",null,"SizePrefixedChunkEncodeStream"),t("\u548C"),n("code",null,"SizePrefixedChunkDecodeStream"),t("\u5B9E\u73B0\u4E86\u8FD9\u4E00\u4E2A\u529F\u80FD\u3002")]),n("p",null,[t("\u901A\u8FC7\u6570\u636E\u7684\u7B80\u5355\u89C2\u5BDF\u53D1\u73B0\uFF0C\u5728\u4F7F\u7528"),n("code",null,"zlib.deflate"),t("\u548C"),n("code",null,"zlib.inflate"),t("\u538B\u7F29 600x400x4 \u5B57\u8282\u7684 chunk \u65F6\uFF0Cchunk \u7684 0x00 \u7684\u5B57\u8282\u8D8A\u591A\uFF0C\u538B\u7F29\u6548\u679C\u8D8A\u660E\u663E\u3002\u6240\u4EE5\u6211\u4F7F\u7528\u4E86\u8BA1\u7B97/\u5E94\u7528 diff \u7684\u6D41\u3001\u538B\u7F29/\u89E3\u538B\u7F29\u7684\u6D41\u3002")]),n("h2",{id:"%E5%8F%82%E8%80%83%E5%BC%95%E7%94%A8",tabindex:"-1"},"\u53C2\u8003\u5F15\u7528"),n("ul",null,[n("li",null,[t("[1] "),n("a",{href:"https://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/"},"https://www.barretlee.com/blog/2017/06/06/dive-to-nodejs-at-stream-module/")]),n("li",null,[t("[2] "),n("a",{href:"https://stackoverflow.com/questions/17446491/tcp-stream-vs-udp-message"},"https://stackoverflow.com/questions/17446491/tcp-stream-vs-udp-message")])])],-1),S="\u4F7F\u7528Stream\u7F16\u5199Electron\u5E94\u7528",E="default description",h="2021-05-04T17:36:32.000Z",b=["JavaScript"],v="",C=[{depth:1,title:"Stream \u7684\u6982\u5FF5",children:[]},{depth:1,title:"\u57FA\u4E8E TCP \u767D\u677F\u5E94\u7528",children:[{depth:2,title:"\u53C2\u8003\u5F15\u7528",children:[]}]}],_=[{property:"og:title",name:"twitter:title",itemprop:"title",content:"\u4F7F\u7528Stream\u7F16\u5199Electron\u5E94\u7528"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}],g={__name:"content",setup(r,{expose:a}){const s={title:"\u4F7F\u7528Stream\u7F16\u5199Electron\u5E94\u7528",description:"default description",date:"2021-05-04T17:36:32.000Z",tags:["JavaScript"],coverImage:"",headings:[{depth:1,title:"Stream \u7684\u6982\u5FF5",children:[]},{depth:1,title:"\u57FA\u4E8E TCP \u767D\u677F\u5E94\u7528",children:[{depth:2,title:"\u53C2\u8003\u5F15\u7528",children:[]}]}],meta:[{property:"og:title",name:"twitter:title",itemprop:"title",content:"\u4F7F\u7528Stream\u7F16\u5199Electron\u5E94\u7528"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}]};return a({frontmatter:s}),(k,m)=>{const e=o;return l(),c(e,{frontmatter:s},{default:p(()=>[i]),_:1})}}};export{v as coverImage,h as date,g as default,E as description,C as headings,_ as meta,b as tags,S as title};
