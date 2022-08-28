const { default: helmet } = require("helmet")
const config = require("./core/config")
const loaders = require("./core/loaders")
const middlewares = require("./middlewares")
const coreMiddlewares = require('./core/middlewares')
const dbScripts = require('./scripts')
const events = (require('./scripts/events'))
const Configure = (app, express) => {
    config()  //dotEnv server impl
    loaders()  //database connection
    events() // listen events..
    dbScripts.DbRelationScripts.createRelationsAndApplyToDB() //run db scripts like create relations, tables..

    app.use(express.json())
    app.use(helmet())
    middlewares.routerMiddleware(app)
    app.use(coreMiddlewares.errorHandler)
}

module.exports = Configure