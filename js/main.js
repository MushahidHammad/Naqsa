const PROJECTS=[
 {t:"Project One",c:"Residential",y:"2025",l:"City",d:"A private residence organised around light and a central courtyard.",n:1},
 {t:"Project Two",c:"Interior",y:"2025",l:"City",d:"A calm apartment interior using stone, timber and soft linen tones.",n:2},
 {t:"Project Three",c:"Commercial",y:"2024",l:"City",d:"A boutique office designed for focus, welcome and long-term flexibility.",n:3},
 {t:"Project Four",c:"Residential",y:"2024",l:"City",d:"A family home with deep verandas and a quiet, material-led palette.",n:4},
 {t:"Project Five",c:"Interior",y:"2023",l:"City",d:"A restaurant interior built around warm lighting and tactile surfaces.",n:2},
 {t:"Project Six",c:"Commercial",y:"2023",l:"City",d:"A retail space with a restrained layout that lets the product lead.",n:4}];
const NAV=[["index.html","Home"],["about.html","About"],["portfolio.html","Portfolio"],["services.html","Services"],["process.html","Process"],["contact.html","Contact"]];
const page=location.pathname.split('/').pop()||'index.html';
const dark=document.body.dataset.top!=='light';
const h=document.getElementById('site-header');
if(h)h.outerHTML=`<header id="hd" class="${dark?'':'onlight'}"><div class="wrap"><nav><a class="brand" href="index.html" aria-label="NAQSA home"><img id="lg" src="assets/logo-light.svg" alt="NAQSA"></a><button class="mb" id="mb" aria-expanded="false" aria-controls="lk">Menu</button><ul class="links" id="lk">${NAV.map(n=>`<li><a href="${n[0]}" class="${n[0]===page?'on':''}">${n[1]}</a></li>`).join('')}</ul></nav></div></header>`;
const f=document.getElementById('site-footer');
if(f)f.outerHTML=`<footer><div class="wrap"><div class="top"><div><img src="assets/logo-light.svg" alt="NAQSA"><p style="margin-top:16px;color:#c4bcb0;max-width:300px">Architecture and interior design studio.</p></div><ul>${NAV.map(n=>`<li><a href="${n[0]}">${n[1]}</a></li>`).join('')}</ul><div><p>hello@naqsa.com</p><p>+92 000 0000000</p><p>Studio address, City</p></div></div><small>© <span id="y"></span> NAQSA. All rights reserved.</small></div></footer>`;
document.getElementById('y').textContent=new Date().getFullYear();
const hd=document.getElementById('hd'),lg=document.getElementById('lg');
function sc(){const s=scrollY>60;hd.classList.toggle('solid',s);lg.src=(dark||s)?'assets/logo-light.svg':'assets/logo-dark.svg'}
sc();addEventListener('scroll',sc);
const mb=document.getElementById('mb'),lk=document.getElementById('lk');
mb.onclick=()=>mb.setAttribute('aria-expanded',lk.classList.toggle('open'));
document.addEventListener('click',e=>{const a=e.target.closest('a');
 if(a&&a.origin===location.origin&&!a.hash&&a.target!=='_blank'&&!e.metaKey&&!e.ctrlKey){e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,280)}});
addEventListener('pageshow',()=>document.body.classList.remove('leaving'));
const tile=p=>`<button class="tile" data-c="${p.c}" data-i="${PROJECTS.indexOf(p)}"><div class="ph" data-t="${p.n}"></div><h3>${p.t}</h3><small>${p.c}, ${p.y}</small></button>`;
const feat=document.getElementById('featured');if(feat)feat.innerHTML=PROJECTS.slice(0,3).map(tile).join('');
const grid=document.getElementById('grid');if(grid)grid.innerHTML=PROJECTS.map(tile).join('');
const lb=document.getElementById('lb');
document.addEventListener('click',e=>{const t=e.target.closest('.tile');
 if(t&&lb){const p=PROJECTS[t.dataset.i];lb.querySelector('.ph').dataset.t=p.n;lb.querySelector('h3').textContent=p.t;lb.querySelector('p').textContent=`${p.c} · ${p.l} · ${p.y}. ${p.d}`;lb.classList.add('open');lb.querySelector('.x').focus()}
 if(lb&&(e.target.classList.contains('x')||e.target===lb))lb.classList.remove('open')});
addEventListener('keydown',e=>{if(e.key==='Escape'&&lb)lb.classList.remove('open')});
document.querySelectorAll('.filters button').forEach(b=>b.onclick=()=>{
 document.querySelectorAll('.filters button').forEach(x=>x.classList.toggle('on',x===b));
 grid.querySelectorAll('.tile').forEach(t=>t.style.display=(b.dataset.f==='All'||t.dataset.c===b.dataset.f)?'':'none')});
const form=document.getElementById('f');
if(form)form.addEventListener('submit',async e=>{e.preventDefault();const s=document.getElementById('st');s.textContent='Sending…';
 try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(form)});const d=await r.json();
  if(d.success){s.textContent='Thank you. We will reply within two working days.';form.reset()}else throw 0}
 catch{s.textContent='Could not send. Please email hello@naqsa.com directly.'}});
