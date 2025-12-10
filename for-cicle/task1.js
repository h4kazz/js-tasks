"use strict";
const prompt = require("prompt-sync")();

const a = parseInt(prompt("Input start of the interval: "));
const b = parseInt(prompt("Input end of interval: "));

let count = 0;

for (let i = a; i <= b; i++) {
    if (i % 6 === 0) {
        count++
    }
}

console.log(`Count needed for t-shirts: ${count}`);
