// ============================================================
//  DATA.JS — Edit file ini untuk menambah/mengubah file download
//  Cukup tambahkan object baru di array FILES di bawah ini
// ============================================================

const FILES = [
  {
    id: "aplikasi-a",
    name: "Nama Aplikasi A",
    description: "Deskripsi singkat tentang aplikasi ini. Jelaskan kegunaannya dan siapa yang membutuhkan.",
    category: "Software",
    size: "45 MB",
    downloads: "12.4K",
    os: "Windows 10/11",
    filename: "NamaAplikasiA_setup.exe",
    downloadUrl: "https://link-download-kamu.com/file-a.exe",  // ganti dengan link asli
    countdown: 10
  },
  {
    id: "aplikasi-b",
    name: "Nama Aplikasi B",
    description: "Deskripsi singkat tentang aplikasi kedua. Bisa berupa tool, game, atau dokumen.",
    category: "Tool",
    size: "12 MB",
    downloads: "8.1K",
    os: "Windows / Mac",
    filename: "NamaAplikasiB_v1.0.zip",
    downloadUrl: "https://link-download-kamu.com/file-b.zip",  // ganti dengan link asli
    countdown: 15
  },
  {
    id: "nov4oy8e8c",
    name: "Bikin Konten Ngentot Bareng Suami Tetangga",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "36.2 MB",
    downloads: "09:28",
    os: ".mp4",
    filename: "Bkn Kntn Ngntt Brng Sum Ttngg.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Bkn.Kntn.Ngntt.Brng.Sm.Ttngg.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "z9h5xzpzjr",
    name: "Pasangan Remaja Kepergok Mesum Didalam Rental PS",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "18.7 MB",
    downloads: "02:05",
    os: ".mp4",
    filename: "Psngn Rmj Kprgk Msm Ddlm Rntl PS.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Psngn.Rmj.Kprgk.Msm.Ddlm.Rntl.PS.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "blpk4fz1wj",
    name: "Hijaber Cantik Dan Menawan Colmek Mantap Sekali",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "xJilbab Video",
    size: "67 MB",
    downloads: "09:11",
    os: ".mp4",
    filename: "Hjbr.Cntk.Dn.Mnwn.Clmk.Mntp.Skl.mp4",
    downloadUrl: "https://github.com/xjilbab-file/cdn/releases/download/v2026/Hjbr.Cntk.Dn.Mnwn.Clmk.Mntp.Skl.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "m8ddp2ile7",
    name: "Jilboobs Manis Susunya Gede Menggoda",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "xJilbab Video",
    size: "25.9 MB",
    downloads: "04:17",
    os: ".mp4",
    filename: "Jlbbs.Mns.Ssny.Gd.Mnggd.mp4",
    downloadUrl: "https://github.com/xjilbab-file/cdn/releases/download/v2026/Jlbbs.Mns.Ssny.Gd.Mnggd.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "g6h471vkia",
    name: "Fantasi Liar Hijaber Semok Tobrut Omek Hot",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "xJilbab Video",
    size: "12.7 MB",
    downloads: "01:57",
    os: ".mp4",
    filename: "Fnts.Lr.Hjbr.Smk.Tbrt.Omk.Ht.mp4",
    downloadUrl: "https://github.com/xjilbab-file/cdn/releases/download/v2026/Fnts.Lr.Hjbr.Smk.Tbrt.Omk.Ht.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "sin5we3sdc",
    name: "Aksi Panas Hijaber Kebaya Hitam",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "xJilbab Video",
    size: "37.3 MB",
    downloads: "09:00",
    os: ".mp4",
    filename: "Aks.Pns.Hjbr.Kby.Htm.mp4",
    downloadUrl: "https://github.com/xjilbab-file/cdn/releases/download/v2026/Aks.Pns.Hjbr.Kby.Htm.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "hbtp496vft",
    name: "Konten Murid SMA Berjilbab Dientot Gurunya",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "xJilbab Video",
    size: "65.3 MB",
    downloads: "10:27",
    os: ".mp4",
    filename: "Kntn.Mrd.SM.Brjlbb.Dntt.Grny.mp4",
    downloadUrl: "https://github.com/xjilbab-file/cdn/releases/download/v2026/Kntn.Mrd.SM.Brjlbb.Dntt.Grny.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "39csabwozr",
    name: "Nikmatnya Ngewe Adek Ipar Bikin Lupa Diri",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "22.6 MB",
    downloads: "02:08",
    os: ".mp4",
    filename: "Nkmtny.Ngw.Adk.Ipr.Bkn.Lp.Dr.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Nkmtny.Ngw.Adk.Ipr.Bkn.Lp.Dr.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "cimgdh7jc8",
    name: "Cewek Cakep Pentil Dan Pepeknya Pink Colmek",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "22.8 MB",
    downloads: "05:22",
    os: ".mp4",
    filename: "Cwk.Ckp.Pntl.Dn.Ppkny.Pnk.Clmk.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Cwk.Ckp.Pntl.Dn.Ppkny.Pnk.Clmk.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "gut2tery58",
    name: "Abg Hyper Suka Banget Dianal Pacarnya",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "69.7 MB",
    downloads: "27:41",
    os: ".mp4",
    filename: "Abg.Hypr.Sk.Bngt.Dnl.Pcrny.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Abg.Hypr.Sk.Bngt.Dnl.Pcrny.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "z6toqzyt5v",
    name: "Abg Manis Berkacamata Memeknya Bikin Kontol Cepat Crot",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "11.4 MB",
    downloads: "02:00",
    os: ".mp4",
    filename: "Abg.Mns.Brkcmt.Mmkny.Bkn.Kntl.Cpt.Crt.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Abg.Mns.Brkcmt.Mmkny.Bkn.Kntl.Cpt.Crt.mp4",  // ganti dengan link asli
    countdown: 20
  },
];
