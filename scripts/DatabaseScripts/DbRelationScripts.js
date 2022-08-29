
const PostModel = require('../../models/PostModel')
const TagModel = require('../../models/TagModel')
const UserModel = require('../../models/UserModel')
const { sequelize } = require("../../core/loaders/db")
const { CommentModel } = require('../../models')


const createRelationsAndApplyToDB = async () => {
    //Many to many relation between posts and tags
    PostModel.belongsToMany(TagModel, { through: "post_tags", timestamps: false })
    TagModel.belongsToMany(PostModel, { through: "post_tags", timestamps: false })

    //One to many relation between users and posts
    UserModel.hasMany(PostModel)
    PostModel.belongsTo(UserModel)

    //One to many relation between comments and posts
    PostModel.hasMany(CommentModel)
    CommentModel.belongsTo(PostModel)

    UserModel.hasMany(CommentModel)
    CommentModel.belongsTo(UserModel)

    await sequelize.sync({ force: false, alter: true }) //update or create tables
}

module.exports = { createRelationsAndApplyToDB } 