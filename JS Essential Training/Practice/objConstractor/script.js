const showExpectedResult = false;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = 'Lewis Carroll';
const bookPubYear = 1865;
const bookISBN = 9798369203415;

class Book {
  constructor(title, author, ISBN, pubYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = pubYear;
    this.ISBN = ISBN;
  }
}

const book = new Book(bookTitle, bookAuthor, bookISBN, bookPubYear);

console.log(book);
