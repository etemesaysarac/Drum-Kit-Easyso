/* Easyso Drum Kit – robust init + i18n + safe key-mapping input */

/* ---------- i18n dictionary ---------- */
const I18N = {
  en:{ subtitle:"Interactive Rhythm Studio — Play • Learn • Groove",
    welcomeTitle:"Ready to jam? 🎵",
    welcomeLead:"Click pads or use your keyboard (W A S D J K L). Hit Start and the stage is yours.",
    howtoTitle:"How to play?",
    h1:"Choose a language and press <strong>Start</strong> (required by browser audio policy).",
    h2:"Play by clicking pads or keys: <em>W</em>=Crash, <em>A</em>=Kick, <em>S</em>=Snare, <em>D</em>=Tom-1, <em>J</em>=Tom-2, <em>K</em>=Tom-3, <em>L</em>=Tom-4.",
    h3:"Open <strong>Customize</strong> to remap keys, change theme colors, or rearrange pads.",
    h4:"Turn on <strong>Free layout</strong> to drag pads anywhere on stage. Turn off to grid & drag-reorder.",
    h5:"Upload your own <strong>background image</strong> for Welcome or App screen; choose fit and overlay.",
    h6:"Press <strong>Exit</strong> to return here; all sounds stop.",
    tips:"Pro tips", t1:"Hold a key for fast rolls; combine with clicks for fills.",
    t2:"High-contrast key badges help on bright images.", t3:"Your setup is saved locally (no network).",
    btnStart:"Start", btnCustomize:"Customize", btnExit:"Exit",
    footerShortcuts:"Shortcuts: W A S D J K L", customizeTitle:"Customize",
    legendKeys:"Key mappings", keysHint:"* One character per instrument, all unique.",
    legendColors:"Theme colors", brandColor:"Accent", bg1:"Background 1", bg2:"Background 2",
    legendBackground:"Background", applyTo:"Apply to", welcome:"Welcome", app:"App",
    fit:"Fit", upload:"Upload image (JPG/PNG)", overlay:"Overlay darkness",
    legendLayout:"Layout", freeLayout:"Free layout mode (drag pads on stage)", layoutHint:"Tip: When off, drag-reorder pads in grid.",
    close:"Close", reset:"Reset", save:"Save",
    crash:"Crash", kick:"Kick", snare:"Snare", tom1:"Tom 1", tom2:"Tom 2", tom3:"Tom 3", tom4:"Tom 4"
  },
  tr:{ subtitle:"Etkileşimli Ritim Stüdyosu — Çal • Öğren • Groove",
    welcomeTitle:"Hazır mısın? 🎵",
    welcomeLead:"Pad'lere tıkla veya klavyeyi kullan (W A S D J K L). Start'a bas ve sahne senin.",
    howtoTitle:"Nasıl oynanır?",
    h1:"Bir dil seç ve <strong>Start</strong>'a bas (tarayıcı ses politikası için gerekli).",
    h2:"Pad veya tuşlarla çal: <em>W</em>=Crash, <em>A</em>=Kick, <em>S</em>=Snare, <em>D</em>=Tom-1, <em>J</em>=Tom-2, <em>K</em>=Tom-3, <em>L</em>=Tom-4.",
    h3:"<strong>Özelleştir</strong> ile tuşları değiştir, tema renklerini ayarla veya pad'leri yeniden sırala.",
    h4:"<strong>Serbest yerleşim</strong> ile pad'leri sahnede istediğin yere sürükle. Kapalıyken grid + sürükle-sırala.",
    h5:"Giriş veya Uygulama için <strong>arkaplan görseli</strong> yükle; yerleşim ve overlay seç.",
    h6:"<strong>Çıkış</strong> ile buraya dönersin; tüm sesler durur.",
    tips:"İpuçları", t1:"Hızlı vuruşlar için tuşa basılı tut; fill'ler için tıklamalarla birleştir.",
    t2:"Parlak görsellerde yüksek kontrastlı rozetler yardımcı olur.", t3:"Ayarların yerel olarak saklanır (ağ yok).",
    btnStart:"Start", btnCustomize:"Özelleştir", btnExit:"Çıkış",
    footerShortcuts:"Kısayollar: W A S D J K L", customizeTitle:"Özelleştir",
    legendKeys:"Tuş atamaları", keysHint:"* Her enstrümana tek karakter ve benzersiz olmalı.",
    legendColors:"Tema renkleri", brandColor:"Vurgu", bg1:"Arkaplan 1", bg2:"Arkaplan 2",
    legendBackground:"Arkaplan", applyTo:"Uygulama alanı", welcome:"Giriş", app:"Uygulama",
    fit:"Yerleşim", upload:"Görsel yükle (JPG/PNG)", overlay:"Karanlık/Overlay",
    legendLayout:"Yerleşim", freeLayout:"Serbest yerleşim modu (pad'leri sürükle)", layoutHint:"İpucu: Kapalıyken gridde sürükle-sırala.",
    close:"Kapat", reset:"Sıfırla", save:"Kaydet",
    crash:"Crash", kick:"Kick", snare:"Snare", tom1:"Tom 1", tom2:"Tom 2", tom3:"Tom 3", tom4:"Tom 4"
  },
  de:{ subtitle:"Interaktives Rhythmus-Studio — Play • Learn • Groove",
    welcomeTitle:"Bereit zum Jammen? 🎵",
    welcomeLead:"Klicke auf Pads oder nutze die Tastatur (W A S D J K L). Mit Start gehört die Bühne dir.",
    howtoTitle:"So spielst du",
    h1:"Sprache auswählen und <strong>Start</strong> drücken (für Browser-Audio erforderlich).",
    h2:"Mit Pads oder Tasten spielen: <em>W</em>=Crash, <em>A</em>=Kick, <em>S</em>=Snare, <em>D</em>=Tom-1, <em>J</em>=Tom-2, <em>K</em>=Tom-3, <em>L</em>=Tom-4.",
    h3:"In <strong>Anpassen</strong> Tastenbelegung, Farben und Pad-Anordnung ändern.",
    h4:"<strong>Freies Layout</strong>: Pads frei ziehen. Aus: Raster & Drag-Sort.",
    h5:"Eigenes <strong>Hintergrundbild</strong> für Start oder App hochladen; Skalierung & Overlay wählen.",
    h6:"Mit <strong>Beenden</strong> zurück; alle Sounds stoppen.",
    tips:"Tipps", t1:"Taste halten für schnelle Rolls; mit Klicks für Fills kombinieren.",
    t2:"Hochkontrast-Badges helfen bei hellen Bildern.", t3:"Einstellungen werden lokal gespeichert.",
    btnStart:"Start", btnCustomize:"Anpassen", btnExit:"Beenden",
    footerShortcuts:"Shortcuts: W A S D J K L", customizeTitle:"Anpassen",
    legendKeys:"Tastenbelegung", keysHint:"* Ein Zeichen pro Instrument, eindeutig.",
    legendColors:"Themenfarben", brandColor:"Akzent", bg1:"Hintergrund 1", bg2:"Hintergrund 2",
    legendBackground:"Hintergrund", applyTo:"Anwenden auf", welcome:"Start", app:"App",
    fit:"Skalierung", upload:"Bild hochladen (JPG/PNG)", overlay:"Overlay-Dunkelheit",
    legendLayout:"Layout", freeLayout:"Freies Layout (Pads ziehen)", layoutHint:"Tipp: Aus = Raster & Drag-Sort.",
    close:"Schließen", reset:"Zurücksetzen", save:"Speichern",
    crash:"Crash", kick:"Kick", snare:"Snare", tom1:"Tom 1", tom2:"Tom 2", tom3:"Tom 3", tom4:"Tom 4"
  }
};

/* ---------- DOM ---------- */
const welcomeScreen = document.getElementById("welcome-screen");
const appScreen = document.getElementById("app-screen");
const btnStart = document.getElementById("btn-start");
const btnExit = document.getElementById("btn-exit");
const btnCustomize = document.getElementById("btn-customize");
const padGrid = document.getElementById("pad-grid");
const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const yearEl = document.getElementById("year");
const langGroup = document.getElementById("lang-group");
const langRadios = () => Array.from(document.querySelectorAll('input[name="lang"]'));

const customizeModal = document.getElementById("customize-modal");
const customizeForm = document.getElementById("customize-form");
const customizeError = document.getElementById("customize-error");
const btnReset = document.getElementById("btn-reset");

/* ---------- State ---------- */
const DEFAULT = {
  lang:"en",
  keys:{ crash:"w", kick:"a", snare:"s", tom1:"d", tom2:"j", tom3:"k", tom4:"l" },
  order:["crash","kick","snare","tom1","tom2","tom3","tom4"],
  freeLayout:false,
  positions:{},
  theme:{
    brand:"#f472b6", bg1:"#0f172a", bg2:"#1e293b",
    coverSize:"cover", overlayWelcome:0.58, overlayApp:0.52,
    coverWelcome:"", coverApp:""
  }
};
const SOUNDS = {
  crash:"sounds/crash.mp3", kick:"sounds/kick-bass.mp3", snare:"sounds/snare.mp3",
  tom1:"sounds/tom-1.mp3", tom2:"sounds/tom-2.mp3", tom3:"sounds/tom-3.mp3", tom4:"sounds/tom-4.mp3"
};
const STORAGE_KEY = "easyso_drum_state_v2";

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return structuredClone(DEFAULT);
    const p = JSON.parse(raw);
    return { ...structuredClone(DEFAULT), ...p,
      keys:{...DEFAULT.keys, ...(p.keys||{})},
      order:Array.isArray(p.order)?p.order:DEFAULT.order,
      positions:{...(p.positions||{})},
      theme:{...DEFAULT.theme, ...(p.theme||{})} };
  }catch{ return structuredClone(DEFAULT); }
}
function saveState(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }
let state = loadState();

/* ---------- Locale / i18n ---------- */
function currentLocale(){ return state?.lang==="de"?"de-DE":state?.lang==="tr"?"tr-TR":"en-US"; }
function t(key){ const dict = I18N[state.lang]||I18N.en; return dict[key]||key; }
function applyLang(lang){
  state.lang = lang;
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (dict[k]) el.innerHTML = dict[k];
  });
  saveState(state);
}
function ensureLangSelection(){
  const radios = langRadios();
  let anyChecked = radios.some(r=>r.checked);
  if (!anyChecked){
    const toCheck = radios.find(r=>r.value===state.lang) || radios.find(r=>r.value==="en");
    if (toCheck){ toCheck.checked = true; anyChecked = true; applyLang(toCheck.value); }
  }
  btnStart.disabled = !anyChecked;
}

/* ---------- Theme / covers ---------- */
function applyTheme(t){
  const root=document.documentElement;
  root.style.setProperty("--brand", t.brand);
  root.style.setProperty("--bg1", t.bg1);
  root.style.setProperty("--bg2", t.bg2);
  root.style.setProperty("--cover-size", t.coverSize);
  root.style.setProperty("--overlay-welcome", t.overlayWelcome);
  root.style.setProperty("--overlay-app", t.overlayApp);
  root.style.setProperty("--cover-welcome", t.coverWelcome ? `url("${t.coverWelcome}")` : `url("images/cover_page1.png")`);
  root.style.setProperty("--cover-app", t.coverApp ? `url("${t.coverApp}")` : `url("images/cover_page2.png")`);
}

/* ---------- Clock ---------- */
let clockTimer=null;
function startClock(){
  const tick = () => {
    const now = new Date();
    dateEl.textContent = now.toLocaleDateString(currentLocale(), { weekday:"long", year:"numeric", month:"long", day:"numeric" });
    timeEl.textContent = now.toLocaleTimeString(currentLocale(), { hour:"2-digit", minute:"2-digit", second:"2-digit" });
  };
  tick(); clockTimer = setInterval(tick, 1000);
}
function stopClock(){ if (clockTimer) clearInterval(clockTimer); }

/* ---------- Initial paint ---------- */
function syncSafeAreas(){
const header = document.querySelector('.app-header');
const footer = document.querySelector('.app-footer');
const hh = (header ? header.offsetHeight : 72);
const fh = (footer ? footer.offsetHeight : 60);
document.documentElement.style.setProperty('--header-h', hh + 'px');
document.documentElement.style.setProperty('--footer-h', fh + 'px');
}
window.addEventListener('load', syncSafeAreas);
window.addEventListener('resize', syncSafeAreas);

applyTheme(state.theme);
applyLang(state.lang);
syncDOMFromState();
ensureLangSelection();
yearEl.textContent = new Date().getFullYear();
startClock();

/* ---------- Language events ---------- */
langGroup.addEventListener("input", (e)=>{
  if (e.target.name === "lang"){ applyLang(e.target.value); btnStart.disabled = false; }
});
langGroup.addEventListener("change", (e)=>{
  if (e.target.name === "lang"){ applyLang(e.target.value); btnStart.disabled = false; }
});

/* ---------- Navigation ---------- */
btnStart.addEventListener("click", ()=>{
  if (btnStart.disabled) return;
  welcomeScreen.classList.remove("active");
  appScreen.classList.add("active");
  const first = padGrid.querySelector(".pad"); if (first) first.focus();
});
btnExit.addEventListener("click", ()=>{
  appScreen.classList.remove("active");
  welcomeScreen.classList.add("active");
  stopAllSounds();
  btnStart.focus();
});

/* ---------- Helpers to detect typing / modal ---------- */
function isTypingContext(target){
  return !!(target.closest && target.closest('input, textarea, [contenteditable="true"], select'));
}
function isCustomizeOpen(){ return !!(customizeModal && customizeModal.open); }

/* ---------- Playback ---------- */
function playByKey(key){
  if (isCustomizeOpen()) return;               // modal açıkken klavye çalma yok
  key = (key||"").toLowerCase();
  const id = Object.keys(state.keys).find(k=>state.keys[k]===key);
  if(!id) return;
  const a = new Audio(SOUNDS[id]); a.currentTime = 0; a.play().catch(()=>{});
  const pad = padGrid.querySelector(`.pad[data-id="${id}"]`);
  if (pad){ pad.classList.add("pressed"); setTimeout(()=>pad.classList.remove("pressed"),120); }
}
function stopAllSounds(){}

/* Click pads */
padGrid.addEventListener("click", e=>{
  const pad = e.target.closest(".pad");
  if (!pad) return; playByKey(state.keys[pad.dataset.id]);
});

/* Global keyboard: IGNORE when typing or modal open */
document.addEventListener("keydown", e=>{
  if (isCustomizeOpen() || isTypingContext(e.target)) return;
  const k = e.key;
  if (k.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) e.preventDefault();
  playByKey(k.toLowerCase());
});

/* ---------- Sync / layout ---------- */
function labelFor(id){ const dict = I18N[state.lang]||I18N.en; return dict[id]||id; }
function syncDOMFromState(){
  state.order.forEach(id=>{
    const el = padGrid.querySelector(`.pad[data-id="${id}"]`); if (el) padGrid.appendChild(el);
  });
  padGrid.querySelectorAll(".pad").forEach(pad=>{
    const id = pad.dataset.id; const key = state.keys[id].toUpperCase();
    pad.dataset.key = key.toLowerCase();
    pad.setAttribute("aria-label", `${labelFor(id)} (${key})`);
    pad.querySelector(".pad-key").textContent = key;
    pad.querySelector("small").textContent = labelFor(id);
  });
  setGridDragEnabled(!state.freeLayout);
  applyFreeLayout(state.freeLayout);
  if (state.freeLayout) applyPositions();
}

/* Drag reorder (grid) */
let dragSrc=null;
function setGridDragEnabled(enabled){ padGrid.querySelectorAll(".pad").forEach(p=>p.setAttribute("draggable", enabled?"true":"false")); }
padGrid.addEventListener("dragstart", e=>{ const t=e.target.closest(".pad"); if(!t)return; dragSrc=t; e.dataTransfer.setData("text/plain",t.dataset.id); e.dataTransfer.effectAllowed="move"; });
padGrid.addEventListener("dragover", e=>{ if(!dragSrc)return; e.preventDefault(); const over=e.target.closest(".pad"); if(over&&over!==dragSrc) over.classList.add("drag-over"); });
padGrid.addEventListener("dragleave", e=>{ const over=e.target.closest(".pad"); if(over) over.classList.remove("drag-over"); });
padGrid.addEventListener("drop", e=>{
  if(!dragSrc) return; e.preventDefault();
  const target=e.target.closest(".pad");
  padGrid.querySelectorAll(".pad").forEach(p=>p.classList.remove("drag-over"));
  if(target&&target!==dragSrc){
    const srcNext=dragSrc.nextSibling, tgtNext=target.nextSibling;
    padGrid.insertBefore(dragSrc, tgtNext); padGrid.insertBefore(target, srcNext);
    state.order = Array.from(padGrid.querySelectorAll(".pad")).map(p=>p.dataset.id); saveState(state);
  }
});
padGrid.addEventListener("dragend",()=>dragSrc=null);

/* Free layout */
let dragging=null, offsetX=0, offsetY=0;
function applyFreeLayout(enabled){
  padGrid.classList.toggle("free-layout", enabled);
  padGrid.querySelectorAll(".pad").forEach(p=>{
    p.classList.toggle("free", enabled);
    if(enabled){
      p.style.left = (state.positions[p.dataset.id]?.x ?? p.offsetLeft) + "px";
      p.style.top  = (state.positions[p.dataset.id]?.y ?? p.offsetTop) + "px";
    }else{ p.style.left=""; p.style.top=""; }
  });
}
function applyPositions(){
  padGrid.querySelectorAll(".pad").forEach(p=>{
    const pos=state.positions[p.dataset.id]; if(pos){ p.style.left=pos.x+"px"; p.style.top=pos.y+"px"; }
  });
}
padGrid.addEventListener("pointerdown", e=>{
  if(!state.freeLayout) return; const p=e.target.closest(".pad"); if(!p) return;
  dragging=p; const r=p.getBoundingClientRect(); offsetX=e.clientX-r.left; offsetY=e.clientY-r.top; p.setPointerCapture(e.pointerId);
});
padGrid.addEventListener("pointermove", e=>{
  if(!dragging||!state.freeLayout) return; const b=padGrid.getBoundingClientRect();
  let x=e.clientX-b.left-offsetX, y=e.clientY-b.top-offsetY;
  x=Math.max(0, Math.min(x, b.width-dragging.offsetWidth));
  y=Math.max(0, Math.min(y, b.height-dragging.offsetHeight));
  dragging.style.left=x+"px"; dragging.style.top=y+"px";
});
padGrid.addEventListener("pointerup", e=>{
  if(!dragging) return; const id=dragging.dataset.id;
  state.positions[id]={ x:parseInt(dragging.style.left||"0"), y:parseInt(dragging.style.top||"0") };
  saveState(state); dragging.releasePointerCapture(e.pointerId); dragging=null;
});

/* ---------- Customize modal ---------- */
btnCustomize.addEventListener("click", ()=>{
  customizeForm.brand.value=state.theme.brand;
  customizeForm.bg1.value=state.theme.bg1;
  customizeForm.bg2.value=state.theme.bg2;
  customizeForm.coverSize.value=state.theme.coverSize;
  customizeForm.overlay.value=state.theme.overlayApp;
  customizeForm.applyTo.value="app";
  customizeForm.freeLayout.checked=state.freeLayout;

  // set key inputs
  for (const id of Object.keys(DEFAULT.keys)){
    customizeForm[id].value=(state.keys[id]||DEFAULT.keys[id]).toUpperCase();
  }

  customizeError.hidden=true;
  customizeModal.showModal();
});

/* Tek karaktere zorlama + otomatik UPPERCASE (delegation) */
customizeForm.addEventListener("input", (e)=>{
  if (e.target && e.target.tagName === "INPUT" && e.target.type === "text"){
    const v = e.target.value.replace(/\s+/g,'');  // boşlukları at
    e.target.value = v.slice(-1).toUpperCase();   // son karakter + UPPER
  }
});

btnReset.addEventListener("click", ()=>{
  state=structuredClone(DEFAULT); saveState(state);
  applyTheme(state.theme); applyLang(state.lang); syncDOMFromState(); ensureLangSelection();
  customizeModal.close();
});

customizeForm.addEventListener("change", e=>{
  if(e.target.name==="applyTo"){
    customizeForm.overlay.value = e.target.value==="welcome" ? state.theme.overlayWelcome : state.theme.overlayApp;
  }
});

customizeForm.addEventListener("submit", async e=>{
  e.preventDefault();

  // read back keys
  const entries={};
  for (const id of Object.keys(DEFAULT.keys)){
    const v=(customizeForm[id].value||"").trim().toLowerCase();
    if(!v||v.length!==1){ return showCustomizeError(t("keysHint")); }
    entries[id]=v;
  }
  if (new Set(Object.values(entries)).size !== Object.keys(entries).length){
    return showCustomizeError("Keys must be unique.");
  }

  state.keys=entries;
  state.freeLayout=!!customizeForm.freeLayout.checked;

  state.theme.brand=customizeForm.brand.value||DEFAULT.theme.brand;
  state.theme.bg1=customizeForm.bg1.value||DEFAULT.theme.bg1;
  state.theme.bg2=customizeForm.bg2.value||DEFAULT.theme.bg2;
  state.theme.coverSize=customizeForm.coverSize.value||"cover";

  const scope = customizeForm.applyTo.value==="welcome" ? "overlayWelcome" : "overlayApp";
  state.theme[scope]=parseFloat(customizeForm.overlay.value||"0.55");

  // optional bg upload
  const file = customizeForm.bgImage.files[0];
  if(file){
    const dataURL = await resizeToDataURL(file, 1920, 1080, customizeForm.coverSize.value==="cover"?"cover":"contain");
    if (customizeForm.applyTo.value==="welcome") state.theme.coverWelcome=dataURL;
    else state.theme.coverApp=dataURL;
  }

  saveState(state); applyTheme(state.theme); syncDOMFromState(); customizeModal.close();
});
function showCustomizeError(msg){ customizeError.textContent=msg; customizeError.hidden=false; }

/* ---------- Image resize ---------- */
function resizeToDataURL(file, targetW, targetH, mode="cover"){
  return new Promise((resolve, reject)=>{
    const img=new Image();
    img.onload=()=>{
      const canvas=document.createElement("canvas"); canvas.width=targetW; canvas.height=targetH;
      const ctx=canvas.getContext("2d"); ctx.fillStyle="#000"; ctx.fillRect(0,0,targetW,targetH);
      let sx=0, sy=0, sw=img.naturalWidth, sh=img.naturalHeight;
      const srcRatio=sw/sh, dstRatio=targetW/targetH;
      if(mode==="cover"){
        if(srcRatio>dstRatio){ const newW=sh*dstRatio; sx=(sw-newW)/2; sw=newW; }
        else { const newH=sw/dstRatio; sy=(sh-newH)/2; sh=newH; }
        ctx.imageSmoothingQuality="high"; ctx.drawImage(img, sx,sy,sw,sh, 0,0,targetW,targetH);
      }else{
        const scale=Math.min(targetW/sw, targetH/sh);
        const dw=Math.round(sw*scale), dh=Math.round(sh*scale);
        const dx=Math.round((targetW-dw)/2), dy=Math.round((targetH-dh)/2);
        ctx.imageSmoothingQuality="high"; ctx.drawImage(img, 0,0,sw,sh, dx,dy,dw,dh);
      }
      resolve(canvas.toDataURL("image/jpeg", 0.9));
    };
    img.onerror=reject; img.src=URL.createObjectURL(file);
  });
}


// --- Mobile vh fallback (iOS Safari 100vh problemi için) ---
function syncVh(){
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
window.addEventListener('load', syncVh);
window.addEventListener('resize', syncVh);
window.addEventListener('orientationchange', () => setTimeout(syncVh, 250));

// Mevcut safe-area ölçüm fonksiyonun varsa onunla birlikte kullanılır:
// window.addEventListener('orientationchange', () => setTimeout(syncSafeAreas, 250));
