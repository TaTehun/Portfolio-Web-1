const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: 'key-ed3f259301ab243dece71fb7808416f2',
        domain: 'sandboxdad619e92dde4abe99eff915eb01d42d.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (name, email, text, cb) => {
    const mailOptions = {
    from: email,
    to: 'johntestdoe68@gmail.com',
    subject: name,
    text
};

transporter.sendMail(mailOptions, function(err, data){
    if (err) {
        cb(err, null);
    } else {
        cb(null, data);
    }

});
};

module.exports = sendMail;
