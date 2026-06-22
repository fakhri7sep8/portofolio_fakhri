export const projects = [
  {
    num: "01",
    title: "Absensi Sekolah",
    desc: "Sistem manajemen absensi siswa berbasis web. Rekap kehadiran harian, laporan per kelas, dan notifikasi ketidakhadiran secara real-time.",
    tech: ["Next.js", "NestJS", "MySQL", "Chart.js"],
    link: "https://absensi-sekolah-fe.vercel.app",
    github: { fe: "https://github.com/muhammadfakhriramadhan/absensi-sekolah-fe", be: "https://github.com/muhammadfakhriramadhan/absensi-sekolah-be" },
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
    value: "muhammadfakhriramadhan08@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Muhammad Fakhri Ramadhan",
    href: "https://www.linkedin.com/in/muhammad-fakhri-ramadhan-1947a6376/",
  },
  {
    label: "WhatsApp",
    value: "+62 821-2558-9800",
    href: "https://wa.me/6282125589800",
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
