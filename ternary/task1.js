"use strict";
const prompt = require("prompt-sync")();

function evenOrOdd(number) {
  let result = number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
  return result;
}

const input = Number(prompt("Input a number: "));

if (input < 0) {
  console.log("Must be positive numbers!");
} else {
  console.log(evenOrOdd(input));
}
