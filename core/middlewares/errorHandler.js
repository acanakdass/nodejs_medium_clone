const Logger = require("../helpers/loggers/Logger")

const errorHandler = (err, req, res, next) => {
    console.log("err handler middleware..")
    res.status(500).json(err)
    // Logger('base').log({
    //     level: "error",
    //     message: err
    // })
}
module.exports = errorHandler