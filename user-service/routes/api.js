const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

// กำหนดเส้นทางสำหรับการจัดการแชท
router.get('/list', userController.getAllUsers);

module.exports = router;
