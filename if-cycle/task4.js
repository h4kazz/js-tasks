"use strict";
const prompt = require("prompt-sync")();

let pilotCount = 3;
let minSpeed = 35;
let i = 0;
let speed;
let winners = [];
let j = 0;

while(i < pilotCount) {
    let pilotSpeed = parseInt(prompt(`Iveskite ${i +1} piloto greiti: `));
    let endRace = parseInt(prompt("Jei finisavo iveskite - 1, jei ne - 0: "));

    if (endRace === 0) {
        speed = pilotSpeed * 0.8;
    } else {
        speed = pilotSpeed;
    }

    if (speed > minSpeed) {
        winners.push(speed);
        
    }

    i++;
};

while (j < winners.length) {
    console.log(winners[j]);
    j++;
}