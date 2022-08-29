const Messages = require("../constants/Messages");
const { SuccessResult, SuccessDataResult, ErrorResult } = require("../core/helpers/results");
const BaseService = require("../core/services/BaseService");
const { CommentModel, UserModel } = require("../models");

class CommentService extends BaseService {
    constructor() {
        super(CommentModel)
    }
    async add(data) {
        try {
            var res = await CommentModel.create(data)
            return new SuccessDataResult(res, Messages.CREATED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    async getAllWithAssociations() {
        try {
            var res = await CommentModel.findAll({
                attributes: { exclude: ['userId'] },
                include: {
                    model: UserModel,
                    attributes: ['id', 'firstName', 'lastName', 'email',]
                }
            })
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
}
module.exports = new CommentService()