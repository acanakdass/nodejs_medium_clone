const httpStatus = require("http-status")
const JWT = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader?.split(" ")[1]
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: "Authorization failed!" })
    }
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(httpStatus.FORBIDDEN).send({ error: err.message })
        }
        req.user = user.response
        next()
    })
}
module.exports = authenticateToken