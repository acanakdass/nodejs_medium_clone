const { DataTypes } = require('sequelize');
const { sequelize } = require('../core/loaders/db');


const UserModel = sequelize.define('user', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, { timestamps: true, tableName: 'users' }
);
//UserModel.sync()
module.exports = UserModel