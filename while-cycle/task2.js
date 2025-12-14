"use strict";
const prompt = require("prompt-sync")();

let t = parseInt(prompt("Kiek yra degalu bake? "));
const n = parseInt(prompt("Kokios kuro sanaudos? "));
let days = 0;

while(t > 0) {
    if (days % 2 === 0) {
        t -= (n * 2);
        days++;
    } else {
        t -= n;
        days++
    }
}

console.log(`Keliauti bus galima ${days} dienu.`);
