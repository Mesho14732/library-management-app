const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/borrow', userController.borrowBook);
router.post('/return', userController.returnBook);

module.exports = router;