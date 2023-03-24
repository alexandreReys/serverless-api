var express = require('express');
var router = express.Router();
var controller = require('../controllers/root');
router.get('/', controller.root);
module.exports = router;
//# sourceMappingURL=root.js.map