"use strict";
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
const book = {
    title: "The Lord of the Rings",
    author: "Tolkien",
    pages: 1000,
    publish: 1954,
};
console.log(`${book.title} whose Author is "${book.author}" is containing ${book.pages} pages and Publish by year ${book.publish}`);
