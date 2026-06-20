export const projects = [
  {
    num: "01",
    title: "Absensi Sekolah",
    desc: "Sistem manajemen absensi siswa berbasis web. Rekap kehadiran harian, laporan per kelas, dan notifikasi ketidakhadiran secara real-time.",
    tech: ["Next.js", "NestJS", "MySQL", "Chart.js"],
    link: "https://absensi-sekolah-fe.vercel.app",
    github: { fe: "https://github.com/muhammadfakhriramadhan/absensi-sekolah-fe", be: "https://github.com/muhammadfakhriramadhan/absensi-sekolah-be" },
    challenge:
      "Tantangan utama adalah menghadirkan update kehadiran real-time tanpa lag. Solusinya pakai polling interval yang dioptimasi supaya server nggak overload tetapi data tetap fresh.",
    credentials: [
      {
        role: "Guru",
        user: "budi@sekolah.com",
        pass: "password123",
      },
      {
        role: "Kepala Sekolah",
        user: "ahmad@sekolah.com",
        pass: "password123",
      },
    ],
  },
  {
    num: "02",
    title: "StokMaster",
    desc: "Aplikasi manajemen stok gudang untuk mencatat pemasukan dan pengeluaran barang. Dilengkapi laporan stok real-time dan riwayat transaksi.",
    tech: ["Next.js", "NestJS", "MySQL", "Chart.js"],
    link: "https://pengeluaran-dan-pemasukan-barang-fe.vercel.app/",
    github: { fe: "https://github.com/muhammadfakhriramadhan/stokmaster-fe", be: "https://github.com/muhammadfakhriramadhan/stokmaster-be" },
    challenge:
      "Kesulitan menjaga konsistensi stok saat transaksi bersamaan. Solusinya pakai row-level locking di MySQL supaya kalkulasi stok tetap akurat walau banyak user aktif.",
    credentials: [
      {
        role: "Admin",
        user: "admin@gmail.com",
        pass: "123456",
      },
    ],
  },
  {
    num: "03",
    title: "TokoKita",
    desc: "Platform e-commerce modern dengan fitur manajemen produk, keranjang belanja, checkout, dan dashboard penjualan untuk admin.",
    tech: ["Next.js", "NestJS", "MySQL", "Chart.js"],
    link: "https://e-commerce-fe-theta.vercel.app",
    github: { fe: "https://github.com/muhammadfakhriramadhan/e-commerce-fe", be: "https://github.com/muhammadfakhriramadhan/e-commerce-be" },
    challenge:
      "Tantangannya membangun flow checkout yang seamless dari cart hingga payment. Solusinya pakai state management yang rapi di frontend dan endpoint transaksi yang atomic di backend.",
    credentials: [
      {
        role: "customer",
        user: "asep@gmail.com",
        pass: "1234567890",
      },
      {
        role: "admin",
        user: "budi@gmail.com",
        pass: "1234567890",
      },
    ],
  },
];

export const tools = [
  { icon: "▲", name: "Next.js" },
  { icon: "⚛", name: "React" },
  { icon: "TW", name: "Tailwind CSS" },
  { icon: "N", name: "NestJS" },
  { icon: "📊", name: "Chart.js" },
  { icon: "SQL", name: "SQL" },
  { icon: "Node", name: "Node.js" },
  { icon: "GH", name: "GitHub" },
];

export const contacts = [
  {
    label: "Email",
    value: "muhammadfakhriramadhan08@email.com",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Fakhri Ramadhan",
  },
  {
    label: "WhatsApp",
    value: "+62 821-2558-9800",
  },
];

export const aboutSkills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "NestJS",
  "MySQL",
  "Chart.js",
  "Git",
  "REST API",
];

export const navItems = ["Beranda", "Tentang", "Project", "Resume", "Kontak"];
