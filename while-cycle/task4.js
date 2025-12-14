"use strict";
const prompt = require("prompt-sync")();

const m = parseInt(prompt("Knygoje yra skyriu: "));

let chaptersLeft = m;
let day = 1;
let daysCount = 0;

while(chaptersLeft > 0) {
    chaptersLeft -= day;
    day++;
    daysCount++
}

const average = (m / daysCount).toFixed(2);

console.log(`Perskaitys knyga per ${daysCount}`);
console.log(`Vidutiniskai perskaite per diena  ${average} skyriu.`);
