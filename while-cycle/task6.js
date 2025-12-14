"use strict";
const prompt = require("prompt-sync")();

const action = parseInt(prompt("Iveskite veiksma (1-suma, 2-atimtis, 3-daugyba, 4-max, 5-min): "));

let number;
let sum = 0;
let numbers = [];

while (true) {
    number = parseInt(prompt());

    if (number === 0) {
        break;
    }

    if (action === 1) {
        sum += number;

    } else if (action === 2) {
        if (numbers.length === 0) {
            sum = number;
        } else {
            sum -= number;
        }

    } else if (action === 3) {
        if (numbers.length === 0) {
            sum = number;
        } else {
            sum *= number;
        }

    } else if (action === 4 || action === 5) {
        numbers.push(number);
    }
}

if (action === 1) {
    console.log(`sum: ${sum}`);

} else if (action === 2) {
    console.log(`result: ${sum}`);

} else if (action === 3) {
    console.log(`result: ${sum}`);

} else if (action === 4) {
    let max = Math.max(...numbers);
    console.log(`max: ${max}`);

} else if (action === 5) {
    let min = Math.min(...numbers);
    console.log(`min: ${min}`);
}
