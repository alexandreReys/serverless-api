const express = require("express");
const app = express();

app.use('/auth', require('./routes/auth'));
app.use('/', require('./routes/root'));

module.exports = app;
