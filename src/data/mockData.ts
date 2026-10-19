import { Santri, Pelanggaran, RiwayatPelanggaran, UserAccount, MasterPembinaan, UnitPesantren, UnitFilter } from '../types';
import { hashPasswordSync } from '../lib/auth';

export const initialUsers: UserAccount[] = [
  // 1. KASIE / KABID (SUPERADMIN) - GLOBAL ACCESS
  {
    id: 'usr-kasie-01',
    nama: 'KH. Abdullah Syukri, M.Ag',
    username: 'kasie',
    role: 'KASIE_KEPESANTRENAN',
    unit: 'ALL',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'kasie@simka.id',
    title: 'Kepala Seksi Kepesantrenan & Kedisiplinan Yayasan',
    password_hash: hashPasswordSync('admin123'),
    created_at: '2026-01-01T00:00:00Z'
  },

  // 2. UNIT SMP
  {
    id: 'usr-koor-smp',
    nama: 'Ust. Hamzah As-Suyuthi, S.Pd.I',
    username: 'koor.smp',
    role: 'KOORDINATOR',
    unit: 'SMP',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'koor.smp@simka.id',
    title: 'Koordinator Kedisiplinan Unit SMP Putri',
    password_hash: hashPasswordSync('smp123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-smp1',
    nama: 'Ust. Salman Al-Farisi',
    username: 'musyrif.smp1',
    role: 'MUSYRIF',
    unit: 'SMP',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'salman.smp@simka.id',
    title: 'Musyrifah Asrama SMP Putri (Kelas 7 & 8)',
    password_hash: hashPasswordSync('smp123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-smp2',
    nama: 'Ust. Bilal bin Rabah',
    username: 'musyrif.smp2',
    role: 'MUSYRIF',
    unit: 'SMP',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'bilal.smp@simka.id',
    title: 'Musyrifah Asrama SMP Putri (Kelas 9)',
    password_hash: hashPasswordSync('smp123'),
    created_at: '2026-01-01T00:00:00Z'
  },

  // 3. UNIT MA
  {
    id: 'usr-koor-ma',
    nama: 'Ust. Wildan Fanani, Lc',
    username: 'koor.ma',
    role: 'KOORDINATOR',
    unit: 'MA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'wildan.fanani@simka.id',
    title: 'Koordinator Pembinaan Karakter & Akhlak Santri MA Putri',
    password_hash: hashPasswordSync('ma123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-ma1',
    nama: 'Ust. Ahmad Fauzan, S.Pd',
    username: 'musyrif.ma1',
    role: 'MUSYRIF',
    unit: 'MA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'ahmad.fauzan@simka.id',
    title: 'Musyrifah Asrama MA Putri (Kelas 10)',
    password_hash: hashPasswordSync('ma123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-ma2',
    nama: 'Ust. Ridwan Kamil, Lc',
    username: 'musyrif.ma2',
    role: 'MUSYRIF',
    unit: 'MA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'ridwan.kamil@simka.id',
    title: 'Musyrifah Asrama MA Putri (Kelas 11 & 12)',
    password_hash: hashPasswordSync('ma123'),
    created_at: '2026-01-01T00:00:00Z'
  },

  // 4. UNIT SMA
  {
    id: 'usr-koor-sma',
    nama: 'Ust. Dr. Fathurrahman, M.Pd',
    username: 'koor.sma',
    role: 'KOORDINATOR',
    unit: 'SMA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'koor.sma@simka.id',
    title: 'Koordinator Kedisiplinan Unit SMA Putri',
    password_hash: hashPasswordSync('sma123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-sma1',
    nama: 'Ust. Tariq bin Ziyad',
    username: 'musyrif.sma1',
    role: 'MUSYRIF',
    unit: 'SMA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'tariq.sma@simka.id',
    title: 'Musyrifah Asrama SMA Putri (Kelas X)',
    password_hash: hashPasswordSync('sma123'),
    created_at: '2026-01-01T00:00:00Z'
  },
  {
    id: 'usr-musy-sma2',
    nama: 'Ust. Khalid bin Walid',
    username: 'musyrif.sma2',
    role: 'MUSYRIF',
    unit: 'SMA',
    lingkungan: 'PUTRI',
    is_active: true,
    email: 'khalid.sma@simka.id',
    title: 'Musyrifah Asrama SMA Putri (Kelas XI & XII)',
    password_hash: hashPasswordSync('sma123'),
    created_at: '2026-01-01T00:00:00Z'
  }
];

export const initialUser = initialUsers[0];

export const initialPelanggaranList: Pelanggaran[] = [
  {
    id: 'p-001',
    kode: 'P001',
    jenis: 'Masbuk / Terlambat Shalat Jamaah',
    kategori: 'Ringan',
    poin: 10,
    konsekuensi: 'Teguran lisan & istighfar'
  },
  {
    id: 'p-002',
    kode: 'P002',
    jenis: 'Membawa Smartphone/Elektronik',
    kategori: 'Sedang',
    poin: 50,
    konsekuensi: 'Penyitaan barang & Surat Peringatan'
  },
  {
    id: 'p-003',
    kode: 'P003',
    jenis: 'Merokok',
    kategori: 'Berat',
    poin: 85,
    konsekuensi: 'Disita dan SP3'
  },
  {
    id: 'p-004',
    kode: 'P004',
    jenis: 'Tidak Sholat Berjamaah di Masjid',
    kategori: 'Ringan',
    poin: 20,
    konsekuensi: 'Push up 40x dan Tilawah 1 Juz'
  },
  {
    id: 'p-005',
    kode: 'P005',
    jenis: 'Ghosob',
    kategori: 'Sedang',
    poin: 35,
    konsekuensi: 'Push up 40x dan Tilawah 1 Juz'
  },
  {
    id: 'p-006',
    kode: 'P006',
    jenis: 'Berkata Kotor',
    kategori: 'Ringan',
    poin: 20,
    konsekuensi: 'Push up 40x'
  },
  {
    id: 'p-007',
    kode: 'P007',
    jenis: 'Pakaian tidak lengkap saat sholat (peci, sarung, koko)',
    kategori: 'Ringan',
    poin: 5,
    konsekuensi: 'Sit up 30 + tilawah 30 menit'
  },
  {
    id: 'p-008',
    kode: 'P008',
    jenis: 'Tidak Mengikuti dzikir/al-ma\'tsurat (bercanda / keluar / mainan)',
    kategori: 'Ringan',
    poin: 5,
    konsekuensi: 'Sit up 45 + tilawah 30 menit'
  },
  {
    id: 'p-009',
    kode: 'P009',
    jenis: 'Membawa, memiliki, menyimpan, dan/atau menyalakan bahan peledak/petasan',
    kategori: 'Berat',
    poin: 100,
    konsekuensi: 'Barang disita dan dimusnahkan'
  },
  {
    id: 'p-010',
    kode: 'P010',
    jenis: 'Berkomunikasi dengan lawan jenis yang bukan mahram',
    kategori: 'Sedang',
    poin: 50,
    konsekuensi: '-'
  },
  {
    id: 'p-011',
    kode: 'P011',
    jenis: 'Menggunakan laptop untuk menonton, chatting, dan browsing terlarang',
    kategori: 'Sedang',
    poin: 50,
    konsekuensi: '-'
  },
  {
    id: 'p-012',
    kode: 'P012',
    jenis: 'Membawa, memiliki, menyimpan, menggunakan senjata tajam',
    kategori: 'Berat',
    poin: 70,
    konsekuensi: 'Barang menjadi sitaan tetap'
  },
  {
    id: 'p-013',
    kode: 'P013',
    jenis: 'Melakukan perbuatan zina, pelecehan seksual atau asusila',
    kategori: 'Berat',
    poin: 100,
    konsekuensi: 'Dikeluarkan'
  },
  {
    id: 'p-014',
    kode: 'P014',
    jenis: 'Bermain benda berbahaya',
    kategori: 'Sedang',
    poin: 50,
    konsekuensi: '-'
  },
  {
    id: 'p-015',
    kode: 'P015',
    jenis: 'Keluar area pesantren tanpa izin/kabur',
    kategori: 'Berat',
    poin: 75,
    konsekuensi: 'Skorsing 1 minggu & SP2'
  },
  {
    id: 'p-016',
    kode: 'P016',
    jenis: 'Terlambat masuk asrama / melanggar jam malam',
    kategori: 'Ringan',
    poin: 15,
    konsekuensi: 'Pembersihan aula & asrama santri'
  }
];

// Pre-defined MA Santri Putri list (Key records preserved and structured for lingkungan PUTRI)
const specificMASantri: Santri[] = [
  { id: 's-ma-001', nis: '20261001', nama: 'AFIFAH NURUL AINI', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 100, statusPembinaan: 'Dikeluarkan', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Khadijah', kamar: 'Khadijah 01' },
  { id: 's-ma-002', nis: '20261002', nama: 'AISYAH AZ-ZAHRA', kelas: '11.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-ma2', musyrifNama: 'Ust. Ridwan Kamil, Lc', asrama: 'Asrama Aisyah', kamar: 'Aisyah 01' },
  { id: 's-ma-003', nis: '20261003', nama: 'BILQIS UMAIRAH', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Khadijah', kamar: 'Khadijah 02' },
  { id: 's-ma-004', nis: '20261004', nama: 'DURRATUN NASIHAH', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 75, statusPembinaan: 'SP 2', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Khadijah', kamar: 'Khadijah 03' },
  { id: 's-ma-005', nis: '20261005', nama: 'FATHIMAH AL-BATOOL', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 5, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Fatimah', kamar: 'Fatimah 01' },
  { id: 's-ma-006', nis: '20261006', nama: 'HANIFAH SHALIHAH', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 15, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Aisyah', kamar: 'Aisyah 02' },
  { id: 's-ma-007', nis: '20261007', nama: 'HAYA RAIHANAH', kelas: '12.3', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-ma2', musyrifNama: 'Ust. Ridwan Kamil, Lc', asrama: 'Asrama Khadijah', kamar: 'Aisyah 05' },
  { id: 's-ma-008', nis: '20261008', nama: 'KHANSA NABILAH', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Khadijah', kamar: 'Khadijah 04' },
  { id: 's-ma-009', nis: '20261009', nama: 'MARYAM AZ-ZAHIDAH', kelas: '10.2', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 20, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Maryam', kamar: 'Maryam 01' },
  { id: 's-ma-010', nis: '20261010', nama: 'MUTIA RAHMANIA', kelas: '10.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-ma1', musyrifNama: 'Ust. Ahmad Fauzan, S.Pd', asrama: 'Asrama Fatimah', kamar: 'Fatimah 02' },
  { id: 's-ma-011', nis: '20261011', nama: 'NADIA TSURAYYA ABDILLAH', kelas: '11.2', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-ma2', musyrifNama: 'Ust. Ridwan Kamil, Lc', asrama: 'Asrama Khadijah', kamar: 'Khadijah 02' },
  { id: 's-ma-012', nis: '20261012', nama: 'NAURA SHAFWAH', kelas: '12.1', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 5, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-ma2', musyrifNama: 'Ust. Ridwan Kamil, Lc', asrama: 'Asrama Aisyah', kamar: 'Aisyah 03' },
  { id: 's-ma-013', nis: '20261013', nama: 'TSALISA HANINA DHIYA ULHAQ', kelas: '12.3', unit: 'MA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-ma2', musyrifNama: 'Ust. Ridwan Kamil, Lc', asrama: 'Asrama Khadijah', kamar: 'Aisyah 04' }
];

// Pre-defined SMP Santri Putri list
const specificSMPSantri: Santri[] = [
  { id: 's-smp-001', nis: '20267001', nama: 'AISYAH NUR FATIMAH', kelas: '7A', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 20, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-smp1', musyrifNama: 'Ust. Salman Al-Farisi', asrama: 'Asrama Hafshah', kamar: 'Hafshah 01' },
  { id: 's-smp-002', nis: '20267002', nama: 'FARIDAH AZ-ZAHRA', kelas: '7B', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-smp1', musyrifNama: 'Ust. Salman Al-Farisi', asrama: 'Asrama Hafshah', kamar: 'Hafshah 02' },
  { id: 's-smp-003', nis: '20268001', nama: 'NURUL IZZAH', kelas: '8A', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 35, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-smp1', musyrifNama: 'Ust. Salman Al-Farisi', asrama: 'Asrama Rufaidah', kamar: 'Rufaidah 01' },
  { id: 's-smp-004', nis: '20268002', nama: 'SALMA SALSABILA', kelas: '8B', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-smp1', musyrifNama: 'Ust. Salman Al-Farisi', asrama: 'Asrama Rufaidah', kamar: 'Rufaidah 02' },
  { id: 's-smp-005', nis: '20269001', nama: 'ZAHRA KHAIRUNNISA', kelas: '9A', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 2', musyrifId: 'usr-musy-smp2', musyrifNama: 'Ust. Bilal bin Rabah', asrama: 'Asrama Asma', kamar: 'Asma 01' },
  { id: 's-smp-006', nis: '20269002', nama: 'SYIFA FAUZIYAH', kelas: '9B', unit: 'SMP', lingkungan: 'PUTRI', totalPoin: 10, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-smp2', musyrifNama: 'Ust. Bilal bin Rabah', asrama: 'Asrama Asma', kamar: 'Asma 02' }
];

// Pre-defined SMA Santri Putri list
const specificSMASantri: Santri[] = [
  { id: 's-sma-001', nis: '20266001', nama: 'ANISA RAHMAWATI', kelas: 'X-A', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 15, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-sma1', musyrifNama: 'Ust. Tariq bin Ziyad', asrama: 'Asrama Nusaibah', kamar: 'Nusaibah 01' },
  { id: 's-sma-002', nis: '20266002', nama: 'DINA MARIANA', kelas: 'X-B', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-sma1', musyrifNama: 'Ust. Tariq bin Ziyad', asrama: 'Asrama Nusaibah', kamar: 'Nusaibah 02' },
  { id: 's-sma-003', nis: '20265001', nama: 'HILDA KHAIRINA', kelas: 'XI-IPA', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 50, statusPembinaan: 'SP 1', musyrifId: 'usr-musy-sma2', musyrifNama: 'Ust. Khalid bin Walid', asrama: 'Asrama Sumayyah', kamar: 'Sumayyah 01' },
  { id: 's-sma-004', nis: '20265002', nama: 'LAILA MAGHFIRAH', kelas: 'XI-IPS', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 70, statusPembinaan: 'SP 2', musyrifId: 'usr-musy-sma2', musyrifNama: 'Ust. Khalid bin Walid', asrama: 'Asrama Sumayyah', kamar: 'Sumayyah 02' },
  { id: 's-sma-005', nis: '20264001', nama: 'MAULIDA SHALIHAH', kelas: 'XII-IPA', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 0, statusPembinaan: 'Baik', musyrifId: 'usr-musy-sma2', musyrifNama: 'Ust. Khalid bin Walid', asrama: 'Asrama Juwairiyah', kamar: 'Juwairiyah 01' },
  { id: 's-sma-006', nis: '20264002', nama: 'ZULFA AMALIA', kelas: 'XII-IPS', unit: 'SMA', lingkungan: 'PUTRI', totalPoin: 20, statusPembinaan: 'Peringatan Lisan', musyrifId: 'usr-musy-sma2', musyrifNama: 'Ust. Khalid bin Walid', asrama: 'Asrama Juwairiyah', kamar: 'Juwairiyah 02' }
];

const sampleFirstNames = [
  'AFIFAH', 'AISYAH', 'ALYA', 'ANISA', 'AZKADINA', 'BILQIS', 'DINA', 'DURRAH', 'FARIDA', 'FATHIMAH',
  'HANIFAH', 'HASNA', 'HAYA', 'HILDA', 'IFFAH', 'KHANSA', 'LAILA', 'LUTFIYAH', 'MAISARAH', 'MARYAM',
  'MAULIDA', 'MUTIA', 'NABILA', 'NADIA', 'NAURA', 'NURUL', 'QONITA', 'RAIHANA', 'RAIHANAH', 'RIFDAH',
  'ROHMAH', 'RUFAIDAH', 'SAFIRA', 'SALMA', 'SARAH', 'SHOFIA', 'SYIFA', 'TALITHA', 'TSALISA', 'ULFAH',
  'WARDAH', 'YASMIN', 'ZAHRA', 'ZULFA', 'ZALIKHA', 'KAMILA', 'KHAIRUNNISA', 'MAWADDAH', 'HUMAIRA'
];

const sampleLastNames = [
  'AL-AZHARI', 'AL-HASYIMI', 'AL-QUDSI', 'AN-NAFISAH', 'AR-RASYIDAH', 'ASH-SHIDDIQAH',
  'ATTAMIMI', 'AZ-ZAHRA', 'HAKIMAH', 'HIDAYAT', 'IBRAHIM', 'KURNIAWATI', 'MAULIDINA', 'MUBAROKAH',
  'MUSTAFA', 'NURULAINI', 'PRATIWI', 'PUTRI', 'RAHMAH', 'RAMADHANI', 'SALSABILA', 'SETIAWATI',
  'SUHADAH', 'SYAHRANI', 'SYARIFAH', 'UTAMI', 'WIJAYANTI', 'WIRATAMA', 'YULIANTI', 'ZULKARNAEN'
];

function generateSantriDataset(): Santri[] {
  const result: Santri[] = [];

  // 1. Add MA Santri Putri (Unit MA sudah memiliki data santri putri - 163 santri)
  result.push(...specificMASantri);
  const maClasses = ['10.1', '10.2', '10.3', '11.1', '11.2', '11.3', '12.1', '12.2', '12.3'];
  let nameIndex = 0;
  while (result.filter((s) => s.unit === 'MA').length < 163) {
    const fn = sampleFirstNames[nameIndex % sampleFirstNames.length];
    const ln = sampleLastNames[(nameIndex * 3 + 7) % sampleLastNames.length];
    const kl = maClasses[result.length % maClasses.length];
    const idNum = result.filter((s) => s.unit === 'MA').length + 1;
    const padId = idNum.toString().padStart(3, '0');
    
    const randPoin = idNum % 11 === 0 ? 10 : idNum % 19 === 0 ? 20 : 0;
    const status = randPoin > 0 ? 'Peringatan Lisan' : 'Baik';
    const musyrifId = kl.startsWith('10') ? 'usr-musy-ma1' : 'usr-musy-ma2';
    const musyrifNama = kl.startsWith('10') ? 'Ust. Ahmad Fauzan, S.Pd' : 'Ust. Ridwan Kamil, Lc';

    result.push({
      id: `s-ma-${padId}`,
      nis: `20261${padId}`,
      nama: `${fn} ${ln}`,
      kelas: kl,
      unit: 'MA',
      lingkungan: 'PUTRI',
      totalPoin: randPoin,
      statusPembinaan: status,
      musyrifId,
      musyrifNama,
      asrama: `Asrama Putri Blok ${(idNum % 3) + 1}`,
      kamar: `Kamar Putri 0${(idNum % 6) + 1}`
    });
    nameIndex++;
  }

  return result;
}

export const initialSantriList: Santri[] = generateSantriDataset();

export const initialRiwayatPelanggaran: RiwayatPelanggaran[] = [
  // MA Putri Violations
  {
    id: 'log-ma-001',
    tanggal: '25 Agu 2026, 16.38 WIB',
    timestamp: '2026-08-25T16:38:00',
    santriId: 's-ma-002',
    santriNama: 'AISYAH AZ-ZAHRA',
    santriKelas: '11.1',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-002',
    jenisPelanggaranNama: 'Membawa Smartphone/Elektronik',
    poin: 50,
    hukuman: 'Penyitaan barang & Surat Peringatan',
    status: 'Belum Selesai',
    catatan: 'Ditemukan saat sidak malam di lemari santri.',
    pencatat: 'Ust. Wildan Fanani, Lc',
    pencatatId: 'usr-koor-ma'
  },
  {
    id: 'log-ma-002',
    tanggal: '6 Agu 2026, 23.15 WIB',
    timestamp: '2026-08-06T23:15:00',
    santriId: 's-ma-006',
    santriNama: 'HANIFAH SHALIHAH',
    santriKelas: '10.1',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-016',
    jenisPelanggaranNama: 'Terlambat masuk asrama / melanggar jam malam',
    poin: 15,
    hukuman: 'Pembersihan aula & asrama santri',
    status: 'Selesai',
    catatan: 'Telah melaksanakan pembersihan aula asrama putri.',
    pencatat: 'Ust. Wildan Fanani, Lc',
    pencatatId: 'usr-koor-ma'
  },
  {
    id: 'log-ma-003',
    tanggal: '6 Agu 2026, 23.00 WIB',
    timestamp: '2026-08-06T23:00:00',
    santriId: 's-ma-011',
    santriNama: 'NADIA TSURAYYA ABDILLAH',
    santriKelas: '11.2',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-010',
    jenisPelanggaranNama: 'Berkomunikasi dengan lawan jenis yang bukan mahram',
    poin: 50,
    hukuman: 'Surat Peringatan & Konseling',
    status: 'Belum Selesai',
    catatan: 'Surat panggilan wali santri sudah disiapkan.',
    pencatat: 'Ust. Wildan Fanani, Lc',
    pencatatId: 'usr-koor-ma'
  },
  {
    id: 'log-ma-004',
    tanggal: '6 Agu 2026, 22.56 WIB',
    timestamp: '2026-08-06T22:56:00',
    santriId: 's-ma-013',
    santriNama: 'TSALISA HANINA DHIYA ULHAQ',
    santriKelas: '12.3',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-011',
    jenisPelanggaranNama: 'Menggunakan laptop untuk menonton, chatting, dan browsing terlarang',
    poin: 50,
    hukuman: 'Penyitaan laptop selama 1 bulan',
    status: 'Belum Selesai',
    catatan: 'Laptop dititipkan di ruang Kasie.',
    pencatat: 'Ust. Wildan Fanani, Lc',
    pencatatId: 'usr-koor-ma'
  },
  {
    id: 'log-ma-005',
    tanggal: '6 Agu 2026, 22.26 WIB',
    timestamp: '2026-08-06T22:26:00',
    santriId: 's-ma-007',
    santriNama: 'HAYA RAIHANAH',
    santriKelas: '12.3',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-002',
    jenisPelanggaranNama: 'Membawa Smartphone/Elektronik',
    poin: 50,
    hukuman: 'Penyitaan barang & Surat Peringatan',
    status: 'Selesai',
    catatan: 'HP telah diserahkan ke musyrifah.',
    pencatat: 'Ust. Ahmad Fauzan, S.Pd',
    pencatatId: 'usr-musy-ma1'
  },
  {
    id: 'log-ma-006',
    tanggal: '5 Agu 2026, 20.24 WIB',
    timestamp: '2026-08-05T20:24:00',
    santriId: 's-ma-004',
    santriNama: 'DURRATUN NASIHAH',
    santriKelas: '10.1',
    santriUnit: 'MA',
    lingkungan: 'PUTRI',
    jenisPelanggaranId: 'p-015',
    jenisPelanggaranNama: 'Keluar area pesantren tanpa izin/kabur',
    poin: 75,
    hukuman: 'Skorsing 1 minggu & SP2',
    status: 'Selesai',
    catatan: 'Dilakukan pembinaan langsung di kantor Kasie Putri.',
    pencatat: 'Ust. Wildan Fanani, Lc',
    pencatatId: 'usr-koor-ma'
  }
];

export const initialMasterPembinaanList: MasterPembinaan[] = [
  {
    id: 'pb-001',
    tingkat: 1,
    nama_tingkat: 'Level 1',
    min_poin: 5,
    max_poin: 10,
    rentangPoin: '5–10 Poin',
    kategori: 'Pelanggaran Sangat Ringan (Level 1)',
    konsekuensi: 'Membaca istighfar 33 kali, menyiram tanaman, menghafal mufradat / tugas tertulis, tidak mengulangi kesalahan selama minimal 3 hari.',
    pembina: 'Musyrif Asrama / Wali Kelas',
    jenis_pembinaan: [
      'Membaca istighfar 33 kali',
      'Menyiram tanaman di sekitar sekolah/pesantren',
      'Menghafal mufradat dan menyetorkannya atau mengerjakan tugas tertulis terkait pelanggaran',
      'Tidak mengulangi kesalahan yang sama selama minimal 3 hari',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-002',
    tingkat: 2,
    nama_tingkat: 'Level 2',
    min_poin: 11,
    max_poin: 20,
    rentangPoin: '11–20 Poin',
    kategori: 'Pelanggaran Sangat Ringan (Level 2)',
    konsekuensi: 'Membaca istighfar 33 kali, menyiram tanaman, menghafal mufradat / tugas tertulis, tidak mengulangi kesalahan selama minimal 3 hari.',
    pembina: 'Musyrif Asrama / Wali Kelas',
    jenis_pembinaan: [
      'Membaca istighfar 33 kali',
      'Menyiram tanaman di sekitar sekolah/pesantren',
      'Menghafal mufradat dan menyetorkannya atau mengerjakan tugas tertulis terkait pelanggaran',
      'Tidak mengulangi kesalahan yang sama selama minimal 3 hari',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-003',
    tingkat: 3,
    nama_tingkat: 'Level 3',
    min_poin: 21,
    max_poin: 30,
    rentangPoin: '21–30 Poin',
    kategori: 'Pelanggaran Sangat Ringan (Level 3)',
    konsekuensi: 'Membaca istighfar sehari 100 kali, menyapu dan mengepel lantai 1 hari, menghafal ayat/hadits atau tugas tertulis, evaluasi minimal 1 pekan.',
    pembina: 'Musyrif Asrama / Koordinator Unit',
    jenis_pembinaan: [
      'Membaca istighfar sehari 100 kali',
      'Menyapu dan mengepel lantai selama 1 hari',
      'Menghafal ayat/hadits atau tugas tertulis terkait pelanggaran',
      'Tidak mengulangi kesalahan serupa selama minimal 1 pekan',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-004',
    tingkat: 4,
    nama_tingkat: 'Level 4',
    min_poin: 31,
    max_poin: 34,
    rentangPoin: '31–34 Poin',
    kategori: 'Pelanggaran Sangat Ringan (Level 4)',
    konsekuensi: 'Membaca istighfar 300 kali sehari (3 hari), membersihkan kamar mandi 1 hari, menulis/hafal ayat atau tugas praktik/tertulis, meminta nasihat & tanda tangan, evaluasi 4 pekan.',
    pembina: 'Musyrif & Koordinator Kedisiplinan',
    jenis_pembinaan: [
      'Membaca istighfar 300 kali sehari selama 3 hari',
      'Membersihkan kamar mandi selama 1 hari',
      'Menulis ulang dan menghafal ayat/hadits atau mengerjakan tugas praktik/tertulis terkait pelanggaran',
      'Meminta nasihat dan tanda tangan pihak yang ditentukan',
      'Tidak mengulangi kesalahan serupa selama minimal 4 pekan',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-005',
    tingkat: 5,
    nama_tingkat: 'Level 5',
    min_poin: 35,
    max_poin: 49,
    rentangPoin: '35–49 Poin',
    kategori: 'Pelanggaran Sangat Ringan (Level 5)',
    konsekuensi: 'Membaca istighfar 500 kali sehari (3 hari), membersihkan kamar mandi 3–7 hari, skorsing bersyarat, qiyamullail 3 malam, surat pernyataan & SP, absen 3 hari, meminta nasihat & tanda tangan.',
    pembina: 'Koordinator Unit & Kasie Kepesantrenan',
    jenis_pembinaan: [
      'Membaca istighfar 500 kali sehari selama 3 hari',
      'Membersihkan kamar mandi selama 3–7 hari',
      'Skorsing dengan syarat',
      'Qiyamullail tiga malam yang harus terkonfirmasi',
      'Membuat surat pernyataan',
      'Mendapatkan surat peringatan',
      'Absen rutin minimal 3 hari kepada pihak yang ditentukan',
      'Meminta nasihat dan tanda tangan',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-006',
    tingkat: 6,
    nama_tingkat: 'Level 6',
    min_poin: 50,
    max_poin: 69,
    rentangPoin: '50–69 Poin',
    kategori: 'Pelanggaran Ringan (Level 6)',
    konsekuensi: 'Membaca istighfar 500 kali sehari (7 hari), membersihkan kamar mandi 5–9 hari, skorsing bersyarat, qiyamullail 1 pekan, surat pernyataan & SP, absen 5 hari, larangan keluar 1x, gundul / pakaian pelanggaran.',
    pembina: 'Koordinator Unit & Kasie Kepesantrenan',
    jenis_pembinaan: [
      'Membaca istighfar 500 kali sehari selama 7 hari',
      'Membersihkan kamar mandi selama 5–9 hari',
      'Skorsing dengan syarat',
      'Qiyamullail satu pekan yang harus terkonfirmasi',
      'Membuat surat pernyataan',
      'Mendapatkan surat peringatan',
      'Absen rutin minimal 5 hari kepada pihak yang ditentukan',
      'Meminta nasihat dan tanda tangan',
      'Larangan keluar area pondok sebanyak 1 kali sesuai ketentuan',
      'Gundul atau memakai pakaian pelanggaran',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-007',
    tingkat: 7,
    nama_tingkat: 'Level 7',
    min_poin: 70,
    max_poin: 89,
    rentangPoin: '70–89 Poin',
    kategori: 'Pelanggaran Sedang (Level 7)',
    konsekuensi: 'Membaca istighfar 300 kali/hari (10 hari), membersihkan kamar mandi 10–14 hari, skorsing bersyarat, qiyamullail 1 pekan, surat pernyataan & SP, absen 10 hari, larangan keluar 2x, digundul / pakaian khusus pelanggaran.',
    pembina: 'Kasie Kepesantrenan & Mudir Pesantren',
    jenis_pembinaan: [
      'Membaca istighfar 300 kali per hari selama 10 hari',
      'Membersihkan kamar mandi selama 10–14 hari',
      'Skorsing dengan syarat',
      'Qiyamullail satu pekan yang harus terkonfirmasi',
      'Membuat surat pernyataan',
      'Mendapatkan surat peringatan',
      'Absen rutin minimal 10 hari kepada pihak yang ditentukan',
      'Meminta nasihat dan tanda tangan',
      'Larangan keluar area pondok sebanyak 2 kali sesuai ketentuan',
      'Digundul atau memakai pakaian khusus pelanggaran',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  },
  {
    id: 'pb-008',
    tingkat: 8,
    nama_tingkat: 'Level 8',
    min_poin: 90,
    max_poin: 99,
    rentangPoin: '90–99 Poin',
    kategori: 'Pelanggaran Berat (Level 8)',
    konsekuensi: 'Membaca istighfar 300 kali/hari (14 hari), membersihkan kamar mandi 14 hari, skorsing tanpa syarat, qiyamullail 1 pekan, surat pernyataan & SP, absen 14 hari, larangan keluar 3x, digundul & pakaian khusus pelanggaran.',
    pembina: 'Mudir Pesantren & Dewan Kehormatan',
    jenis_pembinaan: [
      'Membaca istighfar 300 kali per hari selama 14 hari',
      'Membersihkan kamar mandi selama 14 hari',
      'Skorsing tanpa syarat',
      'Qiyamullail satu pekan yang harus terkonfirmasi',
      'Membuat surat pernyataan',
      'Mendapatkan surat peringatan',
      'Absen rutin minimal 14 hari kepada pihak yang ditentukan',
      'Meminta nasihat dan tanda tangan',
      'Larangan keluar area pondok sebanyak 3 kali sesuai ketentuan',
      'Digundul dan memakai pakaian khusus pelanggaran',
      'Dan/atau pembinaan lainnya sesuai keputusan pihak terkait'
    ],
    is_active: true
  }
];

export const initialPembinaanRecords = [
  {
    id: 'pbn-001',
    santriId: 's-ma-011',
    santriNama: 'NADIA TSURAYYA ABDILLAH',
    santriKelas: '11.2',
    santriUnit: 'MA' as const,
    lingkungan: 'PUTRI' as const,
    pelanggaranTerkaitId: 'log-ma-003',
    pelanggaranTerkaitJenis: 'Berkomunikasi dengan lawan jenis yang bukan mahram',
    jenisPembinaan: 'Tugas pembinaan & Hafalan',
    tanggal: '05 Sep 2026',
    tanggalTargetSelesai: '12 Sep 2026',
    pembina: 'Ust. Wildan Fanani, Lc',
    pembinaId: 'usr-koor-ma',
    catatan: 'Menghafal Surat Al-Mulk ayat 1-15 dan tilawah mandiri.',
    status: 'PROSES' as const,
    created_at: '2026-09-05T08:00:00Z'
  },
  {
    id: 'pbn-002',
    santriId: 's-ma-013',
    santriNama: 'TSALISA HANINA DHIYA ULHAQ',
    santriKelas: '12.3',
    santriUnit: 'MA' as const,
    lingkungan: 'PUTRI' as const,
    pelanggaranTerkaitId: 'log-ma-004',
    pelanggaranTerkaitJenis: 'Menggunakan laptop untuk browsing terlarang',
    jenisPembinaan: 'Surat Pernyataan & Konseling',
    tanggal: '02 Sep 2026',
    tanggalTargetSelesai: '06 Sep 2026',
    pembina: 'Ust. Wildan Fanani, Lc',
    pembinaId: 'usr-koor-ma',
    catatan: 'Laptop diamankan selama 1 bulan. Santri membuat surat pernyataan tidak mengulangi.',
    status: 'SELESAI' as const,
    tanggalSelesai: '06 Sep 2026',
    created_at: '2026-09-02T10:30:00Z'
  },
  {
    id: 'pbn-003',
    santriId: 's-ma-007',
    santriNama: 'HAYA RAIHANAH',
    santriKelas: '12.3',
    santriUnit: 'MA' as const,
    lingkungan: 'PUTRI' as const,
    pelanggaranTerkaitId: 'log-ma-005',
    pelanggaranTerkaitJenis: 'Membawa Smartphone/Elektronik',
    jenisPembinaan: 'Teguran/Nasihat & Istighfar',
    tanggal: '08 Sep 2026',
    tanggalTargetSelesai: '10 Sep 2026',
    pembina: 'Ust. Ahmad Fauzan, S.Pd',
    pembinaId: 'usr-musy-ma1',
    catatan: 'Diberikan nasihat dan membaca istighfar 100x.',
    status: 'BELUM DIMULAI' as const,
    created_at: '2026-09-08T05:15:00Z'
  }
];

