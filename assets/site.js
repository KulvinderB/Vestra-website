
(function(){
 const toggle=document.querySelector('.menu-toggle'), menu=document.querySelector('.menu');
 if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
 const KEY='vestraCookieConsent';
 function consent(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch(e){return null}}
 function loadMaps(){document.querySelectorAll('[data-map-src]').forEach(el=>{if(!el.src)el.src=el.dataset.mapSrc});document.querySelectorAll('.map-placeholder').forEach(el=>el.classList.add('hidden'))}
 function apply(c){if(c&&c.functional)loadMaps();const b=document.getElementById('cookie-banner');if(b)b.classList.add('hidden')}
 function save(functional){const c={necessary:true,functional:functional,date:new Date().toISOString()};localStorage.setItem(KEY,JSON.stringify(c));apply(c)}
 window.VestraCookies={accept:()=>save(true),reject:()=>save(false),reset:()=>{localStorage.removeItem(KEY);location.reload()},loadMap:()=>save(true)};
 const c=consent(); if(c)apply(c); else {const b=document.getElementById('cookie-banner');if(b)b.classList.remove('hidden')}
})();
