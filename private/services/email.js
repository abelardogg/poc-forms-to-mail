const nodemailer = require('nodemailer')
const dotenv = require("dotenv")
dotenv.config();

const transport = {
    //all of the configuration for making a site send an email.
    host: 'smtp.gmail.com',
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
      user: `${process.env.GMAIL_USER_NAME}`,
      pass: `${process.env.GMAIL_USER_PASSWORD}`
        }
  };

const transporter = nodemailer.createTransport(transport);
  transporter.verify((error, success) => {
    if(error) {
      //if error happened code ends here
      console.error(error)
    } else {
      //this means success
      console.log('users ready to mail myself')
    }
  });

module.exports = transporter;