"use strict";
const prompt = require("prompt-sync")();

function isPostive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}

const inputNum = Number(
  prompt("Input number to check if it's possitive or negative: ")
);

console.log(isPostive(inputNum));
