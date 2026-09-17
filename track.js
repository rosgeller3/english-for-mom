/* Shared by index.html and progress.html:
   turns a learner's progress into a link, and renders the dashboard from it. */

const UNITS = [].concat(
  WORD_PACKS.map((p,i) => ({key:"w"+p.id, part:1, no:i+1, t:p.t, tg:p.tg, tip:p.tip, items:p.w})),
  LESSONS.map(l => ({key:"s"+l.d, part:2, no:l.d, t:l.t, tg:l.tg, tip:l.tip, items:l.w}))
);
const P1 = UNITS.filter(u => u.part === 1);
const P2 = UNITS.filter(u => u.part === 2);
const ALL_WORDS = UNITS.flatMap(u => u.items.map(w => w.e));   // stable order = the encoding's index

function dayKey(d){
  d = d || new Date();
  return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
}

/* ---------- base64url ---------- */
function b64(bytes){
  let s = "";
  for (let i=0;i<bytes.length;i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
}
function unb64(str){
  str = str.replace(/-/g,"+").replace(/_/g,"/");
  while (str.length % 4) str += "=";
  const bin = atob(str), out = new Uint8Array(bin.length);
  for (let i=0;i<bin.length;i++) out[i] = bin.charCodeAt(i);
  return out;
}

/* ---------- pack / unpack (deflate when the browser has it) ---------- */
async function pack(str){
  const bytes = new TextEncoder().encode(str);
  if (typeof CompressionStream !== "undefined"){
    try{
      const cs = new CompressionStream("deflate-raw");
      const buf = await new Response(new Blob([bytes]).stream().pipeThrough(cs)).arrayBuffer();
      return "z" + b64(new Uint8Array(buf));
    }catch(e){}
  }
  return "p" + b64(bytes);
}
async function unpack(code){
  const kind = code[0], bytes = unb64(code.slice(1));
  if (kind === "z"){
    const ds = new DecompressionStream("deflate-raw");
    const buf = await new Response(new Blob([bytes]).stream().pipeThrough(ds)).arrayBuffer();
    return new TextDecoder().decode(buf);
  }
  return new TextDecoder().decode(bytes);
}

/* ---------- progress <-> code ---------- */
async function encodeProgress(S){
  const payload = {
    v:1,
    n:(S.name||"").slice(0,40),
    st:S.streak||0, ld:S.lastDay||"", ss:S.sessions||0,
    d:UNITS.map(u => (S.done||[]).indexOf(u.key) !== -1 ? "1" : "0").join(""),
    l:ALL_WORDS.map(e => { const r = (S.srs||{})[e]; return r ? String(Math.min(5, Math.max(0, r.lvl|0))) : "."; }).join(""),
    h:(S.history||[]).slice(-40).map(x =>
        [String(x.d||"").replace(/-/g,""), x.u, x.right|0, x.asked|0].join("~")).join(";")
  };
  return await pack(JSON.stringify(payload));
}
async function decodeProgress(code){
  const p = JSON.parse(await unpack(code));
  if (!p || p.v !== 1) throw new Error("bad version");
  const done = [];
  (p.d||"").split("").forEach((c,i) => { if (c === "1" && UNITS[i]) done.push(UNITS[i].key); });
  const srs = {};
  (p.l||"").split("").forEach((c,i) => { if (c !== "." && ALL_WORDS[i]) srs[ALL_WORDS[i]] = {lvl:Number(c)}; });
  const history = (p.h||"").split(";").filter(Boolean).map(s => {
    const [d,u,right,asked] = s.split("~");
    const unit = UNITS.find(x => x.key === u);
    return { d: d.slice(0,4)+"-"+d.slice(4,6)+"-"+d.slice(6,8), u:u, tg: unit ? unit.tg : u,
             right:Number(right)||0, asked:Number(asked)||0 };
  });
  return { name:p.n||"", streak:p.st||0, lastDay:p.ld||"", sessions:p.ss||0, done, srs, history };
}

/* ---------- dashboard ---------- */
const escT = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

function dashboardHTML(r){
  const srs = r.srs || {}, hist = r.history || [], keys = Object.keys(srs);
  const weak = keys.filter(k => (srs[k].lvl||0) <= 1).slice(0, 20);
  const strong = keys.filter(k => (srs[k].lvl||0) >= 3).length;
  const p1 = (r.done||[]).filter(k => k[0] === "w").length;
  const p2 = (r.done||[]).filter(k => k[0] === "s").length;

  const days = [];
  for (let k = 13; k >= 0; k--){ const d = new Date(); d.setDate(d.getDate()-k); days.push(dayKey(d)); }
  const perDay = days.map(d => hist.filter(h => h.d === d).length);
  const maxD = Math.max(1, ...perDay);

  const today = hist.filter(h => h.d === dayKey());
  const totalQ = hist.reduce((a,h) => a + h.asked, 0);
  const totalR = hist.reduce((a,h) => a + h.right, 0);
  const recent = hist.slice(-8).reverse();

  return `<section class="card learner">
    <div class="lhead">
      <span class="av"></span>
      <div><b class="nm"></b><span>છેલ્લે: ${r.lastDay ? escT(r.lastDay) : "કદી નહીં"} &nbsp;·&nbsp; 🔥 ${r.streak} સળંગ દિવસ &nbsp;·&nbsp; ${r.sessions} સત્ર</span></div>
    </div>
    <div class="statgrid">
      <div class="stat"><b>${keys.length}</b><span>શબ્દો જોયા</span></div>
      <div class="stat"><b>${strong}</b><span>પાકા થયા</span></div>
      <div class="stat"><b>${totalQ ? Math.round(totalR/totalQ*100) : 0}%</b><span>કસોટી સરેરાશ</span></div>
    </div>
    <p class="muted" style="margin:14px 0 2px;font-size:.88rem">ભાગ 1: ${p1} / ${P1.length} શબ્દ પાઠ &nbsp;·&nbsp; ભાગ 2: ${p2} / ${P2.length} વાક્ય પાઠ</p>
    <div class="bar sm"><i style="width:${Math.round((p1+p2)/UNITS.length*100)}%"></i></div>

    <p class="muted" style="margin:14px 0 2px;font-size:.88rem">છેલ્લા 14 દિવસ</p>
    <div class="days">${perDay.map(n => `<i class="${n?"on":""}" style="height:${n?Math.round(n/maxD*100):4}%"></i>`).join("")}</div>
    <div class="dayscale"><span>${escT(days[0])}</span><span>આજે</span></div>

    <p class="muted" style="margin:14px 0 2px;font-size:.88rem">આજે શું કર્યું</p>
    <p style="margin:0">${today.length ? today.map(h => `${escT(h.tg)} (${h.right}/${h.asked})`).join(", ") : `<span class="muted">આજે હજી કંઈ નહીં</span>`}</p>

    ${recent.length ? `<p class="muted" style="margin:14px 0 2px;font-size:.88rem">છેલ્લા પાઠ</p>
      <div class="wlist">${recent.map(h => `<div class="wrow"><span class="g" style="flex:2">${escT(h.d)} · ${escT(h.tg)}</span>
        <span class="lat" style="flex:none;font-weight:700;color:${h.asked && h.right/h.asked>=.7?"var(--ok)":"var(--accent)"}">${h.right}/${h.asked}</span></div>`).join("")}</div>` : ""}

    ${weak.length ? `<p class="muted" style="margin:14px 0 2px;font-size:.88rem">જે શબ્દો હજી કાચા છે (${weak.length})</p>
      <div class="chips">${weak.map(w => `<span class="chip lat">${escT(w)}</span>`).join("")}</div>` : ""}
  </section>`;
}
/* the name is user-typed text: always set it with textContent, never as HTML */
function paintName(host, name){
  const el = host.querySelector(".nm");
  if (el) el.textContent = (name && name.trim()) || "શીખનાર";
}
