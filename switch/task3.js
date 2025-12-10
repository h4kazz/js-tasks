"use strict";
const prompt = require("prompt-sync")();

const daysInMonth = (x) => {
  switch(x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;

    case 4:
    case 6:
    case 9:
    case 11:
      return 30;

    case 2:
      return 28; // arba 29, bet užduotyje nereikia skirti

    default:
      return NaN; // neteisingas mėnesio numeris
  }
}

console.log(daysInMonth(3));
