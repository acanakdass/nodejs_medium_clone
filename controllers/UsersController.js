const httpStatus = require("http-status");
const Messages = require("../constants/Messages");
const BaseController = require("../core/controllers/BaseController");
const { ErrorResult } = require("../core/helpers/results");
const { hashPassword, generateAccessToken, generateRefreshToken } = require("../core/helpers/securityHelpers");
const UserService = require("../services/UserService");
class UsersController extends BaseController {
    constructor() {
        super(UserService)
    }
    add = async (req, res, next) => {
        const cryptedPw = hashPassword(req.body.password)
        req.body.password = cryptedPw
        UserService.add(req.body).then(response => {
            res.status(httpStatus.CREATED).send(response)
        }).catch(err => {
            next(new ErrorResult(err))
        })
    }

    login(req, res, next) {
        req.body.password = hashPassword(req.body.password)
        UserService.login(req.body).then(response => {
            if (!response) {
                next(new ErrorResult(Messages.WRONG_CREDENTIALS))

            } else {
                let data = {
                    ...response.dataValues,
                    tokens: {
                        access_token: generateAccessToken({ response }),
                        refresh_token: generateRefreshToken(response)
                    }
                }
                res.status(httpStatus.OK).json(data)
            }
        }).catch(err => {
            console.log(err)
            next(new ErrorResult(err.message))
        })
    }

    resetPassword(req, res) {
        "use strict";
        const nodemailer = require("nodemailer");

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = await nodemailer.createTestAccount();

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: testAccount.user, // generated ethereal user
                    pass: testAccount.pass, // generated ethereal password
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>', // sender address
                to: "bar@example.com, baz@example.com", // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            });

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        }
        main().catch(console.error);


        return false;
        const generatedPw = uuid.v4().split("-")[0];
        console.log('generatedPw:' + generatedPw)
        UserService.update(req.body, { password: hashPassword(generatedPw) }).then(response => {
            // console.log(response)
            res.status(httpStatus.OK).send(response)
        }).catch(err => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
        })
    }
}
module.exports = new UsersController()