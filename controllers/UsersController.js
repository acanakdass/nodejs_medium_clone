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
    resetPassword = async (req, res, next) => {
        try {
            var result = await UserService.resetPassword(req.body.email)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
}
module.exports = new UsersController()