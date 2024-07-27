const Library = require('../models/library');
const library = new Library();

class LibraryService {
    static addNewBook(title, author, isbn) {
        const book = new Book(title, author, isbn);
        library.addNewBook(book);
    }

    static registerMember(name, id) {
        const user = new User(name, id);
        library.registerMember(user);
    }
}

module.exports = LibraryService;