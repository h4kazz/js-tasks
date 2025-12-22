"use strict";
const prompt = require("prompt-sync")();

// Task: Find the most frequent character in a string

const mostFrequentChar = (str) => {
  const counts = {};
  let maxChar = "";
  let maxCount = 0;
  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];

    if (char === " ") {
      continue;
    }

    if (!counts[char]) {
      counts[char] = 1;
    } else {
      counts[char]++;
    }

    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }

  return maxChar;
};

console.log(mostFrequentChar("Hello world"));