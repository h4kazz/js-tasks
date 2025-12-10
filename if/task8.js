"use strict";
const prompt = require("prompt-sync")();

function isValidTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) return true;
    else return false;
}

console.log(isValidTriangle(3, 3, 2));
