"use strict";
const prompt = require("prompt-sync")();

const input =
"name,age,city\nJonas,25,Vilnius\nOna,30,Kaunas\nPetras,22,Klaipeda";

// Task: Parse CSV string into array of objects


function parseCSV(csv) {
    const lines = csv.split("\n");
    const headers = lines[0].split(",");
    let result = [];

    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(",");
        let obj = {};

        for (let j = 0; j < headers.length; j++) {
            let key = headers[j];
            let value = values[j];

            if (key === "age") {
                value = Number(value);
            }

            obj[key] = value;
        }

        result.push(obj);
    }

    return result;
}

console.log(parseCSV(input));
