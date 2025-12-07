"use strict";
const prompt = require("prompt-sync")();

function isPowerOfTwo(number) {

    if (number <= 0) return false;
    
    const k = Math.log(number) / Math.log(2);

    if (k % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isPowerOfTwo(9));
