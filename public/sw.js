if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let d={};const o=e=>i(e,r),t={module:{uri:r},exports:d,require:o};a[r]=Promise.all(s.map((e=>t[e]||o(e)))).then((e=>(c(...e),d)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/391.db01b08cdd09a72a.js",revision:"db01b08cdd09a72a"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-8ba0688acd913e7a.js",revision:"8ba0688acd913e7a"},{url:"/_next/static/chunks/pages/404-6e79962ebb72f7b2.js",revision:"6e79962ebb72f7b2"},{url:"/_next/static/chunks/pages/_app-9c00139a4b7c5d98.js",revision:"9c00139a4b7c5d98"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/credits-0abfa23e13b7cb54.js",revision:"0abfa23e13b7cb54"},{url:"/_next/static/chunks/pages/index-083cc65bfd89ed12.js",revision:"083cc65bfd89ed12"},{url:"/_next/static/chunks/pages/letters-55b76f098187684d.js",revision:"55b76f098187684d"},{url:"/_next/static/chunks/pages/projects-9e7acdbda88f274a.js",revision:"9e7acdbda88f274a"},{url:"/_next/static/chunks/pages/projects/%5Bid%5D-b2dc01ba500ffe0a.js",revision:"b2dc01ba500ffe0a"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-10bf6c4f5fd4e696.js",revision:"10bf6c4f5fd4e696"},{url:"/_next/static/css/04f57b97b1aabe05.css",revision:"04f57b97b1aabe05"},{url:"/_next/static/css/0a35a46129acb8e5.css",revision:"0a35a46129acb8e5"},{url:"/_next/static/css/4c422a8b049dfb44.css",revision:"4c422a8b049dfb44"},{url:"/_next/static/css/d3263b43339d0db7.css",revision:"d3263b43339d0db7"},{url:"/_next/static/css/eef617b72d548e63.css",revision:"eef617b72d548e63"},{url:"/_next/static/css/ff4ebbfcb62d47e5.css",revision:"ff4ebbfcb62d47e5"},{url:"/_next/static/media/home-excel.02de2257.png",revision:"feb9da4d9fded8a8e87377540e635d56"},{url:"/_next/static/media/home-hand.10cf9521.jpg",revision:"28010bc209d5cd2592a8abc990578d66"},{url:"/_next/static/media/proj-bookmark-desktop-preview.b36bbe23.jpg",revision:"e40bcbb12a746b20a55ae740dc2cab66"},{url:"/_next/static/media/proj-cadmils-home.02222d49.jpg",revision:"36743dcb80091b077e88654d3ff266a0"},{url:"/_next/static/media/proj-dchat-auth.92dc43c4.jpg",revision:"b4907b896e39bdac835e9a9cd05f9b2c"},{url:"/_next/static/media/proj-dcom-cart.c9d93eb6.jpg",revision:"4c3b2765d8d974d43992cc97730e5118"},{url:"/_next/static/media/proj-dcom-home.925257e2.jpg",revision:"b6c5cc86f3caa083ae2b1c4482fb2556"},{url:"/_next/static/media/proj-dcom-item.8a66e989.jpg",revision:"b43f2b9f887748d4c1a4f8f9884aa94c"},{url:"/_next/static/media/proj-dev-home.21498a83.jpg",revision:"eb1db2661e098261fe4d5dad13b80eeb"},{url:"/_next/static/media/proj-dprod-home.57a4a0d2.jpg",revision:"1bfd3f126d6f9052c039966c2bbd2747"},{url:"/_next/static/media/proj-drum-home.365a65fc.jpg",revision:"1906ba8b5e3aab039402c816f9261dff"},{url:"/_next/static/media/proj-freebies-home.9c544bd6.jpg",revision:"a1764ff6c2b32760cf808ef222d3e15f"},{url:"/_next/static/media/proj-laptopphone-index.8cf1f34c.gif",revision:"8b4aee67264e36054858ee3b0e4a8748"},{url:"/_next/static/media/proj-lattice-auth.42506a81.jpg",revision:"a990d055df4e8525fcf427509ce9634a"},{url:"/_next/static/media/proj-lattice-home.649056bc.jpg",revision:"9ee9dbcf68ea634ca6a32501738be2d9"},{url:"/_next/static/media/proj-medic-history.3829f22a.jpg",revision:"612bdbdfb14f4035f499714005690e59"},{url:"/_next/static/media/proj-medic-home.a8be789c.jpg",revision:"409a5798eca92051abd661b08217fea2"},{url:"/_next/static/media/proj-medic-results.e3fa8f62.jpg",revision:"f43cdc5fb07b6d46578f98b462cf8ebd"},{url:"/_next/static/media/proj-ozidi-generator.c1bad164.jpg",revision:"09d102faf471e82c41c850ee1e85b56c"},{url:"/_next/static/media/proj-ozidi-reg.a8ca65ce.jpg",revision:"70ec279558499a3fbbeeac4dc3bdd84e"},{url:"/_next/static/media/proj-phitnft-joined.e909e0a0.jpg",revision:"2e53f89d2c3a1e1e4df6386d46b4ef99"},{url:"/_next/static/media/proj-phitnft-pending.93e39566.jpg",revision:"0513e66a848a65350c331c265801f4a6"},{url:"/_next/static/media/proj-phitnftwhitelist-joined.42b5e246.jpg",revision:"cee51f22a1280ea88e96741517e2fbdd"},{url:"/_next/static/media/proj-phitnftwhitelist-pending.c3450928.jpg",revision:"9bab0d805c7134538e4a88c6cd24c425"},{url:"/_next/static/media/proj-prodeus-dashboard-dark.b46f5e07.jpg",revision:"8aa9c9d090ed00a66298a127eadaafc7"},{url:"/_next/static/media/proj-prodeus-dashboard-light.3c9dd905.jpg",revision:"0dfe8d883059a1117486d55fc79403af"},{url:"/_next/static/media/proj-prodeus-discover.ec57a116.jpg",revision:"d785da836e069f79ac0842bc25619288"},{url:"/_next/static/media/proj-prodeus-portfolio.4f1603c8.jpg",revision:"a5ad04169afabbca1ffbcbedecd6e894"},{url:"/_next/static/media/proj-prodeus-skills.5f747fb7.jpg",revision:"087c5ca06ccc2827f188ae7fc69bab83"},{url:"/_next/static/media/proj-prodeuseditor-pic.e39ea823.jpg",revision:"47d4e50ff40fa278714a9e4b715f3c4b"},{url:"/_next/static/media/proj-pv1-home.dbf9f218.jpg",revision:"23bfbc7bb104d625500c45bca88daeec"},{url:"/_next/static/media/proj-pv2-home.da3fa2aa.jpg",revision:"64961eca40bfc2635698651f7aadacd9"},{url:"/_next/static/media/proj-shortly-desktop-preview.a63b0617.jpg",revision:"c94ed84dcfd1f69c1524e7b58173a3b5"},{url:"/_next/static/media/proj-weather-home.c5f4b8ac.jpg",revision:"4f5216a49fecbeeb4fe693bf93cf5599"},{url:"/_next/static/media/proj-weather-result.7096902e.jpg",revision:"e4e50c0632ad45bd75c1a8d4e3e330d4"},{url:"/_next/static/yUta7O8Ea4dt3HLS-uURL/_buildManifest.js",revision:"76e792438b6cfaa24b517dd684d927c3"},{url:"/_next/static/yUta7O8Ea4dt3HLS-uURL/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/yUta7O8Ea4dt3HLS-uURL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon.ico",revision:"710675c10a4d3be9b2f855acf807ef67"},{url:"/fonts/sf-pro/SFPRODISPLAYBOLD.OTF",revision:"644563f48ab5fe8e9082b64b2729b068"},{url:"/fonts/sf-pro/SFPRODISPLAYMEDIUM.OTF",revision:"51fd7406327f2b1dbc8e708e6a9da9a5"},{url:"/fonts/sf-pro/SFPRODISPLAYREGULAR.OTF",revision:"aaeac71d99a345145a126a8c9dd2615f"},{url:"/home-excel.png",revision:"feb9da4d9fded8a8e87377540e635d56"},{url:"/home-hand.jpg",revision:"28010bc209d5cd2592a8abc990578d66"},{url:"/icon-192x192.png",revision:"5af2212417bc7cab66eb16d7d466f01f"},{url:"/icon-256x256.png",revision:"d2473f4d3942f6e99ec2c8c676c4bb34"},{url:"/icon-384x384.png",revision:"2fd0f730da74e666ed19e3a180ca74fa"},{url:"/icon-512x512.png",revision:"e6a2d4a0f544082283103bd047a14790"},{url:"/icons/cancel.svg",revision:"92dff092b7249894e47656f0b9d7cc15"},{url:"/images/covers/credits.png",revision:"cbb057459a1d7a5a803ef86df160538d"},{url:"/images/covers/home.png",revision:"270a186900746059007aa582e97b43fe"},{url:"/images/covers/invalid-project.png",revision:"2b30024171bf0a5e033df9b8f4fabd98"},{url:"/images/covers/letters.png",revision:"58cb7e17ff2945ff2f24184d2ec59833"},{url:"/images/covers/not-found.png",revision:"63274e2c904e03bbeba7bb532d040d87"},{url:"/images/covers/projects.png",revision:"c7e847f740686ce7d3bb6abd63f4dae4"},{url:"/images/grain.png",revision:"62f64d5233f6333080c87c81a9a35f9d"},{url:"/images/noise.png",revision:"5058f6b59340f1f98757fdce96e77144"},{url:"/images/projects/bookmark/desktop-preview.jpg",revision:"e40bcbb12a746b20a55ae740dc2cab66"},{url:"/images/projects/cadmils/home.jpg",revision:"36743dcb80091b077e88654d3ff266a0"},{url:"/images/projects/d-chat/auth.jpg",revision:"b4907b896e39bdac835e9a9cd05f9b2c"},{url:"/images/projects/d-commerce/cart.jpg",revision:"4c3b2765d8d974d43992cc97730e5118"},{url:"/images/projects/d-commerce/home.jpg",revision:"b6c5cc86f3caa083ae2b1c4482fb2556"},{url:"/images/projects/d-commerce/item.jpg",revision:"b43f2b9f887748d4c1a4f8f9884aa94c"},{url:"/images/projects/d-productivity/home.jpg",revision:"1bfd3f126d6f9052c039966c2bbd2747"},{url:"/images/projects/developer/home.jpg",revision:"eb1db2661e098261fe4d5dad13b80eeb"},{url:"/images/projects/drum-machine/home.jpg",revision:"1906ba8b5e3aab039402c816f9261dff"},{url:"/images/projects/freebies/home2.jpg",revision:"a1764ff6c2b32760cf808ef222d3e15f"},{url:"/images/projects/laptop-phone/index.gif",revision:"8b4aee67264e36054858ee3b0e4a8748"},{url:"/images/projects/medic-finder/history.jpg",revision:"612bdbdfb14f4035f499714005690e59"},{url:"/images/projects/medic-finder/home.jpg",revision:"409a5798eca92051abd661b08217fea2"},{url:"/images/projects/medic-finder/results.jpg",revision:"f43cdc5fb07b6d46578f98b462cf8ebd"},{url:"/images/projects/ozidi/generator.jpg",revision:"09d102faf471e82c41c850ee1e85b56c"},{url:"/images/projects/ozidi/reg.jpg",revision:"70ec279558499a3fbbeeac4dc3bdd84e"},{url:"/images/projects/phitnfts/joined.jpg",revision:"2e53f89d2c3a1e1e4df6386d46b4ef99"},{url:"/images/projects/phitnfts/pending.jpg",revision:"0513e66a848a65350c331c265801f4a6"},{url:"/images/projects/phitnftswhitelist/joined.jpg",revision:"cee51f22a1280ea88e96741517e2fbdd"},{url:"/images/projects/phitnftswhitelist/pending.jpg",revision:"9bab0d805c7134538e4a88c6cd24c425"},{url:"/images/projects/private-lattice/auth.jpg",revision:"a990d055df4e8525fcf427509ce9634a"},{url:"/images/projects/private-lattice/home.jpg",revision:"9ee9dbcf68ea634ca6a32501738be2d9"},{url:"/images/projects/prodeus-editor/pic.jpg",revision:"47d4e50ff40fa278714a9e4b715f3c4b"},{url:"/images/projects/prodeus/dashboard-dark.jpg",revision:"8aa9c9d090ed00a66298a127eadaafc7"},{url:"/images/projects/prodeus/dashboard-light.jpg",revision:"0dfe8d883059a1117486d55fc79403af"},{url:"/images/projects/prodeus/discover.jpg",revision:"d785da836e069f79ac0842bc25619288"},{url:"/images/projects/prodeus/portfolio.jpg",revision:"a5ad04169afabbca1ffbcbedecd6e894"},{url:"/images/projects/prodeus/skills.jpg",revision:"087c5ca06ccc2827f188ae7fc69bab83"},{url:"/images/projects/pv-1/home.jpg",revision:"23bfbc7bb104d625500c45bca88daeec"},{url:"/images/projects/pv-2/home.jpg",revision:"64961eca40bfc2635698651f7aadacd9"},{url:"/images/projects/shortly/desktop-preview.jpg",revision:"c94ed84dcfd1f69c1524e7b58173a3b5"},{url:"/images/projects/weather/home.jpg",revision:"4f5216a49fecbeeb4fe693bf93cf5599"},{url:"/images/projects/weather/result.jpg",revision:"e4e50c0632ad45bd75c1a8d4e3e330d4"},{url:"/manifest.json",revision:"84aa34a8bab40828fa7e7ec2e611af9a"},{url:"/proj-bookmark-desktop-preview.jpg",revision:"e40bcbb12a746b20a55ae740dc2cab66"},{url:"/proj-cadmils-home.jpg",revision:"36743dcb80091b077e88654d3ff266a0"},{url:"/proj-dchat-auth.jpg",revision:"b4907b896e39bdac835e9a9cd05f9b2c"},{url:"/proj-dcom-cart.jpg",revision:"4c3b2765d8d974d43992cc97730e5118"},{url:"/proj-dcom-home.jpg",revision:"b6c5cc86f3caa083ae2b1c4482fb2556"},{url:"/proj-dcom-item.jpg",revision:"b43f2b9f887748d4c1a4f8f9884aa94c"},{url:"/proj-dev-home.jpg",revision:"eb1db2661e098261fe4d5dad13b80eeb"},{url:"/proj-dprod-home.jpg",revision:"1bfd3f126d6f9052c039966c2bbd2747"},{url:"/proj-drum-home.jpg",revision:"1906ba8b5e3aab039402c816f9261dff"},{url:"/proj-freebies-home.jpg",revision:"a1764ff6c2b32760cf808ef222d3e15f"},{url:"/proj-laptopphone-index.gif",revision:"8b4aee67264e36054858ee3b0e4a8748"},{url:"/proj-lattice-auth.jpg",revision:"a990d055df4e8525fcf427509ce9634a"},{url:"/proj-lattice-home.jpg",revision:"9ee9dbcf68ea634ca6a32501738be2d9"},{url:"/proj-medic-history.jpg",revision:"612bdbdfb14f4035f499714005690e59"},{url:"/proj-medic-home.jpg",revision:"409a5798eca92051abd661b08217fea2"},{url:"/proj-medic-results.jpg",revision:"f43cdc5fb07b6d46578f98b462cf8ebd"},{url:"/proj-ozidi-generator.jpg",revision:"09d102faf471e82c41c850ee1e85b56c"},{url:"/proj-ozidi-reg.jpg",revision:"70ec279558499a3fbbeeac4dc3bdd84e"},{url:"/proj-phitnft-joined.jpg",revision:"2e53f89d2c3a1e1e4df6386d46b4ef99"},{url:"/proj-phitnft-pending.jpg",revision:"0513e66a848a65350c331c265801f4a6"},{url:"/proj-phitnftwhitelist-joined.jpg",revision:"cee51f22a1280ea88e96741517e2fbdd"},{url:"/proj-phitnftwhitelist-pending.jpg",revision:"9bab0d805c7134538e4a88c6cd24c425"},{url:"/proj-prodeus-dashboard-dark.jpg",revision:"8aa9c9d090ed00a66298a127eadaafc7"},{url:"/proj-prodeus-dashboard-light.jpg",revision:"0dfe8d883059a1117486d55fc79403af"},{url:"/proj-prodeus-discover.jpg",revision:"d785da836e069f79ac0842bc25619288"},{url:"/proj-prodeus-portfolio.jpg",revision:"a5ad04169afabbca1ffbcbedecd6e894"},{url:"/proj-prodeus-skills.jpg",revision:"087c5ca06ccc2827f188ae7fc69bab83"},{url:"/proj-prodeuseditor-pic.jpg",revision:"47d4e50ff40fa278714a9e4b715f3c4b"},{url:"/proj-pv1-home.jpg",revision:"23bfbc7bb104d625500c45bca88daeec"},{url:"/proj-pv2-home.jpg",revision:"64961eca40bfc2635698651f7aadacd9"},{url:"/proj-shortly-desktop-preview.jpg",revision:"c94ed84dcfd1f69c1524e7b58173a3b5"},{url:"/proj-weather-home.jpg",revision:"4f5216a49fecbeeb4fe693bf93cf5599"},{url:"/proj-weather-result.jpg",revision:"e4e50c0632ad45bd75c1a8d4e3e330d4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
