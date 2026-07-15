
function toggleMenu(){
  const nav=document.getElementById('siteNav');
  if(nav) nav.classList.toggle('open');
}
function toggleDropdown(event,btn){
  event.preventDefault();
  const dropdown=btn.closest('.nav-dropdown');
  if(!dropdown) return;
  document.querySelectorAll('.nav-dropdown.open').forEach(dd=>{
    if(dd!==dropdown){ dd.classList.remove('open'); const b=dd.querySelector('.nav-dropbtn'); if(b) b.setAttribute('aria-expanded','false'); }
  });
  const open=dropdown.classList.toggle('open');
  btn.setAttribute('aria-expanded', open ? 'true' : 'false');
}
document.addEventListener('click',event=>{
  if(!event.target.closest('.nav-dropdown')){
    document.querySelectorAll('.nav-dropdown.open').forEach(dd=>{
      dd.classList.remove('open');
      const btn=dd.querySelector('.nav-dropbtn');
      if(btn) btn.setAttribute('aria-expanded','false');
    });
  }
});
function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'});}
function currentFile(){
  const name=(location.pathname.split('/').pop()||'index.html');
  return name===''?'index.html':name;
}
function activateCurrentLinks(){
  const file=currentFile();
  document.querySelectorAll('.nav a,.side-link').forEach(a=>{
    const href=(a.getAttribute('href')||'').split('#')[0];
    if(href===file){
      a.classList.add('active');
      const dd=a.closest('.nav-dropdown');
      if(dd){ const btn=dd.querySelector('.nav-dropbtn'); if(btn) btn.classList.add('active'); }
    }
  });
}
function filterCourseNav(){
  const input=document.getElementById('courseNavSearch');
  if(!input) return;
  const q=norm(input.value);
  document.querySelectorAll('.side-link').forEach(link=>{
    const hit=!q || norm(link.innerText).includes(q);
    link.classList.toggle('is-hidden', !hit);
  });
  document.querySelectorAll('.nav-section').forEach(section=>{
    const any=[...section.querySelectorAll('.side-link')].some(a=>!a.classList.contains('is-hidden'));
    section.style.display=any?'':'none';
  });
}
function enhancePageChrome(){
  const article=document.querySelector('article.content');
  if(!article || article.querySelector('.breadcrumb')) return;
  const file=currentFile();
  const title=(document.querySelector('.hero h1')||document.querySelector('h1'))?.textContent?.trim()||document.title;
  const bc=document.createElement('nav');
  bc.className='breadcrumb';
  bc.innerHTML=`<a href="index.html">Home</a><span>›</span><strong>${title}</strong>`;
  const toolbar=article.querySelector('.toolbar');
  if(toolbar && toolbar.nextSibling){ toolbar.parentNode.insertBefore(bc, toolbar.nextSibling); }
  else { article.insertBefore(bc, article.firstChild); }
}
document.addEventListener('DOMContentLoaded',()=>{activateCurrentLinks(); enhancePageChrome();});


function norm(s){return (s||'').toLowerCase().replace(/[.?!,;]/g,'').replace(/\s+/g,' ').trim();}
function checkFill(unit){
  const card=document.querySelector(`[data-fill-unit="${unit}"]`);
  let correct=0,total=0;
  card.querySelectorAll('[data-answer]').forEach(inp=>{
    total++;
    const answers=JSON.parse(inp.dataset.answer).map(norm);
    const ok=answers.includes(norm(inp.value));
    inp.style.borderColor=ok?'#157f3b':'#b42318';
    inp.style.background=ok?'#eaf7ef':'#fff1ef';
    if(ok) correct++;
  });
  const fb=card.querySelector('.feedback');
  fb.className='feedback show '+(correct===total?'ok':'bad');
  fb.textContent=`Score: ${correct}/${total}. ${correct===total?'Excellent work!':'Review the highlighted answers and try again.'}`;
  updateProgress();
}
function showFillAnswers(unit){
  const card=document.querySelector(`[data-fill-unit="${unit}"]`);
  card.querySelectorAll('[data-answer]').forEach(inp=>{inp.value=JSON.parse(inp.dataset.answer)[0]; inp.style.background='#fff6da'; inp.style.borderColor='#d8aa3d';});
}
function checkMatch(unit){
  const card=document.querySelector(`[data-match-unit="${unit}"]`);
  let correct=0,total=0;
  card.querySelectorAll('select[data-correct]').forEach(sel=>{
    total++;
    const ok=sel.value===sel.dataset.correct;
    sel.style.borderColor=ok?'#157f3b':'#b42318';
    sel.style.background=ok?'#eaf7ef':'#fff1ef';
    if(ok) correct++;
  });
  const fb=card.querySelector('.feedback');
  fb.className='feedback show '+(correct===total?'ok':'bad');
  fb.textContent=`Score: ${correct}/${total}. ${correct===total?'All matches are correct.':'Some matches need correction.'}`;
  updateProgress();
}
function resetCard(id){
  const card=document.getElementById(id);
  card.querySelectorAll('input').forEach(el=>{
    if(el.type==='radio' || el.type==='checkbox'){ el.checked=false; }
    else { el.value=''; }
    el.style.background='white'; el.style.borderColor='#cdd7e3';
  });
  card.querySelectorAll('textarea').forEach(el=>{el.value=''; el.style.background='white'; el.style.borderColor='#cdd7e3';});
  card.querySelectorAll('select').forEach(el=>{el.value=''; el.style.background='white'; el.style.borderColor='#cdd7e3';});
  card.querySelectorAll('.feedback').forEach(el=>{el.className='feedback'; el.textContent='';});
  card.querySelectorAll('.check-pill').forEach(el=>{el.className='check-pill'; el.textContent=el.dataset.keyword || el.textContent.replace(/^✓ |^✗ /,'');});
  card.querySelectorAll('.mcq-question').forEach(el=>{el.classList.remove('correct','incorrect');});
  card.querySelectorAll('.mcq-option').forEach(label=>{label.style.background='white'; label.style.borderColor='#d9e3ef';});
}
function analyzeRole(unit){
  const card=document.querySelector(`[data-role-unit="${unit}"]`);
  const text=card.querySelector('textarea').value;
  let found=0,total=0;
  card.querySelectorAll('.check-pill').forEach(pill=>{
    total++;
    const kw=pill.dataset.keyword;
    const ok=norm(text).includes(norm(kw));
    pill.className='check-pill '+(ok?'ok':'no');
    pill.textContent=(ok?'✓ ':'✗ ')+kw;
    if(ok) found++;
  });
  const fb=card.querySelector('.feedback');
  const words=norm(text).split(' ').filter(Boolean).length;
  const lengthOk=words>=40;
  fb.className='feedback show '+(found===total && lengthOk?'ok':'bad');
  fb.textContent=`Marker/keyword check: ${found}/${total}. Word count: ${words}. ${lengthOk?'Length is acceptable.':'Try to write at least 40 words or a multi-line exchange.'}`;
  updateProgress();
}
function markComplete(pageKey){
  const key=window.portalUnitKey?window.portalUnitKey(pageKey):('smcp_complete_'+pageKey);
  localStorage.setItem(key,'1');
  updateProgress();
  if(window.refreshPostTestGate) window.refreshPostTestGate();
  if(window.showPortalToast) window.showPortalToast('Unit marked complete. Your course progress has been updated.','success');
}
function updateProgress(){
  const keys=['unit1','unit2','unit3','unit4','unit5','unit6','unit7'];
  let complete=0;
  keys.forEach(k=>{ const key=window.portalUnitKey?window.portalUnitKey(k):('smcp_complete_'+k); if(localStorage.getItem(key)==='1') complete++; });
  document.querySelectorAll('.progressbar span').forEach(s=>s.style.width=(complete/keys.length*100)+'%');
  document.querySelectorAll('.progress-text').forEach(t=>t.textContent=`${complete}/${keys.length} units completed`);
}
function printPage(){window.print();}
function searchPage(){
  const q=norm(document.getElementById('pageSearch').value);
  document.querySelectorAll('.lesson-section,.exercise-card,.table-wrap,p,li,h2,h3').forEach(el=>el.classList.remove('hidden'));
  if(!q){return;}
  document.querySelectorAll('.lesson-section,.exercise-card').forEach(sec=>{
    if(!norm(sec.innerText).includes(q)) sec.classList.add('hidden');
  });
}
document.addEventListener('DOMContentLoaded', updateProgress);

function checkMCQ(unit){
  const card=document.querySelector(`[data-mcq-unit="${unit}"]`);
  let correct=0,total=0;
  card.querySelectorAll('.mcq-question').forEach((q,idx)=>{
    total++;
    const chosen=q.querySelector('input[type="radio"]:checked');
    const ok=chosen && chosen.value===q.dataset.correct;
    q.classList.remove('correct','incorrect');
    q.classList.add(ok?'correct':'incorrect');
    q.querySelectorAll('.mcq-option').forEach(label=>{
      const input=label.querySelector('input');
      label.style.borderColor = input.value===q.dataset.correct ? '#157f3b' : '#d9e3ef';
      label.style.background = input.value===q.dataset.correct ? '#eaf7ef' : 'white';
    });
    if(ok) correct++;
  });
  const fb=card.querySelector('.feedback');
  fb.className='feedback show '+(correct===total?'ok':'bad');
  fb.textContent=`Score: ${correct}/${total}. ${correct===total?'Excellent knowledge check.':'Review the highlighted correct choices and try again.'}`;
  updateProgress();
}
function showMCQAnswers(unit){
  const card=document.querySelector(`[data-mcq-unit="${unit}"]`);
  card.querySelectorAll('.mcq-question').forEach(q=>{
    q.querySelectorAll('input[type="radio"]').forEach(input=>{ input.checked = input.value===q.dataset.correct; });
  });
  checkMCQ(unit);
}
function checkDecision(unit){
  const card=document.querySelector(`[data-decision-unit="${unit}"]`);
  let correct=0,total=0;
  card.querySelectorAll('select[data-correct]').forEach(sel=>{
    total++;
    const ok=sel.value===sel.dataset.correct;
    sel.style.borderColor=ok?'#157f3b':'#b42318';
    sel.style.background=ok?'#eaf7ef':'#fff1ef';
    if(ok) correct++;
  });
  const fb=card.querySelector('.feedback');
  fb.className='feedback show '+(correct===total?'ok':'bad');
  fb.textContent=`Score: ${correct}/${total}. ${correct===total?'Strong operational decisions.':'Review the situations and choose the most precise marker or procedure.'}`;
  updateProgress();
}
function analyzeScenario(unit){
  const card=document.querySelector(`[data-scenario-unit="${unit}"]`);
  const text=card.querySelector('textarea').value;
  const minWords=parseInt(card.dataset.minwords||'50',10);
  let found=0,total=0;
  card.querySelectorAll('.check-pill').forEach(pill=>{
    total++;
    const kw=pill.dataset.keyword;
    const ok=norm(text).includes(norm(kw));
    pill.className='check-pill '+(ok?'ok':'no');
    pill.textContent=(ok?'✓ ':'✗ ')+kw;
    if(ok) found++;
  });
  const words=norm(text).split(' ').filter(Boolean).length;
  const lengthOk=words>=minWords;
  const markerUse=(text.match(/Instruction|Advice|Warning|Information|Question|Answer|Request|Intention/g)||[]).length;
  const fb=card.querySelector('.feedback');
  fb.className='feedback show '+(found===total && lengthOk?'ok':'bad');
  fb.textContent=`Keyword check: ${found}/${total}. Word count: ${words}/${minWords}. SMCP markers found: ${markerUse}. ${found===total && lengthOk?'Ready for teacher evaluation.':'Add missing keywords/markers and write a fuller operational response.'}`;
  updateProgress();
}

function checkSelfAssessment(id){
  const card=document.getElementById(id);
  const boxes=card.querySelectorAll('input[type="checkbox"]');
  let checked=0; boxes.forEach(b=>{ if(b.checked) checked++; });
  const fb=card.querySelector('.feedback');
  if(fb){ fb.className='feedback show '+(checked===boxes.length?'ok':'bad'); fb.textContent=`Checklist: ${checked}/${boxes.length} completed.`; }
}


/* Final navigation and audio refinements */
(function(){
  'use strict';
  const SIDEBAR_KEY='smcp_course_navigator_collapsed';
  const UNIT_TITLES=[
    'Foundations of SMCP Markers',
    'VHF Fundamentals & Routine Traffic',
    'Distress, Urgency & Safety',
    'Pilotage & Port Arrival',
    'Collision Avoidance',
    'Mooring & Cargo Operations',
    'Weather & Navigational Warnings'
  ];

  function setCourseNavigator(collapsed, persist=true){
    const body=document.body;
    const btn=document.getElementById('sidebarToggle');
    const sidebar=document.getElementById('courseSidebar')||document.querySelector('aside.sidebar');
    body.classList.toggle('sidebar-collapsed',!!collapsed);
    if(sidebar) sidebar.setAttribute('aria-hidden',collapsed?'true':'false');
    if(btn){
      btn.setAttribute('aria-pressed',collapsed?'true':'false');
      btn.setAttribute('aria-label',collapsed?'Show Course Navigator':'Hide Course Navigator');
      btn.title=collapsed?'Show Course Navigator':'Hide Course Navigator';
      const label=btn.querySelector('.sidebar-toggle-label');
      if(label) label.textContent=collapsed?'Show Navigator':'Navigator';
    }
    document.querySelectorAll('[data-course-navigator-toggle]').forEach(button=>{
      button.setAttribute('aria-pressed',collapsed?'true':'false');
      button.textContent=collapsed?'Show Course Navigator':'Hide Course Navigator';
    });
    if(persist) localStorage.setItem(SIDEBAR_KEY,collapsed?'1':'0');
  }

  window.toggleCourseNavigator=function(){
    setCourseNavigator(!document.body.classList.contains('sidebar-collapsed'));
  };

  function setupCourseNavigator(){
    const btn=document.getElementById('sidebarToggle');
    const sidebar=document.querySelector('aside.sidebar');
    if(!btn||!sidebar) return;
    sidebar.id=sidebar.id||'courseSidebar';
    const saved=localStorage.getItem(SIDEBAR_KEY)==='1';
    setCourseNavigator(saved,false);
    btn.addEventListener('click',window.toggleCourseNavigator);
  }

  function slugify(text){
    return (text||'section').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,70)||'section';
  }

  function unitNumber(){
    const m=(document.body.dataset.page||location.pathname).match(/unit-(\d)\.html/i);
    return m?Number(m[1]):0;
  }

  function setupUnitNavigation(){
    const unit=unitNumber();
    if(!unit) return;
    const article=document.querySelector('article.content');
    const lesson=document.getElementById('editableLessonContent');
    if(!article||!lesson||article.querySelector('.unit-quick-nav')) return;

    const headings=[...lesson.querySelectorAll('h2')].filter(h=>h.offsetParent!==null || !h.closest('[hidden]'));
    const used=new Set();
    headings.forEach((h,index)=>{
      if(!h.id){
        let id=slugify(h.textContent);
        if(used.has(id)||document.getElementById(id)) id=`${id}-${index+1}`;
        h.id=id;
      }
      used.add(h.id);
      h.classList.add('unit-section-target');
    });

    const nav=document.createElement('nav');
    nav.className='unit-quick-nav';
    nav.setAttribute('aria-label',`Quick navigation for Unit ${unit}`);

    const previous=unit>1?`<a class="unit-step-link" href="unit-${unit-1}.html" aria-label="Previous unit: ${UNIT_TITLES[unit-2]}">← Unit ${unit-1}</a>`:'<a class="unit-step-link" href="assessments.html#pre-test-section">← Pre-Test</a>';
    const next=unit<7?`<a class="unit-step-link next" href="unit-${unit+1}.html" aria-label="Next unit: ${UNIT_TITLES[unit]}">Unit ${unit+1} →</a>`:'<a class="unit-step-link next" href="capstone.html">Capstone →</a>';
    const unitOptions=UNIT_TITLES.map((title,i)=>`<option value="unit-${i+1}.html" ${i+1===unit?'selected':''}>Unit ${i+1}: ${title}</option>`).join('');
    const sectionOptions=headings.map(h=>`<option value="#${h.id}">${h.textContent.trim().replace(/\s+/g,' ')}</option>`).join('');

    nav.innerHTML=`
      <div class="unit-nav-identity"><span>UNIT ${unit} OF 7</span><strong>${UNIT_TITLES[unit-1]}</strong></div>
      <div class="unit-nav-controls">
        ${previous}
        <label class="unit-nav-field"><span>Choose unit</span><select id="unitPageSelect" aria-label="Choose a learning unit">${unitOptions}</select></label>
        <label class="unit-nav-field section-field"><span>On this page</span><select id="unitSectionSelect" aria-label="Jump to a section"><option value="">Select section…</option>${sectionOptions}</select></label>
        <button class="unit-navigator-toggle" type="button" data-course-navigator-toggle aria-pressed="false">Hide Course Navigator</button>
        ${next}
      </div>`;

    const toolbar=article.querySelector('.toolbar');
    if(toolbar) toolbar.insertAdjacentElement('afterend',nav); else article.insertBefore(nav,article.firstChild);

    nav.querySelector('#unitPageSelect').addEventListener('change',e=>{ if(e.target.value) location.href=e.target.value; });
    nav.querySelector('#unitSectionSelect').addEventListener('change',e=>{
      if(!e.target.value) return;
      const target=document.querySelector(e.target.value);
      if(target){target.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'',e.target.value);}
    });
    nav.querySelector('[data-course-navigator-toggle]').addEventListener('click',window.toggleCourseNavigator);
    setCourseNavigator(document.body.classList.contains('sidebar-collapsed'),false);

    if('IntersectionObserver' in window && headings.length){
      const select=nav.querySelector('#unitSectionSelect');
      const observer=new IntersectionObserver(entries=>{
        const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
        if(visible) select.value=`#${visible.target.id}`;
      },{rootMargin:'-145px 0px -70% 0px',threshold:[0,1]});
      headings.forEach(h=>observer.observe(h));
    }
  }

  function setupAudioFeedback(){
    document.querySelectorAll('audio').forEach(audio=>{
      if(audio.dataset.feedbackReady) return;
      audio.dataset.feedbackReady='1';
      const card=audio.closest('.audio-card');
      if(!card) return;
      const status=document.createElement('p');
      status.className='audio-status';
      status.setAttribute('role','status');
      status.hidden=true;
      audio.insertAdjacentElement('afterend',status);
      audio.addEventListener('error',()=>{
        status.hidden=false;
        status.textContent='Recording not available yet. Continue with the written script or ask your teacher for the audio file.';
      },true);
      audio.addEventListener('canplay',()=>{status.hidden=true;status.textContent='';});
    });
  }

  function setupKeyboardNavigation(){
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'){
        document.querySelectorAll('.nav-dropdown.open').forEach(dd=>{
          dd.classList.remove('open');
          const btn=dd.querySelector('.nav-dropbtn');
          if(btn) btn.setAttribute('aria-expanded','false');
        });
        const nav=document.getElementById('siteNav');
        if(nav) nav.classList.remove('open');
      }
    });
  }

  document.addEventListener('DOMContentLoaded',()=>{
    setupCourseNavigator();
    setupUnitNavigation();
    setupAudioFeedback();
    setupKeyboardNavigation();
  });
})();
