
const PostModel = require('../../models/PostModel')
const TagModel = require('../../models/TagModel')
const UserModel = require('../../models/UserModel')
const { sequelize } = require("../../core/loaders/db")


const createRelationsAndApplyToDB = async () => {
    //Many to many relation between posts and tags
    PostModel.belongsToMany(TagModel, { through: "post_tags" })
    TagModel.belongsToMany(PostModel, { through: "post_tags" })

    //One to many relation between users and posts
    UserModel.hasMany(PostModel)
    PostModel.belongsTo(UserModel)
    await sequelize.sync({ force: false }) //update or create tables
}

module.exports = { createRelationsAndApplyToDB } 