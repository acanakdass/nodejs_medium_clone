const UserModel = require("./UserModel")
const PostModel = require("./PostModel")
const TagModel = require("./TagModel")
const CommentModel = require("./CommentModel")
const { sequelize } = require("../core/loaders/db")
const { DataTypes } = require("sequelize")
const UserService = require("../services/UserService")
const { hashPassword } = require("../core/helpers/securityHelpers")

async function main() {
    //seed admin user
    const seedAdminUser = () => {

        const cryptedPw = hashPassword(process.env.ADMIN_PW)
        let userData = {
            firstName: process.env.ADMIN_FN,
            lastName: process.env.ADMIN_LN,
            email: process.env.ADMIN_EMAIL,
            password: cryptedPw,
        }
        UserService.add(userData).then(response => {
            console.log("addeddd")
            console.log(response)
        }).catch(err => {
            console.log(err)
        })

    }
    const users = await UserService.getAll()
    if (users.length == 0) {
        seedAdminUser()
    }
}

// main()

module.exports = {
    PostModel,
    UserModel,
    CommentModel,
    TagModel
}