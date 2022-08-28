const httpStatus = require("http-status")
const { ErrorResult } = require("../helpers/results")

const validate = (schema) => {
    return (req, res, next) => {

        const { value, error } = schema.validate(req.body)
        if (error) {
            console.log(error)
            const errorMessages = error.details?.map(detail => detail.message).join()
            res.status(httpStatus.BAD_REQUEST).json(new ErrorResult(errorMessages))
        }
        console.log(value)
        Object.assign(req, value);
        return next()
    }
}

module.exports = validate