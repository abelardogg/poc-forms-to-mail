const express = require('express')
const router = express.Router()
const ejs = require('ejs');
const transporter = require('../services/email.js')
const dotenv = require("dotenv")
dotenv.config();

router.post('/', (req, res, next) => {

    const emailData = {
        senderName: req.body.userName,
        senderCountry: req.body.country,
        senderCity: req.body.city,
        message: req.body.userMessage
    }
    console.log('email data: ')
    console.log(emailData);

    ejs.renderFile(`${__dirname}/../../views/email.html`, emailData, function (err, data) {
        if (err) {
            console.log(err)
            console.log('error while creatong the email');
        } else {
            //make mailable object
            const mail = {
                from: process.env.GMAIL_USER_NAME,
                to: process.env.TEST_EMAIL,
                subject: req.body.subject,
                html: data
            }

            // error handling goes here. 
            transporter.sendMail(mail, (err, info) => {
                if (err) {
                    res.json({
                        status: 'fail',
                        message: 'sorry somthing went wrong while trying to send the email!',
                        error: true
                    })
                } else {
                    res.json({
                        status: 'success',
                        message: 'email was successfully sent!',
                        error: false
                    })
                }
            })
        }
    });
});

module.exports = router;