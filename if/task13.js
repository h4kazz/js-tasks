"use strict";
const prompt = require("prompt-sync")();

let tipAmount = (amount, quality) => {
    if (quality === 'good') {
        return amount * 0.2
    } else if (quality == 'fair') {
        return amount * 0.15
    } else if (quality === 'poor') {
        return amount * 0.1
    }
}

console.log(tipAmount(100, 'poor'));
