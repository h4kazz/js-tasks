"use strict";
const prompt = require("prompt-sync")();

const studentCount = parseInt(prompt("Iveskite moksleiviu skaiciu: "));

let studentId = 1;
let totalTasks = 0;

while (studentId <= studentCount) {
    let totalDays = parseInt(prompt(`Kiek dienu ${studentId} moksleivis dirbo? `));
    let day = 0;
    let sum = 0;

    while (day < totalDays) {
        let tasksPerDay = parseInt(prompt(`Kiek dienu uzduociu moksleivis issprende per ${day + 1} diena? `));
        sum += tasksPerDay;
        day++;
    }

    console.log(`${studentId} moksleivis isprende ${sum} uzdavinius per ${day} dienas.`);

    totalTasks += sum;
    studentId++;

}

console.log(`Visi moksleiviai isprende ${totalTasks} uzdavinius`);
