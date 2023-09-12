const { sequelize, testConnection } = require("./models/conn");
const Category = require("./models/categoryModules");
const Item = require("./models/itemModel");


//calling the test function
testConnection();

// get categories
const findCategories = async () => {
   const result = await Category.findAll();
    console.log(JSON.stringify(result));
}

// get categories by name
const findCategoriesByName = async () => {
    const result = await Category.findAll({where: {name: fruits}})
    console.log(JSON.stringify(result));
}

//create new 
const createNewCategory = async () => {
    await Category.create({
        name: meat
    });
    
    findCategories();
}

// update 
const updatingCategory = async () => {
    await Category.update({ name: "meats"}, {where: {id: 4}})
    findCategories();
}

// delete
const deleteCategory = async ()=> {
    await Category.destroy({ where: {id: 4}});
    findCategories();
}

// get items
const findItems = async() => {
    const result = await Item.findAll({ include: Category});
    console.log(json.stringify(results));
}



