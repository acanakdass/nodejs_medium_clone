const { override } = require("joi")
const Messages = require("../constants/Messages")
const { ErrorResult, SuccessDataResult, SuccessResult } = require("../core/helpers/results")
const { sequelize } = require("../core/loaders/db")
const BaseService = require("../core/services/BaseService")
const Models = require("../models")

class PostService extends BaseService {
    constructor() {
        super(Models.PostModel)
    }

    async getAllByUserId(userId) {
        try {

            var res = await Models.PostModel.findAll(
                {
                    where:
                        { userId: userId },
                    include: [
                        {
                            model: Models.TagModel,
                            through: { attributes: [] }//dont include junction table columns
                        }],
                }
            )
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    async getWithUser() {
        var res = await Models.PostModel.findAll({ include: Models.UserModel })
        return new SuccessDataResult(res)
    }

    async AddTagToPost(data) {
        try {
            var queryString = `INSERT INTO post_tags ("postId","tagId") VALUES(${data.postId},${data.tagId})`
            var [results, metadata] = await sequelize.query(queryString)
            if (metadata > 0)
                return new SuccessResult(Messages.CREATED())
            return new ErrorResult("Bir hata oluştu")

        } catch (error) {
            return new ErrorResult(error.name)
        }
    }
}


module.exports = new PostService()