"use strict";
const prompt = require("prompt-sync")();

let orderOver100 = 0;
let price;
let totalAmount = 0;
let orderCount = 0;

console.log("Iveskite suma:");

while(true) {
    price = parseInt(prompt());

    if (price === 0) {
        break;
    }
    
    totalAmount += price
    orderCount++;

    if (price > 100) {
        orderOver100++;
    }
}

const averagePrice = (totalAmount / orderCount).toFixed(2);

console.log(`1. ${orderOver100}`);
console.log(`2. ${averagePrice}`);
console.log(`3. ${orderCount}`);
