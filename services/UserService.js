const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class UserService extends BaseService {
    constructor() {
        super(Models.UserModel)
    }
    login(credentials) {
        return Models.UserModel.findOne({ where: credentials })
    }
    resetPassword(email) {
        //reset password
        //var newPassword = UUID
    }
}


module.exports = new UserService()