"use strict";
const prompt = require("prompt-sync")();

const cities = [
    {name: "Los Angeles", temperature: 60.0},
    {name: "Atlanta", temperature: 52.0},
    {name: "Detroit", temperature: 48},
    {name: "New York", temperature: 80.0}
]

const coolCities = (array) => {
  const coolCitiesArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].temperature > 70) {
        coolCitiesArray.push({
            name: array[i].name,
            temperature: array[i].temperature
        })
    }
  }

  return coolCitiesArray;
}


const cityNames = (array) => {
  const names = [];
  for (let i = 0; i < array.length; i++) {
    names.push(array[i].name)
  }

  return names;
}

console.log(coolCities(cities));
console.log(cityNames(cities));
