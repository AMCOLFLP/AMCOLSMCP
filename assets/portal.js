(function(){
'use strict';
const PORTAL_USERS={
  admin:{password:'AMCOLadmin',role:'admin',displayName:'AMCOL Administrator'},
  teacher:{password:'AMCOLteacher',role:'teacher',displayName:'AMCOL Teacher'},
  student:{password:'student1',role:'student',displayName:'Student 1'}
};
const SESSION_KEY='smcp_portal_session_v1';
const SESSION_HOURS=12;
const PUBLIC_PAGES=['login.html'];
const STUDENT_PAGES=['index.html','course-map.html','assessments.html','unit-1.html','unit-2.html','unit-3.html','unit-4.html','unit-5.html','unit-6.html','unit-7.html','pronunciation-listening.html','common-error-bank.html','capstone.html','resources.html','pre-test.html','post-test.html'];
const RESTRICTED_STUDENT=['teacher-guide.html','printable-exams.html'];

function fileName(){return (location.pathname.split('/').pop()||'index.html')||'index.html';}
function readSession(){
  try{
    const s=JSON.parse(localStorage.getItem(SESSION_KEY)||'null');
    if(!s||!s.username||!s.role||!s.expiresAt) return null;
    if(Date.now()>s.expiresAt){localStorage.removeItem(SESSION_KEY);return null;}
    return s;
  }catch(e){return null;}
}
function setSession(user){
  localStorage.setItem(SESSION_KEY,JSON.stringify({username:user.username,role:user.role,displayName:user.displayName,expiresAt:Date.now()+SESSION_HOURS*3600000}));
}
window.getPortalSession=readSession;
window.portalUnitKey=function(unitKey){
  const s=readSession();
  const who=s?s.username:'guest';
  return `smcp_complete_${who}_${unitKey}`;
};
function desiredNext(){
  const q=new URLSearchParams(location.search).get('next');
  if(!q) return 'index.html';
  return /^[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/i.test(q)?q:'index.html';
}
window.handlePortalLogin=function(event){
  event.preventDefault();
  const username=(document.getElementById('loginUsername').value||'').trim().toLowerCase();
  const password=document.getElementById('loginPassword').value||'';
  const feedback=document.getElementById('loginFeedback');
  const user=PORTAL_USERS[username];
  if(!user||user.password!==password){
    feedback.className='login-feedback show bad';
    feedback.textContent='Incorrect username or password. Please check the demo credentials and try again.';
    return false;
  }
  setSession({username,role:user.role,displayName:user.displayName});
  feedback.className='login-feedback show ok';
  feedback.textContent=`Welcome, ${user.displayName}. Opening your dashboard...`;
  setTimeout(()=>location.replace(desiredNext()),350);
  return false;
};
window.togglePasswordVisibility=function(){
  const input=document.getElementById('loginPassword');
  const btn=document.querySelector('.password-toggle');
  if(!input) return;
  const show=input.type==='password'; input.type=show?'text':'password'; if(btn)btn.textContent=show?'Hide':'Show';
};
window.portalLogout=function(){localStorage.removeItem(SESSION_KEY);location.replace('login.html');};

function guard(){
  const file=fileName();
  if(PUBLIC_PAGES.includes(file)) return true;
  const session=readSession();
  if(!session){
    const next=encodeURIComponent(file+(location.hash||''));
    location.replace(`login.html?next=${next}`);
    return false;
  }
  if(session.role==='student'&&!STUDENT_PAGES.includes(file)){
    sessionStorage.setItem('smcp_access_notice','That page is reserved for teachers and administrators.');
    location.replace('index.html');
    return false;
  }
  return true;
}
window.__portalAllowed=guard();

function roleLabel(role){return role==='admin'?'Administrator':role==='teacher'?'Teacher':'Student';}
function renderUserTools(session){
  const inner=document.querySelector('.topbar-inner');
  if(!inner||inner.querySelector('.portal-user-tools')) return;
  const tools=document.createElement('div');
  tools.className='portal-user-tools';
  tools.innerHTML=`<button class="thai-toggle" id="thaiToggle" type="button" aria-pressed="false" title="Show or hide contextual Thai explanations"><span>TH</span><strong>Thai Assist</strong></button><div class="portal-user-chip"><span class="portal-avatar">${session.role==='admin'?'A':session.role==='teacher'?'T':'S'}</span><div><strong>${session.displayName}</strong><small>${roleLabel(session.role)}</small></div></div><button class="portal-logout" type="button" onclick="portalLogout()">Log out</button>`;
  inner.appendChild(tools);
}
function applyRoleAccess(session){
  document.body.classList.add(`role-${session.role}`);
  document.querySelectorAll('a[href="teacher-guide.html"],a[href="printable-exams.html"]').forEach(a=>{
    if(session.role==='student'){
      const card=a.closest('.unit-card');
      if(card) card.classList.add('role-hidden'); else a.classList.add('role-hidden');
    }
  });
  const notice=sessionStorage.getItem('smcp_access_notice');
  if(notice){sessionStorage.removeItem('smcp_access_notice');showPortalToast(notice,'warning');}
}
function setupThaiToggle(){
  const btn=document.getElementById('thaiToggle');
  if(!btn) return;
  const saved=localStorage.getItem('smcp_thai_support')==='1';
  setThaiAssist(saved,false);
  btn.addEventListener('click',()=>setThaiAssist(!document.body.classList.contains('thai-enabled'),true));
}
function setThaiAssist(show,announce){
  const btn=document.getElementById('thaiToggle');
  document.body.classList.toggle('thai-enabled',show);
  document.body.classList.toggle('show-thai',show);
  if(btn){
    btn.setAttribute('aria-pressed',show?'true':'false');
    btn.classList.toggle('active',show);
    const strong=btn.querySelector('strong'); if(strong) strong.textContent=show?'Thai Assist On':'Thai Assist';
  }
  localStorage.setItem('smcp_thai_support',show?'1':'0');
  if(!show && window.closeThaiTranslation) window.closeThaiTranslation();
  if(announce) showPortalToast(show?'Thai Assist is on. Click a “ไทย” button beside a lesson discussion.':'Thai Assist is off. Translation buttons are hidden.','info');
}

function setupThaiTranslationSystem(){
  const translations=window.SMCP_THAI_TRANSLATIONS||{};
  const targets=document.querySelectorAll('[data-thai-key]');
  if(!targets.length) return;
  targets.forEach(target=>{
    if(target.querySelector(':scope > .thai-translate-btn')) return;
    const key=target.getAttribute('data-thai-key');
    const data=translations[key]; if(!data) return;
    const button=document.createElement('button');
    button.type='button'; button.className='thai-translate-btn'; button.dataset.thaiKey=key;
    button.setAttribute('aria-label',`เปิดคำอธิบายภาษาไทย: ${data.title}`);
    button.setAttribute('aria-haspopup','dialog');
    button.innerHTML='<span aria-hidden="true">TH</span><strong>ไทย</strong>';
    target.appendChild(button);
  });
  ensureThaiPopover();
  document.querySelectorAll('.thai-translate-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openThaiTranslation(btn.dataset.thaiKey,btn);});
    btn.addEventListener('mouseenter',()=>showThaiHoverPreview(btn));
    btn.addEventListener('mouseleave',hideThaiHoverPreview);
    btn.addEventListener('focus',()=>showThaiHoverPreview(btn));
    btn.addEventListener('blur',hideThaiHoverPreview);
  });
}
function ensureThaiPopover(){
  if(document.getElementById('thaiTranslationLayer')) return;
  const layer=document.createElement('div');
  layer.id='thaiTranslationLayer'; layer.className='thai-translation-layer'; layer.hidden=true;
  layer.innerHTML=`<div class="thai-translation-backdrop" data-close-thai></div><section class="thai-translation-popover" role="dialog" aria-modal="true" aria-labelledby="thaiTranslationTitle" lang="th"><div class="thai-popover-head"><span class="thai-popover-badge">TH</span><div><small>คำอธิบายประกอบภาษาไทย</small><h3 id="thaiTranslationTitle"></h3></div><button class="thai-popover-close" type="button" aria-label="ปิดคำแปลภาษาไทย">×</button></div><div class="thai-popover-body" id="thaiTranslationBody"></div><div class="thai-popover-footer"><span>ใช้เพื่อช่วยทำความเข้าใจ และฝึกใช้คำศัพท์ SMCP ภาษาอังกฤษเป็นหลัก</span><button class="btn gold" type="button" data-close-thai>ปิด</button></div></section>`;
  document.body.appendChild(layer);
  layer.querySelectorAll('[data-close-thai],.thai-popover-close').forEach(el=>el.addEventListener('click',closeThaiTranslation));
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeThaiTranslation();});
  const tip=document.createElement('div'); tip.id='thaiHoverPreview'; tip.className='thai-hover-preview'; tip.hidden=true; document.body.appendChild(tip);
}
let __thaiReturnFocus=null;
window.openThaiTranslation=function(key,source){
  if(!document.body.classList.contains('thai-enabled')) return;
  const data=(window.SMCP_THAI_TRANSLATIONS||{})[key]; if(!data) return;
  const layer=document.getElementById('thaiTranslationLayer'); if(!layer) return;
  __thaiReturnFocus=source||document.activeElement;
  document.getElementById('thaiTranslationTitle').textContent=data.title;
  document.getElementById('thaiTranslationBody').innerHTML=data.html;
  layer.hidden=false; document.body.classList.add('thai-popover-open');
  hideThaiHoverPreview();
  requestAnimationFrame(()=>layer.querySelector('.thai-popover-close').focus());
};
window.closeThaiTranslation=function(){
  const layer=document.getElementById('thaiTranslationLayer'); if(!layer||layer.hidden) return;
  layer.hidden=true; document.body.classList.remove('thai-popover-open');
  if(__thaiReturnFocus&&document.contains(__thaiReturnFocus)) __thaiReturnFocus.focus();
};
function showThaiHoverPreview(btn){
  if(!document.body.classList.contains('thai-enabled')||matchMedia('(hover: none)').matches) return;
  const data=(window.SMCP_THAI_TRANSLATIONS||{})[btn.dataset.thaiKey]; const tip=document.getElementById('thaiHoverPreview'); if(!data||!tip) return;
  tip.innerHTML=`<strong>${data.title}</strong><span>${data.summary}</span><small>คลิกเพื่ออ่านคำอธิบายฉบับเต็ม</small>`;
  tip.hidden=false;
  const r=btn.getBoundingClientRect();
  const maxLeft=Math.max(12,innerWidth-tip.offsetWidth-12);
  tip.style.left=Math.min(Math.max(12,r.left),maxLeft)+'px';
  tip.style.top=Math.min(innerHeight-tip.offsetHeight-12,r.bottom+9)+'px';
}
function hideThaiHoverPreview(){const tip=document.getElementById('thaiHoverPreview'); if(tip) tip.hidden=true;}

function completionCount(){
  let count=0;
  for(let i=1;i<=7;i++) if(localStorage.getItem(window.portalUnitKey(`unit${i}`))==='1') count++;
  return count;
}
window.refreshPostTestGate=function(){
  const session=readSession();
  const post=document.getElementById('post-test-section');
  if(!session||!post) return;
  post.querySelectorAll('.post-test-lock').forEach(x=>x.remove());
  post.classList.remove('post-test-locked');
  post.querySelectorAll('input,button,textarea,select').forEach(el=>el.disabled=false);
  const startLink=document.querySelector('a[href="#post-test-section"]');
  if(session.role!=='student'){
    if(startLink){startLink.classList.remove('disabled');startLink.removeAttribute('aria-disabled');}
    return;
  }
  const completed=completionCount();
  if(completed<7){
    post.classList.add('post-test-locked');
    post.querySelectorAll('input,button,textarea,select').forEach(el=>el.disabled=true);
    const lock=document.createElement('div');
    lock.className='post-test-lock';
    lock.innerHTML=`<div class="lock-icon">🔒</div><div><h3>Post-Test Locked</h3><p>Complete all seven learning units before attempting the post-test.</p><div class="unlock-progress"><span style="width:${completed/7*100}%"></span></div><strong>${completed}/7 units completed</strong></div><a class="btn gold" href="unit-${Math.min(completed+1,7)}.html">Continue Learning</a>`;
    post.insertBefore(lock,post.firstChild);
    if(startLink){startLink.classList.add('disabled');startLink.setAttribute('aria-disabled','true');startLink.onclick=(e)=>{e.preventDefault();post.scrollIntoView({behavior:'smooth'});};}
  } else {
    const unlocked=document.createElement('div');
    unlocked.className='post-test-unlocked';
    unlocked.innerHTML='<strong>✓ Post-Test Unlocked:</strong> All seven units have been completed. You may begin the final assessment.';
    post.insertBefore(unlocked,post.firstChild);
  }
};

function setupAdminEditor(session){
  if(session.role!=='admin') return;
  const wrapper=document.getElementById('editableLessonContent');
  if(!wrapper) return;
  const file=fileName();
  const key=`smcp_admin_content_${file}`;
  const saved=localStorage.getItem(key);
  if(saved) wrapper.innerHTML=saved;
  const bar=document.createElement('div');
  bar.className='admin-edit-bar';
  bar.innerHTML=`<div><span class="admin-badge">ADMIN EDITOR</span><strong>Edit this unit directly in the browser</strong><small>Saved edits are stored in this browser and can be exported as an updated HTML page.</small></div><div class="admin-actions"><button class="btn gold" id="adminEditBtn" type="button">Edit Lesson</button><button class="btn gold" id="adminSaveBtn" type="button" hidden>Save Changes</button><button class="btn ghost" id="adminCancelBtn" type="button" hidden>Cancel</button><button class="btn ghost" id="adminResetBtn" type="button">Reset Saved Edit</button><button class="btn ghost" id="adminExportBtn" type="button">Download Edited HTML</button></div>`;
  wrapper.insertAdjacentElement('beforebegin',bar);
  let backup='';
  const editBtn=bar.querySelector('#adminEditBtn'),saveBtn=bar.querySelector('#adminSaveBtn'),cancelBtn=bar.querySelector('#adminCancelBtn');
  function setEditing(on){
    wrapper.contentEditable=on?'true':'false'; wrapper.spellcheck=on; wrapper.classList.toggle('admin-editing',on);
    editBtn.hidden=on; saveBtn.hidden=!on; cancelBtn.hidden=!on;
    if(on){backup=wrapper.innerHTML;wrapper.focus();showPortalToast('Admin edit mode enabled. Click text, headings, lists, or table cells to revise them.','info');}
  }
  editBtn.onclick=()=>setEditing(true);
  saveBtn.onclick=()=>{localStorage.setItem(key,wrapper.innerHTML);setEditing(false);showPortalToast('Lesson changes saved in this browser.','success');};
  cancelBtn.onclick=()=>{wrapper.innerHTML=backup;setEditing(false);showPortalToast('Unsaved changes cancelled.','info');};
  bar.querySelector('#adminResetBtn').onclick=()=>{
    if(confirm('Remove the browser-saved edit and restore the original lesson file?')){localStorage.removeItem(key);location.reload();}
  };
  bar.querySelector('#adminExportBtn').onclick=()=>{
    const clone=document.documentElement.cloneNode(true);
    clone.querySelectorAll('.admin-edit-bar,.portal-toast').forEach(x=>x.remove());
    const cwrap=clone.querySelector('#editableLessonContent'); if(cwrap){cwrap.removeAttribute('contenteditable');cwrap.classList.remove('admin-editing');}
    const blob=new Blob(['<!DOCTYPE html>\n'+clone.outerHTML],{type:'text/html'});
    const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=file.replace('.html','-edited.html');a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
  };
}
function showPortalToast(message,type='info'){
  let toast=document.querySelector('.portal-toast');
  if(!toast){toast=document.createElement('div');toast.className='portal-toast';document.body.appendChild(toast);}
  toast.className=`portal-toast show ${type}`;toast.textContent=message;
  clearTimeout(window.__portalToastTimer);window.__portalToastTimer=setTimeout(()=>toast.classList.remove('show'),3800);
}
window.showPortalToast=showPortalToast;

function enhanceHome(session){
  const h=document.querySelector('article.content > h1');
  if(!h||document.querySelector('.portal-welcome-strip')) return;
  const strip=document.createElement('div');strip.className='portal-welcome-strip';
  const extra=session.role==='student'?`Your progress is ${completionCount()}/7 units. The post-test unlocks at 7/7.`:session.role==='admin'?'Open any unit to use the lesson editor.':'You have full access to course content, assessments, rubrics, and teaching resources.';
  strip.innerHTML=`<div><span class="welcome-role">${roleLabel(session.role)}</span><h3>Welcome, ${session.displayName}</h3><p>${extra}</p></div><a class="btn gold" href="${session.role==='student'?'unit-1.html':session.role==='admin'?'course-map.html':'teacher-guide.html'}">${session.role==='student'?'Continue Course':session.role==='admin'?'Manage Lessons':'Open Teacher Guide'}</a>`;
  h.insert_after?null:null;
  h.insertAdjacentElement('afterend',strip);
}

document.addEventListener('DOMContentLoaded',()=>{
  const file=fileName();
  if(file==='login.html'){
    const session=readSession();
    if(session){
      const card=document.querySelector('.login-card-head');
      if(card){const p=document.createElement('div');p.className='existing-session';p.innerHTML=`Already signed in as <strong>${session.displayName}</strong>. <a href="index.html">Continue to portal</a> or <button type="button" onclick="portalLogout()">log out</button>.`;card.insertAdjacentElement('beforebegin',p);}
    }
    return;
  }
  if(!window.__portalAllowed) return;
  const session=readSession(); if(!session)return;
  renderUserTools(session);applyRoleAccess(session);setupAdminEditor(session);setupThaiTranslationSystem();setupThaiToggle();window.refreshPostTestGate();enhanceHome(session);
});
})();
