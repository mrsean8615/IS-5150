// ============================================================
//  main.js  -  where your report gets printed
// ============================================================
//
//  The lines below pull in your data and your functions. They are
//  already written. Leave them alone.
//
import listName, { books } from "./data.js";
import {
  getFinishedBooks,
  getTitles,
  getTotalPages,
  describeBook,
  addBook,
  markAsFinished,
} from "./utils.js";

// ============================================================
//  YOUR JOB: print the report described below to the console.
//  Use console.log and the functions you wrote in utils.js.
//  Use template literals for your output lines - no + concatenation.
// ============================================================

// --- Section 1: the heading ---------------------------------
// Print your list name surrounded by === on both sides, e.g.
//   === My Reading List ===
console.log(`=== ${listName} ===`);

// --- Section 2: every book, one per line --------------------
// Loop over books and print the result of describeBook for each one.
//   Dune by Frank Herbert (412 pages) - Finished
//   Piranesi by Susanna Clarke (245 pages) - Unread
for (const book of books) {
  console.log(describeBook(book));
}

// --- Section 3: the finished count --------------------------
// Use getFinishedBooks. Print how many are finished out of the total.
//   Finished: 2 of 5
console.log(`Finished: ${getFinishedBooks(books).length} of ${books.length}`);

// --- Section 4: all titles ----------------------------------
// Use getTitles. Print the label and the array itself.
//   Titles: (5) ['Dune', 'Piranesi', ...]
console.log("Titles:", JSON.stringify(getTitles(books)));

// --- Section 5: total pages ---------------------------------
// Use getTotalPages.
//   Total pages: 1683
console.log(`Total pages: ${getTotalPages(books)}`);

// --- Section 6: adding a book without mutating --------------
// Create one new book object of your own.
// Use addBook to build a longer list, then print BOTH lengths to
// prove the original array was not changed:
//   Original list: 5 books | With new book: 6 books
const newBook = {
  id: 6,
  title: "Dune",
  author: "Frank Herbert",
  pages: 412,
  finished: false,
};

console.log(
  `Original list: ${books.length} books | With new books: ${addBook(books, newBook).length}`,
);

// --- Section 7: finishing a book without mutating -----------
// Pick the id of a book that is currently Unread.
// Use markAsFinished to build an updated list, then print the
// finished count for the original list and for the updated one:
//   Finished before: 2 | Finished after: 3
console.log(
  `Finished before: ${getFinishedBooks(books).length} | Finished after: ${getFinishedBooks(markAsFinished(books, 4)).length}`,
);
