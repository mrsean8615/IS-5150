// Couldn't help myself to change the project to TS even though it's just a small assignment
// I program in C#, VB and TS mostly, so it's just become habit to define types.

export type BooksEntity = {
  id: number;
  title: string;
  author: string;
  pages: number;
  finished: boolean;
};
