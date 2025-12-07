"use strict";
const prompt = require("prompt-sync")();

function countDigits(number) {

    let string = number.toString();
    let digitCount = string.length;

    let result = `Your number: ${number} has ${digitCount} digits.`
    return result;
}

let number = Number(prompt("Input a number to calculate digits: "));

console.log(countDigits(number));