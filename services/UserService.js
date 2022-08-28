const Messages = require("../constants/Messages")
const { SuccessDataResult } = require("../core/helpers/results")
const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class UserService extends BaseService {
    constructor() {
        super(Models.UserModel)
    }
    getByEmail = async (email) => {
        var user = await Models.UserModel.findOne({ where: { email: email } })
        return new SuccessDataResult(user, Messages.LISTED())
    }
}


module.exports = new UserService()