const mongoose = require('mongoose');
 

    
// ProductSchema Modal Schema
const ProductSchema = new mongoose.Schema({
   
    productId:String,
    productName:String,
    price:Number,
    category:{type:'ObjectID',ref:'Category'}
    
});
     
// Creating model objects

const  product =  new mongoose.model('Product', ProductSchema);
    
// Exporting our model objects

module.exports = product