"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("How many christams trees delivered? "));

let sum = 0;

for (let i = 1; i <= n; i++) {
    const height = parseInt(prompt(`Enter ${i} tree height: `));
    sum += height;
}

const average = (sum / n).toFixed(2);

console.log(`Christmas trees average height: ${average}`);
