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
  document.getElementById("highscore").textContent = highScore
  //! TEBAKAN BELUM DI INPUT NO / TIDAK MEMILIKI INPUT NO
  if (!tebakan) { 
    document.getElementById("pesan").textContent = `Tidak ada angka`;
  //! KETIKA TEBAKAN LEBIH BESAR
  }else if(tebakan > secretNumber){
    document.getElementById("pesan").textContent = `Kejauhan ai kamu`
    score--
  //! KETIKA TEBAKAN LEBIH KECIL
  }else if(tebakan < secretNumber){
    document.getElementById("pesan").textContent = `Kekecilan ih yang kamu mah`
    score--
  //! KETIKA PEMAIN BENAR MENEBAK
  }else if (tebakan === secretNumber) {
    document.getElementById("pesan").textContent = `SELAMAT KAMU DAPAT BAMBU RUNCING`;
    document.querySelector("body").style.backgroundColor = "rgba(255, 0, 0.75)";
    document.getElementById("highscore").textContent = score
  }
  document.getElementById("score").textContent = score
}

 

);
