const FACTORS = {
  transport: {car:0.21, moto:0.113, public:0.05, bike:0},
  diet: {alto:3300, moderado:2500, bajo:1700, vegano:1500},
  energy: {pequena:900, media:1800, grande:3000},
  water: {alto:700, medio:400, bajo:150},
  flights: {frecuente:3500, moderado:1600, pocos:600, ninguno:0},
  shopping: {alto:1500, medio:800, bajo:300}
};
const TRANSPORT_ORDER = ['car','moto','public','bike'];
const DIET_ORDER = ['alto','moderado','bajo','vegano'];
const ENERGY_ORDER = ['grande','media','pequena'];
const WATER_ORDER = ['alto','medio','bajo'];
const FLIGHTS_ORDER = ['frecuente','moderado','pocos','ninguno'];
const SHOPPING_ORDER = ['alto','medio','bajo'];

const GLOBAL_AVG = 6000; // referencia aproximada de huella personal compuesta (todas las categorías)
const STORAGE_KEY = 'carbontrack_entries';
const GOAL_KEY = 'carbontrack_goal';
const BADGES_KEY = 'carbontrack_badges';
const KG_ABSORBED_PER_TREE_YEAR = 21; // estimación simplificada
const KG_CO2_PER_LITER_GASOLINE = 2.3;
const TOTAL_STEPS = 6;

let state = {transport:null, km:50, diet:null, energy:null, water:null, flights:null, shopping:null};

function D(){ return DYN[getLang()]; }

document.querySelectorAll('.opt input').forEach(input=>{
  input.addEventListener('change', e=>{
    const group = e.target.name;
    document.querySelectorAll(`[data-group="${group}"] .opt`).forEach(o=>o.classList.remove('selected'));
    e.target.closest('.opt').classList.add('selected');
    state[group] = e.target.value;
  });
});

function updateKm(v){
  state.km = Number(v);
  document.getElementById('kmVal').textContent = v + ' km';
}

const SECTIONS = ['hero','quiz','results','simulator'];
function showSection(id){
  SECTIONS.forEach(s=> document.getElementById(s).classList.toggle('hidden', s!==id));
  if(id==='quiz') setTrack(1);
}
function goTo(id){ showSection(id); }

function setTrack(step){
  const segs = document.querySelectorAll('#stepsTrack .step-seg');
  for(let n=1; n<=TOTAL_STEPS; n++){
    document.getElementById('track'+n).style.width = n<=step ? '100%':'0%';
  }
  segs.forEach((seg,i)=>{
    seg.classList.toggle('active', (i+1)===step);
  });
  document.querySelectorAll('.step-chapter').forEach(el=>{
    el.textContent = `${el.getAttribute('data-step')} / ${TOTAL_STEPS}`;
  });
}

const REQUIRED_FIELD = {1:'transport', 2:'diet', 3:'energy', 4:'water', 5:'flights', 6:'shopping'};

function nextStep(from){
  const field = REQUIRED_FIELD[from];
  if(!state[field]){ alert(D().required[field]); return; }
  document.getElementById('step'+from).classList.add('hidden');
  document.getElementById('step'+(from+1)).classList.remove('hidden');
  setTrack(from+1);
}

function prevStep(from){
  document.getElementById('step'+from).classList.add('hidden');
  document.getElementById('step'+(from-1)).classList.remove('hidden');
  setTrack(from-1);
}

function openSimulator(){
  showSection('simulator');
  if(state.transport) document.getElementById('simTransport').value = state.transport;
  if(state.km) { document.getElementById('simKm').value = state.km; document.getElementById('simKmVal').textContent = state.km+' km/sem'; }
  if(state.diet) document.getElementById('simDiet').value = state.diet;
  if(state.energy) document.getElementById('simEnergy').value = state.energy;
  if(state.water) document.getElementById('simWater').value = state.water;
  if(state.flights) document.getElementById('simFlights').value = state.flights;
  if(state.shopping) document.getElementById('simShopping').value = state.shopping;
  updateSimulator();
}

function updateSimulator(){
  const km = Number(document.getElementById('simKm').value);
  document.getElementById('simKmVal').textContent = km+' km/sem';

  const t = document.getElementById('simTransport').value;
  const d = document.getElementById('simDiet').value;
  const e = document.getElementById('simEnergy').value;
  const w = document.getElementById('simWater').value;
  const f = document.getElementById('simFlights').value;
  const s = document.getElementById('simShopping').value;

  const total = Math.round(
    km*FACTORS.transport[t]*52 +
    FACTORS.diet[d] +
    FACTORS.energy[e] +
    FACTORS.water[w] +
    FACTORS.flights[f] +
    FACTORS.shopping[s]
  );

  document.getElementById('simTotal').textContent = total.toLocaleString(getLang());

  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const baseline = window.currentTotal || (entries.length ? entries[entries.length-1].total : GLOBAL_AVG);
  const diff = total - baseline;
  const deltaEl = document.getElementById('simDelta');
  if(Math.abs(diff) < 10){
    deltaEl.innerHTML = D().simEqual;
  } else if(diff < 0){
    deltaEl.innerHTML = D().simLess(Math.abs(Math.round(diff)).toLocaleString(getLang()), baseline.toLocaleString(getLang()));
  } else {
    deltaEl.innerHTML = D().simMore(Math.round(diff).toLocaleString(getLang()), baseline.toLocaleString(getLang()));
  }
}

function calculate(){
  if(!state.shopping){ alert(D().required.shopping); return; }

  const transportAnnual = state.km * FACTORS.transport[state.transport] * 52;
  const dietAnnual = FACTORS.diet[state.diet];
  const energyAnnual = FACTORS.energy[state.energy];
  const waterAnnual = FACTORS.water[state.water];
  const flightsAnnual = FACTORS.flights[state.flights];
  const shoppingAnnual = FACTORS.shopping[state.shopping];

  const total = Math.round(transportAnnual + dietAnnual + energyAnnual + waterAnnual + flightsAnnual + shoppingAnnual);

  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('results').classList.remove('hidden');
  document.getElementById('totalKg').textContent = total.toLocaleString(getLang());

  const ratio = Math.min(total / GLOBAL_AVG, 2);
  const circumference = 452;
  const offset = circumference - Math.min(ratio/2,1) * circumference;
  const arc = document.getElementById('gaugeArc');
  arc.setAttribute('stroke-dashoffset', offset);
  arc.setAttribute('stroke', ratio <= 0.85 ? '#8fbc94' : ratio <= 1.15 ? '#e8a94d' : '#d9765a');

  const diff = Math.round(((total-GLOBAL_AVG)/GLOBAL_AVG)*100);
  const compare = document.getElementById('compareText');
  if(diff>0){
    compare.innerHTML = D().compareMore(diff, GLOBAL_AVG.toLocaleString(getLang()));
  } else {
    compare.innerHTML = D().compareLess(Math.abs(diff), GLOBAL_AVG.toLocaleString(getLang()));
  }

  window.lastAnnual = {
    transport:transportAnnual, diet:dietAnnual, energy:energyAnnual,
    water:waterAnnual, flights:flightsAnnual, shopping:shoppingAnnual
  };
  renderRecommendations(window.lastAnnual);
  window.currentTotal = total;
  renderGoalStatus();
  checkAchievements({afterCalculate:true});
}

function stepDownSaving(order, factors, current, annualValue, kmMultiplier){
  const idx = order.indexOf(current);
  if(idx >= order.length-1) return null;
  const next = order[idx+1];
  const nextAnnual = kmMultiplier!=null ? (kmMultiplier*factors[next]*52) : factors[next];
  const save = annualValue - nextAnnual;
  return {save, next};
}

function renderRecommendations(annual){
  const d = D();
  const recs = [];

  const t = stepDownSaving(TRANSPORT_ORDER, FACTORS.transport, state.transport, annual.transport, state.km);
  if(t && t.save>10) recs.push({title:d.recTitle.transport(d.labels.transport[t.next]), save:t.save});

  const dt = stepDownSaving(DIET_ORDER, FACTORS.diet, state.diet, annual.diet);
  if(dt && dt.save>10) recs.push({title:d.recTitle.diet(d.labels.diet[dt.next]), save:dt.save});

  const e = stepDownSaving(ENERGY_ORDER, FACTORS.energy, state.energy, annual.energy);
  if(e && e.save>10) recs.push({title:d.recTitle.energy(d.labels.energy[e.next]), save:e.save});
  else if(!e) recs.push({title:d.recTitle.energyFallback, save:200});

  const w = stepDownSaving(WATER_ORDER, FACTORS.water, state.water, annual.water);
  if(w && w.save>10) recs.push({title:d.recTitle.water(d.labels.water[w.next]), save:w.save});

  const f = stepDownSaving(FLIGHTS_ORDER, FACTORS.flights, state.flights, annual.flights);
  if(f && f.save>10) recs.push({title:d.recTitle.flights(d.labels.flights[f.next]), save:f.save});

  const s = stepDownSaving(SHOPPING_ORDER, FACTORS.shopping, state.shopping, annual.shopping);
  if(s && s.save>10) recs.push({title:d.recTitle.shopping(d.labels.shopping[s.next]), save:s.save});

  recs.sort((a,b)=>b.save-a.save);
  const top = recs.slice(0,3);

  const list = document.getElementById('recList');
  list.innerHTML='';
  top.forEach((r,i)=>{
    const div = document.createElement('div');
    div.className='rec';
    div.innerHTML = `<span class="rec-rank">0${i+1}</span>
      <span class="rec-body"><div class="rec-title">${r.title}</div></span>
      <span class="rec-save">-${Math.round(r.save).toLocaleString(getLang())} kg/año</span>`;
    list.appendChild(div);
  });

  const comboTotal = top.reduce((sum,r)=>sum+r.save, 0);
  const trees = Math.round(comboTotal / KG_ABSORBED_PER_TREE_YEAR);
  const liters = Math.round(comboTotal / KG_CO2_PER_LITER_GASOLINE);
  const comboEl = document.getElementById('comboText');
  if(comboTotal > 10){
    comboEl.textContent = d.comboActive(Math.round(comboTotal).toLocaleString(getLang()), trees, liters.toLocaleString(getLang()));
  } else {
    comboEl.textContent = d.comboLow;
  }
}

function restart(){
  showSection('hero');
}

function saveResult(){
  try{
    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    entries.push({date:new Date().toISOString().slice(0,10), total:window.currentTotal});
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    checkAchievements({afterSave:true});
    alert(D().alertResultSaved);
  }catch(err){
    console.error(err);
    alert(D().alertSaveError);
  }
}

function toggleHistory(){
  const box = document.getElementById('historyBox');
  box.classList.toggle('hidden');
  if(box.classList.contains('hidden')) return;

  renderGoalProgressBox();
  renderHistoryChart();
  renderBadgesGrid();

  const listEl = document.getElementById('historyList');
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  if(entries.length===0){
    listEl.innerHTML = `<p style="color:var(--text-muted); font-size:14px;">${D().noSavedResults}</p>`;
    return;
  }
  const sorted = [...entries].sort((a,b)=> a.date < b.date ? 1 : -1);
  listEl.innerHTML='';
  sorted.forEach(e=>{
    const row = document.createElement('div');
    row.className='history-item';
    row.innerHTML = `<span>${e.date}</span><b>${e.total.toLocaleString(getLang())} kg CO₂e</b>`;
    listEl.appendChild(row);
  });
}

function saveGoal(){
  const percent = state.goalPercent;
  if(!percent){ alert(D().alertGoalPercent); return; }
  if(!window.currentTotal){ alert(D().alertNeedCalc); return; }
  const goal = {
    baseline: window.currentTotal,
    targetPercent: Number(percent),
    date: new Date().toISOString().slice(0,10)
  };
  localStorage.setItem(GOAL_KEY, JSON.stringify(goal));
  renderGoalStatus();
  checkAchievements({afterGoal:true});
  alert(D().alertGoalSaved(percent, window.currentTotal.toLocaleString(getLang())));
}

function renderGoalStatus(){
  const el = document.getElementById('goalStatus');
  const goal = JSON.parse(localStorage.getItem(GOAL_KEY) || 'null');
  if(!goal){ el.innerHTML=''; return; }

  const target = Math.round(goal.baseline * (1 - goal.targetPercent/100));
  const current = window.currentTotal || goal.baseline;
  const progress = Math.min(Math.max((goal.baseline-current)/(goal.baseline-target), 0), 1);
  const onTrack = current <= goal.baseline;

  el.innerHTML = `
    <div class="goal-status ${onTrack?'on-track':''}">
      ${D().goalStatus(target.toLocaleString(getLang()), goal.targetPercent, goal.baseline.toLocaleString(getLang()), current.toLocaleString(getLang()))}
      <div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.round(progress*100)}%"></div></div>
    </div>`;
}

function renderGoalProgressBox(){
  const box = document.getElementById('goalProgressBox');
  const goal = JSON.parse(localStorage.getItem(GOAL_KEY) || 'null');
  if(!goal){
    box.innerHTML = `<p style="color:var(--text-muted); font-size:13px;">${D().goalNone}</p>`;
    return;
  }
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const latest = entries.length ? entries[entries.length-1].total : goal.baseline;
  const target = Math.round(goal.baseline * (1 - goal.targetPercent/100));
  const progress = Math.min(Math.max((goal.baseline-latest)/(goal.baseline-target || 1), 0), 1);
  box.innerHTML = `
    <div class="goal-status">
      ${D().goalProgress(goal.targetPercent, goal.baseline.toLocaleString(getLang()), target.toLocaleString(getLang()), latest.toLocaleString(getLang()), Math.round(progress*100))}
      <div class="goal-bar-track"><div class="goal-bar-fill" style="width:${Math.round(progress*100)}%"></div></div>
    </div>`;
}

function renderHistoryChart(){
  const container = document.getElementById('historyChart');
  const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const goal = JSON.parse(localStorage.getItem(GOAL_KEY) || 'null');
  container.innerHTML='';
  if(entries.length===0) return;

  const values = entries.map(e=>e.total);
  const max = Math.max(...values, goal ? goal.baseline : 0);
  const min = Math.min(...values, 0);
  const range = (max-min) || 1;
  const stepX = entries.length>1 ? 300/(entries.length-1) : 0;

  const points = entries.map((e,i)=>{
    const x = entries.length>1 ? i*stepX : 150;
    const y = 82 - ((e.total-min)/range)*72;
    return {x, y, e};
  });

  const pointsAttr = points.map(p=>`${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

  let goalLine = '';
  if(goal){
    const target = goal.baseline*(1-goal.targetPercent/100);
    const gy = 82 - ((target-min)/range)*72;
    goalLine = `<line x1="0" y1="${gy.toFixed(1)}" x2="300" y2="${gy.toFixed(1)}" stroke="#e8a94d" stroke-width="1" stroke-dasharray="4 3"/>`;
  }

  const circles = points.map(p=>{
    const aboveGoal = goal && p.e.total > goal.baseline*(1-goal.targetPercent/100);
    return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="4" fill="${aboveGoal?'#d9765a':'#8fbc94'}"><title>${p.e.date}: ${p.e.total.toLocaleString(getLang())} kg</title></circle>`;
  }).join('');

  container.innerHTML = `<svg viewBox="0 0 300 90" width="100%" height="90" preserveAspectRatio="none">
    ${goalLine}
    <polyline points="${pointsAttr}" fill="none" stroke="#6fa8dc" stroke-width="2"/>
    ${circles}
  </svg>`;
}

function unlockBadge(id){
  const unlocked = JSON.parse(localStorage.getItem(BADGES_KEY) || '[]');
  if(!unlocked.includes(id)){
    unlocked.push(id);
    localStorage.setItem(BADGES_KEY, JSON.stringify(unlocked));
    return true;
  }
  return false;
}

function checkAchievements(context){
  const newlyUnlocked = [];

  if(context.afterCalculate){
    if(unlockBadge('primer_calculo')) newlyUnlocked.push('primer_calculo');
    if((state.transport==='bike'||state.transport==='public') && unlockBadge('eco_transporte')) newlyUnlocked.push('eco_transporte');
    if(window.currentTotal < GLOBAL_AVG*0.7 && unlockBadge('bajo_impacto')) newlyUnlocked.push('bajo_impacto');
  }

  if(context.afterSave){
    if(unlockBadge('primer_guardado')) newlyUnlocked.push('primer_guardado');
    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if(entries.length>=3 && unlockBadge('tres_registros')) newlyUnlocked.push('tres_registros');
    if(entries.length>=2 && entries[entries.length-1].total < entries[0].total && unlockBadge('tendencia_baja')) newlyUnlocked.push('tendencia_baja');
    const goal = JSON.parse(localStorage.getItem(GOAL_KEY) || 'null');
    if(goal && entries.length){
      const target = goal.baseline*(1-goal.targetPercent/100);
      if(entries[entries.length-1].total <= target && unlockBadge('meta_cumplida')) newlyUnlocked.push('meta_cumplida');
    }
  }

  if(context.afterGoal){
    if(unlockBadge('meta_fijada')) newlyUnlocked.push('meta_fijada');
  }

  if(newlyUnlocked.length){
    const badgeList = D().badges;
    const names = newlyUnlocked.map(id => badgeList.find(b=>b.id===id).name).join(', ');
    showBadgeToast(names);
  }
}

function showBadgeToast(text){
  let toast = document.getElementById('badgeToast');
  if(!toast){
    toast = document.createElement('div');
    toast.id = 'badgeToast';
    toast.className = 'badge-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = D().badgeToastPrefix + text;
  toast.classList.add('show');
  clearTimeout(window._badgeTimeout);
  window._badgeTimeout = setTimeout(()=> toast.classList.remove('show'), 3500);
}

function renderBadgesGrid(){
  const grid = document.getElementById('badgesGrid');
  const unlocked = JSON.parse(localStorage.getItem(BADGES_KEY) || '[]');
  grid.innerHTML='';
  D().badges.forEach(b=>{
    const isUnlocked = unlocked.includes(b.id);
    const div = document.createElement('div');
    div.className = 'badge ' + (isUnlocked ? 'unlocked' : 'locked');
    div.title = b.desc;
    div.innerHTML = `<span class="badge-icon">${isUnlocked ? b.icon : '🔒'}</span><span class="badge-name">${b.name}</span>`;
    grid.appendChild(div);
  });
}

// Vuelve a dibujar todo el contenido dinámico visible cuando cambia el idioma
function refreshDynamicText(){
  if(window.currentTotal && !document.getElementById('results').classList.contains('hidden')){
    renderGoalStatus();
    if(window.lastAnnual) renderRecommendations(window.lastAnnual);
    const diff = Math.round(((window.currentTotal-GLOBAL_AVG)/GLOBAL_AVG)*100);
    const compare = document.getElementById('compareText');
    if(diff>0){ compare.innerHTML = D().compareMore(diff, GLOBAL_AVG.toLocaleString(getLang())); }
    else { compare.innerHTML = D().compareLess(Math.abs(diff), GLOBAL_AVG.toLocaleString(getLang())); }
  }
  if(!document.getElementById('simulator').classList.contains('hidden')){
    updateSimulator();
  }
  if(!document.getElementById('historyBox').classList.contains('hidden')){
    renderGoalProgressBox();
    renderHistoryChart();
    renderBadgesGrid();
    const entries = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    if(entries.length===0){
      document.getElementById('historyList').innerHTML = `<p style="color:var(--text-muted); font-size:14px;">${D().noSavedResults}</p>`;
    }
  }
  setTrack(document.querySelector('.step-seg.active') ? [...document.querySelectorAll('.step-seg')].findIndex(s=>s.classList.contains('active'))+1 : 1);
}

if('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('sw.js').catch(err=>console.log('SW no registrado:', err));
  });
}
