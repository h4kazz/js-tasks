"use strict";
const prompt = require("prompt-sync")();

// Task: Add new property during mapping

const products = [
  { title: "Phone", price: 500 },
  { title: "Laptop", price: 1200 },
  { title: "Tablet", price: 800 }
];

const newProperty = (arr) => {
  const VAT = 0.21;

  const result = arr.map((product) => {
    return {
        ...product,
        priceWithVAT: product.price + product.price * VAT
    };
  })

  return result;
}

console.log(newProperty(products));
