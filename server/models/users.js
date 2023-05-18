const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Users: sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: DataTypes.STRING,
        hashedPassword: DataTypes.STRING
    })
}