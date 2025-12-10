"use strict";
const prompt = require("prompt-sync")();

let totalBill;

let tipAmount = (amount, quality) => {
    if (quality === 'good') {
        return amount * 0.2
    } else if (quality == 'fair') {
        return amount * 0.15
    } else if (quality === 'poor') {
        return amount * 0.1
    }
}

let splitAmount = (billAmount, quality, people) => {
    totalBill = tipAmount(billAmount, quality) + billAmount;
    return totalBill / people;
}

console.log(splitAmount(100, 'good', 5));
