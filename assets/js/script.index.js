class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.bookdBorrowed = [];
    }
    getBookBorrowed(book) {
        this.bookdBorrowed.push(book);
    }
    
    getAllUserBooks() {
        let msg = "";
        this.bookdBorrowed.forEach((book) => {
            msg += book.title;
        });
        
        console.log(`o usuario ${this.name} alugou os livros: ${msg}`);
    }

}
class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }
    addBook(book) {
        this.books.push(book)
    }
    addUsers(user) {
        this.users.push(user)
    }




}



const user1 = new User('Thiago Ferreira', 24);
const user2 = new User('Lívia Belão', 16);
const user3 = new User('Felipe', 17);

const book1 = new Book('harry potter', 'jk', 300);
const book2 = new Book('a culpa é das estrelas', 'Alguem', 300);
const book3 = new Book('bonito em 60 dias', 'Pessoa', 300);
const book4 = new Book('rainha azul', 'person', 300);
const book5 = new Book('amor da minha vida', 'Luana Guerreiro', 300);

const library = new Library();
library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)

user1.getBookBorrowed(book1);
user1.getBookBorrowed(book2);

user2.getBookBorrowed(book3);
user2.getBookBorrowed(book4);
user2.getBookBorrowed(book5);

user1.getAllUserBooks();
user2.getAllUserBooks();


library.addUsers(user1)
library.addUsers(user2)
library.addUsers(user3)