"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insert(str, insertStr = "", position = 0) {
    if (insertStr === "") {
        return str;
    }

    const start = str.slice(0, position);
    const end = str.slice(position);

    return start + insertStr + end;
}

console.log(insert("We are doing some exercises", "JavaScript ", 18));
