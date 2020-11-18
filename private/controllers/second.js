const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'second';
    let model = {};

    let userName = req.query.userName;
    
    if(!!userName){
        model.userName = userName;
        res.render(view, model);
    } else {
        res.redirect('/');
    }

    
});

module.exports = router;