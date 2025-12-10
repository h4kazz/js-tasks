"use strict";
const prompt = require("prompt-sync")();

function specifySign(a, b, c) {
    if (a < 0 || b < 0 || c < 0) {
        return "-(minus)"
    } else return "+(plus)"
}

console.log(`The product sign is: ${specifySign(1,3 ,-5)}`);
