const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../core/loaders/db');

const PostModel = sequelize.define("post", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, { timestamps: true, tableName: 'posts' })





module.exports = PostModel