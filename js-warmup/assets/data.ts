// ============================================================
//  data.js  -  the data for your reading list
// ============================================================
//
//  The two lines at the bottom of this file share this data with
//  the rest of the project. Leave them exactly as they are.
//
//  YOUR JOB IN THIS FILE:
//    1. Replace the two sample books below with at least FIVE
//       books of your own. Real books or made-up books, your call.
//    2. Give your list a name on the last line.
//
//  Every book object must have all five of these properties:
//    id       (number)   - unique, no two books share one
//    title    (string)
//    author   (string)
//    pages    (number)
//    finished (boolean)  - true or false, no quotes
//
// ============================================================

import { BooksEntity } from "./types";

const books: BooksEntity[] = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    finished: true,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    finished: false,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    pages: 328,
    finished: true,
  },
  {
    id: 4,
    title: "The Hobbit",
    author: "J. R. R. Tolkien",
    pages: 310,
    finished: false,
  },
  {
    id: 5,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    finished: false,
  },
];

// Name your list here. This string is printed as the heading of your report.
const listName = "My Reading List";

// --- Leave these two lines alone. -------------------------------
export { books };
export default listName;
