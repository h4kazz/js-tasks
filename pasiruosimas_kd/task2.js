"use strict";
const prompt = require("prompt-sync")();


// Task: Filter and sort products with multiple conditions

const products = [
  { title: "Keyboard", price: 40, inStock: true },
  { title: "Mouse", price: 15, inStock: false },
  { title: "Monitor", price: 120, inStock: true },
  { title: "USB Cable", price: 5, inStock: true },
];

const getAvailableProductTitles = (array) => {
  return products
    .filter((product) => product.inStock === true)
    .filter((product) => product.price >= 10)
    .sort((a, b) => a.price - b.price)
    .map((product) => product.title);
};

console.log(getAvailableProductTitles(products));
