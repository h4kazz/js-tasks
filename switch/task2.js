"use strict";
const prompt = require("prompt-sync")();

const calculate = (a, b, operator) => {
  switch(operator) {
    case '+':
        return a + b;
    case '-':
        return a - b;
    case '*':
        return a * b;
    case '/':
        return a / b;
    default:
        throw new Error("Incorect operator, possible values: '+', '-', '*', '/'")
  }
}

console.log(calculate(3, 4, '+'));
