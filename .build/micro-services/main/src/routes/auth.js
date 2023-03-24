var express = require('express');
var router = express.Router();
var controller = require('../controllers/auth');
router.get('/', controller.auth);
module.exports = router;
//# sourceMappingURL=auth.js.map