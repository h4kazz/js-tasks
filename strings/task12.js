"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to convert a string into camel case.

function camelize(str) {
  const words = str.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0) {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1);
      result += firstLetter + restOfWord;
    }
  }

  return result;
}

console.log(camelize("JavaScript Exercises"));
