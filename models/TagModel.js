const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../core/loaders/db');


const TagModel = sequelize.define('tag', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true, tableName: 'tags' })

module.exports = TagModel