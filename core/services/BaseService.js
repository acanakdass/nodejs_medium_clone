const Messages = require("../../constants/Messages")
const EventEmitter = require("../../scripts/events/eventEmitter")
const { PostModel, UserModel } = require("../../models")
const { ErrorResult, SuccessDataResult } = require("../helpers/results")
class BaseService {
    constructor(model) {
        this.model = model
    }
    async getAll(where) {
        try {
            var res = await this.model.findAll(where || {})
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    async getAllPaginated(pageno, pagesize) {
        try {
            let offsetVal = (pageno - 1) * pagesize
            let limitVal = pagesize
            var res = await this.model.findAll({ order: [['createdAt', 'DESC']], offset: offsetVal, limit: limitVal, raw: true })
            return new SuccessDataResult(res, Messages.LISTED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    async add(data) {
        try {
            var res = await this.model.create(data)
            console.log(res)
            return new SuccessDataResult(res, Messages.CREATED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }

    async update(data) {
        try {
            var res = await this.model.update(data, {
                where: {
                    id: data.id
                }
            })
            return new SuccessDataResult(res, Messages.UPDATED())
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }

    getById(id) {
        try {
            var res = this.model.findByPk(id)
            return new SuccessDataResult(res, Messages.LISTED())

        } catch (error) {
            return new ErrorResult(error.message)
        }

    }
    delete(id) {

        try {
            var res = this.model.destroy({
                where: {
                    id: id
                }
            })
            return new SuccessDataResult(res, Messages.DELETED())

        } catch (error) {
            return new ErrorResult(error.message)
        }

    }
}

module.exports = BaseService;