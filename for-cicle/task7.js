"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("How many times did she jump? "))

let sum = 0;

for (let i = 1; i <= n; i++) {
    const jumps = parseInt(prompt(`How many times did she jump on ${i} try? `));
    sum += jumps;
}

const average = sum / n;

console.log(`Total jumps: ${sum}`);
console.log(`Average jumps: ${average}`);