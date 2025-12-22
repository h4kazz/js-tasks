"use strict";
const prompt = require("prompt-sync")();

// Task: Search with multiple filters

const books = [
  { title: "JS Basics", pages: 120, tags: ["js", "beginner"] },
  { title: "Advanced JS", pages: 350, tags: ["js", "advanced"] },
  { title: "CSS Mastery", pages: 200, tags: ["css"] },
  { title: "HTML & CSS", pages: 150, tags: ["html", "css", "beginner"] }
];

const searchBooks = (books, { minPages, hasTag }) => {
    return books.filter((book) => {
        return (
            book.pages >= minPages &&
            book.tags.includes(hasTag)
        );
    });
};

console.log(
  searchBooks(books, { minPages: 150, hasTag: "css" })
);
