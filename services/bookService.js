const Library = require('../models/library');
const library = new Library();

class BookService {
    static getBookInfo(isbn) {
        return library.getBookInfo(isbn);
    }

    static addNewBook(title, author, isbn) {
        const book = new Book(title, author, isbn);
        library.addNewBook(book);
    }
}

module.exports = BookService;