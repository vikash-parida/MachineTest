const express = require('express');
const router = express.Router();

//            category-master
const Category = require('../model/categoryschema');
// create a new category
router.post('/cartegory', async  (req,res)=>{  
    try{
        const categroy = new Category(req.body);
        const savecategroy = await  categroy.save();
        res.json(savecategroy);
    }catch(err){
        res.json({message: err.message})
    }
});
// show all categories
router.get('/cartegory',async (req,res)=> {
    try{
        const {page = 1, limit=10} = req.query
        const categroy = await Category.find().limit(limit*1).skip((page-1)*limit);
        res.json({total:categroy.length,categroy});
    }catch(err){
        res.json({message: err.message})
    }
    });
// show category by ID
router.get('/cartegory/:id', async(req,res)=>{
    try{
        const _id = req.params.id
        console.log(_id);
     const categroys = await Category.findById(_id);
     res.json(categroys);
 }catch(err){
     res.json({message: err.message})
 }
 
 });
// updata the category by id 
 router.put('/cartegory/:id',async (req,res)=>{
    try{
        const _id = req.params.id
        const updatecategroy = await Category.findByIdAndUpdate(_id,req.body);
        res.json(updatecategroy);
    }catch(err){
        res.json({message: err.message})
    }
    });
// delete the category by id
   router.delete('/cartegory/:id',async (req,res)=>{
    try{ const _id = req.params.id;
         const deletecategroy = await Category.findByIdAndDelete(_id);
      if(!_id){
          return res.status(404).send();
      }
      res.json(deletecategroy);
    }catch(err){
        res.json({message: err.message});
    }
  
  });

  // all data two table


  // product-master

const product = require('../model/productschema');

  //    post data
 router.post('/product',async (req,res)=>{ 
    try{
        const products = new product(req.body)
        const productsave = await products.save();
        res.json(productsave);
    }catch(err){
        res.json({message: err.message})
    }
    })

    // get data
router.get('/product', async (req,res)=> {
    try{
        const {page = 1,limit=10}= req.query;
        const products = await product.find().limit(limit*1).skip((page-1)*limit);
        res.send(products);
    }catch(err){
        res.json({message: err.message})
    }
    });

 router.get('/productlist',async(req,res)=>{
    try{
    //   const _id = req.params.id; 
    const {page = 1,limit=10}= req.query; 
     const products = await product.find().populate('category').limit(limit*1).skip((page-1)*limit);
     res.json(products);
 }catch(err){
     res.json({message: err.message})
 }
 
 })   

 router.put('/product/:id',async (req,res)=>{
    try{
        const updateprodect = await product.findByIdAndUpdate({_id:req.params.id},{$push:{category:req.body.category}},req.body);
        res.json(updateprodect);
    }catch(err){
        res.json({message: err.message})
    }
    });

 router.delete('/product/:id',async (req,res)=>{
        try{ const deleteproduct = await product.findByIdAndDelete(req.params.id);
          if(!req.params.id){
              return res.status(404).send();
          }
          res.json(deleteproduct);
        }catch(err){
            res.json({message: err.message});
        }
      
      });

module.exports = router;
