const sequelize = require("../config/database");
const { v4: uuidv4 } = require("uuid");
const { DataTypes } = require("sequelize");
const { Sequelize } = require("../config/database");

const crud = sequelize.define(
    "crud",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        uuid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            defaultValue: uuidv4(),
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creationDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        timestamps: false,
        tableName: "crud",
    }
);

module.exports = crud;
