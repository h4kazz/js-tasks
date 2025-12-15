"use strict";
const prompt = require("prompt-sync")();

let totalSaved = 0;
let month = 1;

while (month <= 6) {
    let times = parseInt(prompt(`Kiek kartu per ${month} menesi Linas atsidejo pinigu? `));
    let i = 0;

    while (i < times) {
        let money = parseFloat(prompt(`Iveskite ${i + 1} atsidejimo suma: `));
        totalSaved += money;
        i++;
    }

    month++;
}

let legoPrice = parseFloat(prompt("Iveskite LEGO roboto kaina: "));

if (totalSaved >= legoPrice) {
    console.log(totalSaved.toFixed(2));
    console.log("Uzteks");
} else {
    console.log(totalSaved.toFixed(2));
    console.log("Neuzteks");    
}
