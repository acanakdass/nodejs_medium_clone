const Messages = require('../constants/Messages')
const { ErrorResult, SuccessDataResult } = require('../core/helpers/results')
const { hashPassword, generateAccessToken, generateRefreshToken } = require('../core/helpers/securityHelpers')
const UserModel = require('../models/UserModel')
const UserService = require('./UserService')
class AuthService {
    login = async (credentials) => {
        try {
            credentials.password = hashPassword(credentials.password)
            var user = await UserModel.findOne({ where: credentials })
            if (user == null) {
                return new ErrorResult(Messages.WRONG_CREDENTIALS())
            }
            let returnData = {
                ...user.dataValues,
                tokens: {
                    access_token: generateAccessToken(user),
                    refresh_token: generateRefreshToken(user)
                }
            }
            return new SuccessDataResult(returnData, Messages.SUCCESS_LOGIN())

        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    register = async (userInput) => {
        try {
            userInput.password = hashPassword(userInput.password)
            var user = await UserService.getByEmail(userInput.email)
            if (user.success && user.data != null) {
                console.log(user)
                return new ErrorResult(Messages.USER_EXISTS())
            }
            var res = await UserService.add(userInput)
            return new SuccessDataResult(res, Messages.SUCCESS_REGISTER())

        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
}
module.exports = new AuthService()