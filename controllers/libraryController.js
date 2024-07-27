const LibraryService = require('../services/libraryService');

const addNewBook = (req, res) => {
    const { title, author, isbn } = req.body;
    LibraryService.addNewBook(title, author, isbn);
    res.send('Book added successfully');
};

const registerMember = (req, res) => {
    const { name, id } = req.body;
    LibraryService.registerMember(name, id);
    res.send('User registered successfully');
};

module.exports = {
    addNewBook,
    registerMember
};