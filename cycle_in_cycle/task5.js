"use strict";
const prompt = require("prompt-sync")();

const a = parseInt(prompt("Iveskite intervalo pradzia a: "));
const b = parseInt(prompt("Iveskite intervalo pabaiga b: "));
const c = parseInt(prompt("Iveskite tiksluma c: "));

if (a > b) {
    console.log("Klaida: a negali buti didesnis uz b.");
} else {
    let primeCount = 0;

    let s = a;

    while (s <= b) {
        let divisor = 1;
        let sumDivisors = 0;
        let divisorCount = 0;

        while (divisor < s) {
            if (s % divisor === 0) {
                sumDivisors += divisor;
                divisorCount++;
            }
            divisor++;
        }

        if (divisorCount === 1) {
            primeCount++;
        }

        if (sumDivisors >= s - c && sumDivisors <= s + c) {
            let mark = "";

            if (sumDivisors === s) {
                mark = " **";
            }

            console.log(`${s} | dalikliu kiekis: ${divisorCount} | suma: ${sumDivisors}${mark}`);
        }

        s++;
    }

    console.log(`Pirminiu skaiciu intervale: ${primeCount}`);
}
