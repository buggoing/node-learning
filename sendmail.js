const nodemailer = require("nodemailer")
const config = require('../config')
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.exmail.qq.com",
    port: 465,
    auth: {
        user: config.userForSendMail.user, // generated ethereal user
        pass: config.userForSendMail.pass// generated ethereal password
    }
})

let sendMail = async (to, subject, text) => {
    let info = await transporter.sendMail({
        from: config.userForSendMail.user, // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text // plain text body
    })
    return info
}

module.exports = sendMail
