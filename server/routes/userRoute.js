const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
// const cors = require('cors');

// router.use(cors());

router.post('/createuser', userController.postCreateUser);
router.get('/createuser', userController.getCreateUser);

module.exports = router;