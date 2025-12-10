"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("Iveskite kauliuku kiek: "));
const allPoints = [];
let sum = 0;

for (let i = 1; i <= n; i++) {
    const points = parseInt(prompt(`${i}-o kauliuko tasku kiekis: `));
    allPoints.push(points);
}