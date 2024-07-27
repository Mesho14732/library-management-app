const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

router.post('/addBook', libraryController.addNewBook);
router.post('/registerMember', libraryController.registerMember);

module.exports = router;