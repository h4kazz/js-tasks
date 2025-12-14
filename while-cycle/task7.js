"use strict";
const prompt = require("prompt-sync")();

let score;
let gotInCarnaval = 0;
let triedTo = 0;

while(true) {
    score = parseInt(prompt("Iveskite kiek balu gavo mokinys? "));

    if (score === 0) {
        break;
    }

    if (score >= 5 && score <= 10) {
        gotInCarnaval++;
        triedTo++;
    } else {
        triedTo++
    }
}

console.log(`I karavala ejo ${triedTo} mokiniai, pateko ${gotInCarnaval}.`);