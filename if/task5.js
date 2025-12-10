"use strict";
const prompt = require("prompt-sync")();

function checkIsArmstrong(number) {
    let numberToString = number.toString();
    let numberArrayAsString = numberToString.split("");

    let a = Number(numberArrayAsString[0]);
    let b = Number(numberArrayAsString[1]);
    let c = Number(numberArrayAsString[2]);


    if(a**3 + b**3 + c**3 == number) {
        return true;
    } else return false;
}

console.log(checkIsArmstrong(153));
