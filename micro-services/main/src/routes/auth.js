const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

router.get('/signIn', controller.signIn);

module.exports = router;