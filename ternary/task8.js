"use strict";
const prompt = require("prompt-sync")();

const number = 22;

const divisible = number % 5 === 0 ? "Divisible" : "Not divisible";

console.log(divisible);
