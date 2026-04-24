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
  {
    id: "thx12ddu72",
    name: "Bercinta Sekuat Tenaga Dengan Tante Chindo Hyper",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "28.3 MB",
    downloads: "09:03",
    os: ".mp4",
    filename: "Brcnt.Skt.Tng.Dngn.Tnt.Chnd.Hypr.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Brcnt.Skt.Tng.Dngn.Tnt.Chnd.Hypr.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "g82j9lwu4y",
    name: "Bergiliran Crotin Pejuh Kental Diwajah Tante",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "35 MB",
    downloads: "02:19",
    os: ".mp4",
    filename: "Brglrn.Crtn.Pjh.Kntl.Dwjh.Tnt.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Brglrn.Crtn.Pjh.Kntl.Dwjh.Tnt.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "id file",
    name: "Crot Pejuh Kental Didalam Memek Tante Salon",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "13.4 MB",
    downloads: "02:16",
    os: ".mp4",
    filename: "Crt.Pjh.Kntl.Ddlm.Mmk.Tnt.Sln.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Crt.Pjh.Kntl.Ddlm.Mmk.Tnt.Sln.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "0dsanghaws",
    name: "DJ Joyce Viral",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "35.1 MB",
    downloads: "07:09",
    os: ".mp4",
    filename: "DJ.Jyc.Vrl.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/DJ.Jyc.Vrl.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "qy45di1sp2",
    name: "Driver Ojek Online Vs Bule Bali",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "72.4 MB",
    downloads: "17:25",
    os: ".mp4",
    filename: "Drvr.Ojk.Onln.Vs.Ble.Bli.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Drvr.Ojk.Onln.Vs.Ble.Bli.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "xwwyf2wbv3",
    name: "Fefek Abg Belia Bikin Sangne",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "13.6 MB",
    downloads: "01:32",
    os: ".mp4",
    filename: "Ffk.Abg.Bl.Bkn.Sngn.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Ffk.Abg.Bl.Bkn.Sngn.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "xdp19je27b",
    name: "Janda Binal Digilir Dua Lelaki Muda",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "38.2 MB",
    downloads: "04:28",
    os: ".mp4",
    filename: "Jnd.Bnl.Dglr.2.Llk.Md.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Jnd.Bnl.Dglr.2.Llk.Md.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "756q493pvb",
    name: "Nyamannya Besakian Dengan Janda Muda Tobrut",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "14.9 MB",
    downloads: "01:48",
    os: ".mp4",
    filename: "Nymnnya.bskn.Dngn.Jnd.Md.Tbrt.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Nymnnya.bskn.Dngn.Jnd.Md.Tbrt.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "i4yo1ocyc1",
    name: "Tante Pulen Berhijab Asik Colmek Dibawah Pohon",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "5.5 MB",
    downloads: "02:01",
    os: ".mp4",
    filename: "Tnt.Pln.Brhjb.Ask.Clmk.Dbwh.Phn.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Tnt.Pln.Brhjb.Ask.Clmk.Dbwh.Phn.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "01m38c31bm",
    name: "Tante Semok Digenjot Sampai Terkentut Kentut",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "10.4 MB",
    downloads: "01:03",
    os: ".mp4",
    filename: "Tnt.Smk.Dgnjt.Smpi.Trkntt.Kntt.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Tnt.Smk.Dgnjt.Smpi.Trkntt.Kntt.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "5klijx3i1a",
    name: "Viral Karyawati Warung Dilecehkan Paksa Bosnya",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "9.27 MB",
    downloads: "01:29",
    os: ".mp4",
    filename: "Vrl.Krywti.Wrng.Dlchkn.Pks.Bsny.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Vrl.Krywti.Wrng.Dlchkn.Pks.Bsny.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "aqgjetox2d",
    name: "Tante Kesepian Ngocokin Kontol Sampai Crot",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "26.1 MB",
    downloads: "03:46",
    os: ".mp4",
    filename: "Tnt.Kspn.Ngckn.Kntl.Smp.Crt.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Tnt.Kspn.Ngckn.Kntl.Smp.Crt.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "h4izxvpuea",
    name: "Digoyang Pacar Semok Tembam Didalam Mobil",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "7.52 MB",
    downloads: "02:04",
    os: ".mp4",
    filename: "Dgyng.Pcr.Smk.Tmbm.Ddlm.Mbl.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Dgyng.Pcr.Smk.Tmbm.Ddlm.Mbl.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "v6q6wkdfud",
    name: "Tante Endut Diewe Dua Pemuda Liar",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "22.6 MB",
    downloads: "03:40",
    os: ".mp4",
    filename: "Tnt.Endt.Dw.D.Pmd.Lr.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Tnt.Endt.Dw.D.Pmd.Lr.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "z3vx8e08s3",
    name: "Jilmekin Janda Hyper Sampai Terkencing Kencing",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "16 MB",
    downloads: "05:23",
    os: ".mp4",
    filename: "Jlmkn.Jnd.Hypr.Smp.Trkncng.Kncng.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Jlmkn.Jnd.Hypr.Smp.Trkncng.Kncng.mp4",  // ganti dengan link asli
    countdown: 20
  },
  {
    id: "6fdo2ryx8h",
    name: "Skandal Viral Bandar Batang Membara",
    description: "Jika file tidak bisa terdownload, Silahkan hapus cache browser anda terlebih dahulu dan klik kembali tombol downloadnya!",
    category: "IndoXvX Video",
    size: "43 MB",
    downloads: "12:18",
    os: ".mp4",
    filename: "Skndl.Vrl.Bndr.Btng.Mmbr.mp4",
    downloadUrl: "https://github.com/indoxvx-file/cdn/releases/download/v2026/Skndl.Vrl.Bndr.Btng.Mmbr.mp4",  // ganti dengan link asli
    countdown: 20
  },
];
