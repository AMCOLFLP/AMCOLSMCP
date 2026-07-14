
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
  localStorage.setItem('smcp_complete_'+pageKey,'1');
  updateProgress();
}
function updateProgress(){
  const keys=['unit1','unit2','unit3','unit4','unit5','unit6','unit7'];
  let complete=0;
  keys.forEach(k=>{ if(localStorage.getItem('smcp_complete_'+k)==='1') complete++; });
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
