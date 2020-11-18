const express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

router.get('/', (req, res) => {
    let view = 'third';
    let model = {};

    let userName = req.query.userName;
    let city = req.query.city;
    let country = req.query.country;


    if(!!userName && !!city && !!country){
        model.userName = userName;
        model.city = city;
        model.country = country;

        res.render(view, model);
    } else {
        res.redirect('/');
    }

});

module.exports = router;