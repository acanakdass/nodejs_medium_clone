const db = require("./db.js")
const redis = require("./redis")
module.exports = () => {
    db.connectDB(), redis.connectRedis()
}