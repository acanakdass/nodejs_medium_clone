const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(emailInfos) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // generated ethereal user
            pass: process.env.EMAIL_PASSWORD, // generated ethereal password
        },
    });

    var transporterData = {
        from: process.env.EMAIL_FROM, // sender address
        emailInfos// html body
    }
    let info = await transporter.sendMail(transporterData)
        .then(res => console.log(res.messageId))
        .catch(err => console.log(err.message));

}

module.exports = { sendEmail }
