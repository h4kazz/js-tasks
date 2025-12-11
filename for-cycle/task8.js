"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("How many runners attended? "));

const times = [];
let sum = 0;

for (let i = 1; i <= n; i++) {
    const time = parseInt(prompt(`Enter ${i} runner time: `));
    times.push(time);
}

for (const value of times) {
    sum += value;
}

const minTime = Math.min(...times);

const average = sum / n;

console.log(`Fastest runner time: ${minTime}`);
console.log(`He was ${average - minTime} faster than average.`);

