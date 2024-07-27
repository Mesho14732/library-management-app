class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            return false;
        }
        book.borrowed = true;
        this.borrowedBooks.push(book);
        return true;
    }

    returnBook(isbn) {
        const bookIndex = this.borrowedBooks.findIndex(book => book.isbn === isbn);
        if (bookIndex !== -1) {
            this.borrowedBooks[bookIndex].borrowed = false;
            this.borrowedBooks.splice(bookIndex, 1);
            return true;
        }
        return false;
    }

    peekBook(isbn) {
        return this.borrowedBooks.find(book => book.isbn === isbn);
    }
}

module.exports = User;