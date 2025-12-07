"use strict";
const prompt = require("prompt-sync")();

function isAdult(age) {
  let result = age >= 18 ? "Adult" : "Minor";
  return result;
}

const inputAge = Number(prompt("Input your age: "));

console.log(isAdult(inputAge));
