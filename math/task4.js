"use strict";
const prompt = require("prompt-sync")();

function toDecimals(number, decimal) {

    //Calculate integer part of a number: 12.5 --> 12

    let firstNumPart = Math.floor(number);
    let numToString = firstNumPart.toString();
    let numDigitCount = Number(numToString.length);

    //Decimal point calculation

    let dec = numDigitCount + decimal;

    // Formating number to selected decimal point

    let formated = number.toPrecision(dec);
    return formated;

}

const number = Number(prompt("Input decimal number you want to format: "));
const decimal = Number(prompt("Input decimal point: "));

console.log(`${number} --> ${toDecimals(number, decimal)}`);