const express = require('express');
const bodyParser = require('body-parser');
const search = require('./routes/search');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/buscar', search);

app.use(function (req, res, next) {
  res.status(404).send("Page not found!")
})

app.listen(2999, () => {
  console.log('Listening on port 2999');
});

module.exports = app;
