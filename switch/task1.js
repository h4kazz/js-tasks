"use strict";
const prompt = require("prompt-sync")();

const daysUntilWeekend = (day) => {
  switch(day) {
    case 'sunday':
        console.log("6 days left until Saturday");
        break;
    case 'monday':
        console.log("5 days left until Saturday");
        break;
    case 'tuesday':
        console.log("4 days left until Saturday");
        break;
    case 'wednesday':
        console.log("3 days left until Saturday");
        break;
    case 'thursday':
        console.log("2 days left until Saturday");
        break;
    case 'friday':
        console.log("1 days left until Saturday");
        break;
    default:
        throw new Error("This is not weekday.")
  }
}

console.log(daysUntilWeekend('monday'));
