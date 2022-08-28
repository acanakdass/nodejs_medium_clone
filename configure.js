const { default: helmet } = require("helmet")
const config = require("./core/config")
const loaders = require("./core/loaders")
const middlewares = require("./middlewares")
const coreMiddlewares = require('./core/middlewares')
const Configure = (app, express) => {
    config()  //dotEnv server impl
    loaders()  //database connection
    app.use(express.json())
    app.use(helmet())
    middlewares.routerMiddleware(app)
    app.use(coreMiddlewares.errorHandler)
}

module.exports = Configure