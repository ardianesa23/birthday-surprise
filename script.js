function bukaHadiah() {
  document.querySelector(".hero").innerHTML = `
    <h1>Untuk Liliana Nur Hanifah 🤍</h1>

    <p>
    Selamat ulang tahun sayangku 🤍<br><br>
    Terima kasih sudah hadir dan menjadi seseorang yang spesial.
    Semoga di umur yang baru ini kamu selalu diberikan kebahagiaan,
    kesehatan, dan semua impian kamu bisa tercapai.
    </p>

    <h2>Love you 🤍</h2>
  `;

  buatHati();
}

function buatHati() {
  setInterval(() => {
    let hati = document.createElement("div");
    hati.innerHTML = "🤍";

    hati.style.position = "fixed";
    hati.style.left = Math.random() * 100 + "vw";
    hati.style.bottom = "-20px";
    hati.style.fontSize = "25px";
    hati.style.animation = "naik 5s linear";

    document.body.appendChild(hati);

    setTimeout(() => {
      hati.remove();
    }, 5000);

  }, 300);
}
