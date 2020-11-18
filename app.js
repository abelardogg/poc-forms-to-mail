
const express = require('express')
const app = express();
const appRouter = require('./private/routes/router.js');
const emailRouter = require('./private/routes/emailRouter.js');
//const errorPageHandler = require('./private/controllers/error');
require('dotenv').config()

// CONFIG
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.use(express.json())

app.use(function(req, res, next){
  const domain = `${req.protocol}://${req.hostname}`
    res.locals.domain = domain;
  next();
});

// routes
app.use('/', appRouter);
app.use('/email', emailRouter);
  
// 404 handler
/*app.use(function(req, res, next) {
    console.log();
    errorPageHandler.notFoundPage(req, res, next);
});*/

  app.listen(process.env.PORT || 3000, function(){
    console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});