const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const mySchema = new Schema({
   

    metaUser: {
        type: Schema.ObjectId,
        ref: "User",
    } ,

    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }],

    Time:Date,
    expirationTime:Date,
    timeLeft:Number,
    

});

const model = mongoose.model('orderList', mySchema); 

module.exports = model;
