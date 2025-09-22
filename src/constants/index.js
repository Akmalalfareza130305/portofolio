export const myProjects = [
  {
    id: 1,
    title: "Website Profil Sekolah – SDN Merakaan 02 Lumajang",
    description:
      "Landing page / profil sekolah resmi untuk SDN Merakaan 02 Lumajang, dibangun dengan Laravel 10.",
    subDescription: [
      "Menampilkan profil sekolah, visi-misi, berita kegiatan, dan galeri foto.",
      "Dibangun menggunakan Laravel 10 dengan Blade Template & Bootstrap.",
      "Fitur manajemen konten sederhana agar guru dapat menambah berita dan pengumuman.",
      "Optimasi SEO dasar dan struktur halaman responsif untuk perangkat mobile.",
    ],
    href: "https://github.com/Akmalalfareza130305/Website-sekolah",
    logo: "",
    image: "/assets/projects/sdn-merakan02.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "Bootstrap 5",
        path: "/assets/logos/bootstrap5.svg",
      },
      {
        id: 3,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
      { id: 4, name: "Figma", path: "/assets/logos/figma.svg" },
    ],
  },
  {
    id: 2,
    title: "Personal Portfolio (React + Vite)",
    description:
      "Portofolio interaktif dengan animasi halus dan elemen 3D. Dibangun dengan React + Vite, Tailwind CSS, Framer Motion, dan Three.js (react-three-fiber).",
    subDescription: [
      "Animasi UI memakai Framer Motion (hero, cards, modal).",
      "3D scene sederhana menggunakan Three.js via react-three-fiber & @react-three/drei.",
      "Routing halaman memakai React Router.",
      "Form kontak terhubung ke EmailJS."
    ],
    href: "https://github.com/Akmalalfareza130305/portofolio",
    logo: "",
    image: "/assets/projects/portfolio-react-vite.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 5, name: "Three.js", path: "/assets/logos/threejs.svg" },
      { id: 7, name: "EmailJS", path: "/assets/logos/emailjs.png" }
    ]
  },
  {
    id: 3,
    title: "WBS Daring / Pengaduan Publik (Laravel 11)",
    description:
      "Sistem pelaporan & penanganan pengaduan berbasis web dengan alur verifikasi, tindak lanjut, dan notifikasi.",
    subDescription: [
      "Stack: Laravel 11, Blade/bootstrap, MySQL.",
      "Fitur: form pengaduan + upload bukti, kode unik/QR, status (baru, verifikasi, proses, selesai), notifikasi email.",
      "Admin: dashboard ringkas, filter status/OPD, log aktivitas, ekspor CSV/PDF."
    ],
    href: "https://github.com/Akmalalfareza130305/pengaduan-app",
    logo: "",
    image: "/assets/projects/wbs-laravel11.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "Bootstrap 5",
        path: "/assets/logos/bootstrap5.svg",
      },
      {
        id: 3,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
      { id: 4, name: "Figma", path: "/assets/logos/figma.svg" },
    ],
  },
  {
    id: 4,
    title: "E-Learning & Profil Les Lesan",
    description:
      "Platform e-learning + profil lembaga les (landing page, manajemen materi, video, pengajar, berita).",
    subDescription: [
      "Modul: AdminAuth, Pengajar, Kategori, Berita/Blog, Video (YouTube/TikTok embed).",
      "CRUD penuh dengan validasi, pencarian, dan pagination.",
      "Blade + Tailwind, komponen reusable, layout admin (NiceAdmin).",
      "Struktur rapi siap dikembangkan ke kelas berbayar/kuota siswa."
    ],
    href: "https://github.com/Akmalalfareza130305/sistem_elearning",
    logo: "",
    image: "/assets/projects/elearning-lesson-profile.png",
    tags: [
     {
        id: 1,
        name: "Laravel",
        path: "/assets/logos/laravel.svg",
      },
      {
        id: 2,
        name: "Bootstrap 5",
        path: "/assets/logos/bootstrap5.svg",
      },
      {
        id: 3,
        name: "Mysql",
        path: "/assets/logos/mysql.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6283829842041",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@akmal_web.development?lang=id-ID",
    icon: "/assets/socials/tiktok-svgrepo-com (1).svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/akmal_web.development/",
    icon: "/assets/socials/instagram.svg",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@akmal_web.development",
    icon: "/assets/socials/threads-white-icon.svg",
  },
  
];

export const experiences = [
  {
    title: "Siswa SD",
    job: "MI Banjarwaru, Lumajang",
    date: "2011-2017",
    contents: [
      "Menyelesaikan pendidikan dasar dengan fokus pada ilmu umum dan dasar agama.",
      "Aktif mengikuti kegiatan sekolah dan organisasi kecil di tingkat MI.",
    ],
  },
  {
    title: "Siswa MTs",
    job: "MTsN Lumajang",
    date: "2017-2020",
    contents: [
       "Mengembangkan kemampuan akademik serta memperdalam ilmu agama.",
      "Ikut serta dalam kegiatan ekstrakurikuler dan organisasi sekolah.",
    ],
  },
  {
    title: "Siswa SMA – Jurusan MIPA",
    job: "MAN Lumajang",
    date: "2020-2023",
    contents: [
      "Mendalami bidang Matematika, Fisika, Kimia, dan Biologi.",
      "Aktif mengikuti kegiatan ilmiah serta organisasi sekolah.",
      "Menumbuhkan minat di bidang teknologi dan sains.",
    ],
  },
   {
    title: "Mahasiswa D3 – Teknologi Informasi",
    job: "POLINEMA – PSDKU Lumajang",
    date: "2023-Sekarang",
    contents: [
      "Sedang menempuh Semester 5 di Program Studi D3 Teknologi Informasi.",
      "Fokus pada pengembangan perangkat lunak, basis data, jaringan, dan sistem informasi.",
      "Mengerjakan berbagai project nyata: WBS Daring, Sistem E-Learning, dan Simwas.",
    ],
  },
];
export const reviews = [
  {
    name: "Rizky Pratama",
    username: "@rizkypratama",
    body: "Mantap banget kerja bareng, hasilnya rapih dan kece abis. Puas pol! 🚀",
    img: "https://robohash.org/jack",
  },
  {
     name: "Dewi Anggraini",
    username: "@dewiang",
    body: "Prosesnya enak, komunikatif, dan hasil project lebih dari ekspektasi. Keren parah 🔥",
    img: "https://robohash.org/jill",
  },
  {
   name: "Andi Saputra",
    username: "@andisaputra",
    body: "Fast respon, solusi kreatif, desainnya modern banget. Respect! 🙌",
    img: "https://robohash.org/john",
  },
  {
     name: "Siti Nurhaliza",
    username: "@sitinur",
    body: "Profesional tapi tetep santai. Hasil akhirnya bikin usaha aku keliatan lebih elegan ✨",
    img: "https://robohash.org/alice",
  },
  {
      name: "Bima Aditya",
    username: "@bimaadit",
    body: "Kerja sama sama Akmal tuh kayak ngobrol sama temen, tapi hasilnya kualitas pro 😎",
    img: "https://robohash.org/bob",
  },
  {
  name: "Nadia Putri",
    username: "@nadiaputri",
    body: "Recommended banget! Detail, rapih, dan gak ribet. Puas banget sama hasilnya 👍",
    img: "https://robohash.org/charlie",
  },
  {
     name: "Fajar Kurniawan",
    username: "@fajarkur",
    body: "Asli gak nyesel, hasil websitenya bikin bisnis keliatan lebih profesional 🔑",
    img: "https://robohash.org/dave",
  },
  {
    name: "Melisa Anjani",
    username: "@melisanjani",
    body: "Kualitas top markotop, pelayanan oke, recommended parah! 🌟",
    img: "https://robohash.org/eve",
  },
];
