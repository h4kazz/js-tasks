"use strict";
const prompt = require("prompt-sync")();

function isLandscape(height, widght) {
  if (widght > height) {
    return true;
  } else {
    return false;
  }
}

const inputHeight = Number(
  prompt("Input number to check if it's possitive or negative: ")
);

const inputWidght = Number(
  prompt("Input number to check if it's possitive or negative: ")
);

console.log(isLandscape(inputHeight, inputWidght));
