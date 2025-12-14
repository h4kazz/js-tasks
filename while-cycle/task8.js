"use strict";
const prompt = require("prompt-sync")();

const friends = parseInt(prompt("Keliems draugams nori nupirkti atvirukus? "));
let types = parseInt(prompt("Kiek rusiu atviruku yra parduotuveje ? "));

let i = 0; // skaitiklis, kitaip tariant rusis kuria ziuriu cikle
let sum = 0;

while (i < types) {
    let brochureCount = parseInt(prompt(`Kiek yra ${i + 1} atviruku?`));
    i++;

    if (friends < brochureCount) {
        sum++
    }

}

console.log(`${sum} rusiu uztektu visiems Lino draugams.`);
