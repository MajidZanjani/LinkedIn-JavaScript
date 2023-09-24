/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const book = {
  name: 'JavaScript Essential Training',
  pages: 150,
};

const bookShelf = {
  capacity: 10,
  shelfCount: 4,
  books: book,
};

console.log(bookShelf);
console.log(bookShelf.books);
