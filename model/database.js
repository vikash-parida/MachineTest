const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD',{ useNewUrlParser: true},(err)=>
{
     if(!err) {console.log('connecting......')}
    else{
       console.log(err);
    }
})