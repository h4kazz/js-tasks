"use strict";
const prompt = require("prompt-sync")();

const playerCount = parseInt(prompt("Iveskite zaideju skaiciu: "));

let bestPlayer = 0;
let maxPoints = -1;
let player = 1;

while (player <= playerCount) {
    let points = 0;
    let roll;

    while (true) {
        roll = parseInt(prompt(`Iveskite ${player} zaidejo metimo rezultata: `));
        points += roll;

        if (roll % 2 !== 0) {
            break;
        }
    }

    if (points > maxPoints) {
        maxPoints = points;
        bestPlayer = player;
    }

    player++;
}

console.log(`Daugiausiai tasku surinko ${bestPlayer} zaidejas.`);
