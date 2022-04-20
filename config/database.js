const { Sequelize } = require('sequelize');

module.exports = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: 'mysql',
    logging: false,
    timezone:"+01:00"
})