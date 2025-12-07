"use strict";
const prompt = require("prompt-sync")();

function generateRandom(min, max) {

    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
}

const firsNumber = Number(prompt("Input starting(inclusice) range number: "));
const secondNumber = Number(prompt("Input last range number(inclusive): "));

console.log(`Random genrated number between ${firsNumber} and ${secondNumber} is ${generateRandom(firsNumber,  secondNumber)}`);
