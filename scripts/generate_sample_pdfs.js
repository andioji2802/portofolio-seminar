import fs from 'node:fs';
import path from 'node:path';

function createPdf(title, subtitle, note) {
  const content = `BT
/F1 18 Tf
50 720 Td
(${title}) Tj
ET
BT
/F1 12 Tf
50 690 Td
(Nama: Andi Khozin Mubarak | NIM: 25086085004) Tj
ET
BT
/F1 11 Tf
50 670 Td
(PPG Calon Guru Informatika - Universitas Islam Makassar | PPL: SMK Telkom Makassar) Tj
ET
BT
/F1 12 Tf
50 635 Td
(${subtitle}) Tj
ET
BT
/F1 10 Tf
50 595 Td
(${note}) Tj
ET
BT
/F1 9 Tf
50 560 Td
(File ini adalah dokumen pratinjau portofolio resmi seminar PPG Informatika 2025/2026.) Tj
ET
BT
/F1 9 Tf
50 540 Td
(Pemilik portofolio dapat mengganti file ini dengan naskah lengkap LK asli kapan saja.) Tj
ET`;

  const streamLength = Buffer.byteLength(content, 'utf-8');

  const pdfBody = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length ${streamLength} >>
stream
${content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000244 00000 n 
0000000300 + 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
400
%%EOF`;

  return pdfBody;
}

const docsDir = path.resolve('assets/documents');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

const documents = [
  { file: 'lk2-filosofi.pdf', title: 'LK 2 Filosofi Pendidikan dan Pendidikan Nilai', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Refleksi kritis pemikiran Ki Hadjar Dewantara dan kodrat zaman siswa SMK Informatika.' },
  { file: 'lk2-peserta-didik.pdf', title: 'LK 2 Pemahaman tentang Peserta Didik dan Pembelajaran', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Analisis karakteristik belajar, profil kognitif, dan motivasi siswa kejuruan.' },
  { file: 'lk2-pembelajaran-mendalam.pdf', title: 'LK 2 Pembelajaran Mendalam dan Asesmen Dasar SMK', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Desain prinsip asesmen formatif-sumatif dan konstruktivisme kejuruan informatika.' },
  { file: 'lk2-kewirausahaan.pdf', title: 'LK 2 Pendidikan Kewirausahaan', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Penerapan technopreneurship dan kemandirian usaha bidang teknologi informasi.' },
  { file: 'lk2-growth-mindset.pdf', title: 'LK 2 Pola Pikir Bertumbuh (Growth Mindset)', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Internalisasi pola pikir bertumbuh dalam menghadapi tantangan dunia kejuruan IT.' },
  { file: 'lk2-ppl-terbimbing.pdf', title: 'LK 2 PPL Terbimbing di SMK Telkom Makassar', subtitle: 'Refleksi Praktik Lapangan - Semester 1', note: 'Catatan observasi, bimbingan guru pamong, dan pengenalan iklim SMK Telkom Makassar.' },
  { file: 'lk2-aswaja.pdf', title: 'LK 2 Aswaja dan Etika Profesi Guru', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Nilai moderasi beragama, tasamuh, etika akademik, dan integritas calon pendidik UIM.' },
  { file: 'lk2-pma-lanjut.pdf', title: 'LK 2 Pembelajaran Mendalam dan Asesmen Lanjut SMK', subtitle: 'Refleksi Mata Kuliah - Semester 1 & 2', note: 'Pengembangan rubrik performa proyek web/software dan asesmen otentik kejuruan.' },
  { file: 'lk2-pse.pdf', title: 'LK 2 Pembelajaran Sosial Emosional', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Penerapan 5 kompetensi sosial emosional (KSE) dan kesadaran penuh (mindfulness).' },
  { file: 'lk2-projek-kepemimpinan.pdf', title: 'LK 2 Projek Kepemimpinan', subtitle: 'Refleksi Mata Kuliah - Semester 1', note: 'Perancangan inisiatif pemberdayaan literasi digital masyarakat sekolah SMK.' },
  { file: 'lk2-ppl-mandiri.pdf', title: 'LK 2 Refleksi PPL Mandiri', subtitle: 'Refleksi Praktik Lapangan - Semester 2', note: 'Praktik pembelajaran mandiri, teaching factory, dan siklus PTK di SMK Telkom Makassar.' },
  { file: 'lk3-refleksi-ppg.pdf', title: 'LK 3 Refleksi Pengalaman Belajar Selama Mengikuti PPG', subtitle: 'Refleksi Akhir Komprehensif - Seluruh Perjalanan PPG', note: 'Sintesis utuh perubahan paradigma, jati diri guru profesional, dan rencana tindak lanjut.' }
];

for (const doc of documents) {
  const filePath = path.join(docsDir, doc.file);
  const pdfString = createPdf(doc.title, doc.subtitle, doc.note);
  fs.writeFileSync(filePath, pdfString);
  console.log('Created sample PDF:', doc.file);
}
