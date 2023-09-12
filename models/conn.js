//--------- imported data --------
const { Sequelize } = require('sequelize');

// DB connection config
const sequelize = new Sequelize("ecommerce", "Werk", "Milesboi", {
    host: "localhost",
    dialect: "postgres"
});

// Connection to database test
async function testConnection() {
    try{
        await sequelize.authenticate();
        console.log("connection established!");
        return true;
    } catch(error) {
        console.error("connection not made", error);
        return false;
    }
};

// ------- exports ------
module.exports = {sequelize, testConnection};