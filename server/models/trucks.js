const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Trucks: sequelize.define('trucks', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        title: DataTypes.STRING,
        mileage: DataTypes.INTEGER,
        imgURL: DataTypes.TEXT,
        color: DataTypes.STRING,
        make: DataTypes.STRING,
        model: DataTypes.STRING,
        desc: DataTypes.STRING(3000)
    })
}