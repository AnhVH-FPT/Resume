/* Academic personal website: Ha Anh Vu */
(() => {
  'use strict';
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const store = {
    get: k => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }
  };

  /* ---------- 1. CONTENT FROM EXCEL (data/database.xlsx) ----------
     Sheets "Publications" and "Projects" are read in the browser with SheetJS; nothing here needs editing
     except ME, the name shown in bold in author lists. */
  const ME = 'Ha Anh Vu';
  const DB_FILE = 'data/database.xlsx';
  const txt = v => String(v == null ? '' : v).trim();
  const row = r => Object.fromEntries(Object.entries(r).map(([k, v]) => [k.trim().toLowerCase(), txt(v)]));
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const chip = (href, label) => href ? `<a class="chip" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>` : '';
  const doiUrl = d => d && (/^https?:/i.test(d) ? d : 'https://doi.org/' + d);

  const GROUPS = [
    { key: 'journal', label: 'Journal articles', prefix: 'J' },
    { key: 'conference', label: 'Conference proceedings', prefix: 'C' },
    { key: 'thesis', label: 'Thesis', prefix: 'T' },
    { key: 'submission', label: 'In submission and preprints', prefix: 'S' }
  ];
  const STATUS = { published: 'Published', accepted: 'Accepted', submission: 'In Submission', thesis: 'Thesis' };
  const typeOf = s => { s = txt(s).toLowerCase(); return s[0] === 'j' ? 'journal' : s[0] === 'c' ? 'conference' : s[0] === 't' ? 'thesis' : 'submission'; };
  const statusOf = s => { s = txt(s).toLowerCase(); return s.includes('accept') ? 'accepted' : s.includes('publish') ? 'published' : s.includes('thesis') ? 'thesis' : 'submission'; };

  const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  const TYPE_LABEL = { journal: 'Journal', conference: 'Conference', thesis: 'Thesis', submission: 'Submission' };

  // <semester-helpers>
  const SEASONS = { sp: 'Spring', spring: 'Spring', su: 'Summer', summer: 'Summer', fa: 'Fall', fall: 'Fall', autumn: 'Fall' };
  const RANK = { Spring: 1, Summer: 2, Fall: 3 };
  const monthOf = v => { v = txt(v).toLowerCase(); const n = parseInt(v, 10); return n >= 1 && n <= 12 ? n : MONTHS.indexOf(v.slice(0, 3)) + 1; };
  // "Fall 2026", "2026 fall", "FA26" ... -> label + sort key (year first; inside a year Fall > Summer > Spring)
  const semOf = s => {
    s = txt(s);
    const w = s.match(/spring|summer|fall|autumn/i) || s.match(/\b(sp|su|fa)(?=\s*-?\d{2})/i);
    const y = s.match(/\d{4}/) || s.match(/\d{2}/);
    if (!w || !y) return { label: s || 'Unspecified semester', key: -1 };
    const season = SEASONS[w[0].toLowerCase()], year = y[0].length === 2 ? 2000 + Number(y[0]) : Number(y[0]);
    return { label: season + ' ' + year, key: year * 10 + RANK[season] };
  };
  // </semester-helpers>

  /* ----- Publications: newest first (Year, then Month, then Day); view by year or by type ----- */
  const pubCard = p => `<article class="pub">
    <span class="pid">[${p.id}]</span>
    <div>
      <h4>${esc(p.title)}</h4>
      <p class="au">${esc(p.authors).split(ME).join(`<strong>${ME}</strong>`)}</p>
      <p class="ve"><em>${esc(p.venue)}</em>${p.year ? ', ' + p.year : ''}</p>
      <div class="pmeta"><span class="ptype">${TYPE_LABEL[p.type]}</span><span class="badge ${p.status}">${STATUS[p.status]}</span>${chip(doiUrl(p.doi), 'DOI')}${chip(p.pdf, 'PDF')}${chip(p.code, 'Code')}</div>
    </div></article>`;

  let PUBS = [], pubView = 'year';
  const drawPubs = () => {
    const sec = (title, items) => `<div class="group"><h3><span>${title}</span><em>${items.length}</em></h3>${
      items.map(pubCard).join('') || '<p class="empty">Nothing in this group yet.</p>'}</div>`;
    const html = pubView === 'type'
      ? GROUPS.map(g => sec(g.label, PUBS.filter(p => p.type === g.key))).join('')
      : [...new Set(PUBS.map(p => p.year))].map(y => sec(y || 'Undated', PUBS.filter(p => p.year === y))).join('');
    $('#pubs').innerHTML = html || '<p class="empty">No publications yet.</p>';
    $$('.seg button').forEach(b => b.classList.toggle('on', b.dataset.view === pubView));
  };
  const renderPubs = rows => {
    PUBS = rows.map(row).filter(r => r.title).map((r, i) => ({ ...r, i, type: typeOf(r.type), status: statusOf(r.status),
      year: parseInt(r.year, 10) || 0, month: monthOf(r.month), day: parseInt(r.day, 10) || 0 }));
    PUBS.sort((a, b) => b.year - a.year || b.month - a.month || b.day - a.day || a.i - b.i);
    GROUPS.forEach(g => PUBS.filter(p => p.type === g.key).forEach((p, n) => { p.id = g.prefix + (n + 1); }));
    drawPubs();
  };
  $$('.seg button').forEach(b => b.addEventListener('click', () => { pubView = b.dataset.view; drawPubs(); }));

  /* ----- Supervised thesis projects: grouped by semester, newest expanded, older collapsed ----- */
  const projCard = r => {
    const ts = r['thesis status'].toLowerCase(), ps = r['paper status'].toLowerCase();
    const tcls = /defended|completed/.test(ts) ? 'published' : ts.includes('prepar') ? 'defense' : 'thesis';
    const pst = ps.includes('submit') ? 'submitted' : ps.includes('accept') ? 'accepted' : ps.includes('publish') ? 'published' : '';
    const venue = r['paper venue'] || 'an international conference';
    const members = r.members.split(/[;\n,]+/).map(s => s.trim()).filter(Boolean).map(esc).join(', ');
    return `<article class="proj">
      <h3>${esc(r.title)}</h3>
      ${members ? `<p class="team"><strong>Team:</strong> ${members}</p>` : ''}
      <div class="pmeta">${r['thesis status'] ? `<span class="badge ${tcls}">${esc(r['thesis status'])}</span>` : ''}${
        pst ? `<span class="badge ${pst}">Paper ${pst} ${pst === 'submitted' ? 'to' : 'at'} ${esc(venue)}</span>` : ''}${chip(r['paper link'], 'Paper')}</div>
    </article>`;
  };
  const renderProjects = rows => {
    const groups = new Map();
    rows.map(row).filter(r => r.title).forEach(r => {
      const s = semOf(r.semester), g = groups.get(s.label) || { ...s, items: [] };
      g.items.push(r); groups.set(s.label, g);
    });
    const list = [...groups.values()].sort((a, b) => b.key - a.key);          // newest semester first
    $('#projects').innerHTML = list.map((g, i) => `<details class="sem"${i === 0 ? ' open' : ''}>
      <summary><span>${esc(g.label)}</span>${i === 0 ? '<span class="now">Current</span>' : ''}<em>${g.items.length}</em></summary>
      <div class="projects">${g.items.map(projCard).join('')}</div></details>`).join('') || '<p class="empty">No projects yet.</p>';
  };

  const showWb = wb => {
    const rows = name => {
      const n = wb.SheetNames.find(s => s.trim().toLowerCase() === name.toLowerCase());
      return n ? XLSX.utils.sheet_to_json(wb.Sheets[n], { defval: '' }) : [];
    };
    renderPubs(rows('Publications'));
    renderProjects(rows('Projects'));
  };
  const readB64 = b64 => showWb(XLSX.read(b64, { type: 'base64' }));   // used only by the preview build

  // Opened from disk (file://): browsers block fetch, so offer a file picker for a local preview instead
  const localBar = () => {
    if ($('#localbar')) return;
    const bar = document.createElement('div');
    bar.id = 'localbar'; bar.className = 'localbar';
    bar.innerHTML = '<label>Local preview: choose your database.xlsx <input type="file" accept=".xlsx"></label>';
    bar.querySelector('input').addEventListener('change', async e => {
      const f = e.target.files[0];
      if (f) showWb(XLSX.read(await f.arrayBuffer(), { type: 'array' }));
    });
    document.body.appendChild(bar);
  };

  (async () => {
    $('#pubs').innerHTML = $('#projects').innerHTML = '<p class="empty">Loading…</p>';
    try {
      if (!window.XLSX) throw new Error('SheetJS library did not load');
      if (window.DB_BASE64) return readB64(window.DB_BASE64);
      const res = await fetch(DB_FILE + '?v=' + Date.now());
      if (!res.ok) throw new Error('HTTP ' + res.status);
      showWb(XLSX.read(await res.arrayBuffer(), { type: 'array' }));
    } catch (err) {
      console.error(err);
      if (location.protocol === 'file:' && window.XLSX) {
        localBar();
        $('#pubs').innerHTML = $('#projects').innerHTML = '<p class="empty">Opened from disk: use the file picker at the bottom of the page to choose data/database.xlsx. On GitHub Pages the data loads automatically.</p>';
        return;
      }
      const msg = !window.XLSX ? 'The Excel reader library (SheetJS from cdnjs) did not load. Check your internet connection or ad blocker.'
        : /404/.test(err.message) ? 'data/database.xlsx was not found. Check that it is inside the data folder of your repository with exactly this name (GitHub Pages is case-sensitive).'
        : 'Could not read data/database.xlsx (' + err.message + ').';
      $('#pubs').innerHTML = $('#projects').innerHTML = `<p class="empty">${msg}</p>`;
    }
  })();

  /* ---------- 2. THEME (light / dark) ---------- */
  const applyTheme = t => { root.dataset.theme = t; };
  applyTheme(store.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#theme').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(t); store.set('theme', t);
  });

  /* ---------- 3. HERO NEURAL-NETWORK BACKGROUND ---------- */
  const cv = $('#net'), g = cv.getContext('2d'), hero = cv.parentElement;
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let W = 0, H = 0, nodes = [], mx = -999, my = -999;
  const fit = () => {
    const r = hero.getBoundingClientRect(); W = cv.width = r.width; H = cv.height = r.height;
    nodes = Array.from({ length: Math.round(W * H / 15000) }, () => ({
      x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }));
    if (still) tick();
  };
  const line = (x1, y1, x2, y2, a) => { g.globalAlpha = a; g.beginPath(); g.moveTo(x1, y1); g.lineTo(x2, y2); g.stroke(); };
  function tick() {
    g.clearRect(0, 0, W, H);
    g.strokeStyle = g.fillStyle = getComputedStyle(root).getPropertyValue('--net').trim();
    nodes.forEach((a, i) => {
      if (!still) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
      }
      g.globalAlpha = .55; g.beginPath(); g.arc(a.x, a.y, 2.2, 0, 6.3); g.fill();
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) line(a.x, a.y, b.x, b.y, (1 - d / 130) * .35);
      }
      const dm = Math.hypot(a.x - mx, a.y - my);
      if (dm < 180) line(a.x, a.y, mx, my, (1 - dm / 180) * .8);
    });
    g.globalAlpha = 1;
    if (!still) requestAnimationFrame(tick);
  }
  hero.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { mx = my = -999; });
  addEventListener('resize', fit);
  fit();
  if (!still) tick();
})();
