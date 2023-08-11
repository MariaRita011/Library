class Book {
constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
}

class User {
constructor (name, age) {
    this.name = name;
    this.age = age;
    this.booksBorrowed = [];
}

getBookBorrowed(book1) {
    this.booksBorrowed.push(book1)
}
getBookBorrowed(book2) {
    this.booksBorrowed.push(book2)
}
getBookBorrowed(book3) {
    this.booksBorrowed.push(book3)
}

}

class Library {
constructor () {
    this.books = [];
    this.users = [];
}

addBook(book) {
    this.books.push(book);
}
addBook(users) {
    this.users.push(users);
}
}

const book1 = new Book ('Harry Potter', 'J.K Rolling', 300);

const user1 = new User ('Thiago Ferreira', 24)

const library = new Library();

user1.getBookBorrowed(book1);

console.log(book1);
console.log(user1);
console.log(library);