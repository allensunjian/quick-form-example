if(!self.define){let e,i={};const r=(r,o)=>(r=new URL(r+".js",o).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const l=e=>r(e,c),f={module:{uri:c},exports:n,require:l};i[c]=Promise.all(o.map((e=>f[e]||l(e)))).then((e=>(s(...e),n)))}}define(["./workbox-16ee0dbf"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quick-form-v1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/quick-form-example/css/app.df6d71f0.css",revision:null},{url:"/quick-form-example/css/chunk-vendors.40149238.css",revision:null},{url:"/quick-form-example/fonts/codicon.63b8ee5b.ttf",revision:null},{url:"/quick-form-example/index.html",revision:"6a4d6c234bcc20e024cf30f8b47c99a4"},{url:"/quick-form-example/js/app.1722b2c0.js",revision:null},{url:"/quick-form-example/manifest.json",revision:"7bd76320b14f7f091491aa0df1f62dfd"},{url:"/quick-form-example/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
