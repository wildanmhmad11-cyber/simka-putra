export type UserRole = 'MUSYRIF' | 'KOORDINATOR' | 'KASIE_KEPESANTRENAN';
export type UnitPesantren = 'SMP' | 'MA' | 'SMA';
export type UnitFilter = 'ALL' | 'SMP' | 'MA' | 'SMA';
export type AppEnvironment = 'PUTRI' | 'PUTRA';

export const APP_ENVIRONMENT: AppEnvironment = 
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_APP_ENVIRONMENT as AppEnvironment) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_LINGKUNGAN as AppEnvironment) ||
  'PUTRI';

export interface UserAccount {
  id: string;
  nama: string;
  username: string;
  role: UserRole;
  unit: 'ALL' | UnitPesantren;
  lingkungan?: AppEnvironment | 'ALL';
  is_active: boolean;
  email?: string;
  title?: string;
  password_hash?: string; // only stored locally or in DB, never exposed in public profile
  created_at?: string;
  updated_at?: string;
}

export interface Santri {
  id: string;
  nis: string; // alias kode_santri
  nama: string;
  kelas: string; // e.g. "7A", "8B", "10.1", "11.1", "12.3"
  unit: UnitPesantren;  // 'SMP' | 'MA' | 'SMA'
  lingkungan?: AppEnvironment;
  totalPoin: number;
  musyrifId?: string;
  musyrifNama?: string;
  musyrif?: string;
  asrama?: string;
  keterangan?: string;
  kamar?: string;
  statusPembinaan?: 'Baik' | 'Peringatan Lisan' | 'SP 1' | 'SP 2' | 'SP 3' | string;
}

export type PelanggaranKategori = 'Ringan' | 'Sedang' | 'Berat' | 'Sangat Berat' | 'Sangat Ringan';

export interface Pelanggaran {
  id: string;
  kode: string;
  jenis: string;
  kategori: PelanggaranKategori;
  poin: number;
  konsekuensi: string;
}

export interface MasterPembinaan {
  id: string;
  tingkat: number;
  nama_tingkat: string;
  min_poin: number;
  max_poin: number;
  jenis_pembinaan: string[];
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
  minPoin?: number;
  maxPoin?: number;
  konsekuensi?: string;
  kategori?: string;
  rentangPoin?: string;
  pembina?: string;
}

export interface RiwayatPelanggaran {
  id: string;
  tanggal: string; // e.g. "25 Agu 2026, 16.38 WIB"
  timestamp: string; // ISO date for sorting
  santriId: string;
  santriNama: string;
  santriKelas: string;
  santriUnit: UnitPesantren;
  lingkungan?: AppEnvironment;
  jenisPelanggaranId: string;
  jenisPelanggaranNama: string;
  poin: number;
  hukuman: string;
  pembinaanTingkat?: string;
  rekomendasiPembinaan?: string[];
  status: 'Selesai' | 'Belum Selesai';
  catatan?: string;
  pencatat: string;
  pencatatId?: string;
  diselesaikanPada?: string;
  diselesaikanOleh?: string;
  penyelesaiNama?: string;
}

export interface PembinaanRecord {
  id: string;
  santriId: string;
  santriNama: string;
  santriKelas: string;
  santriUnit: UnitPesantren;
  lingkungan?: AppEnvironment;
  pelanggaranTerkaitId?: string;
  pelanggaranTerkaitJenis?: string;
  jenisPembinaan: string; // 'Teguran/Nasihat' | 'Peringatan' | 'Tugas pembinaan' | 'Hafalan' | 'Kebersihan' | 'Konseling' | 'Surat Pernyataan' | 'Pemanggilan orang tua/wali' | 'Pembinaan khusus'
  tanggal: string;
  tanggalTargetSelesai?: string;
  pembina: string;
  pembinaId?: string;
  catatan: string;
  status: 'BELUM DIMULAI' | 'PROSES' | 'SELESAI';
  tanggalSelesai?: string;
  created_at: string;
}

export interface ActivityItem {
  id: string;
  type: 'pelanggaran' | 'pembinaan';
  sourceId?: string; // Original ID of pelanggaran or pembinaan
  title: string; // Baris judul: Pelanggaran: [Nama Santri] / Pembinaan: [Nama Santri]
  santriId?: string;
  santriNama: string;
  santriKelas?: string;
  unit: UnitPesantren;
  lingkungan?: AppEnvironment;
  
  // Pelanggaran details
  jenisPelanggaranNama?: string;
  poin?: number;
  pencatatNama?: string;
  pencatatId?: string;

  // Pembinaan details
  jenisPembinaan?: string;
  pembinaNama?: string;
  pembinaId?: string;
  statusPembinaan?: string;

  // Formatted lines per specification
  detailLine: string; // Baris detail: [Nama Jenis Pelanggaran] • [Jumlah Poin] poin / [Jenis Pembinaan]
  infoPencatat: string; // Informasi pencatat: Dicatat oleh: [Nama Pengguna/Petugas] / Pembina: [Nama]
  infoTambahan: string; // Informasi tambahan: Kelas [Kelas] • Unit [SMP/MA/SMA]
  desc?: string; // Backwards compatibility for desc

  timestamp: string; // ISO string for sorting
  timeFormatted: string; // Tanggal dan jam sebenarnya: "18 Okt 2026, 12.55 WIB"
}

export interface HiddenNotificationRecord {
  id: string;
  activityId: string;
  sourceId: string;
  activityType: 'pelanggaran' | 'pembinaan';
  unit: UnitPesantren;
  lingkungan: AppEnvironment;
  hiddenByUserId: string;
  hiddenByNama: string;
  hiddenByRole: string;
  createdAt: string;
}

export type ThemeMode = 'light' | 'dark';

export type PageRoute = 
  | 'login'
  | 'dashboard'
  | 'data-santri'
  | 'catat-pelanggaran'
  | 'rekap-pelanggaran'
  | 'data-pelanggaran'
  | 'kamus-pelanggaran'
  | 'input-mutabaah'
  | 'data-pembinaan'
  | 'riwayat-pembinaan'
  | 'laporan-pembinaan'
  | 'manajemen-user'
  | 'akun';

export interface UserProfile extends UserAccount {
  // Backwards compatibility alias for components
}


