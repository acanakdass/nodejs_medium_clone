const Messages = require("../constants/Messages")
const { SuccessDataResult, ErrorResult } = require("../core/helpers/results")
const BaseService = require("../core/services/BaseService")
const Models = require("../models")
const uuid = require('uuid')
const { hashPassword } = require("../core/helpers/securityHelpers")
const eventEmitter = require("../scripts/events/eventEmitter")
class UserService extends BaseService {
    constructor() {
        super(Models.UserModel)
    }
    getByEmail = async (email) => {
        var user = await Models.UserModel.findOne({ where: { email: email } })
        if (user == null) {
            return new ErrorResult(Messages.NOT_FOUND())
        }
        return new SuccessDataResult(user, Messages.LISTED())
    }

    resetPassword = async (email) => {
        try {
            var user = await this.getByEmail(email)
            if (user.success) {
                const generatedPw = uuid.v4().split("-")[0];
                const hashedNewPw = hashPassword(generatedPw)
                var updateRes = await this.update({ ...user.data.dataValues, password: hashedNewPw })
                if (updateRes.success) {
                    eventEmitter.emit("send_email", {
                        to: email, // list of receivers
                        subject: "Şifre Sıfırlama Talebi", // Subject line
                        html: "Your password has been reset! <b>Remember to change your password after login.</b> New password: " + generatedPw
                    })
                    return new SuccessDataResult("Şifre güncelleme işlemi başarılı, yeni şifreniz email adresinize gönderildi. Yeni şifre: " + generatedPw)
                }
                return new ErrorResult(updateRes.message)
            }
            return user
        } catch (error) {
            return new ErrorResult(error.message)
        }

    }

}


module.exports = new UserService()