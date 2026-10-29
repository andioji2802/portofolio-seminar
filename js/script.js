/**
 * ==========================================================================
 * E-PORTOFOLIO SEMINAR PPG CALON GURU INFORMATIKA
 * Mahasiswa: Andi Khozin Mubarak (NIM: 25086085004)
 * LPTK: Universitas Islam Makassar (UIM) | PPL: SMK Telkom Makassar
 * ==========================================================================
 */

// 1. DATA MASTER DOKUMEN RELEKSI & TUGAS PPG
const PPG_DOCUMENTS = [
  // --- SEMESTER 1 ---
  {
    id: "lk2-filosofi",
    title: "LK 2 Filosofi Pendidikan dan Pendidikan Nilai",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 1",
    type: "PDF",
    description: "Refleksi kritis pemikiran Ki Hadjar Dewantara, kodrat alam & zaman, serta internalisasi nilai karakter dalam pembelajaran Informatika SMK.",
    file: "assets/documents/LK_2_Filosofi_Pendidikan_dan_Pendidikan_Nilai_Andi_Khozin_Mubarak.pdf",
    tags: ["Filosofi KHD", "Pendidikan Nilai", "Kurikulum Merdeka"]
  },
  {
    id: "lk2-peserta-didik",
    title: "LK 2 Pemahaman tentang Peserta Didik dan Pembelajaran",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 1",
    type: "PDF",
    description: "Analisis profil kognitif, sosio-emosional, dan gaya belajar peserta didik kejuruan Informatika sebagai dasar perancangan pembelajaran berdiferensiasi.",
    file: "assets/documents/LK_2_Pemahaman_Peserta_Didik_dan_Pembelajaran_Andi_Khozin_Mubarak.pdf",
    tags: ["Karakteristik Siswa", "Diferensiasi", "Psikologi Belajar"]
  },
  {
    id: "lk2-pembelajaran-mendalam",
    title: "LK 2 Pembelajaran Mendalam dan Asesmen Dasar SMK",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 1",
    type: "PDF",
    description: "Perancangan pengalaman belajar bermakna (deeper learning) dan perumusan asesmen formatif-sumatif kejuruan berbasis kompetensi industri.",
    file: "assets/documents/LK_2_Pembelajaran_Mendalam_dan_Asesmen_Andi_Khozin_Mubarak.pdf",
    tags: ["Deeper Learning", "Asesmen Otentik", "Kompetensi SMK"]
  },
  {
    id: "lk2-kewirausahaan",
    title: "LK 2 Pendidikan Kewirausahaan",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 1",
    type: "PDF",
    description: "Integrasi mindset technopreneurship dalam pembelajaran keahlian Rekayasa Perangkat Lunak dan Digital Business di SMK Telkom Makassar.",
    file: "assets/documents/LK_2_Pendidikan_Kewirausahaan_Andi_Khozin_Mubarak.pdf",
    tags: ["Technopreneur", "Kewirausahaan", "Teaching Factory"]
  },
  {
    id: "lk2-growth-mindset",
    title: "LK 2 Pola Pikir Bertumbuh (Growth Mindset)",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 1",
    type: "PDF",
    description: "Internalisasi pola pikir bertumbuh bagi guru dan siswa dalam mengatasi tantangan debugging, logika pemrograman, dan adaptasi teknologi baru.",
    file: "assets/documents/LK_2_Pola_Pikir_Bertumbuh_Growth_Mindset_Andi_Khozin_Mubarak.pdf",
    tags: ["Growth Mindset", "Resiliensi", "Logika Coding"]
  },
  {
    id: "lk2-ppl-terbimbing",
    title: "LK 2 PPL Terbimbing di SMK Telkom Makassar",
    category: "Refleksi PPL",
    semester: "Semester 1",
    type: "PDF",
    description: "Catatan observasi iklim sekolah, bimbingan intensif guru pamong, asistensi mengajar, serta pengenalan budaya kerja industri Telkom School.",
    file: "assets/documents/LK_2_PPL_Terbimbing_SMK_Telkom_Makassar_Andi_Khozin_Mubarak.pdf",
    tags: ["PPL 1", "SMK Telkom", "Asistensi Mengajar"]
  },

// --- SEMESTER 2 ---

  {
    id: "lk2-aswaja",
    title: "LK 2 Aswaja dan Etika Profesi Guru",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 2",
    type: "PDF",
    description: "Penanaman nilai moderasi beragama (tawassuth, i'tidal, tasamuh), etika akademik, dan integritas moral calon pendidik dari Universitas Islam Makassar.",
    file: "assets/documents/LK2_Aswaja_Etika_dan_Profesi_Guru Andi Khozin Mubarak.pdf",
    tags: ["Aswaja UIM", "Etika Profesi", "Integritas Guru"]
  },
  {
    id: "lk2-pma-lanjut",
    title: "LK 2 Pembelajaran Mendalam dan Asesmen Lanjut SMK",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 2",
    type: "PDF",
    description: "Pengembangan instrumen evaluasi performa autentik, asesmen portofolio digital koding, dan rubrik penilaian proyek kejuruan sistem informasi.",
    file: "assets/documents/LK2_Pembelajaran_Mendalam_dan_asesmen_lanjut Andi Khozin Mubarak.pdf",
    tags: ["Asesmen Lanjut", "Rubrik Koding", "Proyek IT"]
  },
  {
    id: "lk2-pse",
    title: "LK 2 Pembelajaran Sosial Emosional",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 2",
    type: "PDF",
    description: "Penerapan 5 kompetensi sosial emosional (KSE) dan teknik mindfulness untuk menciptakan atmosfer kelas laboratorium komputer yang aman dan nyaman.",
    file: "assets/documents/LK2_Pembelajaran_Sosial_Emosional Andi Khozin Mubarak.pdf",
    tags: ["KSE", "Mindfulness", "Well-being Siswa"]
  },
  {
    id: "lk2-projek-kepemimpinan",
    title: "LK 2 Projek Kepemimpinan",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 2",
    type: "PDF",
    description: "Rencana inisiatif kepemimpinan komunitas sekolah: Workshop Literasi Keamanan Siber & Pemanfaatan Etis AI bagi siswa SMK.",
    file: "assets/documents/LK2_Projek_Kepemimpinan.pdf",
    tags: ["Kepemimpinan", "Literasi AI", "Pengabdian"]
  },

  {
    id: "lk2-ppl-mandiri",
    title: "LK 2 Refleksi PPL Mandiri",
    category: "Refleksi PPL",
    semester: "Semester 2",
    type: "PDF",
    description: "Refleksi komprehensif praktik mengajar mandiri di SMK Telkom Makassar, pengelolaan kelas produktif Informatika, dan evaluasi hasil belajar siswa.",
    file: "assets/documents/LK2_Refleksi_PPL_Mandiri_Andi_Khozin_Mubarak.pdf",
    tags: ["PPL Mandiri", "SMK Telkom", "Praktik Mengajar"]
  },

  {
    id: "lk2-studi-kasus",
    title: "LK 2 Studi Kasus Masalah Pembelajaran Siswa SMK",
    category: "Refleksi Mata Kuliah",
    semester: "Semester 2",
    type: "PDF",
    description: "Investigasi dan solusi penanganan kesulitan peserta didik dalam memahami konsep abstraksi dan algoritma rekursif melalui scaffolding visual.",
    file: "assets/documents/lk2-peserta-didik.pdf",
    tags: ["Studi Kasus", "Scaffolding", "Algoritma"]
  },

  // --- KESELURUHAN PERJALANAN PPG ---
  {
    id: "lk3-refleksi-ppg",
    title: "LK 3 Refleksi Pengalaman Belajar Selama Mengikuti PPG",
    category: "Refleksi PPG",
    semester: "Seluruh PPG",
    type: "PDF",
    description: "Dokumen refleksi puncak yang mengupas transformasi paradigma pendidik, penguasaan 4 kompetensi guru, dan rencana pengembangan keprofesian berkelanjutan.",
    file: "assets/documents/LK3_Refleksi_PPG_Andi_Khozin_Mubarak.pdf",
    tags: ["LK 3 Utama", "Guru Profesional", "Transformasi"]
  }
];

// 2. DATA KARYA INOVASI PENDIDIKAN INFORMATIKA
const PPG_INNOVATIONS = [
  {
    id: "inov-modul-pbl",
    title: "Modul Ajar Informatika Berbasis Problem-Based Learning",
    category: "Modul Ajar",
    description: "Perangkat ajar terstruktur materi Dasar-Dasar Pengembangan Web untuk Kelas X SMK dengan studi kasus pembuatan website informasi sekolah.",
    file: "assets/documents/lk2-pembelajaran-mendalam.pdf",
    badge: "Kurikulum Merdeka",
    type: "PDF Modul"
  },
  {
    id: "inov-media-jaringan",
    title: "Media Pembelajaran Interaktif Simulasi Jaringan Komputer",
    category: "Media Digital",
    description: "Panduan simulasi topologi jaringan dan konfigurasi IP address menggunakan software simulasi jaringan untuk memudahkan visualisasi abstrak.",
    file: "assets/documents/lk2-pma-lanjut.pdf",
    badge: "Interaktif",
    type: "Media Interaktif"
  },
  {
    id: "inov-lkpd-diferensiasi",
    title: "LKPD Berdiferensiasi Algoritma & Logika Pemrograman",
    category: "LKPD",
    description: "Lembar Kerja Peserta Didik dengan 3 tingkat tantangan (Tiered Activity: pemula, menengah, mahir) disesuaikan kesiapan belajar murid.",
    file: "assets/documents/lk2-peserta-didik.pdf",
    badge: "Berdiferensiasi",
    type: "Lembar Kerja"
  },
  {
    id: "inov-rubrik-asesmen",
    title: "Rubrik Asesmen Diagnostik & Otentik Berbasis Proyek",
    category: "Asesmen & Rubrik",
    description: "Matriks instrumen evaluasi keterampilan praktikum koding, kriteria kebersihan kode (clean code), dan uji fungsionalitas sistem software.",
    file: "assets/documents/lk2-pma-lanjut.pdf",
    badge: "Asesmen SMK",
    type: "Instrumen Asesmen"
  },
  {
    id: "inov-video-praktik",
    title: "Video Dokumentasi Praktik Mengajar di Lab Komputer",
    category: "Video Praktik",
    description: "Rekaman cuplikan penerapan model pembelajaran Cooperative Learning dan fasilitasi kolaborasi coding siswa di SMK Telkom Makassar.",
    file: "assets/documents/lk2-ppl-mandiri.pdf",
    badge: "Praktik Nyata",
    type: "Video Dokumentasi"
  },
  {
    id: "inov-repo-portofolio",
    title: "Platform Repositori Karya Digital Siswa SMK",
    category: "Proyek Kejuruan",
    description: "Inisiatif sistem etalase web showcase untuk mengarsipkan tugas coding dan desain grafis siswa sebagai portofolio kesiapan magang industri.",
    file: "assets/documents/lk2-projek-kepemimpinan.pdf",
    badge: "Inovasi SMK",
    type: "Proyek Inovasi"
  }
];

// 3. INISIALISASI SETELAH DOM SIAP
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSemester1Cards();
  initSemester2Cards();
  initInovasiSection();
  initArchiveSection();
  initAccordion();
  initPdfModal();
  initGuideModal();
  initScrollAndBackToTop();
  updateFooterYear();
});

// --- NAVBAR & MOBILE MENU ---
function initNavbar() {
  const toggleBtn = document.getElementById('nav-toggle-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('open');
          toggleBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Active menu link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
        if (targetNav) targetNav.classList.add('active');
      }
    });
  }, { passive: true });
}

// --- RENDER SEMESTER 1 ---
function initSemester1Cards() {
  const container = document.getElementById('semester1-cards-container');
  if (!container) return;

  const s1Docs = PPG_DOCUMENTS.filter(doc => doc.semester === "Semester 1");
  container.innerHTML = s1Docs.map(doc => createDocCardHtml(doc)).join('');
}

// --- RENDER SEMESTER 2 ---
function initSemester2Cards() {
  const container = document.getElementById('semester2-cards-container');
  if (!container) return;

  const s2Docs = PPG_DOCUMENTS.filter(doc => doc.semester === "Semester 2");
  container.innerHTML = s2Docs.map(doc => createDocCardHtml(doc)).join('');
}

// Helper template kartu dokumen PDF
function createDocCardHtml(doc) {
  return `
    <article class="doc-card" data-doc-id="${doc.id}">
      <div class="doc-card-badge-line"></div>
      <div class="doc-card-header">
        <div class="doc-pdf-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
        </div>
        <div class="doc-meta-top">
          <span class="doc-type-badge">${doc.category}</span>
          <span class="doc-semester-tag">${doc.semester} • ${doc.type}</span>
        </div>
      </div>
      <h4 class="doc-title">${escapeHtml(doc.title)}</h4>
      <p class="doc-desc">${escapeHtml(doc.description)}</p>
      <div class="doc-actions">
        <button type="button" class="btn-view-doc" onclick="openPdfModal('${doc.id}')" aria-label="Lihat dokumen ${escapeHtml(doc.title)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Lihat Dokumen
        </button>
        <a href="${doc.file}" download="${doc.file.split('/').pop()}" class="btn-download-doc" aria-label="Unduh PDF ${escapeHtml(doc.title)}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Unduh PDF
        </a>
      </div>
    </article>
  `;
}

// --- KARYA INOVASI SECTION ---
let currentInovasiView = 'grid';

function initInovasiSection() {
  renderInovasi();

  const btnGrid = document.getElementById('view-grid-btn');
  const btnList = document.getElementById('view-list-btn');

  if (btnGrid && btnList) {
    btnGrid.addEventListener('click', () => {
      currentInovasiView = 'grid';
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      renderInovasi();
    });

    btnList.addEventListener('click', () => {
      currentInovasiView = 'list';
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      renderInovasi();
    });
  }
}

function renderInovasi() {
  const container = document.getElementById('inovasi-display-container');
  if (!container) return;

  if (currentInovasiView === 'grid') {
    container.className = 'inovasi-grid';
    container.innerHTML = PPG_INNOVATIONS.map(item => `
      <div class="inovasi-card">
        <div class="inovasi-visual-header">
          <span class="inovasi-category-badge">${item.category}</span>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#B91C1C" stroke-width="1.8" aria-hidden="true">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        </div>
        <div class="inovasi-card-body">
          <h4 class="inovasi-title">${escapeHtml(item.title)}</h4>
          <p class="inovasi-desc">${escapeHtml(item.description)}</p>
          <div class="doc-actions">
            <button type="button" class="btn-view-doc" onclick="openPdfModalCustom('${escapeHtml(item.title)}', '${item.file}', '${item.category}')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Buka File
            </button>
            <a href="${item.file}" download class="btn-download-doc">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Unduh
            </a>
          </div>
        </div>
      </div>
    `).join('');
  } else {
    container.className = 'inovasi-list';
    container.innerHTML = PPG_INNOVATIONS.map(item => `
      <div class="inovasi-list-row">
        <div>
          <span class="doc-type-badge" style="margin-bottom: 6px;">${item.category} • ${item.badge}</span>
          <h4 class="inovasi-title" style="margin-bottom: 4px;">${escapeHtml(item.title)}</h4>
          <p class="inovasi-desc" style="margin-bottom: 0;">${escapeHtml(item.description)}</p>
        </div>
        <div style="display: flex; gap: 8px; flex-shrink: 0;">
          <button type="button" class="btn-view-doc" onclick="openPdfModalCustom('${escapeHtml(item.title)}', '${item.file}', '${item.category}')">
            Buka Dokumen
          </button>
          <a href="${item.file}" download class="btn-download-doc">
            Unduh PDF
          </a>
        </div>
      </div>
    `).join('');
  }
}

// --- ARSIP DOKUMEN TERPUSAT ---
let archiveSearchQuery = "";
let archiveCategory = "all";
let archiveSemester = "all";
let archiveSort = "az";
let archiveViewMode = "grid";

function initArchiveSection() {
  const searchInput = document.getElementById('archive-search-input');
  const catPills = document.querySelectorAll('.cat-pill-btn');
  const semesterSelect = document.getElementById('archive-semester-select');
  const sortSelect = document.getElementById('archive-sort-select');
  const viewToggleBtn = document.getElementById('archive-view-toggle');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      archiveSearchQuery = e.target.value.toLowerCase().trim();
      renderArchive();
    });
  }

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      archiveCategory = pill.getAttribute('data-cat') || 'all';
      renderArchive();
    });
  });

  if (semesterSelect) {
    semesterSelect.addEventListener('change', (e) => {
      archiveSemester = e.target.value;
      renderArchive();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      archiveSort = e.target.value;
      renderArchive();
    });
  }

  if (viewToggleBtn) {
    viewToggleBtn.addEventListener('click', () => {
      archiveViewMode = archiveViewMode === 'grid' ? 'table' : 'grid';
      viewToggleBtn.innerHTML = archiveViewMode === 'grid' 
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg> Mode Tabel`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> Mode Kartu`;
      renderArchive();
    });
  }

  renderArchive();
}

function filterAndSortArchive() {
  return PPG_DOCUMENTS.filter(doc => {
    // Search query check
    const matchesSearch = !archiveSearchQuery || 
      doc.title.toLowerCase().includes(archiveSearchQuery) ||
      doc.description.toLowerCase().includes(archiveSearchQuery) ||
      (doc.tags && doc.tags.some(tag => tag.toLowerCase().includes(archiveSearchQuery)));

    // Category filter check
    const matchesCategory = (archiveCategory === 'all') || (doc.category === archiveCategory);

    // Semester filter check
    const matchesSemester = (archiveSemester === 'all') || (doc.semester === archiveSemester);

    return matchesSearch && matchesCategory && matchesSemester;
  }).sort((a, b) => {
    if (archiveSort === 'az') return a.title.localeCompare(b.title);
    if (archiveSort === 'za') return b.title.localeCompare(a.title);
    if (archiveSort === 'semester') return a.semester.localeCompare(b.semester);
    return 0;
  });
}

function renderArchive() {
  const container = document.getElementById('archive-results-container');
  const countBadge = document.getElementById('archive-count');
  if (!container) return;

  const results = filterAndSortArchive();

  if (countBadge) {
    countBadge.textContent = `Menampilkan ${results.length} dari total ${PPG_DOCUMENTS.length} dokumen`;
  }

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
        <h4 class="empty-state-title">Tidak Ada Dokumen Ditemukan</h4>
        <p class="empty-state-desc">Kata kunci atau filter yang Anda pilih tidak cocok dengan dokumen yang tersedia. Silakan setel ulang filter.</p>
        <button type="button" class="btn btn-outline" onclick="resetArchiveFilters()">
          Reset Filter & Pencarian
        </button>
      </div>
    `;
    return;
  }

  if (archiveViewMode === 'grid') {
    container.innerHTML = `<div class="doc-grid">${results.map(doc => createDocCardHtml(doc)).join('')}</div>`;
  } else {
    // Mode Tabel
    container.innerHTML = `
      <div class="archive-table-container">
        <table class="archive-table">
          <thead>
            <tr>
              <th>Dokumen / Lembar Kerja</th>
              <th>Kategori</th>
              <th>Semester</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            ${results.map(doc => `
              <tr>
                <td>
                  <strong style="color: var(--text-primary);">${escapeHtml(doc.title)}</strong>
                  <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${escapeHtml(doc.description.substring(0, 85))}...</div>
                </td>
                <td><span class="doc-type-badge">${doc.category}</span></td>
                <td><span style="font-weight: 600; color: var(--dark-red);">${doc.semester}</span></td>
                <td>
                  <div style="display: flex; gap: 8px;">
                    <button type="button" class="btn-view-doc" onclick="openPdfModal('${doc.id}')">
                      Lihat
                    </button>
                    <a href="${doc.file}" download class="btn-download-doc">
                      Unduh
                    </a>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
}

function resetArchiveFilters() {
  archiveSearchQuery = "";
  archiveCategory = "all";
  archiveSemester = "all";
  archiveSort = "az";

  const searchInput = document.getElementById('archive-search-input');
  if (searchInput) searchInput.value = "";

  const catPills = document.querySelectorAll('.cat-pill-btn');
  catPills.forEach(p => {
    if (p.getAttribute('data-cat') === 'all') p.classList.add('active');
    else p.classList.remove('active');
  });

  const semesterSelect = document.getElementById('archive-semester-select');
  if (semesterSelect) semesterSelect.value = "all";

  const sortSelect = document.getElementById('archive-sort-select');
  if (sortSelect) sortSelect.value = "az";

  renderArchive();
}

// --- ACCORDION UNTUK REFLEKSI SELAMA PPG ---
function initAccordion() {
  const headers = document.querySelectorAll('.acc-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.acc-item');
      const isOpen = item.classList.contains('open');

      // Optional: accordion behaviour (close others)
      document.querySelectorAll('.acc-item').forEach(el => el.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// --- PDF MODAL VIEWER ---
let activeDocData = null;

function initPdfModal() {
  const modal = document.getElementById('pdf-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closePdfModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePdfModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePdfModal();
      closeGuideModal();
    }
  });
}

function openPdfModal(docId) {
  const doc = PPG_DOCUMENTS.find(d => d.id === docId);
  if (!doc) return;
  openPdfModalCustom(doc.title, doc.file, `${doc.category} • ${doc.semester}`);
}

function openPdfModalCustom(title, fileUrl, subtitle) {
  const modal = document.getElementById('pdf-modal');
  const modalTitle = document.getElementById('modal-doc-title');
  const modalSub = document.getElementById('modal-doc-subtitle');
  const iframe = document.getElementById('pdf-modal-iframe');
  const btnNewTab = document.getElementById('modal-btn-new-tab');
  const btnDownload = document.getElementById('modal-btn-download');

  if (!modal || !iframe) return;

  activeDocData = { title, fileUrl };

  if (modalTitle) modalTitle.textContent = title;
  if (modalSub) modalSub.textContent = subtitle || "Dokumen PDF PPG Calon Guru Informatika";

  iframe.src = fileUrl;

  if (btnNewTab) {
    btnNewTab.onclick = () => window.open(fileUrl, '_blank');
  }

  if (btnDownload) {
    btnDownload.href = fileUrl;
    btnDownload.download = fileUrl.split('/').pop() || 'dokumen.pdf';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePdfModal() {
  const modal = document.getElementById('pdf-modal');
  const iframe = document.getElementById('pdf-modal-iframe');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (iframe) {
    iframe.src = 'about:blank';
  }
}

// --- PANDUAN PENGGUNAAN MODAL ---
function initGuideModal() {
  const guideModal = document.getElementById('guide-modal');
  const closeBtn = document.getElementById('guide-close-btn');
  const triggerBtns = document.querySelectorAll('.open-guide-trigger');

  if (triggerBtns) {
    triggerBtns.forEach(btn => {
      btn.addEventListener('click', openGuideModal);
    });
  }

  if (closeBtn && guideModal) {
    closeBtn.addEventListener('click', closeGuideModal);
    guideModal.addEventListener('click', (e) => {
      if (e.target === guideModal) closeGuideModal();
    });
  }
}

function openGuideModal() {
  const modal = document.getElementById('guide-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeGuideModal() {
  const modal = document.getElementById('guide-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- SCROLL & BACK TO TOP ---
function initScrollAndBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  const floatingGuideBtn = document.querySelector('.floating-guide-btn');

  window.addEventListener('scroll', () => {
    const isScrolled = window.pageYOffset > 280;
    if (backToTopBtn) {
      if (isScrolled) backToTopBtn.classList.add('show');
      else backToTopBtn.classList.remove('show');
    }
    if (floatingGuideBtn) {
      if (isScrolled) floatingGuideBtn.classList.add('show');
      else floatingGuideBtn.classList.remove('show');
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}


// --- DYNAMIC FOOTER YEAR ---
function updateFooterYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Utility: Escape HTML untuk keamanan
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Ekspos fungsi global untuk event inline HTML
window.openPdfModal = openPdfModal;
window.openPdfModalCustom = openPdfModalCustom;
window.closePdfModal = closePdfModal;
window.openGuideModal = openGuideModal;
window.closeGuideModal = closeGuideModal;
window.resetArchiveFilters = resetArchiveFilters;
window.PPG_DOCUMENTS = PPG_DOCUMENTS;
window.PPG_INNOVATIONS = PPG_INNOVATIONS;
window.filterAndSortArchive = filterAndSortArchive;
