"use strict";
const prompt = require("prompt-sync")();

// Task: Unique values from array of objects

const posts = [
  { id: 1, tags: ["js", "web", "frontend"] },
  { id: 2, tags: ["js", "node", "backend"] },
  { id: 3, tags: ["css", "design", "frontend"] }
];

const returnUniqueValues = (arr) => {
    const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr[i].tags.length; j++) {
        newArray.push(arr[i].tags[j])
    }
  }

  const uniqueTags = [...new Set(newArray)];
  return uniqueTags;
}

console.log(returnUniqueValues(posts));
