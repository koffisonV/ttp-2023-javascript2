// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
  let book = Object.create(createBook.prototype);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
}

createBook.prototype.getInfo = function () {
  return `${this.title} by ${this.author}`;
};

createBook.prototype.getPrice = function () {
  return this.price;
};

createBook.prototype.getRating = function () {
  const totalStars = this.rating.join('').length;
  const avgRating = totalStars / this.rating.length;
  return parseInt(avgRating);
};

createBook.prototype.addRating = function (stars) {
  if (typeof stars === 'string' && stars.length >= 1 && stars.length <= 5) {
    return this.rating.push(stars);
  } else {
    console.log('Rating should be 1 to 5 stars (*)');
  }
};

const newBook = createBook(1, "ABC's", 'Smith Westen', 20);

console.log(newBook.getInfo());
console.log(newBook.getPrice());

newBook.addRating('*****');
newBook.addRating('****');
console.log(newBook.getRating());
