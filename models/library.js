const Book = require('./book');
const User = require('./user');

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    addNewBook(book) {
        this.books.push(book);
    }

    registerMember(user) {
        this.members.push(user);
    }

    borrowBook(userId, isbn) {
        const user = this.members.find(member => member.id === userId);
        const book = this.books.find(book => book.isbn === isbn);
        if (user && book && !book.isBorrowed() && user.borrowBook(book)) {
            return true;
        }
        return false;
    }

    returnBook(userId, isbn) {
        const user = this.members.find(member => member.id === userId);
        if (user && user.returnBook(isbn)) {
            return true;
        }
        return false;
    }

    getBookInfo(isbn) {
        return this.books.find(book => book.isbn === isbn);
    }
}

module.exports = Library;