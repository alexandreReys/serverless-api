var express = require("express");
var app = express();
app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/root'));
module.exports = app;
//# sourceMappingURL=server.js.map