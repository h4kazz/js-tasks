"use strict";
const prompt = require("prompt-sync")();

// 9. Pokémon Type Advantage
const typeAdvantage = (type) => {
  switch (type) {
    case "fire":
      return "grass";
    case "water":
      return "fire";
    case "grass":
      return "water";
    default:
      return "No advantage";
  }
};

console.log(typeAdvantage("fire"));
console.log(typeAdvantage("water"));
console.log(typeAdvantage("grass"));
console.log(typeAdvantage("dirt"));