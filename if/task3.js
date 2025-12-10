"use strict";
const prompt = require("prompt-sync")();

function compareNumbersIf(num1, num2) {
  let result;
  if (num1 > num2) {
    result = num1;
  } else {
    result = num2;
  }
  return result;
}

function compareNumbersTer(num1, num2) {
  const compareTernary = num1 > num2 ? num1 : num2;
  return compareTernary;
}

console.log(`If statement: ${compareNumbersIf(4, 6)}`);
console.log(`If statement: ${compareNumbersTer(4, 45)}`);
