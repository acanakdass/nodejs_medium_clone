const BaseController = require("../core/controllers/BaseController");
const { SuccessDataResult, ErrorResult } = require("../core/helpers/results");
const AuthService = require("../services/AuthService");

class AuthController {
    login = async (req, res, next) => {
        try {
            var authRes = await AuthService.login(req.body)
            res.json(authRes)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }

    register = async (req, res, next) => {
        try {
            var registerRes = await AuthService.register(req.body)
            console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            console.log(registerRes)
            res.json(registerRes)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }

    resetPassword = async (req, res, next) => {
        try {

        } catch (error) {

        }
    }
}

module.exports = new AuthController()