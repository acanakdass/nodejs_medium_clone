const { override } = require("joi")
const Messages = require("../constants/Messages")
const { ErrorResult, SuccessDataResult, SuccessResult } = require("../core/helpers/results")
const { sequelize } = require("../core/loaders/db")
const BaseService = require("../core/services/BaseService")
const RedisService = require("../core/services/RedisService")
const Models = require("../models")

class PostService extends BaseService {
    constructor() {
        super(Models.PostModel)
    }

    async getAllByUserId(userId) {
        try {

            var res = await Models.PostModel.findAll(
                {
                    where: {
                        userId: userId
                    },
                    include: [
                        {
                            model: Models.TagModel,
                            through: { attributes: [] }//dont include junction table columns
                        },
                        {
                            model: Models.CommentModel,
                        }]
                }
            )
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    async getAllWithAssociations() {
        let redisResponse = await RedisService.GetStringValueByKeyAsync('posts/getAllWithAssociations')
        if (redisResponse != null) {
            console.log('response from redis cache..')
            return new SuccessDataResult(JSON.parse(redisResponse))
        }

        var res = await Models.PostModel.findAll(
            {
                attributes: { exclude: ['userId'] },
                include: [
                    {
                        model: Models.CommentModel,
                        attributes: {
                            exclude: ['postId', 'userId'],
                        },
                        include: [
                            {
                                model: Models.UserModel,
                                attributes: {
                                    exclude: ['password', 'createdAt', 'updatedAt']
                                }
                            }]
                    },
                    {
                        model: Models.UserModel
                    },
                    {
                        model: Models.TagModel,
                    }
                ]
            })
        RedisService.SetStringKeyValueAsync('posts/getAllWithAssociations', JSON.stringify(res)).then(res => {
            console.log('-----------------set data to redis cache-----------------')
        })
        console.log('-----------------res from api-----------------')
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