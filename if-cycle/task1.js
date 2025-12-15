"use strict";
const prompt = require("prompt-sync")();

console.log("Iveskite dienu temperaturas (0 - pabaiga):");

let days = 0;
let maxChange = 0;
let isFirst = true;
let prevTemp;

while(true) {
    let temp = parseFloat(prompt());

    if (temp === 0) {
        break;
    }

    if (isFirst) {
        prevTemp = temp;
        isFirst = false;
    } else {
        let change = temp - prevTemp;

        let sign = change > 0 ? "+" : "-";
        console.log(`(${sign}${change.toFixed(1)})`);

        if (Math.abs(change) > maxChange) {
            maxChange = Math.abs(change)
        }

        prevTemp = temp;
        
    }

    days++
}

console.log("--------------");
console.log(`Dienu skaicius: ${days}`);
console.log(`Didziausias temperaturos pokytis: ${maxChange.toFixed(1)}`);

