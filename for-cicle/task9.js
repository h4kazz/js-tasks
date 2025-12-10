"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("How many items buy Petriukas will buy? "));

let totalPrice = 0;
let totalWeight = 0;

for (let i = 0; i < n; i++) {
    const price = parseInt(prompt(`${i + 1} item price: `));
    const weight = parseInt(prompt(`${i + 1} item weight: `));

    totalPrice += price;
    totalWeight += weight;
}

const  averagePrice = totalPrice / n;
const litoDalis = Math.floor(averagePrice / 100);
const centuDalis = averagePrice % 100;

const result = totalWeight >= 5000 ? "Petriukas will be able to carry products." : "Petriukas unable to carry products."

console.log(`Product average price: ${litoDalis} Lt ${centuDalis} ct`);
console.log(result);