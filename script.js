function bukaHadiah() {
  document.querySelector(".hero").innerHTML = `

    <div class="hati-container">
      <span class="hati">🤍</span>
      <span class="hati">🤍</span>
      <span class="hati">🤍</span>
      <span class="hati">🤍</span>
      <span class="hati">🤍</span>
    </div>


    <img src="IMG-20251016-WA0006.jpg" class="foto">


    <h1 class="nama">
      Hello Liliana Nur Hanifah 🤍
    </h1>


    <p class="ucapan">
      Selamat ulang tahun, Sayangg 🤍<br><br>
      Semoga kamu selalu diberikan kesehatan,
      kebahagiaan, dan semua hal baik yang kamu impikan.<br><br>
      Terima kasih sudah menjadi seseorang yang
      sangat berarti dalam hidupku 🤍
    </p>


    <button class="pesan-btn" onclick="pesanTerakhir()">
      Ada satu pesan lagi 🤍
    </button>

  `;
}

function pesanTerakhir() {

  const hero = document.querySelector(".hero");

  // efek pindah halaman
  hero.classList.add("keluar");

  setTimeout(() => {

    hero.innerHTML = `

      <img src="3.jpg" class="foto foto-akhir">

      <h1 class="nama">
        Happy Birthday, Liliana Nur Hanifah 🤍
      </h1>

      <p class="pesan-akhir">

        Hari ini adalah hari dimana seseorang yang
        sangat berarti bagiku bertambah usia.<br><br>

        Aku bersyukur bisa mengenal kamu,
        bisa berbagi cerita, tertawa bersama,
        dan memiliki banyak momen yang berarti.<br><br>

        Terima kasih sudah hadir dalam hidupku,
        terima kasih sudah menjadi seseorang yang
        selalu membuat hari-hariku terasa lebih indah 🤍<br><br>

        Di umur yang baru ini, aku berharap kamu
        selalu diberikan kesehatan, kebahagiaan,
        dimudahkan dalam segala urusan,
        dan semua impian baikmu bisa tercapai.<br><br>

        Tetap jadi Liliana yang aku kenal,
        dengan senyum, kebaikan, dan caramu
        yang selalu membuat aku merasa beruntung
        bisa memilikimu.<br><br>

        Semoga aku masih bisa menjadi orang yang
        menemani perjalananmu, mendukungmu,
        dan melihat kamu bahagia 🤍<br><br>

        Sekali lagi, selamat ulang tahun sayangku.<br>
        Aku sayang kamu 🤍

      </p>

      <div class="hati-besar">
  🤍
</div>


<h2 class="judul-galeri">
  Kenangan kecil kita 🤍
</h2>


<div class="galeri">

  <img src="IMG-20250825-WA0023.jpg">
  <img src="IMG-20250931-WA0039.jpg">
  <img src="IMG-20250902-WA0013.jpg">
  <img src="IMG-20250906-WA0271.jpg">
  <img src="IMG-20251018-WA0020.jpg">
  <img src="IMG-20251101-WA0000.jpg">
  <img src="NARI STUDIO-00610.jpg">

</div>
