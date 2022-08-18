"use strict";

let secretNumber = Math.trunc(Math.random() * 25);
let score = 10;
let highScore = 0;

document.querySelector(".tebak").addEventListener("click", function () {
  const tebakan = Number(document.querySelector(".bigger-box").value);
  //   console.log(tebakan, typeof tebakan);
  document.getElementById("highscore").textContent = highScore;

  //! TEBAKAN BELUM DI INPUT NO / TIDAK MEMILIKI INPUT NO
  if (!tebakan) {
    document.getElementById("pesan").textContent = `Tidak ada angka`;

    //! KETIKA TEBAKAN LEBIH BESAR
  } else if (tebakan > secretNumber && tebakan < 25) {
    document.getElementById("pesan").textContent = `Kejauhan ai kamu`;
    score--;

    //! KETIKA TEBAKAN LEBIH KECIL
  } else if (tebakan < secretNumber) {
    document.getElementById("pesan").textContent = `Kekecilan ih yang kamu mah`;
    score--;

    //! KETIKA PEMAIN BENAR MENEBAK
  } else if (tebakan === secretNumber) {
    document.getElementById(
      "pesan"
    ).textContent = `SELAMAT KAMU DAPAT BAMBU RUNCING`;
    document.querySelector("body").style.backgroundColor = "rgba(255, 0, 0.25)";
    document.getElementById("highscore").textContent = score;
    document.getElementById(
      ".secretnumber"
    ).textContent = `Nilainya adalah ${secretNumber}`;

    //! KETIKA PEMAIN INPUT LEBIH DARI 25
  } else if (tebakan > 25) {
    document.getElementById("pesan").textContent = `INGAT! MAKSIMAL 25 BUNG!`;
    document.querySelector("body").style.backgroundColor = "rgba(255, 255, 5)";

    document.querySelector(".secretnumber").textContent = secretNumber;

    document.getElementById("highscore").textContent = score;
  }

  //! KETIKA SCORE MENJADI 0
  if (score === 0) {
    document.getElementById(
      "pesan"
    ).textContent = `SAYANG SEKALI ANDA AKHIRNYA TEWAS!`;
    document.querySelector("body").style.backgroundColor = "rgba(100, 1, 5)";

    document.querySelector(".secretnumber").textContent = secretNumber;

    document.getElementById("highscore").textContent = score;
  }
  document.getElementById("score").textContent = score;
});
