const Logger = require("../helpers/loggers/Logger")

const errorHandler = (err, req, res, next) => {
    console.log("err handler middleware..")
    console.log(err.message)
    return res.status(500).json(err)
    // Logger('base').log({
    //     level: "error",
    //     message: err
    // })
}
module.exports = errorHandler