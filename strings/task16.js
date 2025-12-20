"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to humanize number.
// Formats a number to a human-readable string, with the correct suffix such as 1st, 2nd, 3rd or 4th.

function humanizeFormat(num) {
    if (num === undefined) {
        return;
    }

    const lastTwoDigits = num % 100;
    const lastDigit = num % 10;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return num + "th";
    }

    if (lastDigit === 1) {
        return num + "st";
    }

    if (lastDigit === 2) {
        return num + "nd";
    }

    if (lastDigit === 3) {
        return num + "rd";
    }

    return num + "th";
}

console.log(humanizeFormat(301));
