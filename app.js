/* ---------- state ---------- */
const DEFAULTS = { name:"", done:[], scores:{}, srs:{}, streak:0, lastDay:"", sessions:0, history:[],
                   rate:0.8, voice:"", autoplay:true, big:false };
let S = Object.assign({}, DEFAULTS);
let lastCode = "";

function lsGet(){ try{ const r = localStorage.getItem("gujeng_live"); return r ? JSON.parse(r) : null; }catch(e){ return null; } }
function lsSet(v){ try{ localStorage.setItem("gujeng_live", JSON.stringify(v)); }catch(e){} }

function save(){ lsSet(S); }

function todayKey(d){ return dayKey(d); }
function markActivity(){
  const t = todayKey();
  if (S.lastDay === t) return;
  const y = new Date(); y.setDate(y.getDate()-1);
  S.streak = (S.lastDay === todayKey(y)) ? S.streak+1 : 1;
  S.lastDay = t; save(); paintStreak();
}
function paintStreak(){ const n = document.getElementById("streakNum"); if (n) n.textContent = S.streak; }

function bootLocal(){
  const local = lsGet();
  if (local) S = Object.assign({}, DEFAULTS, local);
  applyPrefs(); paintStreak(); render();
}

/* ---------- spaced repetition ---------- */
function srsBump(w, right){
  const cur = S.srs[w.e] || {lvl:0, seen:0};
  cur.lvl = right ? Math.min(5, cur.lvl+1) : Math.max(0, cur.lvl-2);
  cur.seen = (cur.seen||0) + 1;
  cur.day = todayKey();
  S.srs[w.e] = cur; save();
}
const isDone = k => S.done.indexOf(k) !== -1;
function learnedWords(){
  const out = [];
  for (const u of UNITS) if (isDone(u.key)) for (const w of u.items) out.push(Object.assign({unit:u.key}, w));
  return out;
}
function revisionPool(n){
  const all = learnedWords();
  if (all.length < 4) return [];
  const t = todayKey();
  all.sort((a,b) => {
    const A = S.srs[a.e] || {lvl:0}, B = S.srs[b.e] || {lvl:0};
    if (A.lvl !== B.lvl) return A.lvl - B.lvl;
    if ((A.day===t) !== (B.day===t)) return A.day===t ? 1 : -1;
    return 0;
  });
  return shuffle(all.slice(0, Math.max(n*3, 24))).slice(0, n);
}
function nextUnit(){ return UNITS.find(u => !isDone(u.key)) || UNITS[UNITS.length-1]; }
function unitByKey(k){ return UNITS.find(u => u.key === k); }

/* ---------- speech ---------- */
let voices = [];
const NOVELTY = ["Albert","Bad News","Bahh","Bells","Boing","Bubbles","Cellos","Fred","Good News",
  "Jester","Junior","Kathy","Organ","Ralph","Superstar","Trinoids","Whisper","Wobble","Zarvox"];
const LANGNAME = {"en-in":"ભારતીય અંગ્રેજી","en-us":"અમેરિકન અંગ્રેજી","en-gb":"બ્રિટિશ અંગ્રેજી",
  "en-au":"ઓસ્ટ્રેલિયન અંગ્રેજી","en-ie":"આઇરિશ અંગ્રેજી","en-za":"આફ્રિકન અંગ્રેજી"};
function loadVoices(){
  try{
    const rank = v => { const l = v.lang.replace("_","-").toLowerCase();
      return l === "en-in" ? 0 : l === "en-gb" ? 1 : l === "en-us" ? 2 : 3; };
    voices = speechSynthesis.getVoices()
      .filter(v => (v.lang||"").toLowerCase().indexOf("en") === 0)
      .filter(v => NOVELTY.indexOf(v.name) === -1)
      .sort((a,b) => rank(a) - rank(b) || a.name.localeCompare(b.name));
  }catch(e){ voices = []; }
  fillVoiceSelect();
}
function bestVoice(){
  if (!voices.length) return null;
  const saved = voices.find(v => v.name === S.voice);
  if (saved) return saved;
  for (const lang of ["en-IN","en-GB","en-US","en-AU"]){
    const v = voices.find(v => v.lang.replace("_","-") === lang);
    if (v) return v;
  }
  return voices[0];
}
function speak(text, rate){
  if (!("speechSynthesis" in window)) return;
  try{
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = bestVoice();
    if (v){ u.voice = v; u.lang = v.lang; } else { u.lang = "en-IN"; }
    u.rate = rate || Number(S.rate) || 0.8;
    speechSynthesis.speak(u);
  }catch(e){}
}
if ("speechSynthesis" in window){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const app = () => document.getElementById("app");
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
const SYNCBAR = '';

/* ---------- router ---------- */
let view = "home";
function go(v, arg){
  view = v;
  const active = (v === "session") ? "home" : v;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === active));
  window.scrollTo({top:0});
  if (v === "session") startSession(arg); else render();
}
function render(){
  if (view === "home") renderHome();
  else if (view === "list") renderList();
  else if (view === "practice") renderFreePractice();
  else if (view === "words") renderMyWords();
  else if (view === "track") renderTrack();
}
document.getElementById("tabs").addEventListener("click", e => {
  const b = e.target.closest(".tab"); if (b) go(b.dataset.view);
});

/* ---------- home ---------- */
function renderHome(){
  const u = nextUnit();
  const fresh = !isDone(u.key);
  const rev = revisionPool(10).length;
  const known = learnedWords().length;
  const totalItems = UNITS.reduce((a,x) => a + x.items.length, 0);
  const p1done = P1.filter(x => isDone(x.key)).length;
  const p2done = P2.filter(x => isDone(x.key)).length;
  const pct = Math.round(S.done.length / UNITS.length * 100);
  const doneToday = S.lastDay === todayKey();
  const steps = [
    rev ? {i:"1", m:"5 મિનિટ", t:"પુનરાવર્તન", d:`ગઈકાલના ${rev} શબ્દો ફરી તપાસો`} : null,
    {i:rev?"2":"1", m:rev?"12 મિનિટ":"15 મિનિટ", t:"નવા શબ્દો", d:`${u.items.length} ${u.part===1?"શબ્દો":"વાક્યો"} સાંભળો અને બોલો`},
    {i:rev?"3":"2", m:rev?"6 મિનિટ":"7 મિનિટ", t:"ઝડપી અભ્યાસ", d:"ગુજરાતી જોઈને અંગ્રેજી બોલો"},
    {i:rev?"4":"3", m:rev?"7 મિનિટ":"8 મિનિટ", t:"કસોટી", d:"મિશ્ર પ્રશ્નો, સાંભળીને પણ"},
  ].filter(Boolean);

  app().innerHTML = `
    <section class="card hero">
      <div class="kicker">${doneToday ? "આજનું સત્ર થઈ ગયું ✓ &nbsp;•&nbsp; વધુ કરવું હોય તો ચાલુ રાખો" : "આજનું સત્ર &nbsp;•&nbsp; 30 મિનિટ"}</div>
      <h2>${esc(u.tg)}</h2>
      <p class="en">${u.part===1 ? `ભાગ 1 · શબ્દ ${u.no} / ${P1.length}` : `ભાગ 2 · વાક્ય પાઠ ${u.no} / ${P2.length}`} &nbsp;·&nbsp; <span class="lat">${esc(u.t)}</span></p>
      <div class="tip">💡 ${esc(u.tip)}</div>
      <ol class="plan">
        ${steps.map(s => `<li><span class="n">${s.i}</span><b>${s.t}</b><span class="d">${esc(s.d)}</span><span class="m">${s.m}</span></li>`).join("")}
      </ol>
      <button class="btn wide" id="start">${fresh ? "આજનું સત્ર શરૂ કરો" : "ફરીથી કરો"} →</button>
    </section>

    <section class="card hero">
      <div class="kicker">તમારી પ્રગતિ</div>
      <h2 style="font-size:1.18rem;margin-bottom:11px">${S.done.length} / ${UNITS.length} પાઠ પૂરા (${pct}%)</h2>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <div class="twopart">
        <div class="pp ${p1done===P1.length?"full":""}"><b>ભાગ 1 · શબ્દો</b><span>${p1done} / ${P1.length} પૂરા</span>
          <div class="bar sm"><i style="width:${Math.round(p1done/P1.length*100)}%"></i></div>
          <span class="note">પહેલાં છૂટા શબ્દો</span></div>
        <div class="pp ${p2done===P2.length?"full":""}"><b>ભાગ 2 · વાક્યો</b><span>${p2done} / ${P2.length} પૂરા</span>
          <div class="bar sm"><i style="width:${Math.round(p2done/P2.length*100)}%"></i></div>
          <span class="note">પછી એ જ શબ્દોનાં વાક્યો</span></div>
      </div>
      <div class="statgrid" style="margin-top:15px">
        <div class="stat"><b>${known}</b><span>શીખેલા શબ્દો</span></div>
        <div class="stat"><b>${S.streak}</b><span>સળંગ દિવસ</span></div>
        <div class="stat"><b>${totalItems - known}</b><span>બાકી</span></div>
      </div>
    </section>
    ${known >= 4 ? `<button class="btn ghost wide" id="rev" style="margin-top:14px">🎯 છૂટો અભ્યાસ કરો</button>` : ""}`;
  $("#start").onclick = () => go("session", u.key);
  if ($("#rev")) $("#rev").onclick = () => go("practice");
}

/* ---------- session ---------- */
let SES = null;
function startSession(key){
  const u = unitByKey(key) || nextUnit();
  const rev = revisionPool(10);
  SES = { unit:u, rev:rev, steps:[], i:0, right:0, asked:0 };
  if (rev.length >= 4) SES.steps.push("revise");
  SES.steps.push("learn","drill","test");
  runStep();
}
function stepBar(){
  const L = {revise:"પુનરાવર્તન", learn:"નવા શબ્દો", drill:"ઝડપી અભ્યાસ", test:"કસોટી"};
  return `<div class="stepbar">${SES.steps.map((s,k) =>
    `<span class="st ${k<SES.i?"done":""} ${k===SES.i?"now":""}">${k<SES.i?"✓":k+1} ${L[s]}</span>`).join("")}</div>`;
}
function nextStep(){ SES.i++; runStep(); }
function runStep(){
  if (SES.i >= SES.steps.length) return finishSession();
  const s = SES.steps[SES.i];
  if (s === "revise") stepRevise();
  else if (s === "learn") stepLearn(0);
  else if (s === "drill") stepDrill(0);
  else stepTest();
}
function finishSession(){
  markActivity();
  if (!isDone(SES.unit.key)) S.done.push(SES.unit.key);
  S.sessions = (S.sessions||0) + 1;
  S.scores[SES.unit.key] = Math.max(S.scores[SES.unit.key]||0, SES.right);
  S.history = (S.history||[]).concat([{d:todayKey(), u:SES.unit.key, tg:SES.unit.tg,
    n:SES.unit.items.length, right:SES.right, asked:SES.asked}]).slice(-90);
  save();

  const nxt = nextUnit();
  const pct = SES.asked ? SES.right/SES.asked : 1;
  const emoji = pct === 1 ? "🏆" : pct >= .7 ? "🎉" : pct >= .4 ? "👍" : "💪";
  const u = SES.unit;
  app().innerHTML = `
    <div class="card result">
      <p class="big">${emoji}</p>
      <h2>આજનું સત્ર પૂરું</h2>
      <p>${u.part===1?"શબ્દ પાઠ":"વાક્ય પાઠ"} "${esc(u.tg)}" પૂરો થયો.<br>
         કસોટીમાં ${SES.right} / ${SES.asked} સાચા. 🔥 સળંગ ${S.streak} દિવસ.</p>
      <p class="muted" style="margin-bottom:20px">કાલે ફરી 30 મિનિટ. આજના શબ્દો કાલના પુનરાવર્તનમાં આવશે.</p>
      <div style="display:grid;gap:10px">
        <button class="btn ghost" id="again">આજના શબ્દો ફરી જુઓ</button>
        ${nxt && nxt.key!==u.key ? `<button class="btn ghost" id="more">આગળનો પાઠ પણ કરો →</button>` : ""}
        <button class="btn" id="home">🏠 મુખ્ય પાનું</button>
      </div>
    </div>`;
  $("#again").onclick = () => { SES = {unit:u, rev:[], steps:["learn"], i:0, right:0, asked:0}; runStep(); };
  if ($("#more")) $("#more").onclick = () => go("session", nxt.key);
  $("#home").onclick = () => go("home");
}
function stepRevise(){
  runQuiz(buildQuestions(SES.rev, learnedWords(), SES.rev.length), "પુનરાવર્તન", "ગઈકાલ સુધીના શબ્દો", () => nextStep());
}
function stepLearn(i){
  const u = SES.unit, w = u.items[i], last = i === u.items.length-1;
  app().innerHTML = `
    <div class="wrap-lesson">
      ${stepBar()}
      <div class="lessonhead">
        <button class="btn ghost small" id="quit">← બહાર</button>
        <div class="dots">${u.items.map((_,k) => `<span class="dot2 ${k<i?"done":""} ${k===i?"now":""}"></span>`).join("")}</div>
        <span class="muted" style="font-size:.84rem">${i+1} / ${u.items.length}</span>
      </div>
      <section class="card wordcard">
        <p class="word">${esc(w.e)}</p>
        <p class="pron">${esc(w.p)}</p>
        <p class="mean">${esc(w.g)}</p>
        <div class="speakrow">
          <button class="speakbtn" id="say">🔊 સાંભળો</button>
          <button class="speakbtn slow" id="sayslow">🐢 ધીમે સાંભળો</button>
        </div>
        <p class="sayaloud">હવે તમે મોટેથી બોલો: <b>${esc(w.p)}</b></p>
        ${w.se ? `<div class="sentbox"><div class="lbl">વાક્યમાં વપરાશ</div>
          <p class="se">${esc(w.se)}</p><p class="sg">${esc(w.sg)}</p>
          <button class="btn ghost small" id="saysent" style="margin-top:10px">🔊 વાક્ય સાંભળો</button></div>` : ""}
      </section>
      <div class="navrow">
        <button class="btn ghost" id="prev" ${i===0?"disabled":""}>← પહેલાંનો</button>
        <button class="btn" id="next">${last ? "આગળ: ઝડપી અભ્યાસ →" : "આગળનો →"}</button>
      </div>
    </div>`;
  $("#say").onclick = () => speak(w.e);
  $("#sayslow").onclick = () => speak(w.e, 0.55);
  if ($("#saysent")) $("#saysent").onclick = () => speak(w.se);
  $("#quit").onclick = () => go("home");
  $("#prev").onclick = () => stepLearn(i-1);
  $("#next").onclick = () => last ? nextStep() : stepLearn(i+1);
  if (S.autoplay) setTimeout(() => speak(w.e), 250);
}
function stepDrill(i){
  const u = SES.unit, w = u.items[i], last = i === u.items.length-1;
  app().innerHTML = `
    <div class="wrap-lesson">
      ${stepBar()}
      <div class="lessonhead">
        <button class="btn ghost small" id="quit">← બહાર</button>
        <span class="muted" style="font-size:.84rem">${i+1} / ${u.items.length}</span>
      </div>
      <section class="card wordcard drill">
        <div class="lbl">આનું અંગ્રેજી મોટેથી બોલો</div>
        <p class="big2">${esc(w.g)}</p>
        <div id="hide"><button class="btn wide" id="reveal">જવાબ જુઓ 👁</button></div>
        <div id="show" hidden>
          <p class="word">${esc(w.e)}</p>
          <p class="pron">${esc(w.p)}</p>
          <div class="speakrow"><button class="speakbtn" id="say">🔊 સાંભળો</button></div>
          <p class="sayaloud">બરાબર બોલાયું?</p>
          <div class="navrow">
            <button class="btn ghost" id="no">↻ ફરી જોઈએ</button>
            <button class="btn" id="yes">✓ આવડ્યું</button>
          </div>
        </div>
      </section>
    </div>`;
  $("#quit").onclick = () => go("home");
  $("#reveal").onclick = () => {
    $("#hide").hidden = true; $("#show").hidden = false; speak(w.e);
    $("#say").onclick = () => speak(w.e);
    $("#yes").onclick = () => { srsBump(w, true);  last ? nextStep() : stepDrill(i+1); };
    $("#no").onclick  = () => { srsBump(w, false); last ? nextStep() : stepDrill(i+1); };
  };
}
function stepTest(){
  const u = SES.unit;
  const distract = u.items.length >= 6 ? u.items : u.items.concat(learnedWords());
  runQuiz(buildQuestions(u.items, distract, Math.min(8, u.items.length)), "કસોટી", u.tg, () => nextStep());
}

/* ---------- quiz ---------- */
function buildQuestions(pool, distractors, count){
  return shuffle(pool).slice(0, count).map((w, idx) => {
    const listen = idx % 2 === 1 && "speechSynthesis" in window;
    // a homophone option (Son / Sun, Right / Write) makes a listening question unanswerable
    const wrong = shuffle(distractors.filter(x =>
      x.e !== w.e && x.g !== w.g && !(listen && x.p === w.p))).slice(0,3);
    return { word:w, listen:listen,
      options: shuffle([w].concat(wrong)).map(o => ({text: listen ? o.g : o.e, right: o.e === w.e, en: !listen})) };
  });
}
function runQuiz(qs, title, subtitle, onDone){
  let i = 0, score = 0;
  step();
  function step(){
    if (i >= qs.length){ onDone(score, qs.length); return; }
    const q = qs[i];
    app().innerHTML = `${SES ? stepBar() : ""}
      <div class="card quizcard">
        <div class="qnum">${esc(title)} &nbsp;•&nbsp; ${esc(subtitle)} &nbsp;•&nbsp; પ્રશ્ન ${i+1} / ${qs.length} &nbsp;•&nbsp; સાચા: ${score}</div>
        ${q.listen
          ? `<p class="qtext">🔊 સાંભળીને અર્થ પસંદ કરો</p><p class="qhint">ફરી સાંભળવા બટન દબાવો</p>
             <button class="speakbtn" id="rep" style="margin-bottom:18px">🔊 ફરી સાંભળો</button>`
          : `<p class="qtext">${esc(q.word.g)}</p><p class="qhint">આનું અંગ્રેજી શું થાય?</p>`}
        <div class="opts">${q.options.map((o,k) => `<button class="opt" data-k="${k}"><span class="${o.en?"en":""}">${esc(o.text)}</span></button>`).join("")}</div>
        <div id="fb"></div>
      </div>`;
    if (q.listen){ $("#rep").onclick = () => speak(q.word.e); setTimeout(() => speak(q.word.e), 300); }
    const btns = Array.from(document.querySelectorAll(".opt"));
    btns.forEach(b => b.onclick = () => {
      const o = q.options[Number(b.dataset.k)];
      btns.forEach(x => x.disabled = true);
      b.classList.add(o.right ? "right" : "wrong");
      if (!o.right) btns[q.options.findIndex(x => x.right)].classList.add("right");
      if (o.right) score++;
      srsBump(q.word, o.right);
      if (SES){ SES.asked++; if (o.right) SES.right++; }
      speak(q.word.e);
      $("#fb").innerHTML = o.right
        ? `<div class="feedback ok">✓ સાચું! <b class="lat">${esc(q.word.e)}</b> (${esc(q.word.p)}) = ${esc(q.word.g)}</div>`
        : `<div class="feedback no">✗ સાચો જવાબ: <b class="lat">${esc(q.word.e)}</b> (${esc(q.word.p)}) = ${esc(q.word.g)}</div>`;
      const n = document.createElement("button");
      n.className = "btn wide"; n.style.marginTop = "13px";
      n.textContent = (i === qs.length-1) ? "આગળ →" : "આગળનો પ્રશ્ન →";
      n.onclick = () => { i++; step(); };
      $("#fb").appendChild(n); n.focus();
    });
  }
}
function renderFreePractice(){
  SES = null;
  const pool = revisionPool(12);
  if (pool.length < 4){
    app().innerHTML = `<div class="card empty"><span class="em">🎯</span>
      <h2 style="margin:0 0 8px">પહેલાં એક પાઠ પૂરો કરો</h2>
      <p>એક પાઠ પૂરો થશે એટલે અહીં જૂના શબ્દોની કસોટી આવશે.</p>
      <button class="btn" id="g">આજનું સત્ર શરૂ કરો</button></div>`;
    $("#g").onclick = () => go("session", nextUnit().key);
    return;
  }
  runQuiz(buildQuestions(pool, learnedWords(), pool.length), "છૂટો અભ્યાસ", "નબળા શબ્દો પહેલાં", (score, total) => {
    markActivity();
    app().innerHTML = `<div class="card result"><p class="big">${score/total>=.7?"🎉":"💪"}</p>
      <h2>${score} / ${total} સાચા</h2><p>જે ખોટા પડ્યા તે ફરી વહેલા પુછાશે.</p>
      <div style="display:grid;gap:10px"><button class="btn" id="more">ફરી અભ્યાસ</button>
      <button class="btn ghost" id="home">🏠 મુખ્ય પાનું</button></div></div>`;
    $("#more").onclick = () => renderFreePractice();
    $("#home").onclick = () => go("home");
  });
}

/* ---------- lists ---------- */
function renderList(){
  const row = u => `<button class="litem ${isDone(u.key)?"done":""}" data-k="${esc(u.key)}">
      <span class="num">${isDone(u.key) ? "✓" : u.no}</span>
      <span class="txt"><b>${esc(u.tg)}</b><span class="lat">${esc(u.t)}</span></span>
      <span class="mark">${isDone(u.key) ? "🌟" : "›"}</span></button>`;
  app().innerHTML = `
    <h2 class="sec" style="margin-top:0">ભાગ 1 · છૂટા શબ્દો <span class="muted" style="font-weight:400;font-size:.88rem">(${P1.filter(u=>isDone(u.key)).length} / ${P1.length})</span></h2>
    <p class="muted" style="margin:0 0 13px">પહેલાં આ શબ્દો શીખો. વાક્યો પછી સહેલાં પડશે.</p>
    <div class="lgrid">${P1.map(row).join("")}</div>
    <h2 class="sec">ભાગ 2 · વાક્યો <span class="muted" style="font-weight:400;font-size:.88rem">(${P2.filter(u=>isDone(u.key)).length} / ${P2.length})</span></h2>
    <p class="muted" style="margin:0 0 13px">હવે એ જ શબ્દોને વાક્યમાં ગોઠવતાં શીખો.</p>
    <div class="lgrid">${P2.map(row).join("")}</div>`;
  document.querySelectorAll(".litem").forEach(b => b.onclick = () => go("session", b.dataset.k));
}
function renderMyWords(){
  const all = learnedWords();
  if (!all.length){
    app().innerHTML = `<div class="card empty"><span class="em">🔤</span>
      <h2 style="margin:0 0 8px">હજી કોઈ શબ્દ શીખ્યા નથી</h2>
      <p>પાઠ પૂરો થશે એટલે તેના બધા શબ્દો અહીં આવી જશે.</p>
      <button class="btn" id="g">આજનું સત્ર શરૂ કરો</button></div>`;
    $("#g").onclick = () => go("session", nextUnit().key);
    return;
  }
  const strong = all.filter(w => (S.srs[w.e]||{lvl:0}).lvl >= 3).length;
  app().innerHTML = `<h2 class="sec" style="margin-top:0">મારા શબ્દો (${all.length})</h2>
    <p class="muted" style="margin:0 0 11px">${strong} શબ્દો પાકા થઈ ગયા. 🟢 પાકું, 🟡 કાચું, 🔴 ફરી જોવું.</p>
    <input class="searchbox" id="q" placeholder="શબ્દ શોધો… (ગુજરાતી કે અંગ્રેજી)">
    <div class="wlist" id="wl"></div>`;
  const draw = f => {
    const list = f ? all.filter(w => (w.e+w.g+w.p).toLowerCase().indexOf(f.toLowerCase()) !== -1) : all;
    $("#wl").innerHTML = list.length ? list.map(w => {
      const lv = (S.srs[w.e]||{lvl:0}).lvl;
      return `<div class="wrow"><span class="lv">${lv>=3?"🟢":lv>=1?"🟡":"🔴"}</span>
        <span class="e">${esc(w.e)}<small>${esc(w.p)}</small></span>
        <span class="g">${esc(w.g)}</span><button data-e="${esc(w.e)}" aria-label="સાંભળો">🔊</button></div>`;
    }).join("") : `<p class="muted" style="padding:16px">કોઈ શબ્દ મળ્યો નહીં.</p>`;
    document.querySelectorAll(".wrow button").forEach(b => b.onclick = () => speak(b.dataset.e));
  };
  draw(""); $("#q").oninput = e => draw(e.target.value);
}

/* ---------- progress: show it, and turn it into a link ---------- */
function renderTrack(){
  if (!S.history || !S.history.length){
    app().innerHTML = `<div class="card empty"><span class="em">📈</span>
      <h2 style="margin:0 0 8px">હજી કંઈ નોંધાયું નથી</h2>
      <p>એક સત્ર પૂરું થશે એટલે અહીં તમારી પ્રગતિ દેખાશે.</p>
      <button class="btn" id="g">આજનું સત્ર શરૂ કરો</button></div>`;
    $("#g").onclick = () => go("session", nextUnit().key);
    return;
  }
  app().innerHTML = dashboardHTML(S) + `
    <section class="card hero">
      <div class="kicker">પ્રગતિ મોકલો</div>
      <h2 style="font-size:1.2rem">તમારી પ્રગતિ કોઈને બતાવવી છે?</h2>
      <p class="muted" style="margin:0 0 14px;font-size:.93rem">
        નીચેનું બટન દબાવો. એક લિંક તૈયાર થશે, તે WhatsApp માં મોકલી દો.
        લિંક ખોલનારને તમે અત્યાર સુધી શું શીખ્યાં તે દેખાશે.</p>
      <div style="display:grid;gap:10px">
        <button class="btn wide" id="mk">🔗 મારી પ્રગતિની લિંક બનાવો</button>
        <div id="shareOut"></div>
      </div>
    </section>`;
  paintName(app(), S.name);
  $("#mk").onclick = makeShareLink;
}
async function makeShareLink(){
  const out = document.getElementById("shareOut");
  out.innerHTML = `<p class="muted">તૈયાર થાય છે…</p>`;
  let url;
  try{
    const code = await encodeProgress(S);
    lastCode = code;
    url = location.href.replace(/[^/]*$/, "") + "progress.html#" + code;
  }catch(e){
    out.innerHTML = `<p class="feedback no">લિંક બની નહીં. ફરી પ્રયત્ન કરો.</p>`;
    return;
  }
  out.innerHTML = `
    <input class="searchbox" id="shareUrl" readonly value="${escT(url)}" style="margin:0 0 10px;font-size:.82rem">
    <div class="navrow">
      <button class="btn ghost" id="cp">📋 લિંક કોપી કરો</button>
      ${navigator.share ? `<button class="btn" id="sh">મોકલો →</button>` : ""}
    </div>
    <p class="muted" style="margin:10px 0 0;font-size:.85rem">આ લિંકમાં તમારી પ્રગતિ સમાયેલી છે. નવું સત્ર કર્યા પછી નવી લિંક બનાવજો.</p>`;
  const input = document.getElementById("shareUrl");
  document.getElementById("cp").onclick = async () => {
    try{ await navigator.clipboard.writeText(url); }
    catch(e){ input.select(); document.execCommand("copy"); }
    document.getElementById("cp").textContent = "✓ કોપી થઈ ગઈ";
  };
  if (document.getElementById("sh")) document.getElementById("sh").onclick = () => {
    navigator.share({title:"મારી અંગ્રેજીની પ્રગતિ", url:url}).catch(()=>{});
  };
}

/* ---------- settings ---------- */
function fillVoiceSelect(){
  const sel = document.getElementById("voiceSel");
  if (!sel) return;
  if (!voices.length){ sel.innerHTML = `<option>અવાજ મળ્યો નથી</option>`; return; }
  const cur = bestVoice();
  sel.innerHTML = voices.map(v => {
    const lang = LANGNAME[v.lang.replace("_","-").toLowerCase()] || v.lang;
    const nm = v.name.replace(/\s*\(English.*\)$/, "");
    return `<option value="${esc(v.name)}" ${cur && v.name===cur.name?"selected":""}>${esc(nm)} — ${esc(lang)}</option>`;
  }).join("");
}
function applyPrefs(){
  document.body.classList.toggle("big", !!S.big);
  const r = document.getElementById("rate"); if (r){ r.value = S.rate;
    document.getElementById("rateVal").textContent = Number(S.rate).toFixed(2)+"x"; }
  const a = document.getElementById("autoplay"); if (a) a.checked = !!S.autoplay;
  const b = document.getElementById("bigtext"); if (b) b.checked = !!S.big;
  const n = document.getElementById("learnerName"); if (n) n.value = S.name || "";
}
function initSettings(){
  const m = document.getElementById("settingsModal");
  document.getElementById("btnSettings").onclick = () => { m.hidden = false; };
  document.getElementById("btnCloseSet").onclick = () => { m.hidden = true; };
  m.onclick = e => { if (e.target === m) m.hidden = true; };
  document.getElementById("learnerName").oninput = e => { S.name = e.target.value.slice(0,40); save(); };
  const rate = document.getElementById("rate");
  rate.oninput = e => { S.rate = Number(e.target.value); save();
    document.getElementById("rateVal").textContent = S.rate.toFixed(2)+"x"; speak("Hello, how are you?"); };
  document.getElementById("voiceSel").onchange = e => { S.voice = e.target.value; save(); speak("Hello, how are you?"); };
  document.getElementById("autoplay").onchange = e => { S.autoplay = e.target.checked; save(); };
  document.getElementById("bigtext").onchange = e => { S.big = e.target.checked; document.body.classList.toggle("big", S.big); save(); };
  document.getElementById("btnReset").onclick = () => {
    if (confirm("બધી પ્રગતિ ભૂંસાઈ જશે. ચોક્કસ?")){
      S = Object.assign({}, DEFAULTS, {rate:S.rate, voice:S.voice, autoplay:S.autoplay, big:S.big, name:S.name});
      save();
      paintStreak(); m.hidden = true; go("home");
    }
  };
  applyPrefs();
}

initSettings();
bootLocal();
