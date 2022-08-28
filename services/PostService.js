const Messages = require("../constants/Messages")
const { ErrorResult, SuccessDataResult } = require("../core/helpers/results")
const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class PostService extends BaseService {
    constructor() {
        super(Models.PostModel)
    }
    async getAllByUserId(userId) {
        try {

            var res = await Models.PostModel.findAll({ where: { userId: userId } })
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
}


module.exports = new PostService()