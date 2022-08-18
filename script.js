"use strict";

let secretNumber = Math.trunc(Math.random() * 25);
// console.log(secretNumber);
let score = 10;
let highScore = 0;

// const displayPesan = function (pesan) {
//   document.querySelector("#pesan").textContent = pesan;
// };

document.querySelector(".tebak").addEventListener("click", function () {
  const tebakan = Number(document.querySelector(".bigger-box").value);
  //   console.log(tebakan, typeof tebakan);

  if (!tebakan) {
    document.getElementById("pesan").textContent = `Tidak ada angka`;

    // KETIKA PEMAIN BENAR MENEBAK
  } else if (tebakan === secretNumber) {
    document.getElementById(
      "pesan"
    ).textContent = `SELAMAT KAMU DAPAT BAMBU RUNCING`;
    document.querySelector("body").style.backgroundColor = "rgba(255, 0, 0.75)";
  }
});
