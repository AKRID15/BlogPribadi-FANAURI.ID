const postsData = [
  { id: 1, title: "Post 1: Harapan di MK Basis Data", img: "img/harapanMK.png" },
  { id: 2, title: "Post 2: Basis Data", img: "img/BASISDATA.PNG" },
  { id: 3, title: "Post 3: Conceptual Database", img: "img/KONSEPTIALDB.png" },
  { id: 4, title: "Post 4: Physical Model", img: "img/pysicalmodel.png" }
];

const detailContent = {
  1: `<h2>Harapan di MK Basis Data</h2>
      <p>Saya berharap setelah mengikuti mata kuliah Basis Data saya mampu merancang dan mengimplementasikan struktur data yang rapi untuk aplikasi nyata. 
      Secara spesifik saya ingin dapat membuat ER diagram yang benar, melakukan normalisasi untuk menghindari redudansi, menulis query SQL dasar hingga menengah, serta memahami konsep transaksi dan integritas data agar aplikasi yang saya buat aman dan konsisten.</p>`,

  2: `<h2>Apa itu Basis Data</h2>
      <p><b>Definisi:</b> Basis data adalah kumpulan data yang terorganisir dan saling berhubungan, yang disimpan secara sistematis dalam komputer sehingga dapat diakses, dikelola, dan diperbarui dengan mudah.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Tersusun secara terstruktur.</li>
        <li>Memiliki hubungan antar data (relasi).</li>
        <li>Dikelola oleh sistem manajemen basis data (DBMS).</li>
        <li>Mendukung keamanan, integritas, dan konsistensi data.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menyimpan data secara efisien.</li>
        <li>Mengelola akses data banyak pengguna sekaligus.</li>
        <li>Memudahkan pencarian, pengeditan, dan penghapusan data.</li>
        <li>Mengurangi redundansi data (pengulangan).</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Meningkatkan kecepatan akses informasi.</li>
        <li>Menjaga kualitas dan konsistensi data.</li>
        <li>Mendukung pengambilan keputusan.</li>
        <li>Menyediakan data yang aman dan terkontrol.</li>
      </ul>
      <p><b>Contoh:</b> Basis data akademik universitas yang menyimpan data mahasiswa, dosen, mata kuliah, serta nilai.</p>`,

  3: `<h2>Apa itu Conceptual Database (Model Konseptual)</h2>
      <p><b>Definisi:</b> Model konseptual basis data adalah representasi abstrak dari struktur data yang menunjukkan entitas, atribut, dan hubungan antar entitas, biasanya divisualisasikan dengan diagram ER (Entity Relationship).</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat abstrak (belum teknis).</li>
        <li>Fokus pada “apa” data yang dibutuhkan, bukan “bagaimana” data disimpan.</li>
        <li>Menggunakan simbol, diagram, dan notasi untuk menggambarkan relasi.</li>
        <li>Tidak tergantung pada perangkat lunak DBMS tertentu.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menjadi rancangan awal sebelum implementasi basis data.</li>
        <li>Menggambarkan kebutuhan informasi pengguna.</li>
        <li>Memudahkan komunikasi antara analis sistem, desainer, dan pengguna.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Mengurangi kesalahan saat implementasi database.</li>
        <li>Mempermudah dokumentasi sistem.</li>
        <li>Memberikan gambaran jelas tentang hubungan antar data.</li>
      </ul>
      <p><b>Contoh:</b> Diagram ER untuk sistem rumah sakit yang menggambarkan entitas Pasien, Dokter, Poli, dan Rekam Medis, serta hubungan antar entitas tersebut.</p>`,

  4: `<h2>Apa itu Physical Model (Model Fisik)</h2>
      <p><b>Definisi:</b> Model fisik basis data adalah rancangan teknis yang menjelaskan bagaimana data akan disimpan secara nyata dalam DBMS, termasuk struktur tabel, tipe data, indeks, partisi, dan relasi antar tabel.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat teknis dan detail.</li>
        <li>Menentukan tabel, kolom, tipe data, primary key, foreign key.</li>
        <li>Bergantung pada DBMS yang digunakan (misalnya MySQL, Oracle, PostgreSQL).</li>
        <li>Siap diimplementasikan ke dalam sistem database.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menentukan struktur penyimpanan data yang optimal.</li>
        <li>Menjamin integritas data dengan aturan (constraint).</li>
        <li>Mendukung efisiensi query dan performa sistem.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Memastikan sistem database berjalan efektif dan efisien.</li>
        <li>Mempermudah pemeliharaan dan pengembangan database.</li>
        <li>Mengoptimalkan penyimpanan dan akses data.</li>
      </ul>
      <p><b>Contoh:</b> Pada sistem akademik, tabel Mahasiswa dengan atribut:
        <ul>
          <li>NIM (VARCHAR, Primary Key)</li>
          <li>Nama (VARCHAR)</li>
          <li>Tanggal_Lahir (DATE)</li>
          <li>Prodi (VARCHAR)</li>
        </ul>
        serta relasi dengan tabel Mata_Kuliah dan Nilai.
      </p>`
};

function renderPosts(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = postsData.map(post => `
    <div class="post" onclick="showDetail(${post.id}, '${post.img}')">
      <img src="${post.img}" alt="${post.title}">
      <h2>${post.title}</h2>
    </div>
  `).join("");
}

function showDetail(id, imgUrl) {
  document.getElementById("detail").style.display = "block";
  document.getElementById("detail").innerHTML = `
    <a class="back-btn" onclick="goBack()">← Kembali</a>
    <img src="${imgUrl}" alt="Gambar Post">
    ${detailContent[id]}
  `;
  document.getElementById("home").style.display = "none";
  document.getElementById("profilePosts").style.display = "none";
}

function goBack() {
  if (lastSection === "profilePosts") {
    showSection("profilePosts");
  } else {
    showSection("home");
  }
}

let lastSection = "home";

function showSection(section) {
  document.getElementById("home").style.display = section === "home" ? "grid" : "none";
  document.getElementById("profilePosts").style.display = section === "profilePosts" ? "block" : "none";
  document.getElementById("detail").style.display = "none";
  lastSection = section;
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

function toggleDarkMode(btn) {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  btn.textContent = isDark ? "☀️" : "🌙";
  document.getElementById("toggleMode").textContent = btn.textContent;
  document.getElementById("toggleModeMobile").textContent = btn.textContent;
}

document.getElementById("toggleMode").addEventListener("click", function() { toggleDarkMode(this); });
document.getElementById("toggleModeMobile").addEventListener("click", function() { toggleDarkMode(this); });

renderPosts("home");
renderPosts("profilePostsList");

