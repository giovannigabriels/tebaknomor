"use strict";

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 10;
let highScore = 0;

let play = true;

document.querySelector(".tebak").addEventListener("click", function () {
  const tebakan = Number(document.querySelector(".bigger-box").value);

  //! TEBAKAN BELUM DI INPUT NO / TIDAK MEMILIKI INPUT NO

  if (!tebakan && play) {
    document.getElementById("pesan").textContent = `Tidak ada angka`;

    //! KETIKA TEBAKAN LEBIH BESAR
  } else if (tebakan > secretNumber && play && tebakan <= 25) {
    document.getElementById("pesan").textContent = `Kejauhan ai kamu`;
    score--;
    document.getElementById("score").textContent = score;
    //! KETIKA TEBAKAN LEBIH KECIL
  } else if (tebakan < secretNumber && play) {
    document.getElementById("pesan").textContent = `Kekecilan ih yang kamu mah`;
    score--;
    document.getElementById("score").textContent = score;
    //! KETIKA PEMAIN BENAR MENEBAK
  } else if (tebakan === secretNumber && play) {
    document.getElementById(
      "pesan"
    ).textContent = `SELAMAT KAMU DAPAT BAMBU RUNCING`;
    document.querySelector("body").style.backgroundColor = "rgba(255, 0, 0.25)";
    document.getElementById("highscore").textContent = score;
    document.getElementById(

      "secretnumber"
    ).textContent = `Angka adalah ${secretNumber}`;


    document.getElementById("score").textContent = score;
    if (score > highScore) {
      highScore = score;
      document.getElementById("highscore").textContent = highScore;

    } else {
        document.getElementById("highscore").textContent = highScore;
    }
  } else if (tebakan > 25) {
    document.getElementById("pesan").textContent = `INGAT! MAKSIMAL 25 BUNG!`;
   

    document.querySelector(".secretnumber").textContent = secretNumber;

    document.getElementById("highscore").textContent = score;
  }

  //! KETIKA SCORE MENJADI 0
  if (score === 0) {
    play = false;

    document.getElementById(
      "pesan"
    ).textContent = `SAYANG SEKALI ANDA AKHIRNYA TEWAS!`;



    document.getElementById("score").textContent = score;
    document.querySelector(".secretnumber").textContent = secretNumber;

    document.getElementById("highscore").textContent = score;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  document.getElementById("score").textContent = score;

  document.getElementById("secretnumber").textContent = "??";

  play = true;
  document.getElementById("pesan").textContent = "MULAI TEBAK...";
  document.getElementById("num").value = "";
});

