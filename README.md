# E-PORTOFOLIO SEMINAR PPG CALON GURU INFORMATIKA

**Identitas Mahasiswa:**
- **Nama:** Andi Khozin Mubarak
- **NIM:** 25086085004
- **Program Studi:** PPG Calon Guru Informatika
- **Perguruan Tinggi (LPTK):** Universitas Islam Makassar (UIM)
- **Tahun Akademik:** 2025/2026
- **Sekolah Mitra PPL:** SMK Telkom Makassar
- **Tagline:** *“Perjalanan Belajar, Refleksi, dan Inovasi Menuju Guru Profesional.”*

---

## 1. STRUKTUR FOLDER PROYEK

```text
e-portofolio-ppg/
├── index.html                  <- Halaman utama website (HTML5 semantik)
├── css/
│   └── style.css               <- Desain & animasi murni (CSS3 variabel Merah & Hijau)
├── js/
│   └── script.js               <- Logika navigasi, filter, pencarian & data master (Vanilla JS)
├── assets/
│   ├── images/
│   │   └── profile-placeholder.svg  <- Foto/avatar profil calon guru
│   └── documents/              <- Berkas PDF lembar kerja asli
│       ├── lk2-filosofi.pdf
│       ├── lk2-peserta-didik.pdf
│       ├── lk2-pembelajaran-mendalam.pdf
│       ├── lk2-kewirausahaan.pdf
│       ├── lk2-growth-mindset.pdf
│       ├── lk2-ppl-terbimbing.pdf
│       ├── lk2-aswaja.pdf
│       ├── lk2-pma-lanjut.pdf
│       ├── lk2-pse.pdf
│       ├── lk2-projek-kepemimpinan.pdf
│       ├── lk2-ppl-mandiri.pdf
│       └── lk3-refleksi-ppg.pdf
└── README.md
```

---

## 2. PANDUAN PENGGUNAAN & PENGELOLAAN

### A. Cara Membuka Website Menggunakan Live Server di VS Code
1. Buka folder `e-portofolio-ppg` menggunakan editor Visual Studio Code.
2. Pasang ekstensi **Live Server** (oleh Ritwick Dey) dari menu Extensions (`Ctrl+Shift+X`).
3. Klik kanan pada berkas `index.html` lalu pilih **"Open with Live Server"**.
4. Website akan terbuka secara otomatis di browser pada alamat `http://127.0.0.1:5500`.

### B. Cara Mengganti Berkas PDF Contoh dengan PDF Tugas Asli Anda
1. Siapkan naskah PDF asli tugas Lembar Kerja (LK 2 / LK 3) yang telah Anda susun.
2. Ganti nama berkas PDF Anda agar sesuai dengan target nama berkas di folder `assets/documents/`:
   - `lk2-filosofi.pdf`
   - `lk2-peserta-didik.pdf`
   - `lk2-pembelajaran-mendalam.pdf`
   - `lk2-kewirausahaan.pdf`
   - `lk2-growth-mindset.pdf`
   - `lk2-ppl-terbimbing.pdf`
   - `lk2-aswaja.pdf`
   - `lk2-pma-lanjut.pdf`
   - `lk2-pse.pdf`
   - `lk2-projek-kepemimpinan.pdf`
   - `lk2-ppl-mandiri.pdf`
   - `lk3-refleksi-ppg.pdf`
3. Salin dan timpa (overwrite) file tersebut ke dalam folder `assets/documents/`.
4. Muat ulang (refresh) halaman website di browser. Tombol **"Lihat Dokumen"** dan **"Unduh PDF"** akan langsung membuka dokumen asli Anda!

### C. Cara Menambah atau Mengubah Dokumen di JavaScript (`js/script.js`)
Buka `js/script.js`, Anda cukup menambahkan objek baru ke dalam array `PPG_DOCUMENTS`:
```javascript
{
  id: "lk2-nama-baru",
  title: "LK 2 Judul Tugas Baru",
  category: "Refleksi Mata Kuliah", // atau "Refleksi PPL", "Refleksi PPG"
  semester: "Semester 1",           // atau "Semester 2", "Seluruh PPG"
  type: "PDF",
  description: "Deskripsi singkat mengenai isi refleksi tugas ini...",
  file: "assets/documents/lk2-nama-baru.pdf",
  tags: ["Topik 1", "Topik 2"]
}
```
Dokumen baru akan otomatis muncul di grid semester bersangkutan dan di halaman pencarian Arsip Dokumen.

### D. Cara Mengganti Foto Profil
Ganti file `assets/images/profile-placeholder.svg` dengan foto resmi Anda (misalnya berjas almamater atau batik). Jika menggunakan format `.jpg` atau `.png`, ubah atribut `src` pada tag `<img ...>` di `index.html` dan `hero-avatar-box`.

### E. Publikasi Gratis ke GitHub Pages
1. Buat repositori baru di GitHub (misal: `portofolio-ppg-informatika`).
2. Unggah seluruh isi folder proyek ke repositori tersebut.
3. Buka menu **Settings** > **Pages** di repositori GitHub.
4. Pada bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1-2 menit, website portofolio seminar Anda akan online secara publik dengan tautan seperti:
   `https://username.github.io/portofolio-ppg-informatika/`
