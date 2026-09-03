// ============================================================
//  utils.js  -  the functions that transform your data
// ============================================================
//
//  Each function below is already named, already exported, and
//  already receives the right arguments. You write the bodies.
//
//  RULES FOR THIS FILE:
//    - Use const and let. Never var.
//    - Do not change any function name or its parameters.
//    - Do not modify the array or the objects you are handed.
//      Every function here returns something NEW.
//    - Do not use console.log in this file. Printing happens in
//      main.js. These functions only compute and return values.
//
// ============================================================

// ------------------------------------------------------------
//  1. getFinishedBooks(books)
//     Return a NEW array containing only the books whose
//     finished property is true.
//
//     Required technique: .filter()
//     Write this one as an arrow function.
//
//     Example:
//       getFinishedBooks(books)  ->  [ { title: "Dune", ... } ]
// ------------------------------------------------------------

import { BooksEntity } from "./types";

export const getFinishedBooks = (books: BooksEntity[]): BooksEntity[] => {
  const filteredBooks = books.filter((book) => book.finished);
  return filteredBooks;
};

// ------------------------------------------------------------
//  2. getTitles(books)
//     Return a NEW array of just the title strings.
//
//     Required technique: .map()
//
//     Example:
//       getTitles(books)  ->  ["Dune", "Piranesi", "Station Eleven"]
// ------------------------------------------------------------
export const getTitles = (books: BooksEntity[]): string[] => {
  const titles = books.map((book) => book.title);
  return titles;
};

// ------------------------------------------------------------
//  3. getTotalPages(books)
//     Return a single number: every book's pages added together.
//
//     Required technique: a for loop (or for...of). Not .reduce().
//
//     Example:
//       getTotalPages(books)  ->  1104
// ------------------------------------------------------------
export function getTotalPages(books: BooksEntity[]): number {
  const pageNumbers = books.map((book) => book.pages);
  let total = 0;
  for (const x of pageNumbers) {
    total += x;
  }
  return total;
}

// ------------------------------------------------------------
//  4. describeBook(book)
//     Return a single formatted string describing one book.
//
//     Required techniques:
//       - destructure title, author, pages, and finished out of
//         the book object (do this in the function signature or
//         on the first line of the body)
//       - a template literal for the returned string
//       - an if/else (or a ternary) to choose the status word
//
//     The returned string must look exactly like this:
//       Dune by Frank Herbert (412 pages) - Finished
//       Piranesi by Susanna Clarke (245 pages) - Unread
// ------------------------------------------------------------
export function describeBook(book: BooksEntity): string {
  return `${book.title} by ${book.author} (${book.pages} pages) - ${book.finished ? "Finished" : "Unread"}`;
}

// ------------------------------------------------------------
//  5. addBook(books, newBook)
//     Return a NEW array with newBook added to the end.
//     The original array must be left untouched - no .push().
//
//     Required technique: the spread operator
//
//     Example:
//       addBook(books, { id: 6, title: "Babel", ... })
//         ->  a new array, one item longer
// ------------------------------------------------------------
export const addBook = (
  books: BooksEntity[],
  newBook: BooksEntity,
): BooksEntity[] => [...books, newBook];

// ------------------------------------------------------------
//  6. markAsFinished(books, id)
//     Return a NEW array in which the book with the matching id
//     has finished set to true. Every other book is unchanged.
//
//     Required techniques: .map() plus the spread operator on
//     the object you are changing. Do NOT write book.finished = true.
//
//     Hint: map over the array. For the book whose id matches,
//     return a new object built from the old one. For every other
//     book, return the book you were given.
//
//     This exact pattern is how React updates state. You will use
//     it again next week, and most weeks after that.
// ------------------------------------------------------------
export const markAsFinished = (
  books: BooksEntity[],
  id: number,
): BooksEntity[] => {
  return books.map((book) =>
    book.id === id ? { ...book, finished: true } : book,
  );
};
