/* Social links: replace these two addresses with NAQSA's real pages */
const SOCIAL={instagram:"https://www.instagram.com/",linkedin:"https://www.linkedin.com/"};
const NAV=[["index.html","Home"],["about.html","About"],["services.html","Services"],["process.html","Process"],["blog.html","Blog"],["contact.html","Contact"]];
const page=location.pathname.split('/').pop()||'index.html';
const dark=document.body.dataset.top!=='light';
const h=document.getElementById('site-header');
if(h)h.outerHTML=`<header id="hd" class="${dark?'':'onlight'}"><div class="wrap"><nav><a class="brand" href="index.html" aria-label="NAQSA home"><img id="lg" src="assets/logo-light.svg" alt="NAQSA"></a><button class="mb" id="mb" aria-expanded="false" aria-controls="lk">Menu</button><ul class="links" id="lk">${NAV.map(n=>`<li><a href="${n[0]}" class="${(n[0]===page||(page==='post.html'&&n[0]==='blog.html'))?'on':''}">${n[1]}</a></li>`).join('')}</ul></nav></div></header>`;
const f=document.getElementById('site-footer');
if(f)f.outerHTML=`<footer><div class="wrap"><div class="top"><div><img src="assets/logo-light.svg" alt="NAQSA"><p style="margin-top:16px;color:#c4bcb0;max-width:300px">Architecture and interior design studio.</p></div><ul class="fnav">${NAV.map(n=>`<li><a href="${n[0]}">${n[1]}</a></li>`).join('')}</ul><div><p><a href="mailto:info@naqsa.co">info@naqsa.co</a></p><p><a href="tel:+923322367373">+92 332 2367373</a></p><p>Johar Town, Lahore</p><div class="social"></div></div></div><small>© <span id="y"></span> NAQSA. All rights reserved.</small></div></footer>`;
document.getElementById('y').textContent=new Date().getFullYear();
const ICONS={instagram:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>',linkedin:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 12.8c0-1.4 1-2.4 2.3-2.4S16.5 11.2 16.5 13V16"/></svg>'};
document.querySelectorAll('.social').forEach(s=>{s.innerHTML=Object.entries(SOCIAL).map(([k,u])=>`<a href="${u}" target="_blank" rel="noopener noreferrer" aria-label="NAQSA on ${k[0].toUpperCase()+k.slice(1)}">${ICONS[k]}<span>${k}</span></a>`).join('')});

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

const POSTS=[
{t:"What to prepare before your first meeting with an architect",c:"Guides",d:"October 2026",n:1,x:"The first meeting goes furthest when you arrive with a clear picture of what you need.",b:["The first meeting goes furthest when you arrive with a clear picture of what you need. You do not need drawings or technical terms, only honest answers.","Start with the plot: its size, location, and any documents you already hold, such as ownership papers and previously approved plans. If you are renovating, bring photographs of the existing spaces.","Next, write down how your household lives. How many people, how many rooms, who works from home, who visits often. These details shape a layout more than any style reference.","Be ready to discuss your budget as a range, and your preferred timeline. An honest budget lets your architect propose ideas that can actually be built.","Finally, collect a few images you like, from homes, hotels or magazines. They describe taste in a way words cannot, and a good architect will read the common thread rather than copy any single picture."]},
{t:"Designing for light: where to start",c:"Design",d:"October 2026",n:2,x:"Light changes how a room feels more than almost any material, and it is free.",b:["Light changes how a room feels more than almost any material. It is also free, if the building is arranged to receive it.","Begin with orientation. Notice where the sun rises and sets on your plot, and which sides receive the harshest afternoon heat. Large windows suit sides with soft light, while shaded walls or deep verandas protect the harsh ones.","Think about depth as well as windows. Courtyards, skylights and tall openings bring daylight further into a home, so rooms away from the front do not feel dark.","Finally, control glare. Overhangs, screens and light interior surfaces spread light softly and keep rooms cooler. Good daylight design reduces both electricity use and the need for cooling."]},
{t:"Five questions to ask before you build",c:"Advice",d:"October 2026",n:3,x:"A few simple questions can prevent most of the surprises that come later.",b:["Before any building project begins, a few questions can prevent most of the surprises that come later.","First, ask what exactly is included in the architect's service: concept design, approval drawings, construction details, site visits. Knowing the scope avoids confusion about who does what.","Second, ask how the fee is structured and when payments fall due. A clear schedule linked to project stages protects both sides.","Third, ask how long each stage usually takes, and what you need to provide to keep it moving, such as decisions, documents and approvals.","Fourth, ask how changes are handled. Design changes are normal, but changes after construction drawings are more costly, so it helps to know the process early.","Fifth, ask how often you will meet and how you will receive updates. Regular, predictable communication is the best sign of a smooth project."]}];
const pl=document.getElementById('posts');
if(pl)pl.innerHTML=POSTS.map((p,i)=>`<a class="post" href="post.html?id=${i+1}"><div class="ph" data-t="${p.n}"></div><small>${p.c} · ${p.d}</small><h3>${p.t}</h3><p>${p.x}</p><span class="more">Read article</span></a>`).join('');
const pb=document.getElementById('pbody');
if(pb){const p=POSTS[(+new URLSearchParams(location.search).get('id')||1)-1]||POSTS[0];
 document.title=p.t+' | NAQSA Architecture';document.getElementById('ptitle').textContent=p.t;
 document.getElementById('pmeta').textContent=p.c+' · '+p.d;pb.innerHTML=p.b.map(x=>`<p>${x}</p>`).join('')}
/* animations */
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce){
 const groups=['.rows','.vals','.steps','.posts','.svc'];
 const sel='section h2,section .lead,.statement,.rows>div,.vals>div,.steps>div,.post,.split>div,.cols>div,.taupe .btn,.article p,.taupe p';
 document.querySelectorAll(sel).forEach(el=>{el.classList.add('rv');const par=el.parentElement;
  const sib=[...par.children].filter(c=>c.classList.contains('rv'));el.style.setProperty('--d',(sib.indexOf(el)*0.12)+'s')});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(()=>t.style.setProperty('--d','0s'),1300)}}),{threshold:.15,rootMargin:'0px 0px -6% 0px'});
 document.querySelectorAll('.rv').forEach(el=>io.observe(el));
 const mk=document.querySelector('.hero .mark');
 if(mk)addEventListener('scroll',()=>{mk.style.setProperty('--py',Math.min(scrollY,700)*0.12+'px')},{passive:true});
}
