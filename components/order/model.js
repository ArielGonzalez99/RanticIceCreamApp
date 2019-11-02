const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({

    orderList:{
        type: Schema.ObjectId,
        ref: "orderList",

    },

    description:{},
   

    userId: {
        type: Schema.ObjectId,
        ref: "User",
    } ,

 paymentMethod:String,



});

const model = mongoose.model('Order', mySchema); 

module.exports = model;
