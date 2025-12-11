"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("Iveskite kauliuku kiek: "));

let result;
let sum = 0;

for (let i = 1; i <= n; i++) {
    const points = parseInt(prompt(`${i}-o kauliuko tasku kiekis: `));
    sum += points;
}

const maxAvailablePoints = n * 6;
const averagePoints = sum / n;

if (maxAvailablePoints / 2 < sum) {
    console.log("Loterija laimeta!");
} else {
    console.log("Loterija pralaimeta :(");
}
