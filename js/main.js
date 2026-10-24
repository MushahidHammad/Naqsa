const NAV=[["index.html","Home"],["about.html","About"],["services.html","Services"],["process.html","Process"],["contact.html","Contact"]];
const page=location.pathname.split('/').pop()||'index.html';
const dark=document.body.dataset.top!=='light';
const h=document.getElementById('site-header');
if(h)h.outerHTML=`<header id="hd" class="${dark?'':'onlight'}"><div class="wrap"><nav><a class="brand" href="index.html" aria-label="NAQSA home"><img id="lg" src="assets/logo-light.svg" alt="NAQSA"></a><button class="mb" id="mb" aria-expanded="false" aria-controls="lk">Menu</button><ul class="links" id="lk">${NAV.map(n=>`<li><a href="${n[0]}" class="${n[0]===page?'on':''}">${n[1]}</a></li>`).join('')}</ul></nav></div></header>`;
const f=document.getElementById('site-footer');
if(f)f.outerHTML=`<footer><div class="wrap"><div class="top"><div><img src="assets/logo-light.svg" alt="NAQSA"><p style="margin-top:16px;color:#c4bcb0;max-width:300px">Architecture and interior design studio.</p></div><ul>${NAV.map(n=>`<li><a href="${n[0]}">${n[1]}</a></li>`).join('')}</ul><div><p><a href="mailto:info@naqsa.co">info@naqsa.co</a></p><p><a href="tel:+923322367373">+92 332 2367373</a></p><p>Johar Town, Lahore</p></div></div><small>© <span id="y"></span> NAQSA. All rights reserved.</small></div></footer>`;
document.getElementById('y').textContent=new Date().getFullYear();
const hd=document.getElementById('hd'),lg=document.getElementById('lg');
function sc(){const s=scrollY>60;hd.classList.toggle('solid',s);lg.src=(dark||s)?'assets/logo-light.svg':'assets/logo-dark.svg'}
sc();addEventListener('scroll',sc);
const mb=document.getElementById('mb'),lk=document.getElementById('lk');
mb.onclick=()=>mb.setAttribute('aria-expanded',lk.classList.toggle('open'));
document.addEventListener('click',e=>{const a=e.target.closest('a');
 if(a&&a.origin===location.origin&&!a.hash&&a.target!=='_blank'&&!e.metaKey&&!e.ctrlKey&&a.protocol.startsWith('http')||a&&a.protocol==='file:'&&a.pathname.endsWith('.html')&&!a.hash&&!e.metaKey&&!e.ctrlKey){e.preventDefault();document.body.classList.add('leaving');setTimeout(()=>location.href=a.href,280)}});
addEventListener('pageshow',()=>document.body.classList.remove('leaving'));
const form=document.getElementById('f');
if(form)form.addEventListener('submit',async e=>{e.preventDefault();const s=document.getElementById('st');s.textContent='Sending…';
 try{const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:new FormData(form)});const d=await r.json();
  if(d.success){s.textContent='Thank you. We will reply within two working days.';form.reset()}else throw 0}
 catch{s.textContent='Could not send. Please email info@naqsa.co directly.'}});
