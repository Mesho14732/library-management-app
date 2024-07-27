const BookService = require('../services/bookService');

const getBookInfo = (req, res) => {
    const { isbn } = req.params;
    const book = BookService.getBookInfo(isbn);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
};

module.exports = {
    getBookInfo
};