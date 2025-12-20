"use strict";
const prompt = require("prompt-sync")();

// Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.

function textTruncate(str, length, ending = "…") {
    if (length === undefined) {
        return str;
    }

    if (str.length <= length) {
        return str;
    }

    const cutLength = length - ending.length;
    const truncated = str.slice(0, cutLength);

    return truncated + ending;
}

console.log(textTruncate('We are doing JS string exercises.',15,'!!'));
