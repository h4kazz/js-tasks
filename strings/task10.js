"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to capitalize the first letter of each word in a string.

const text = "js string exercise";

const capitalizeWords = (str) => {
  let capitalized = [];
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    const firstLetter = words[i][0].toUpperCase();
    const restOfString = words[i].slice(1);
    const completed = firstLetter + restOfString;
    capitalized.push(completed);
  }

  return capitalized.join(" ");
};


console.log(capitalizeWords(text));