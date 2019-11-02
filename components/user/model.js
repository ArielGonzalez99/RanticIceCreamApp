const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
   name: String, 
   email: String,
   password: String, 
   order: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Order"
   }],
   orderList:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:"orderList"
   }] 
});


const model = mongoose.model('User', mySchema); 

module.exports = model;