const express = require('express');
const app = express();

const home = require('../controllers/start.js');
const second = require('../controllers/second.js');
const third = require('../controllers/third.js');
const finish = require('../controllers/finish.js');


app
.use('/', home)
.use('/second', second)
.use('/third', third)
.use('/finish', finish)


module.exports = app;