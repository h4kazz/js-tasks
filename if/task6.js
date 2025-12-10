"use strict";
const prompt = require("prompt-sync")();

function isMultipleOf(n, d) {
  if (n % d === 0) return true;
  else return false;
}

console.log(isMultipleOf(2, 5));
