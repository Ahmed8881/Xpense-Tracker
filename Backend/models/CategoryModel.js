const { DataTypes } = require('sequelize');
const {sequelize} = require('../db/db.js');

const Category = sequelize.define('Categories', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }});
// Category.sync();
module.exports = Category;