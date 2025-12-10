"use strict";
const prompt = require("prompt-sync")();

let isEven = (a) => {
  if (a % 2 === 0) return true;
  else return false;
}

let isOdd = a => {
    if (!(a % 2)) return false;
    else return true;
}

console.log(isEven('banana'));
console.log(isOdd(2));
