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

  const pubCard = p => `<article class="pub">
    <span class="pid">[${p.id}]</span>
    <div>
      <h4>${esc(p.title)}</h4>
      <p class="au">${esc(p.authors).split(ME).join(`<strong>${ME}</strong>`)}</p>
      <p class="ve"><em>${esc(p.venue)}</em>${p.year ? ', ' + p.year : ''}</p>
      <div class="pmeta"><span class="badge ${p.status}">${STATUS[p.status]}</span>${chip(doiUrl(p.doi), 'DOI')}${chip(p.pdf, 'PDF')}${chip(p.code, 'Code')}</div>
    </div></article>`;

  const renderPubs = rows => {
    const pubs = rows.map(row).filter(r => r.title).map((r, i) => ({ ...r, i, type: typeOf(r.type), status: statusOf(r.status), year: parseInt(r.year, 10) || 0 }));
    pubs.sort((a, b) => b.year - a.year || a.i - b.i);
    $('#pubs').innerHTML = GROUPS.map(g => {
      const items = pubs.filter(p => p.type === g.key);
      items.forEach((p, n) => { p.id = g.prefix + (n + 1); });
      return `<div class="group"><h3><span>${g.label}</span><em>${items.length}</em></h3>${
        items.map(pubCard).join('') || '<p class="empty">Nothing in this group yet.</p>'}</div>`;
    }).join('');
  };

  const renderProjects = rows => {
    $('#projects').innerHTML = rows.map(row).filter(r => r.title).map(r => {
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
    }).join('') || '<p class="empty">No projects yet.</p>';
  };

  (async () => {
    $('#pubs').innerHTML = $('#projects').innerHTML = '<p class="empty">Loading…</p>';
    try {
      if (!window.XLSX) throw new Error('SheetJS library did not load');
      let wb;
      if (window.DB_BASE64) wb = XLSX.read(window.DB_BASE64, { type: 'base64' });   // used only by the preview build
      else {
        const res = await fetch(DB_FILE + '?v=' + Date.now());
        if (!res.ok) throw new Error('HTTP ' + res.status);
        wb = XLSX.read(await res.arrayBuffer(), { type: 'array' });
      }
      const rows = name => { const n = wb.SheetNames.find(s => s.trim().toLowerCase() === name.toLowerCase()); return n ? XLSX.utils.sheet_to_json(wb.Sheets[n], { defval: '' }) : []; };
      renderPubs(rows('Publications'));
      renderProjects(rows('Projects'));
    } catch (err) {
      console.error(err);
      $('#pubs').innerHTML = $('#projects').innerHTML = '<p class="empty">Could not load data/database.xlsx. If you opened index.html directly from disk, run a local server (python3 -m http.server) or deploy to GitHub Pages.</p>';
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
