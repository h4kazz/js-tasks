"use strict";
const prompt = require("prompt-sync")();

function checkTemperature(temp) {
  let result = temp > 30 ? "Hot" : "Cool";
  return result;
}

const inputTemp = Number(prompt("Input your age: "));

console.log(checkTemperature(inputTemp));
