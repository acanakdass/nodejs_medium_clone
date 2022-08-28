const cryptoJs = require("crypto-js")
const JWT = require("jsonwebtoken")

const hashPassword = (password) => {
    const hashedPassword = cryptoJs.HmacSHA256(password, process.env.PASSWORD_HASH_SALT_KEY).toString()
    return hashedPassword
}

const generateAccessToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.JWT_SECRET_KEY, { expiresIn: "3h" })
}
const generateRefreshToken = (user) => {
    return JWT.sign({ name: user.email, ...user }, process.env.JWT_REFRESH_SECRET_KEY)
}

const verifyToken = (token) => {

}

module.exports = {
    hashPassword,
    generateAccessToken,
    generateRefreshToken
}