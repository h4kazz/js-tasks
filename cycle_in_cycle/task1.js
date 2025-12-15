"use strict";
const prompt = require("prompt-sync")();

let a = parseInt(prompt("Iveskite intervalo pradzia: "));
let b = parseInt(prompt("Iveskite intervalo pabaiga: "));

let num = a;

while (num < b) {
  let divisor = 2;
  let count = 0;

  while (divisor < num) {
    if (num % divisor === 0) {
      count++;
    }

    divisor++;
  }

  console.log(num, count);
  num++;
}
