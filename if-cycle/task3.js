"use strict";
const prompt = require("prompt-sync")();

const friendCount = parseInt(prompt("Kiek draugu vaziavo i kelione? "));
const weightPrice = parseFloat(prompt("Kokia vieno kilogramo kaina? "));

let friend = 0;
let sum = 0;

if (friendCount < 1) {
  throw new Error("Impossible to calcualte when 0 or negative input.");
} else {
  while (friend < friendCount) {
    let weight = parseFloat(
      prompt(`Kiek sveria ${friend + 1} draugo lagaminas? `)
    );
    sum += weight;
    friend++;
  }
}

const result = sum * weightPrice;

console.log(`Vaziavo ${friendCount}`);
console.log(`Draugams teks sumoketi ${result} Lt uz bagaza.`);

