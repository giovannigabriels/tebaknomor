"use strict";

let secretNumber = Math.trunc(Math.random() * 25) + 1;
let score = 10;
let highScore = 0;
let user = "";
let loc = "";

let play = true;
let login = document.getElementById("login");

login.addEventListener("click", function () {
  user = document.getElementById("user").value;
  loc = document.getElementById("loc").value;
  document.querySelector(".page1").style.display = "none";
  document.querySelector(".page2").style.display = "block";
  console.log(user, loc);
});

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
// console.log(user, loc);
document.getElementById("reset").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  document.getElementById("score").textContent = score;

  document.getElementById("secretnumber").textContent = "??";

  play = true;
  document.getElementById("pesan").textContent = "MULAI TEBAK...";
  document.getElementById("num").value = "";
  document.getElementById("report").innerText = "";
});

document.getElementById("claim").addEventListener("click", function () {
  document.getElementById("report").innerText = `${user} ${highScore}`;
  document.getElementById("report").style.display = "block";
});

document.querySelector("#edit").addEventListener("click", function () {
  // console.log("<<<<user, loc>>>>");
  document.querySelector(".editnama").style.display = "block";
});

document.querySelector("#submitedit").addEventListener("click", function () {
  user = document.querySelector("#edituser").value;
  document.querySelector(".editnama").style.display = "none";
  highScore = 0;
  document.querySelector("#highscore").textContent = highScore;
  document.getElementById("report").style.display = "none";
  document.getElementById("num").value = "";
  score = 10;
  document.getElementById("score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 25) + 1;
  document.getElementById("secretnumber").textContent = "??";
});
