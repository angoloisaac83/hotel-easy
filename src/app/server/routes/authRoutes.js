// server/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register/user/', authController.register);
router.post('/login/', authController.login);

module.exports = router;
