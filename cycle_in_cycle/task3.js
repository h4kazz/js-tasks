"use strict";
const prompt = require("prompt-sync")();

const racerCount = parseInt(prompt("Iveskite lenktynininku skaiciu: "));

let racerId = 1;
let minFuel = Infinity;
let bestRacer = 0;

while (racerId <= racerCount) {
    let totalRounds = parseInt(prompt(`Kiek ratu ${racerId} lenktyninkas nuvaziavo? `));
    let round = 0;
    let sum = 0;

    while (round < totalRounds) {
        let fuel = parseInt(prompt(`Kiek degalu sunaudojo per ${round + 1} rata? `));
        round++;
        sum += fuel;
    }
    let usedFuel = sum / totalRounds;

    if (usedFuel < minFuel) {
    minFuel = usedFuel;
    bestRacer = racerId;
}
    racerId++
}

console.log(`Maziausiai degalu sunaudojo ${bestRacer} lenktyninkas.`);
