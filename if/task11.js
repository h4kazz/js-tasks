"use strict";
const prompt = require("prompt-sync")();

let checkLock = (a, b, c, d) => {
    if (a === 3 || a === 5 || a === 7) {
        if (b === 2) {
            if (c >= 5 && c<= 100) {
                if (d < 9 || d > 20) {
                    console.log("correct");
                } else {
                    console.log(`incorrect because the fourth number is greater than 9 and less than 20`);
                }
            } else {
                console.log("incorrect because the third number less than 5 and greater than 100");
            }
        } else {
            console.log("incorrect because the second number isn't a 2");
        }
    } else {
        console.log("incorrect because the first number isn't a 3, 5 or 7");
        
    }
}

checkLock(3, 2, 45, 10)