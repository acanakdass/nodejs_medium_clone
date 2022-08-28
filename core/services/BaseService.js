const { PostModel } = require("../../models")
const { ErrorResult } = require("../helpers/results")

class BaseService {
    constructor(model) {
        this.model = model
    }
    getAll(where) {
        try {
            return this.model.findAll(where || {})
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }
    add(data) {
        try {
            return this.model.create(data)
        } catch (error) {
            return new ErrorResult(error.message)
        }
    }

    update(data, id) {
        return this.model.findByIdAndUpdate(id, data, { new: true })
    }

    getById(id) {
        return this.model.findById(id)
    }
    delete(id) {
        return this.model.findByIdAndRemove(id)
    }
}

module.exports = BaseService;