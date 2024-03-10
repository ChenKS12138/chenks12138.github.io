import{_ as o}from"./ArticleWrapper.f9e95eb4.js";import{c as p,w as c,o as r,a as e,b as n,H as s}from"./app.606baedb.js";import"./dayjs.min.28e220c7.js";const a="/assets/http-connection2.37ca8b8f.png",d="/assets/http-connection4.641f0931.png",h="/assets/http-connection3.ee1348f5.png",u="/assets/HTTP1_x_Connections.a28a7c30.png",m="/assets/http2-binary-layer.c5bc33ba.png",T=e("div",{class:"markdown-body"},[e("h1",{id:"%E5%89%8D%E8%A8%80",tabindex:"-1"},"\u524D\u8A00"),e("p",null,"HTTP \u5C42\u7684\u6570\u636E\u4F20\u8F93\u5BF9\u4E8E web \u5F00\u53D1\u4EBA\u5458\u6765\u8BF4\u662F\u4E00\u4E2A\u9ED1\u76D2\uFF0C\u4F46\u662F\u5E73\u65F6\u7684\u5F00\u53D1\u53C8\u79BB\u4E0D\u5F00\u5B83\u3002\u56E0\u6B64\u6709\u5FC5\u8981\u53BB\u4E86\u89E3\u4E00\u4E0B\u5B83\u662F\u5982\u4F55\u4FDD\u969C\u6211\u4EEC\u7684\u6570\u636E\u53EF\u4EE5\u88AB\u9AD8\u6548\u3001\u51C6\u786E\u5730\u4F20\u8F93\u3002"),e("h1",{id:"%E8%BF%9E%E6%8E%A5%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u8FDE\u63A5\u6A21\u578B"),e("p",null,"\u6293\u5305\u4F7F\u7528\u73AF\u5883"),e("blockquote",null,[e("p",null,"macOS 10.15.7"),e("p",null,"Nginx 1.18.0"),e("p",null,"Chrome 86.0.4240.80"),e("p",null,"Wireshark Version 3.2.4 (v3.2.4-0-g893b5a5e1e3e)")]),e("h2",{id:"%E7%9F%AD%E8%BF%9E%E6%8E%A5",tabindex:"-1"},"\u77ED\u8FDE\u63A5"),e("p",null,[n("\u77ED\u8FDE\u63A5\u662F HTTP/1.0 \u9ED8\u8BA4\u7684\u8FDE\u63A5\u6A21\u578B\uFF0C\u4F7F\u7528\u5B83\u610F\u5473\u7740\u6BCF\u8FDB\u884C\u4E00\u6B21"),e("code",null,"\u8BF7\u6C42-\u54CD\u5E94"),n("\u5C31\u9700\u8981\u5B8C\u6210\u4E00\u6B21 TCP \u4E09\u6B21\u63E1\u624B\u548C\u56DB\u6B21\u6325\u624B\u3002")]),e("p",null,"Nginx \u914D\u7F6E"),e("pre",null,[e("code",null,`
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    tcp_nopush     on;
    keepalive_timeout  0;
    server {
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

    }
}
`)]),e("p",null,[e("img",{src:a,alt:"short-connection1"})]),e("p",null,[e("img",{src:s,alt:"short-connection2"})]),e("p",null,[n("\u4E0A\u56FE\u4E2D\u6253\u5F00\u4E86\u4E00\u4E2A\u7F51\u9875\uFF0C\u540C\u65F6\u8FD9\u4E2A\u7F51\u9875\u9700\u8981\u52A0\u8F7D index1.js index2.js \u8FD9\u4E24\u4E2A\u8D44\u6E90\u3002\u4ECE\u7B2C\u4E8C\u5F20\u56FE\u7247\u4E2D\u7684\u6293\u5305\u4E2D\u53EF\u4EE5\u770B\u51FA"),e("code",null,"141-152"),n("\u5B8C\u6210\u4E86\u5BF9"),e("code",null,"index.html"),n("\u6570\u636E\u7684\u8BF7\u6C42\uFF0C"),e("code",null,"153-176"),n("\u5B8C\u6210\u5BF9 index1.js index2.js \u8D44\u6E90\u7684\u8BF7\u6C42\u3002"),e("code",null,"153-155"),n("\u548C"),e("code",null,"157-159"),n("\u6D4F\u89C8\u5668\u4ECE\u4E0D\u540C\u7684\u7AEF\u53E3\u5411 Server \u53D1\u8D77\u4E86\u4E24\u4E2A\u4E09\u6B21\u63E1\u624B\u3002")]),e("h2",{id:"%E9%95%BF%E8%BF%9E%E6%8E%A5",tabindex:"-1"},"\u957F\u8FDE\u63A5"),e("p",null,[n("\u957F\u8FDE\u63A5\u662F HTTP/1.1 \u4E2D\u65B0\u589E\u7684\u4E00\u79CD\u8FDE\u63A5\u6A21\u578B\uFF0CHTTP/1.1 \u4E2D\u9ED8\u8BA4\u5C31\u662F\u957F\u8FDE\u63A5\u3002\u4F7F\u7528\u957F\u8FDE\u63A5\uFF0C\u5B8C\u6210\u4E00\u6B21 HTTP \u7684"),e("code",null,"\u8BF7\u6C42-\u54CD\u5E94"),n("\u540E\u4E0D\u4F1A\u7ACB\u5373\u5173\u95ED TCP \u8FDE\u63A5\uFF0CTCP \u8FDE\u63A5\u4F1A\u5B58\u6D3B\u4E00\u6BB5\u65F6\u95F4\uFF0C\u5982\u679C\u8FD9\u6BB5\u65F6\u95F4\u5185\u6CA1\u6709\u65B0\u7684 HTTP"),e("code",null,"\u8BF7\u6C42-\u54CD\u5E94"),n("\u5219\u4F1A\u5173\u95ED TCP \u8FDE\u63A5\u3002TCP \u4E09\u6B21\u63E1\u624B\u3001\u56DB\u6B21\u6325\u624B\u5F00\u9500\u90FD\u6BD4\u8F83\u5927\uFF0C\u4F7F\u7528\u957F\u8FDE\u63A5\u53EF\u4EE5\u907F\u514D\u4E00\u90E8\u5206\u4E0D\u9700\u8981\u7684 TCP \u63E1\u624B\u6325\u624B\u3002")]),e("p",null,"Ngnix \u914D\u7F6E"),e("pre",null,[e("code",null,`
worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    tcp_nopush     on;
    keepalive_timeout  65;
    server {
        listen       80;
        server_name  localhost;

        location / {
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

    }
}
`)]),e("p",null,[e("img",{src:d,alt:"long-connection1"}),e("img",{src:h,alt:"long-connection1"})]),e("p",null,[n("\u53EF\u4EE5\u89C2\u5BDF\u5230\u4E0A\u9762\u7684\u6293\u5305\u7ED3\u679C\u4E2D"),e("code",null,"52"),n("\u5B8C\u6210\u5BF9 index.html \u7684 HTTP \u8BF7\u6C42\u540E\uFF0CTCP \u8FDE\u63A5\u6CA1\u6709\u7ACB\u5373\u5173\u95ED\uFF0C\u540E\u9762\u8BF7\u6C42 index1.js \u65F6\uFF0C\u590D\u7528\u4E86\u8FD9\u4E2A TCP \u8FDE\u63A5\u8282\u7EA6\u4E86 TCP \u63E1\u624B\u6325\u624B\u7684\u65F6\u95F4\u5F00\u9500\u3002TCP \u8FDE\u63A5\u7684\u6027\u80FD\u53EA\u6709\u8BE5\u8FDE\u63A5\u88AB\u4F7F\u7528\u4E00\u6BB5\u65F6\u95F4\u540E\u624D\u80FD\u5F97\u5230\u6539\u5584\uFF0C\u8FD9\u4E2A\u662F TCP \u7684\u6162\u542F\u52A8\u673A\u5236\u3001\u6D41\u63A7\u673A\u5236\u5BFC\u81F4\u7684\uFF0C\u4F7F\u7528\u77ED\u8FDE\u63A5\uFF0C\u6162\u542F\u52A8\u673A\u5236\u3001\u6D41\u63A7\u673A\u5236\u8FD8\u6CA1\u6765\u5F97\u53CA\u8D77\u4F5C\u7528\uFF0C\u8FDE\u63A5\u5C31\u5DF2\u7ECF\u5173\u95ED\u4E86\u3002\u4F46\u662F\u4E5F\u8981\u6CE8\u610F\u5230\uFF0C\u4FDD\u6301\u8FD9\u4E2A TCP \u8FDE\u63A5\u662F\u4F1A\u6D88\u8017\u670D\u52A1\u5668\u8D44\u6E90\u7684\u3002")]),e("h2",{id:"%E6%B5%81%E6%B0%B4%E7%BA%BF%E6%A8%A1%E5%9E%8B",tabindex:"-1"},"\u6D41\u6C34\u7EBF\u6A21\u578B"),e("p",null,[n("\u6D41\u6C34\u7EBF\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u9ED8\u8BA4\u662F\u4E0D\u5F00\u542F\u7684\uFF0C\u5B83\u7684\u5927\u81F4\u601D\u8DEF\u662F\u5141\u8BB8\u5728\u540C\u4E00\u4E2A\u957F\u8FDE\u63A5\u4E0A\u53D1\u51FA\u8FDE\u7EED\u7684\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u4E0D\u518D\u9700\u8981\u7B49\u5F85\u4E0A\u4E00\u4E2A\u8BF7\u6C42\u7684\u54CD\u5E94\u5230\u8FBE\uFF0C\u5728\u9AD8\u5EF6\u8FDF\u7F51\u7EDC\u6761\u4EF6\u4E0B\u53EF\u4EE5\u964D\u4F4E\u7F51\u7EDC\u56DE\u73AF\u65F6\u95F4\u964D\u4F4E\u5EF6\u8FDF\u3002\u4F46\u662F\u4F7F\u7528\u6D41\u6C34\u7EBF\u5B58\u5728\u7740\u4E00\u4E9B\u95EE\u9898\u548C\u9650\u5236\uFF0C\u6211\u4EEC\u9700\u8981\u4FDD\u8BC1\u5728\u8FD9\u4E2A TCP \u8FDE\u63A5\u4E0A\u54CD\u5E94\u548C\u8BF7\u6C42\u7684\u987A\u5E8F\u662F\u5BF9\u5E94\u7684\uFF0C\u5426\u5219\u6211\u4EEC\u65E0\u6CD5\u5C06"),e("code",null,"\u8BF7\u6C42-\u54CD\u5E94"),n("\u6B63\u786E\u5173\u8054\u8D77\u6765\u3002\u540C\u65F6\u8FD8\u6709 HOL \u95EE\u9898\uFF0C\u5982\u679C\u524D\u9762\u7684\u54CD\u5E94\u5EF6\u8FDF\u4E86\u5C31\u4F1A\u963B\u585E\u540E\u9762\u7684\u8BF7\u6C42\u7684\u54CD\u5E94\u3002")]),e("p",null,[e("img",{src:u,alt:"HTTP1_x_Connections"})]),e("h2",{id:"%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8",tabindex:"-1"},"\u591A\u8DEF\u590D\u7528"),e("p",null,[e("img",{src:m,alt:"http2-binary-layer"})]),e("p",null,"HTTP/2 \u5728 HTTP \u548C TCP \u95F4\u589E\u52A0\u4E86\u4E00\u4E2A\u4E8C\u8FDB\u5236\u5206\u5E27\u5C42\uFF0C\u6709\u5FC5\u8981\u5148\u7406\u89E3\u51E0\u4E2A\u6982\u5FF5"),e("blockquote",null,[e("ul",null,[e("li",null,[e("em",null,"\u6570\u636E\u6D41"),n("\uFF1A\u5DF2\u5EFA\u7ACB\u7684\u8FDE\u63A5\u5185\u7684\u53CC\u5411\u5B57\u8282\u6D41\uFF0C\u53EF\u4EE5\u627F\u8F7D\u4E00\u6761\u6216\u591A\u6761\u6D88\u606F\u3002")]),e("li",null,[e("em",null,"\u6D88\u606F"),n("\uFF1A\u4E0E\u903B\u8F91\u8BF7\u6C42\u6216\u54CD\u5E94\u6D88\u606F\u5BF9\u5E94\u7684\u5B8C\u6574\u7684\u4E00\u7CFB\u5217\u5E27\u3002")]),e("li",null,[e("em",null,"\u5E27"),n("\uFF1AHTTP/2 \u901A\u4FE1\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u6BCF\u4E2A\u5E27\u90FD\u5305\u542B\u5E27\u5934\uFF0C\u81F3\u5C11\u4E5F\u4F1A\u6807\u8BC6\u51FA\u5F53\u524D\u5E27\u6240\u5C5E\u7684\u6570\u636E\u6D41\u3002")]),e("li",null,"\u6240\u6709\u901A\u4FE1\u90FD\u5728\u4E00\u4E2A TCP \u8FDE\u63A5\u4E0A\u5B8C\u6210\uFF0C\u6B64\u8FDE\u63A5\u53EF\u4EE5\u627F\u8F7D\u4EFB\u610F\u6570\u91CF\u7684\u53CC\u5411\u6570\u636E\u6D41\u3002"),e("li",null,"\u6BCF\u4E2A\u6570\u636E\u6D41\u90FD\u6709\u4E00\u4E2A\u552F\u4E00\u7684\u6807\u8BC6\u7B26\u548C\u53EF\u9009\u7684\u4F18\u5148\u7EA7\u4FE1\u606F\uFF0C\u7528\u4E8E\u627F\u8F7D\u53CC\u5411\u6D88\u606F\u3002"),e("li",null,"\u6BCF\u6761\u6D88\u606F\u90FD\u662F\u4E00\u6761\u903B\u8F91 HTTP \u6D88\u606F\uFF08\u4F8B\u5982\u8BF7\u6C42\u6216\u54CD\u5E94\uFF09\uFF0C\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2A\u5E27\u3002"),e("li",null,"\u5E27\u662F\u6700\u5C0F\u7684\u901A\u4FE1\u5355\u4F4D\uFF0C\u627F\u8F7D\u7740\u7279\u5B9A\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u4F8B\u5982 HTTP \u6807\u5934\u3001\u6D88\u606F\u8D1F\u8F7D\u7B49\u7B49\u3002 \u6765\u81EA\u4E0D\u540C\u6570\u636E\u6D41\u7684\u5E27\u53EF\u4EE5\u4EA4\u9519\u53D1\u9001\uFF0C\u7136\u540E\u518D\u6839\u636E\u6BCF\u4E2A\u5E27\u5934\u7684\u6570\u636E\u6D41\u6807\u8BC6\u7B26\u91CD\u65B0\u7EC4\u88C5\u3002")])]),e("p",null,[n("\u591A\u8DEF\u590D\u7528\u53EF\u4EE5\u5B9E\u73B0\u5728\u4E00\u4E2A TCP \u8FDE\u63A5\u4E0A\u4F20\u8F93\u591A\u4E2A"),e("code",null,"\u8BF7\u6C42-\u54CD\u5E94"),n("\uFF0C\u5E76\u89E3\u51B3\u4E86 pipelining \u4E2D\u5BF9\u54CD\u5E94\u8FD4\u56DE\u987A\u5E8F\u7684\u8981\u6C42\u3002")]),e("h1",{id:"%E5%B0%8F%E7%BB%93",tabindex:"-1"},"\u5C0F\u7ED3"),e("p",null,"\u4ECE\u4E0A\u9762\u7684 HTTP \u534F\u8BAE\u7684\u53D1\u5C55\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u8FD9\u65B9\u9762\u7684\u4F18\u5316\u4E3B\u8981\u662F\u671D\u7740\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684 TCP \u62A5\u6587\uFF0C\u964D\u4F4E\u7F51\u7EDC\u5EF6\u8FDF\u7684\u89D2\u5EA6\u8FDB\u884C\u3002\u5982\u4ECA\u7F51\u7EDC\u5E26\u5BBD\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u7F51\u7EDC\u52A0\u8F7D\u7684\u6027\u80FD\u74F6\u9888\u66F4\u591A\u7684\u662F\u51FA\u73B0\u5728\u4E86\u5EF6\u8FDF\u4E0A\uFF0Cpipelining \u548C\u591A\u8DEF\u590D\u7528\u60F3\u89E3\u51B3\u7684\u90FD\u662F\u8FD9\u4E2A\u95EE\u9898\u3002"),e("h1",{id:"%E5%8F%82%E8%80%83%E5%BC%95%E7%94%A8",tabindex:"-1"},"\u53C2\u8003\u5F15\u7528"),e("ul",null,[e("li",null,[n("[1] "),e("a",{href:"https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn"},"https://developers.google.com/web/fundamentals/performance/http2?hl=zh-cn")]),e("li",null,[n("[2] "),e("a",{href:"https://juejin.im/post/6844903853985366023"},"https://juejin.im/post/6844903853985366023")]),e("li",null,[n("[3] "),e("a",{href:"https://hpbn.co/primer-on-web-performance/#latency-as-a-performance-bottleneck"},"https://hpbn.co/primer-on-web-performance/#latency-as-a-performance-bottleneck")]),e("li",null,[n("[4] "),e("a",{href:"https://http2.akamai.com/demo"},"https://http2.akamai.com/demo")])])],-1),b="HTTP\u8FDE\u63A5\u6A21\u578B",C="default description",H="2020-10-23T15:25:13.000Z",B=["Web"],w="./http-connection1.png",k=[{depth:1,title:"\u524D\u8A00",children:[]},{depth:1,title:"\u8FDE\u63A5\u6A21\u578B",children:[{depth:2,title:"\u77ED\u8FDE\u63A5",children:[]},{depth:2,title:"\u957F\u8FDE\u63A5",children:[]},{depth:2,title:"\u6D41\u6C34\u7EBF\u6A21\u578B",children:[]},{depth:2,title:"\u591A\u8DEF\u590D\u7528",children:[]}]},{depth:1,title:"\u5C0F\u7ED3",children:[]},{depth:1,title:"\u53C2\u8003\u5F15\u7528",children:[]}],A=[{property:"og:title",name:"twitter:title",itemprop:"title",content:"HTTP\u8FDE\u63A5\u6A21\u578B"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}],v={__name:"content",setup(_,{expose:l}){const t={title:"HTTP\u8FDE\u63A5\u6A21\u578B",description:"default description",date:"2020-10-23T15:25:13.000Z",tags:["Web"],coverImage:"./http-connection1.png",headings:[{depth:1,title:"\u524D\u8A00",children:[]},{depth:1,title:"\u8FDE\u63A5\u6A21\u578B",children:[{depth:2,title:"\u77ED\u8FDE\u63A5",children:[]},{depth:2,title:"\u957F\u8FDE\u63A5",children:[]},{depth:2,title:"\u6D41\u6C34\u7EBF\u6A21\u578B",children:[]},{depth:2,title:"\u591A\u8DEF\u590D\u7528",children:[]}]},{depth:1,title:"\u5C0F\u7ED3",children:[]},{depth:1,title:"\u53C2\u8003\u5F15\u7528",children:[]}],meta:[{property:"og:title",name:"twitter:title",itemprop:"title",content:"HTTP\u8FDE\u63A5\u6A21\u578B"},{property:"og:description",name:"twitter:description",itemprop:"description",content:"default description"}]};return l({frontmatter:t}),(g,P)=>{const i=o;return r(),p(i,{frontmatter:t},{default:c(()=>[T]),_:1})}}};export{w as coverImage,H as date,v as default,C as description,k as headings,A as meta,B as tags,b as title};
