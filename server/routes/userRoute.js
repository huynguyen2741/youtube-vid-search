const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/createuser', userController.postCreateUser);
router.get('/createuser1', userController.getCreateUser);

module.exports = router;