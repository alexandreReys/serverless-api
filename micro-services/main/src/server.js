const express = require("express");
const app = express();

app.use('/v1/auth', require('./routes/auth'));
app.use('/v1/', require('./routes/root'));

module.exports = app;
