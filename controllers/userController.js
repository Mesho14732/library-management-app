const UserService = require('../services/userService');

const borrowBook = (req, res) => {
    const { userId, isbn } = req.body;
    if (UserService.borrowBook(userId, isbn)) {
        res.send('Book borrowed successfully');
    } else {
        res.status(400).send('Unable to borrow book');
    }
};

const returnBook = (req, res) => {
    const { userId, isbn } = req.body;
    if (UserService.returnBook(userId, isbn)) {
        res.send('Book returned successfully');
    } else {
        res.status(400).send('Unable to return book');
    }
};

module.exports = {
    borrowBook,
    returnBook
};