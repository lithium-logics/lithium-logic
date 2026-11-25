/* =================== Everything below is the site logic =================== */
const ICONS = {
  moon:'<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  close:'<path d="M6 6l12 12M18 6L6 18"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  left:'<path d="M15 18l-6-6 6-6"/>',
  right:'<path d="M9 18l6-6-6-6"/>',
  github:'<path d="M9 19c-4 1.2-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1-.3-3.400 1.300a11.700 11.700 0 0 0-6.200 0C6.600 2.800 5.600 3.100 5.600 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.200 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21"/>',
  facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  code:'<path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/>',
  layers:'<path d="M12 2l10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
  phone:'<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/>',
  pen:'<path d="M12 20h9M16.500 3.500a2.100 2.100 0 0 1 3 3L7 19l-4 1 1-4z"/>',
  ext:'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>'
};
const svg = n => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
/* Highlights any [bracketed text] so placeholders are easy to spot */
const ph = s => esc(s).replace(/\[[^\]]+\]/g, m => `<span class="ph">${m}</span>`);

/* Icons in static markup */
document.querySelectorAll("svg[data-i]").forEach(el => {
  el.setAttribute("viewBox","0 0 24 24"); el.setAttribute("fill","none"); el.setAttribute("stroke","currentColor");
  el.setAttribute("stroke-width","2"); el.setAttribute("stroke-linecap","round"); el.setAttribute("stroke-linejoin","round");
  el.setAttribute("aria-hidden","true"); el.innerHTML = ICONS[el.dataset.i];
});
document.querySelector("[data-ph]").innerHTML = ph(document.querySelector("[data-ph]").textContent);

/* ---- Theme: follows system, remembers choice ---- */
const root = document.documentElement;
try { const t = localStorage.getItem("ll-theme"); if (t) root.dataset.theme = t; } catch(e){}
$("#themeBtn").addEventListener("click", () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : !matchMedia("(prefers-color-scheme: light)").matches;
  const next = dark ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("ll-theme", next); } catch(e){}
});

/* ---- Mobile menu ---- */
const nav = $("#nav"), menuBtn = $("#menuBtn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", e => { if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded","false"); } });

/* ---- Facts, skills, services, timeline ---- */
$("#facts").innerHTML = FACTS.map(f => `<div class="fact"><span>${esc(f[1])}</span><b>${ph(f[0])}</b></div>`).join("");
$("#skillGrid").innerHTML = Object.entries(SKILLS).map(([g, items]) =>
  `<div class="skill-box"><h3>${g}</h3>${items.map(([n, v]) =>
    `<div class="skill"><div><span>${ph(n)}</span><span class="mono">${v}%</span></div><div class="meter" role="img" aria-label="${esc(n)} ${v} percent"><i style="width:${v}%"></i></div></div>`).join("")}</div>`).join("");
$("#svcGrid").innerHTML = SERVICES.map(s => `<div class="svc">${svg(s[0])}<h3>${s[1]}</h3><p>${s[2]}</p></div>`).join("");
$("#timeline").innerHTML = TIMELINE.map(t => `<li><span class="mono">${ph(t[0])}</span><h3>${ph(t[1])}</h3><p>${ph(t[2])}</p></li>`).join("");

/* ---- Projects: filter + cards ---- */
/* Filter buttons are built from the "type" values used in PROJECTS */
const PLURAL = {app:"Apps", website:"Websites", extension:"Extensions", tool:"Tools"};
const TYPES = [["all","All"], ...[...new Set(PROJECTS.map(p => p.type))].map(t => [t, PLURAL[t] || t])];
const TYPE_LABEL = new Proxy({app:"App", website:"Website", extension:"Extension", tool:"Tool"}, { get: (o, k) => o[k] || String(k) });
let current = "all";
function linkBtns(p, small) {
  const demo = p.demo ? `<a class="btn sm" href="${esc(p.demo)}" target="_blank" rel="noopener">Live demo ${svg("ext")}</a>` : `<span class="btn sm ghost" aria-disabled="true">Live demo soon</span>`;
  const src = `<a class="btn sm ghost" href="${esc(p.source)}" target="_blank" rel="noopener">${svg("github")}Source code</a>`;
  const extra = (p.links || []).map(l => `<a class="btn sm ghost" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ${svg("ext")}</a>`).join("");
  return demo + src + extra;
}
function renderProjects() {
  $("#filters").innerHTML = TYPES.map(([k, l]) => `<button class="chip-btn" data-f="${k}" aria-pressed="${k === current}">${l}</button>`).join("");
  $("#grid").innerHTML = PROJECTS.filter(p => current === "all" || p.type === current).map(p => `
    <article class="card reveal" data-id="${p.id}" tabindex="0" role="button" aria-label="Open details for ${esc(p.name)}">
      ${p.images && p.images[0] ? `<img class="cover" src="${esc(p.images[0])}" alt="" loading="lazy">` : ""}
      <div class="code"><span>${p.id}</span><span>${TYPE_LABEL[p.type]}</span></div>
      <h3>${ph(p.name)}</h3><p>${ph(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${ph(t)}</span>`).join("")}</div>
      <div class="row">${linkBtns(p)}</div>
    </article>`).join("");
  observe();
}
$("#filters").addEventListener("click", e => { const b = e.target.closest("button"); if (b) { current = b.dataset.f; renderProjects(); } });

/* ---- Screenshot gallery inside the popup ---- */
let curProj = null, curShot = 0;
function gallery(p) {
  const imgs = p.images || [];
  if (!imgs.length) return `<div class="shot">[Add screenshots in this project’s "images" list]</div>`;
  const many = imgs.length > 1;
  return `<div class="gal"><div class="gal-main">
      <img id="galImg" src="${esc(imgs[0])}" alt="${esc(p.name)} screenshot 1" onerror="this.alt='Image not found: ' + this.getAttribute('src')">
      ${many ? `<button class="icon-btn g-btn g-prev" data-g="-1" aria-label="Previous screenshot">${svg("left")}</button><button class="icon-btn g-btn g-next" data-g="1" aria-label="Next screenshot">${svg("right")}</button>` : ""}
    </div>
    ${many ? `<div class="thumbs">${imgs.map((s, i) => `<button class="thumb" data-t="${i}" aria-label="Show screenshot ${i + 1}" aria-pressed="${i === 0}"><img src="${esc(s)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}</div>`;
}
function showShot(i) {
  const n = curProj.images.length; curShot = (i + n) % n;
  const img = $("#galImg"); img.src = curProj.images[curShot]; img.alt = curProj.name + " screenshot " + (curShot + 1);
  document.querySelectorAll(".thumb").forEach((t, k) => t.setAttribute("aria-pressed", k === curShot));
}

/* ---- Modal ---- */
const modal = $("#modal"), dialog = $("#dialog"); let lastFocus = null;
function openModal(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  curProj = p; curShot = 0;
  lastFocus = document.activeElement;
  dialog.innerHTML = `<button class="icon-btn x" aria-label="Close details" id="mClose">${svg("close")}</button>
    <div class="mono" style="color:var(--accent)">${p.id} · ${TYPE_LABEL[p.type]}</div>
    <h2 id="mTitle">${ph(p.name)}</h2><p>${ph(p.long)}</p>
    <h3 style="font-size:1rem">Features</h3><ul>${p.features.map(f => `<li>${ph(f)}</li>`).join("")}</ul>
    ${gallery(p)}
    <div class="tags" style="margin-bottom:1rem">${p.tags.map(t => `<span class="tag">${ph(t)}</span>`).join("")}</div>
    <div class="cta">${linkBtns(p)}</div>`;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow = "hidden";
  $("#mClose").focus();
}
function closeModal() {
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true"); document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
$("#grid").addEventListener("click", e => { if (e.target.closest("a")) return; const c = e.target.closest(".card"); if (c) openModal(c.dataset.id); });
$("#grid").addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) { e.preventDefault(); openModal(e.target.dataset.id); } });
modal.addEventListener("click", e => { if (e.target === modal || e.target.closest("#mClose")) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

dialog.addEventListener("click", e => {
  const g = e.target.closest("[data-g]"), t = e.target.closest("[data-t]");
  if (g) showShot(curShot + Number(g.dataset.g)); if (t) showShot(Number(t.dataset.t));
});
document.addEventListener("keydown", e => {
  if (!modal.classList.contains("open") || !curProj || !(curProj.images || []).length) return;
  if (e.key === "ArrowRight") showShot(curShot + 1); if (e.key === "ArrowLeft") showShot(curShot - 1);
});

/* ---- Contact cards + copy ---- */
$("#links").innerHTML = CONTACTS.map((c, i) => `<div class="link-card">${svg(c[0])}<div><b>${c[1]}</b><a href="${c[2]}" target="_blank" rel="noopener" id="ct${i}">${c[3]}</a></div>
  <button class="btn sm ghost" data-copy="${i}" aria-label="Copy ${c[1]} link">${svg("copy")}<span>Copy</span></button></div>`).join("");
$("#links").addEventListener("click", async e => {
  const b = e.target.closest("[data-copy]"); if (!b) return;
  const c = CONTACTS[b.dataset.copy]; const text = c[2].replace("mailto:", ""); let ok = false;
  try { await navigator.clipboard.writeText(text); ok = true; } catch (err) {
    const el = document.getElementById("ct" + b.dataset.copy);
    const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r);
    try { ok = document.execCommand("copy"); } catch (e2) {}
  }
  const span = b.querySelector("span"); span.textContent = ok ? "Copied" : "Press Ctrl+C";
  setTimeout(() => span.textContent = "Copy", 1800);
});

/* ---- Contact form (demo only: nothing is sent) ---- */
$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const n = $("#fn").value.trim(), m = $("#formMsg");
  if (!n || !$("#fe").value.includes("@") || !$("#fm").value.trim()) { m.textContent = "Please fill in your name, a valid email and a message."; return; }
  location.href = "mailto:lithiumlogic0@gmail.com?subject=" + encodeURIComponent("Message from " + n) + "&body=" + encodeURIComponent($("#fm").value + "\n\n" + n + " (" + $("#fe").value + ")");
  m.textContent = "Thanks, " + n.split(" ")[0] + "! Your email app should open with the message ready to send. If it doesn’t, write to lithiumlogic0@gmail.com.";
  e.target.reset();
});

/* ---- Fade-in on scroll (content is visible by default) ---- */
let io;
function observe() {
  if (!("IntersectionObserver" in window)) return;
  io = io || new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .1 });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}
/* ---- Scroll progress, active menu link, back-to-top ---- */
const progBar = $("#progress"), toTopBtn = $("#toTop");
const secs = [...document.querySelectorAll("main section[id]")], navLinks = [...document.querySelectorAll("nav a")];
function onScroll() {
  const max = document.documentElement.scrollHeight - innerHeight;
  progBar.style.width = (max > 0 ? scrollY / max * 100 : 0) + "%";
  toTopBtn.classList.toggle("show", scrollY > 600);
  let cur = ""; secs.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .35) cur = s.id; });
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
toTopBtn.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
renderProjects();
