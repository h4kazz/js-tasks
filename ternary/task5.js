"use strict";
const prompt = require("prompt-sync")();

const inCartTotal = 50;

const discountMessage = inCartTotal >= 100 ? "Discount applied!" : "No discount.";

console.log(discountMessage);
