"use strict";
const prompt = require("prompt-sync")();

function sortNumbers(a, b, c) {
    let firstNumber;
    let secondNumber;
    let thirdNumber;

    if (a > b && a > c) {
        firstNumber = a

        if (b > c) {
            secondNumber = b;
            thirdNumber = c;
        } else {
            secondNumber = c;
            thirdNumber = b;
        }
    } else if (b > a && b > c) {
        firstNumber = b;

        if (a > c) {
            secondNumber = a;
            thirdNumber = c;
        } else {
            secondNumber = c;
            thirdNumber = a;
        }
    } else {
        firstNumber = c;

        if (a > b)  {
            secondNumber = a;
            thirdNumber = b;
        } else {
            secondNumber = b;
            thirdNumber = a;
        }
    }

    let result = `${firstNumber}, ${secondNumber}, ${thirdNumber}`;
    return result;
}

console.log(sortNumbers(-2, 5, 3));
