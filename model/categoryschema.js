const mongoose = require('mongoose');
 
// CategorySchema Modal Schema
const CategorySchema = new mongoose.Schema({
   
    categoryId:String,
    categoryName:String
});
const Category = new mongoose.model('Category',CategorySchema);
module.exports = Category;