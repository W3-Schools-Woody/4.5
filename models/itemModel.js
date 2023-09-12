//-------- imported data --------
const { DataTypes } = require ("sequelize");
const { sequelize } = require ("./conn");
const { categoryModels } = require ("./categoryModules");

//item table data parameters
const Item = sequelize.define("item", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false

    },
     price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
     },
     description: {
        type:DataTypes.TEXT,
        allowNull: false
     },
     catefory_id: {
        type: DataTypes.INTEGER,
     }
}, {
    timestamps: false
});


//--------- exports --------
module.exports = Item;