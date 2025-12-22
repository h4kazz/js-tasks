"use strict";
const prompt = require("prompt-sync")();

// Task: Sort by criteria

const employees = [
  { name: "Jonas", department: "IT", salary: 2000 },
  { name: "Ona", department: "HR", salary: 1800 },
  { name: "Petras", department: "IT", salary: 2200 },
  { name: "Greta", department: "HR", salary: 2100 }
];

const sortByDepartment = (employees) => {
    return [...employees].sort((a, b) => {
        return a.department.localeCompare(b.department);
    });
};

const sortBySalaryDesc = (employees) => {
    return [...employees].sort((a, b) => {
        return b.salary - a.salary;
    });
};

console.log(sortByDepartment(employees));
console.log(sortBySalaryDesc(employees));
