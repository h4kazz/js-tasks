"use strict";
const prompt = require("prompt-sync")();

function getMax (num1, num2, num3) {

    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3)

    let result = `Max number is ${maxNum}, min is ${minNum}`

    return result;
};

let num1 = Number(prompt("Input first number: "));
let num2 = Number(prompt("Input second number: "));
let num3 = Number(prompt("Input third number: "))

if (num1 < 0 || num2 < 0 || num3 < 0) {

    console.log("Your input is incorrect! Only positive numbers.");

} else {
    getMax(num1, num2, num3)
    console.log(getMax(num1, num2, num3));
    
};