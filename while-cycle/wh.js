"use strict";
const prompt = require("prompt-sync")();


let balance = 0;
let days = 0;

while (balance < 300) {

    let moneyInput = parseInt(prompt("Kiek pinigu atsidėjo ar išėmė? "));

    if (moneyInput < 0) {
        // išlaidos: mažina balansą ir skaičiuojama diena
        balance += moneyInput;  // pridedam neigiamą, todėl mažėja
        days++;

        if (balance < 0) {
            console.log(`Petriukas bankrutavo ${days} dieną.`);
            break;
        }

    } else if (moneyInput === 0) {
        // nieko nedarom, diena nesiskaičiuoja
        continue;

    } else {
        // taupymas
        balance += moneyInput;
        days++;
    }
}

if (balance >= 300) {
    console.log(`Taupymas pavyko per ${days} dienas, sutaupyta ${balance} Eur.`);
}





// let score = 0;
// let tasks = 0;

// while (score < 50) {
//     let gotScore = parseInt(prompt("Kiek tasku gavo uz duoti? "));

//     if (gotScore < 0) {
//         break;
//     } 

//     if (gotScore === 0) {
//         continue;
//     }

//     score += gotScore;
//     tasks++

// }

// console.log(`Mokinys atliko ${tasks} uzduotis.`);
// console.log(`Is viso surinko ${score} taskus`);



// let i = 0;

// while(i < 10) {
//     i++
// }

// console.log(i);


// let candyCount = parseInt(prompt("Kiek Petriukas turi saldainiu? "));;

// let days = 0;
// let candiesAte;

// while(candyCount > 0) {
//     candiesAte = parseInt(prompt("Kiek Petriukas suvalge? "));

//     if(candiesAte > candyCount) {
//         break;
//     }
    
//     candyCount -= candiesAte;
//     days++
// }

// console.log(`Petriukas valge saldainius ${days} dienas`);
// console.log(`Petriukui liko nesuvalgytu saldaniu ${candyCount}`);
