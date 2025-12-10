"use strict";
const prompt = require("prompt-sync")();

const steps = parseInt(prompt("Input steps count to school: "));

let clapCount = 0;
let clickCount = 0;

for (let i = 1; i <= steps; i++) {
    if (i % 5 === 0) {
        if (i % 10 === 0) {
            clapCount++
        } else clickCount++
    }
}

console.log(`Claps count until student reaches school: ${clapCount}`);
console.log(`Clicks count until student reaches school: ${clickCount}`);

