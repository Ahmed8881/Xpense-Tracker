const { Sequelize } = require('sequelize');

connectionString = process.env.CONNECTION_STRING;
const sequelize = new Sequelize(connectionString, {});

const db = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {db, sequelize};
