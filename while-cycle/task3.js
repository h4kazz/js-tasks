"use strict";
const prompt = require("prompt-sync")();

const n = parseInt(prompt("Kiek saldainiu gavo Petriukas? "));
let candiesLeft = n;
let days = 0;

while(candiesLeft > 0) {
    let eatCandies = parseInt(prompt("Per diena suvalge saldainiu: "));
    
    if (candiesLeft >= eatCandies) {
        candiesLeft -= eatCandies;
        days++
    } else {
        break;
    }   
}

console.log(`Petriukiu uzteks saldanainiu ${days} dienoms ir jam liks ${candiesLeft} saldainiai`); 
