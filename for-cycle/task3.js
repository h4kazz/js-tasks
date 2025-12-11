"use strict";
const prompt = require("prompt-sync")();

const input = (prompt("Input how many snowfalls dropped during first second and for how long was snowing in seconds: "));
const inputArr = input.split(" ");
const arrNumber = inputArr.map(Number);

const k = arrNumber[0];
const n = arrNumber[1];

let current = k;
let total = 0;

for (let i = 1; i <= n; i++) {
    total += current;
    current *= 2;
}
console.log(`Dropped snowflakes count: ${total}`);
