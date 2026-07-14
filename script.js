const music = document.getElementById("bgMusic");

function bukaHadiah() {

    if (music.paused) {
        music.volume = 0.25;
        music.play().catch(err => console.log(err));
    }

    document.querySelector(".hero").innerHTML = `

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

<button class="pesan-btn" onclick="bukaGaleri()">
    Lihat Kenangan Kita 📸
</button>

`;

hero.classList.remove("keluar");
hero.classList.add("masuk");

}, 800);

}

function bukaGaleri() {

    const hero = document.querySelector(".hero");

    hero.classList.add("keluar");

    setTimeout(() => {

        hero.innerHTML = `

        <h1 class="nama">
            🤍 Our Memories 🤍
        </h1>

        <p class="ucapan">
            Di hari spesialmu ini,
aku ingin mengajakmu melihat kembali
beberapa momen yang pernah kita lalui bersama.

Semoga setiap foto ini bisa mengingatkanmu
betapa berharganya setiap cerita yang kita buat. 🤍

        </p>

        <div class="galeri">

            <img src="IMG-20250825-WA0023.jpg" onclick="bukaFoto(this)">
            <img src="IMG-20250831-WA0039.jpg" onclick="bukaFoto(this)">
            <img src="IMG-20250902-WA0013.jpg" onclick="bukaFoto(this)">
            <img src="IMG-20250906-WA0271.jpg" onclick="bukaFoto(this)">
            <img src="IMG-20251018-WA0020.jpg" onclick="bukaFoto(this)">
            <img src="IMG-20251101-WA0000.jpg" onclick="bukaFoto(this)">
            <img src="NARI STUDIO-00610.jpg" onclick="bukaFoto(this)">

        </div>

        <div id="lightbox" onclick="tutupFoto()">
            <img id="foto-besar">
        </div>

        <button class="pesan-btn" onclick="penutup()">
            Pesan Terakhir 🤍
        </button>

        `;

        hero.classList.remove("keluar");
        hero.classList.add("masuk");

    },800);

}

function penutup(){

    const hero = document.querySelector(".hero");

    hero.classList.add("keluar");

    setTimeout(()=>{

        hero.innerHTML = `

        <h1 class="nama">
            Terima Kasih 🤍
        </h1>

        <p class="pesan-akhir">

            Terima kasih sudah membuka hadiah kecil ini.

            <br><br>

            Mungkin sederhana,
            tapi semua yang ada di halaman ini
            kubuat dengan penuh rasa sayang.

            <br><br>

            Semoga di umur yang baru,
            kamu selalu sehat,
            bahagia,
            dimudahkan dalam segala urusan,
            dan semua impianmu perlahan menjadi nyata.

            <br><br>

            Happy Birthday Sayang 🤍

            <br><br>

            I Love You.

        </p>

        <div class="love-ending">
            🤍
        </div>

        <small>
            Made with 🤍 by Ardian
        </small>

       <div id="kejutanAkhir" style="display:none; margin-top:40px;">

    <p class="pesan-kejutan">
        Masih ada satu kalimat yang belum sempat aku ucapkan...
    </p>

    <button class="pesan-btn" onclick="akhirBanget()">
        Buka 🤍
    </button>

</div>

        hero.classList.remove("keluar");
        hero.classList.add("masuk");

setTimeout(() => {

    document.getElementById("kejutanAkhir").style.display = "block";

},3000);

    function akhirBanget(){

    const hero = document.querySelector(".hero");

    hero.classList.add("keluar");

    setTimeout(()=>{

        hero.innerHTML = `

        <h1 class="nama">
            Hello Sayangg 🤍
        </h1>

        <p class="pesan-akhir">

            Sampai jumpa di ulang tahunmu berikutnya.

            <br><br>

            Semoga saat itu,
            aku masih menjadi orang pertama
            yang mengucapkan selamat ulang tahun
            untukmu.

            <br><br>

            Terima kasih sudah menjadi
            bagian dari cerita hidupku.

            <br><br>

            I Love You,
            Sayang. 🤍

        </p>

        <div class="love-ending">
            🤍
        </div>

        <button class="pesan-btn" onclick="location.reload()">
            🎁 Ulangi Hadiah Ini
        </button>

        `;

        hero.classList.remove("keluar");
        hero.classList.add("masuk");

    },800);

}
