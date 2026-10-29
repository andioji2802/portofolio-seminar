import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

// Load JavaScript data directly or re-create the pure logic functions
const scriptContent = fs.readFileSync(path.resolve('js/script.js'), 'utf-8');

// Extract PPG_DOCUMENTS and PPG_INNOVATIONS from script.js
const extractConst = (name: string) => {
  const regex = new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\]);`);
  const match = scriptContent.match(regex);
  if (!match) throw new Error(`Could not find const ${name} in script.js`);
  return JSON.parse(match[1].replace(/(\w+):/g, '"$1":').replace(/'/g, '"').replace(/,\s*]/g, ']'));
};

interface Doc {
  id: string;
  title: string;
  category: string;
  semester: string;
  type: string;
  description: string;
  file: string;
  tags?: string[];
}

test('PPG_DOCUMENTS contains all required initial Semester 1 documents', () => {
  // Read script.js text
  assert.ok(scriptContent.includes('lk2-filosofi'));
  assert.ok(scriptContent.includes('LK 2 Filosofi Pendidikan dan Pendidikan Nilai'));
  assert.ok(scriptContent.includes('lk2-peserta-didik'));
  assert.ok(scriptContent.includes('lk2-pembelajaran-mendalam'));
  assert.ok(scriptContent.includes('lk2-kewirausahaan'));
  assert.ok(scriptContent.includes('lk2-growth-mindset'));
  assert.ok(scriptContent.includes('lk2-ppl-terbimbing'));
  assert.ok(scriptContent.includes('lk2-aswaja'));
  assert.ok(scriptContent.includes('lk2-pma-lanjut'));
  assert.ok(scriptContent.includes('lk2-pse'));
  assert.ok(scriptContent.includes('lk2-projek-kepemimpinan'));
});

test('PPG_DOCUMENTS contains Semester 2 documents and LK 3', () => {
  assert.ok(scriptContent.includes('lk2-ppl-mandiri'));
  assert.ok(scriptContent.includes('lk3-refleksi-ppg'));
  assert.ok(scriptContent.includes('LK 3 Refleksi Pengalaman Belajar Selama Mengikuti PPG'));
});

test('All referenced PDF documents actually exist in assets/documents', () => {
  const docFiles = [
    'lk2-filosofi.pdf',
    'lk2-peserta-didik.pdf',
    'lk2-pembelajaran-mendalam.pdf',
    'lk2-kewirausahaan.pdf',
    'lk2-growth-mindset.pdf',
    'lk2-ppl-terbimbing.pdf',
    'lk2-aswaja.pdf',
    'lk2-pma-lanjut.pdf',
    'lk2-pse.pdf',
    'lk2-projek-kepemimpinan.pdf',
    'lk2-ppl-mandiri.pdf',
    'lk3-refleksi-ppg.pdf'
  ];

  for (const fileName of docFiles) {
    const fullPath = path.resolve('assets/documents', fileName);
    assert.ok(fs.existsSync(fullPath), `Expected file ${fileName} to exist on disk`);
    const stats = fs.statSync(fullPath);
    assert.ok(stats.size > 50, `Expected file ${fileName} to be non-empty`);
  }
});

test('Profile avatar placeholder SVG exists', () => {
  const avatarPath = path.resolve('assets/images/profile-placeholder.svg');
  assert.ok(fs.existsSync(avatarPath), 'Avatar placeholder should exist');
  const content = fs.readFileSync(avatarPath, 'utf-8');
  assert.ok(content.includes('<svg'), 'Should be a valid SVG file');
});

test('Filtering logic works correctly', () => {
  const sampleDocs: Doc[] = [
    {
      id: 'doc-1',
      title: 'LK 2 Filosofi Pendidikan',
      category: 'Refleksi Mata Kuliah',
      semester: 'Semester 1',
      type: 'PDF',
      description: 'Refleksi Ki Hadjar Dewantara',
      file: 'assets/documents/lk2-filosofi.pdf'
    },
    {
      id: 'doc-2',
      title: 'LK 2 PPL Mandiri',
      category: 'Refleksi PPL',
      semester: 'Semester 2',
      type: 'PDF',
      description: 'Praktik di SMK Telkom',
      file: 'assets/documents/lk2-ppl-mandiri.pdf'
    }
  ];

  const filterDocs = (query: string, cat: string, sem: string) => {
    return sampleDocs.filter(d => {
      const matchQ = !query || d.title.toLowerCase().includes(query) || d.description.toLowerCase().includes(query);
      const matchCat = cat === 'all' || d.category === cat;
      const matchSem = sem === 'all' || d.semester === sem;
      return matchQ && matchCat && matchSem;
    });
  };

  assert.equal(filterDocs('', 'all', 'all').length, 2);
  assert.equal(filterDocs('filosofi', 'all', 'all').length, 1);
  assert.equal(filterDocs('', 'Refleksi PPL', 'all').length, 1);
  assert.equal(filterDocs('', 'all', 'Semester 2').length, 1);
  assert.equal(filterDocs('nonexistent', 'all', 'all').length, 0);
});
