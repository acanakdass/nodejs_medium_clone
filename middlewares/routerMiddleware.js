const Routes = require("../api-routes")

const routerMiddleware = (app) => {
    app.use('/api/users', Routes.UserRoutes)
    app.use('/api/auth', Routes.AuthRoutes)
    app.use('/api/posts', Routes.PostRoutes)
    app.use('/api/tags', Routes.TagRoutes)
    app.use('/api/comments', Routes.CommentRoutes)
}
module.exports = routerMiddleware