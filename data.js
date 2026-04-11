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
    id: "dokumen-c",
    name: "Nama Dokumen C",
    description: "Deskripsi dokumen ini. Misalnya ebook, template, atau file PDF panduan.",
    category: "Dokumen",
    size: "3.2 MB",
    downloads: "5.7K",
    os: "Semua platform",
    filename: "NamaDokumenC.pdf",
    downloadUrl: "https://link-download-kamu.com/dokumen-c.pdf",  // ganti dengan link asli
    countdown: 10
  }
];
