const Routes = require("../api-routes")

const routerMiddleware = (app) => {
    app.use('/api/users', Routes.UserRoutes)
    app.use('/api/posts', Routes.PostRoutes)
    app.use('/api/tags', Routes.TagRoutes)
}
module.exports = routerMiddleware