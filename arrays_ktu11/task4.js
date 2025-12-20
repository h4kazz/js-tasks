"user strict";
const prompt = require("prompt-sync");

// Data
const banks = [
  { name: "AB Seb bankas", cashRate: 2.4866, cardRate: 2.4901 },
  { name: "Šiaulių bankas", cashRate: 2.51, cardRate: 2.504 },
  { name: "Medicinos bankas", cashRate: 2.5032, cardRate: 2.5096 },
  { name: "Swedbank", cashRate: 2.4938, cardRate: 2.5549 },
  { name: "Nordea bank", cashRate: 2.4827, cardRate: 2.4356 },
  { name: "DNB bankas", cashRate: 2.5079, cardRate: 2.5044 },
];

const findBankByRate = (banks, type, findMax) => {
  let bestBank = banks[0];

  for (let i = 1; i < banks.length; i++) {
    if (type === "cash") {
      if (findMax && banks[i].cashRate > bestBank.cashRate) {
        bestBank = banks[i];
      }
      if (!findMax && banks[i].cashRate < bestBank.cashRate) {
        bestBank = banks[i];
      }
    } else {
      if (findMax && banks[i].cardRate > bestBank.cardRate) {
        bestBank = banks[i];
      }
      if (!findMax && banks[i].cardRate < bestBank.cardRate) {
        bestBank = banks[i];
      }
    }
  }

  return bestBank;
};

const bestCash = findBankByRate(banks, "cash", true);
const bestCard = findBankByRate(banks, "card", true);
const worstCash = findBankByRate(banks, "cash", false);
const worstCard = findBankByRate(banks, "card", false);

console.log(
  "Pelningiausia keisti grynuosius pinigus dolerio verte",
  bestCash.cashRate.toFixed(4),
  "Lt",
  bestCash.name
);

console.log(
  "Pelningiausia keisti negrynuosius pinigus dolerio verte",
  bestCard.cardRate.toFixed(4),
  "Lt",
  bestCard.name
);

console.log(
  "Mažiausiai pelninga keisti grynuosius pinigus dolerio verte",
  worstCash.cashRate.toFixed(4),
  "Lt",
  worstCash.name
);

console.log(
  "Mažiausiai pelninga keisti negrynuosius pinigus dolerio verte",
  worstCard.cardRate.toFixed(4),
  "Lt",
  worstCard.name
);
