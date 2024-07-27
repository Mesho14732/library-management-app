const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/:isbn', bookController.getBookInfo);

module.exports = router;