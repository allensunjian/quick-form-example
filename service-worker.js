if(!self.define){let e,i={};const r=(r,o)=>(r=new URL(r+".js",o).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,s)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const l=e=>r(e,n),u={module:{uri:n},exports:c,require:l};i[n]=Promise.all(o.map((e=>u[e]||l(e)))).then((e=>(s(...e),c)))}}define(["./workbox-16ee0dbf"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quick-form-vue3"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/quick-form-example/css/app.df6d71f0.css",revision:null},{url:"/quick-form-example/css/chunk-vendors.40149238.css",revision:null},{url:"/quick-form-example/fonts/codicon.63b8ee5b.ttf",revision:null},{url:"/quick-form-example/index.html",revision:"b8a251ac2a6c8b3d90f8a4e8db580e32"},{url:"/quick-form-example/js/app.0e575eff.js",revision:null},{url:"/quick-form-example/manifest.json",revision:"268a9b3cfd6c0d28d444872bd14bf8ae"},{url:"/quick-form-example/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
