/* ===== Content (edit here) — every text has an English and a Vietnamese version ===== */
const b = (en, vi) => ({ en, vi });
const EMAIL = "anhvh54@fe.edu.vn";
const LINKS = [
  ["Google Scholar", "https://scholar.google.com/citations?user=z_W_F0oAAAAJ&hl=en"],
  ["ORCID", "https://orcid.org/0009-0002-4921-9823"],
];
const U = {
  en: {
    role: "AI Lecturer & Researcher", aff: "Artificial Intelligence Department, FPT University", loc: "Ho Chi Minh City, Vietnam",
    nav: { about: "About", research: "Research", pubs: "Publications", exp: "Experience", edu: "Education", honors: "Honors & Service" },
    about: "I am an AI lecturer and researcher with an M.S. in Computational Science from Central Washington University and peer-reviewed publications in medical imaging and computer vision. I am seeking a PhD position to develop robust, interpretable machine learning models for high-stakes, real-world applications.",
    hl: [["3.95 / 4.00", "M.S. GPA, first class honors"], ["5", "international conference papers accepted in 2026"], ["4.0 / 4.0", "lecturer rating in student evaluations"]],
    st: { sub: "In submission", acc: "Accepted", pub: "Published", the: "Thesis" },
    acad: "Academic", ind: "Industry", svc: "Academic service", rev: "Conference reviewer",
    foot: "Last updated 2026",
  },
  vi: {
    role: "Giảng viên & Nhà nghiên cứu AI", aff: "Khoa Trí tuệ nhân tạo, Trường Đại học FPT", loc: "TP. Hồ Chí Minh, Việt Nam",
    nav: { about: "Giới thiệu", research: "Nghiên cứu", pubs: "Công bố khoa học", exp: "Kinh nghiệm", edu: "Học vấn", honors: "Khen thưởng & Hoạt động" },
    about: "Tôi là giảng viên và nhà nghiên cứu AI, có bằng Thạc sĩ Khoa học Tính toán tại Central Washington University cùng các công bố được bình duyệt trong lĩnh vực ảnh y khoa và thị giác máy tính. Tôi đang tìm kiếm cơ hội học Tiến sĩ để phát triển các mô hình học máy mạnh mẽ, có thể diễn giải, cho những ứng dụng thực tế đòi hỏi độ tin cậy cao.",
    hl: [["3.95 / 4.00", "GPA Thạc sĩ, loại xuất sắc"], ["5", "bài báo hội nghị quốc tế được chấp nhận năm 2026"], ["4.0 / 4.0", "điểm đánh giá giảng viên từ sinh viên"]],
    st: { sub: "Đang nộp", acc: "Đã chấp nhận", pub: "Đã xuất bản", the: "Luận văn" },
    acad: "Học thuật", ind: "Doanh nghiệp", svc: "Hoạt động học thuật", rev: "Phản biện hội nghị",
    foot: "Cập nhật lần cuối 2026",
  },
};
const RESEARCH = [
  [b("Medical imaging", "Ảnh y khoa"), b("Deep learning architectures for computer-aided diagnosis, medical image processing and disease detection, to support clinical decision-making.", "Kiến trúc học sâu cho chẩn đoán có máy tính hỗ trợ, xử lý ảnh y khoa và phát hiện bệnh, nhằm hỗ trợ ra quyết định lâm sàng.")],
  [b("Explainable & trustworthy AI", "AI có thể giải thích & đáng tin cậy"), b("Interpreting black-box models through feature visualization and uncertainty quantification, for safer and more accountable AI in critical domains.", "Diễn giải mô hình hộp đen bằng trực quan hóa đặc trưng và định lượng độ bất định, hướng tới AI an toàn và có trách nhiệm trong các lĩnh vực trọng yếu.")],
  [b("Computer vision & image processing", "Thị giác máy tính & xử lý ảnh"), b("High-performance object detection, feature extraction and visual pattern recognition for dynamic, real-world environments.", "Phát hiện đối tượng, trích xuất đặc trưng và nhận dạng mẫu hình ảnh hiệu năng cao cho môi trường thực tế biến động.")],
  [b("Intelligent IoT & edge computing", "IoT thông minh & điện toán biên"), b("Deep learning for resource-constrained embedded systems, enabling real-time sensing and autonomous decisions.", "Học sâu cho hệ thống nhúng hạn chế tài nguyên, phục vụ cảm biến thời gian thực và ra quyết định tự động.")],
];
const RIVF = "20th IEEE-RIVF International Conference on Computing and Communication Technologies (RIVF 2026)";
// [status, year, authors, title, venue]
const PUBS = [
  ["sub", 2026, "Hien Tran, Ha Anh Vu", "From Black-Box to Fail-Safe: Uncertainty-Aware Brain Tumor Classification using Bayesian Deep Learning and Grad-CAM++", "Signal, Image and Video Processing, Springer Nature"],
  ["acc", 2026, "Quang Nguyen, Quan Do, Minh Anh Tran, Dung Nguyen, Ha Anh Vu", "V-FUSE: Dynamic Gating Fusion of Multi-layer Self-Supervised Embeddings and Spectral Features for Vietnamese Speaker Verification", "EAI FPT International Conference on Intelligent Systems and Advanced Technologies (EAI FISAT 2026)"],
  ["acc", 2026, "Hoai My Nguyen, Xuan Trung Nguyen, Anh Minh Phan, Phong Pham Nguyen Minh, Ha Anh Vu", "Lightweight Conditional Routing for Real-Time Multi-Domain Object Detection in Low-Light UAV Imagery", RIVF],
  ["acc", 2026, "Xuan Trung Nguyen, Vy Kiet Trinh, Thanh Phat Nguyen, Ha Anh Vu", "Attribute-Guided Quantized Bottleneck Representation for Bandwidth-Efficient Split-Computing Face Anti-Spoofing", RIVF],
  ["acc", 2026, "Khang Vo, Hung Nguyen, Thuan Nguyen, Phuc Lai, Ha Anh Vu", "Adaptive Motion-Appearance Fusion for Robust Multi-Object Tracking with Liquid Time-Constant Motion Prediction", RIVF],
  ["acc", 2026, "Hoai My Nguyen, Xuan Trung Nguyen, Anh Minh Phan, Phong Pham Nguyen Minh, Ha Anh Vu", "CounterFail-Edge: Compact Black-Box Verification of Robotic Manipulation from Before–After Images and Instructions", "19th International Conference on Control, Automation, Robotics and Vision (IEEE ICARCV 2026)"],
  ["pub", 2024, "Ha Anh Vu, Szilárd Vajda", "Advancing Brain Tumor Diagnosis: A Hybrid Approach Using Edge Detection and Deep Learning", "International Conference on Pattern Recognition (ICPR 2024), Springer Nature"],
  ["pub", 2024, "Ha Anh Vu, KC Santosh, Szilárd Vajda", "An Expert Voting System for Brain Tumor Classification Using MRI Images", "Seventh International Conference on Recent Trends in Image Processing and Pattern Recognition (RTIP2R 2024)"],
  ["the", 2025, "Ha Anh Vu", "Ensemble Learning for MRI-Based Brain Tumor Classification: A Weighted Voting Approach", b("Master’s thesis, Central Washington University", "Luận văn Thạc sĩ, Central Washington University")],
  ["the", 2022, "Ha Anh Vu", "Development of a Fire Detection Application Using Deep Learning Models on Jetson Nano", b("Bachelor’s thesis, University of Information Technology, VNU-HCM", "Luận văn Đại học, Trường Đại học Công nghệ Thông tin, ĐHQG-HCM")],
];
const EXP = [
  ["acad", "FPT University", b("Artificial Intelligence Department, HCMC", "Khoa Trí tuệ nhân tạo, TP.HCM"), b("AI Lecturer", "Giảng viên AI"), b("Sep 2025 – Present", "09/2025 – Nay"), b(
    ["Teach Machine Learning, Deep Learning, AI Application Development and Search Engines.", "Mentor undergraduate research teams: 5 international conference papers accepted (RIVF, IEEE ICARCV, EAI FISAT), 1 journal manuscript under review.", "Supervise capstone theses and coach student teams for university- and national-level AI competitions."],
    ["Giảng dạy Học máy, Học sâu, Phát triển ứng dụng AI và Công cụ tìm kiếm.", "Hướng dẫn nhóm sinh viên nghiên cứu: 5 bài báo hội nghị quốc tế được chấp nhận (RIVF, IEEE ICARCV, EAI FISAT), 1 bản thảo tạp chí đang phản biện.", "Hướng dẫn và chấm đồ án tốt nghiệp, huấn luyện đội tuyển sinh viên cho các cuộc thi AI cấp trường và quốc gia."])],
  ["acad", "Central Washington University", b("Computer Science Department, Ellensburg, USA", "Khoa Khoa học Máy tính, Ellensburg, Hoa Kỳ"), b("Graduate Research Assistant", "Trợ lý nghiên cứu sau đại học"), b("Jan 2024 – Mar 2025", "01/2024 – 03/2025"), b(
    ["Designed deep learning and ensemble experiments to improve brain tumor classification on MRI scans.", "Analyzed experimental results and turned them into peer-reviewed conference publications."],
    ["Thiết kế các thí nghiệm học sâu và ensemble để cải thiện độ chính xác phân loại u não trên ảnh MRI.", "Phân tích kết quả thực nghiệm và chuyển hóa thành các công bố hội nghị được bình duyệt."])],
  ["ind", "Life Learners LLC", b("Washington, USA", "Washington, Hoa Kỳ"), b("AI Specialist", "Chuyên gia AI"), b("Mar 2025 – Dec 2025", "03/2025 – 12/2025"), b(
    ["Built and deployed AI models for an adaptive learning platform, using RAG pipelines and citation graphs to produce verifiable, citation-backed summaries.", "Developed personalized tutoring agents and research tools that generate study materials such as real-time mindmaps."],
    ["Xây dựng và triển khai mô hình AI cho nền tảng học tập thích ứng, dùng RAG và đồ thị trích dẫn để tạo bản tóm tắt có thể kiểm chứng.", "Phát triển tác tử gia sư cá nhân hóa và công cụ nghiên cứu tạo tài liệu học như mindmap thời gian thực."])],
  ["ind", "Savyboat", b("Washington, USA (Remote)", "Washington, Hoa Kỳ (Từ xa)"), b("Remote IT Helpdesk", "IT Helpdesk từ xa"), b("Aug 2022 – Jul 2023", "08/2022 – 07/2023"), b(
    ["Maintained and upgraded the company web platform and integrated secure online payments.", "Provided technical support and staff training for remote operations."],
    ["Bảo trì, nâng cấp nền tảng web của công ty và tích hợp thanh toán trực tuyến an toàn.", "Hỗ trợ kỹ thuật và đào tạo nhân sự cho vận hành từ xa."])],
  ["ind", "H.O.A Technology", b("HCMC, Vietnam", "TP.HCM, Việt Nam"), b("Full-Stack Web Developer", "Lập trình viên Web Full-Stack"), b("Mar 2021 – Apr 2022", "03/2021 – 04/2022"), b(
    ["Developed and maintained custom web applications with Laravel.", "Coordinated project delivery with cross-functional teams and trained clients."],
    ["Phát triển và bảo trì các ứng dụng web theo yêu cầu bằng Laravel.", "Phối hợp triển khai dự án với các nhóm chức năng và đào tạo khách hàng."])],
];
const EDU = [
  ["Central Washington University", b("M.S. in Computational Science · GPA 3.95/4.00, first class honors", "Thạc sĩ Khoa học Tính toán · GPA 3.95/4.00, loại xuất sắc"), b("Sep 2023 – Mar 2025", "09/2023 – 03/2025"), b("Ellensburg, Washington, USA", "Ellensburg, Washington, Hoa Kỳ")],
  ["University of Information Technology, VNU-HCM", b("B.Eng. in Computer Network and Data Communication", "Kỹ sư Mạng máy tính và Truyền thông dữ liệu"), b("Aug 2017 – Mar 2022", "08/2017 – 03/2022"), b("HCMC, Vietnam", "TP.HCM, Việt Nam")],
];
const HONORS = [
  [b("Teaching Excellence Award, FPT University", "Giải thưởng Giảng dạy xuất sắc, Trường Đại học FPT"), b("Consistently rated 4.0/4.0 by students in every teaching semester.", "Đạt điểm đánh giá 4.0/4.0 từ sinh viên ở mọi học kỳ giảng dạy.")],
  [b("International Graduate Student Scholarship, Central Washington University", "Học bổng Sinh viên Quốc tế sau đại học, Central Washington University"), b("Awarded for five consecutive quarters to top international graduate students in the School of Science.", "Trao trong năm quý liên tiếp cho sinh viên quốc tế sau đại học xuất sắc của Khoa Khoa học.")],
  [b("Employee of the Month, H.O.A Technology", "Nhân viên của tháng, H.O.A Technology"), b("June, July and December 2022.", "Tháng 6, 7 và 12 năm 2022.")],
  [b("Outstanding Young Leader Award, University of Information Technology", "Giải thưởng Thủ lĩnh trẻ xuất sắc, Trường Đại học Công nghệ Thông tin"), b("For leadership and mentoring in the Youth Union, organizing events and guiding new students.", "Ghi nhận vai trò lãnh đạo và dìu dắt trong Đoàn Thanh niên, tổ chức sự kiện và hướng dẫn tân sinh viên.")],
];

/* ===== Rendering ===== */
const $ = (s) => document.querySelector(s);
const saved = (() => { try { return localStorage.getItem("lang"); } catch (e) { return null; } })();
let lang = saved === "vi" || saved === "en" ? saved : (navigator.language || "").toLowerCase().startsWith("vi") ? "vi" : "en";
const sec = (id, t, h) => `<section id="${id}"><h2>${t}</h2>${h}</section>`;

function render() {
  const t = U[lang], p = (o) => (typeof o === "string" ? o : o[lang]);
  document.documentElement.lang = lang;
  document.title = `Ha Anh Vu – ${t.role}`;
  $("#side").innerHTML = `
    <div class="avatar"><span aria-hidden="true">HV</span><img src="assets/img/avatar.jpg" alt="Ha Anh Vu" onerror="this.remove()"></div>
    <h1>Ha Anh Vu</h1>
    <p class="role">${t.role}</p>
    <p class="meta">${t.aff}</p><p class="meta">${t.loc}</p>
    <div class="links"><a href="mailto:${EMAIL}">Email</a>${LINKS.map(([n, u]) => `<a href="${u}" target="_blank" rel="noopener">${n}</a>`).join("")}</div>
    <nav>${Object.entries(t.nav).map(([k, v]) => `<a href="#${k}">${v}</a>`).join("")}</nav>
    <div class="lang" role="group" aria-label="Language">
      <button data-lang="en" aria-pressed="${lang === "en"}">English</button>
      <button data-lang="vi" aria-pressed="${lang === "vi"}">Tiếng Việt</button>
    </div>`;
  const job = ([, org, pl, role, date, pts]) => `<article class="job"><header><h3>${p(role)} · ${org}</h3><time>${p(date)}</time></header><p class="meta">${p(pl)}</p><ul>${p(pts).map((x) => `<li>${x}</li>`).join("")}</ul></article>`;
  $("#main").innerHTML =
    sec("about", t.nav.about, `<p class="lead">${t.about}</p><div class="hl">${t.hl.map(([n, l]) => `<div><b>${n}</b><small>${l}</small></div>`).join("")}</div>`) +
    sec("research", t.nav.research, `<div class="grid">${RESEARCH.map(([h, d]) => `<div class="card"><h3>${p(h)}</h3><p>${p(d)}</p></div>`).join("")}</div>`) +
    sec("pubs", t.nav.pubs, PUBS.map(([s, y, a, ti, v]) => `<div class="pub"><span class="tag ${s}">${t.st[s]}</span><div><h3>${ti}</h3><p>${a.replace("Ha Anh Vu", "<b>Ha Anh Vu</b>")}</p><p><i>${p(v)}</i>, ${y}</p></div></div>`).join("")) +
    sec("exp", t.nav.exp, `<h3 class="sub-h">${t.acad}</h3>${EXP.filter((e) => e[0] === "acad").map(job).join("")}<h3 class="sub-h">${t.ind}</h3>${EXP.filter((e) => e[0] === "ind").map(job).join("")}`) +
    sec("edu", t.nav.edu, EDU.map(([o, d, dt, pl]) => `<article class="job"><header><h3>${o}</h3><time>${p(dt)}</time></header><p class="meta">${p(d)}</p><p class="meta">${p(pl)}</p></article>`).join("")) +
    sec("honors", t.nav.honors, `<div class="grid">${HONORS.map(([h, d]) => `<div class="card"><h3>${p(h)}</h3><p>${p(d)}</p></div>`).join("")}</div><h3 class="sub-h">${t.svc}</h3><p>${t.rev}: ${RIVF}.</p>`) +
    `<footer>© Ha Anh Vu · ${t.foot}</footer>`;
}
document.addEventListener("click", (e) => {
  const l = e.target.closest("[data-lang]");
  if (!l) return;
  lang = l.dataset.lang;
  try { localStorage.setItem("lang", lang); } catch (err) {}
  render();
});
render();
