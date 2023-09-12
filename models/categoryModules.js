//------ imported data ---------
const { DataTypes} = require ("sequilize");
const { sequelize } = require ("./conn");

//table data parameters
const Category = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

//---------- exports ----------
module.exports = Category; 