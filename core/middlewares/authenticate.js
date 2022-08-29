const httpStatus = require("http-status")
const JWT = require("jsonwebtoken")

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"]
    const token = authHeader?.split(" ")[1]
    if (!token) {
        return res.status(httpStatus.UNAUTHORIZED).send({ error: "Authorization failed!" })
    }
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, decodedUsr) => {
        if (err) {
            return res.status(httpStatus.FORBIDDEN).send({ error: err.message })
        }
        req.user = decodedUsr.dataValues
        next()
    })
}
module.exports = authenticateToken