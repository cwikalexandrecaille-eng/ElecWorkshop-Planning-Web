
const CACHE="ew-planning-de6c0c8d456e";
const FILES=["./icon-180-v2.png","./icon-180.png","./icon-192-v2.png","./icon-192.png","./icon-512-v2.png","./icon-512.png","./icon.svg","./index.html","./manifest.webmanifest","./assets/exceljs.min-DEowLOGY.js","./assets/index-Biu4qmCd.css","./assets/index-xnJQnX7k.js"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('message',e=>{if(e.data==='ACTIVATE')self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('ew-planning-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const url=new URL(e.request.url);
 if(e.request.method!=='GET'||url.origin!==self.location.origin)return;
 if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));return;}
 if(FILES.some(f=>new URL(f,self.location.href).href===url.href))e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));
});
