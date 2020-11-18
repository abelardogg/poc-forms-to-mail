const express = require('express');
const app = express();
const email = require('../controllers/email.js');

app.use('/contact', email)

module.exports = app;