"use strict";
const prompt = require("prompt-sync")();

const x = parseInt(prompt("Kiek sukaupe riesutu? "));
const v = parseInt(prompt("Voveriuku skaicius: "));

let nutsLeft = x;
let eats = (v + 1) * 3;
let days = 0;

while (nutsLeft >= eats) {
    nutsLeft = nutsLeft - eats;
    days++
}

console.log(`Sukaupe riesutu  ${days} dienoms`);

if (nutsLeft > 92) {
    console.log("Riesutu ziemai uzteks");
} else {
    console.log('Riesutu ziemai neuzteks');
}