"use strict";
const prompt = require("prompt-sync")();

let canIget = (item, myBalance) => {
    if (item == "MacBook Air") {
        if (myBalance >= 999) {
            return true;
        } else return false;
    } else if (item == "MacBook Pro") {
        if (myBalance >= 1299) {
            return true;
        } else return false;
    } else if (item == "Mac Pro") {
        if (myBalance >= 2499) {
            return true;
        } else return false;
    } else if (item == "Apple Sticker") {
        if (myBalance >= 1) {
            return true;
        } else return false;
    } else return false;
}

console.log(canIget('MacBook Air', 100));