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

  /* ---------- 1. PUBLICATIONS DATA (edit here) ----------
     type:   journal | conference | thesis | submission
     status: published | accepted | submission | thesis
     doi:    DOI string such as "10.1007/xxxxx" (the DOI link appears only when filled in)
     pdf, code: full URLs (buttons appear only when filled in)                       */
  const ME = 'Ha Anh Vu';
  const PUBS = [
    { id: 'S1', type: 'submission', status: 'submission', year: 2026, authors: 'Hien Tran, Ha Anh Vu',
      title: 'From Black-Box to Fail-Safe: Uncertainty-Aware Brain Tumor Classification using Bayesian Deep Learning and Grad-CAM++',
      venue: 'Signal, Image and Video Processing, Springer Nature (under review)', doi: '', pdf: '', code: '' },
    { id: 'C1', type: 'conference', status: 'accepted', year: 2026, authors: 'Quang Nguyen, Quan Do, Minh Anh Tran, Dung Nguyen, Ha Anh Vu',
      title: 'V-FUSE: Dynamic Gating Fusion of Multi-layer Self-Supervised Embeddings and Spectral Features for Vietnamese Speaker Verification',
      venue: 'EAI FPT International Conference on Intelligent Systems and Advanced Technologies (EAI FISAT 2026)', doi: '', pdf: '', code: '' },
    { id: 'C2', type: 'conference', status: 'accepted', year: 2026, authors: 'Hoai My Nguyen, Xuan Trung Nguyen, Anh Minh Phan, Phong Pham Nguyen Minh, Ha Anh Vu',
      title: 'Lightweight Conditional Routing for Real-Time Multi-Domain Object Detection in Low-Light UAV Imagery',
      venue: '20th IEEE-RIVF International Conference on Computing and Communication Technologies (RIVF 2026)', doi: '', pdf: '', code: '' },
    { id: 'C3', type: 'conference', status: 'accepted', year: 2026, authors: 'Xuan Trung Nguyen, Vy Kiet Trinh, Thanh Phat Nguyen, Ha Anh Vu',
      title: 'Attribute-Guided Quantized Bottleneck Representation for Bandwidth-Efficient Split-Computing Face Anti-Spoofing',
      venue: '20th IEEE-RIVF International Conference on Computing and Communication Technologies (RIVF 2026)', doi: '', pdf: '', code: '' },
    { id: 'C4', type: 'conference', status: 'accepted', year: 2026, authors: 'Khang Vo, Hung Nguyen, Thuan Nguyen, Phuc Lai, Ha Anh Vu',
      title: 'Adaptive Motion-Appearance Fusion for Robust Multi-Object Tracking with Liquid Time-Constant Motion Prediction',
      venue: '20th IEEE-RIVF International Conference on Computing and Communication Technologies (RIVF 2026)', doi: '', pdf: '', code: '' },
    { id: 'C5', type: 'conference', status: 'accepted', year: 2026, authors: 'Hoai My Nguyen, Xuan Trung Nguyen, Anh Minh Phan, Phong Pham Nguyen Minh, Ha Anh Vu',
      title: 'CounterFail-Edge: Compact Black-Box Verification of Robotic Manipulation from Before–After Images and Instructions',
      venue: '19th International Conference on Control, Automation, Robotics and Vision (IEEE ICARCV 2026)', doi: '', pdf: '', code: '' },
    { id: 'C6', type: 'conference', status: 'published', year: 2024, authors: 'Ha Anh Vu, Szilárd Vajda',
      title: 'Advancing Brain Tumor Diagnosis: A Hybrid Approach Using Edge Detection and Deep Learning',
      venue: 'International Conference on Pattern Recognition (ICPR 2024), Springer Nature', doi: '', pdf: '', code: '' },
    { id: 'C7', type: 'conference', status: 'published', year: 2024, authors: 'Ha Anh Vu, KC Santosh, Szilárd Vajda',
      title: 'An Expert Voting System for Brain Tumor Classification Using MRI Images',
      venue: 'Proceedings of the Seventh International Conference on Recent Trends in Image Processing and Pattern Recognition (RTIP2R 2024)', doi: '', pdf: '', code: '' },
    { id: 'T1', type: 'thesis', status: 'thesis', year: 2025, authors: 'Ha Anh Vu',
      title: 'Ensemble Learning for MRI-Based Brain Tumor Classification: A Weighted Voting Approach',
      venue: 'Master’s thesis, Central Washington University', doi: '', pdf: '', code: '' },
    { id: 'T2', type: 'thesis', status: 'thesis', year: 2022, authors: 'Ha Anh Vu',
      title: 'Development of a Fire Detection Application Using Deep Learning Models on Jetson Nano',
      venue: 'Bachelor’s thesis, University of Information Technology, Vietnam National University', doi: '', pdf: '', code: '' }
  ];
  const GROUPS = [
    { key: 'journal', en: 'Journal articles', vi: 'Bài báo tạp chí' },
    { key: 'conference', en: 'Conference proceedings', vi: 'Kỷ yếu hội nghị' },
    { key: 'thesis', en: 'Thesis', vi: 'Luận văn' },
    { key: 'submission', en: 'In submission and preprints', vi: 'Đang nộp và bản thảo (preprint)' }
  ];
  const STATUS = {
    published: ['Published', 'Đã xuất bản'], accepted: ['Accepted', 'Đã chấp nhận'],
    submission: ['In Submission', 'Đang nộp'], thesis: ['Thesis', 'Luận văn']
  };
  const EMPTY = ['No journal articles published yet. See “In submission” below.', 'Chưa có bài báo tạp chí nào được xuất bản. Xem mục “Đang nộp” bên dưới.'];

  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const chip = (href, label) => href ? `<a class="chip" href="${esc(href)}" target="_blank" rel="noopener">${label}</a>` : '';
  const pubCard = p => `<article class="pub">
    <span class="pid">[${p.id}]</span>
    <div>
      <h4>${esc(p.title)}</h4>
      <p class="au">${esc(p.authors).split(ME).join(`<strong>${ME}</strong>`)}</p>
      <p class="ve"><em>${esc(p.venue)}</em>, ${p.year}</p>
      <div class="pmeta"><span class="badge ${p.status}" data-vi="${STATUS[p.status][1]}">${STATUS[p.status][0]}</span>${chip(p.doi && 'https://doi.org/' + p.doi, 'DOI')}${chip(p.pdf, 'PDF')}${chip(p.code, 'Code')}</div>
    </div></article>`;

  $('#pubs').innerHTML = GROUPS.map(g => {
    const items = PUBS.filter(p => p.type === g.key);
    return `<div class="group"><h3><span data-vi="${g.vi}">${g.en}</span><em>${items.length}</em></h3>${
      items.map(pubCard).join('') || `<p class="empty" data-vi="${EMPTY[1]}">${EMPTY[0]}</p>`}</div>`;
  }).join('');

  /* ---------- 2. LANGUAGE SWITCH (EN / VI, no reload) ----------
     Any element with data-vi="..." keeps its English text as the default and swaps to Vietnamese. */
  const TITLE = { en: 'Ha Anh Vu: AI Lecturer and Researcher', vi: 'Ha Anh Vu: Giảng viên và nhà nghiên cứu AI' };
  const setLang = l => {
    root.lang = root.dataset.lang = l;
    $$('[data-vi]').forEach(el => {
      if (!('en' in el.dataset)) el.dataset.en = el.innerHTML;
      el.innerHTML = l === 'vi' ? el.dataset.vi : el.dataset.en;
    });
    $$('.lang button').forEach(b => b.classList.toggle('on', b.dataset.set === l));
    document.title = TITLE[l];
    store.set('lang', l);
  };
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.set)));
  setLang(store.get('lang') === 'vi' ? 'vi' : 'en');

  /* ---------- 3. THEME (light / dark) ---------- */
  const applyTheme = t => { root.dataset.theme = t; };
  applyTheme(store.get('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  $('#theme').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(t); store.set('theme', t);
  });

  /* ---------- 4. HERO NEURAL-NETWORK BACKGROUND ---------- */
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
