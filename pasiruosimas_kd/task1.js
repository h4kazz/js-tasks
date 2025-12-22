"use strict";
const prompt = require("prompt-sync")();

// Task: Complex transformation with conditions

const temperatures = [18, 25, 30, 10, 28];

const result = temperatures.map((temp) => {
  let status;

  if (temp < 15) {
    status = "cold";
  } else if (temp >= 15 && temp < 25) {
    status = "warm";
  } else {
    status = "hot";
  }

  let newArray = { temp: temp, status: status };
  return newArray;
});

console.log(result);
