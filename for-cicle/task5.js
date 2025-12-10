"use strict";
const prompt = require("prompt-sync")();

console.log("Input the number your friends have come up with: ");

let count = 10;
const numbers = [];
let numberCount = 0;

for (let i = 0; i < 10; i++) {
    const value = parseInt(prompt(" "));
    numbers.push(value);
}

for (let value in numbers) {
    if (value % 2 === 0) {
        numberCount++
    }
}

if (numberCount === 0) {
    console.log("Not found!");   
} else {
    console.log(`The answer: ${numberCount}`);
}