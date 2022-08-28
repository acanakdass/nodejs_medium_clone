const httpStatus = require("http-status");
const Messages = require("../../constants/Messages");
const { ErrorResult, SuccessDataResult, SuccessResult } = require("../helpers/results");
class BaseController {
    constructor(serviceType) {
        this.service = serviceType
        console.log(arguments)
    }
    add = async (req, res, next) => {
        try {
            const result = await this.service.add(req.body)
            console.log("result::::::::")
            console.log(result)
            res.json(new SuccessDataResult(result, Messages.CREATED))
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getAll = async (req, res, next) => {
        try {
            const result = await this.service.getAll()
            res.json(new SuccessDataResult(result, Messages.LISTED()))
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    getById = async (req, res, next) => {
        try {
            let id = req.params.id
            const result = await this.service.getById(id)
            res.json(result)
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }
    update = async (req, res, next) => {
        try {
            let id = req.params?.id
            if (!id) {
                next(new ErrorResult("An id param is required!"))
            }
            const result = await this.service.update(id)
            res.send(new SuccessDataResult(result, Messages.NOT_FOUND()))
        } catch (error) {
            next(new ErrorResult(error.message))
        }

    }
    delete = async (req, res, next) => {
        try {
            let id = req.params?.id
            const result = await this.service.delete(id)
            res.json(new SuccessResult(Messages.DELETED))
        } catch (error) {
            next(new ErrorResult(error.message))
        }
    }

}
module.exports = BaseController