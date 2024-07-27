const Library = require('../models/library');
const library = new Library();

class UserService {
    static borrowBook(userId, isbn) {
        return library.borrowBook(userId, isbn);
    }

    static returnBook(userId, isbn) {
        return library.returnBook(userId, isbn);
    }

    static registerMember(name, id) {
        const user = new User(name, id);
        library.registerMember(user);
    }
}

module.exports = UserService;