const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const mySchema = new Schema({
   user: {
       type: Schema.ObjectId,
        ref: 'User'
    },
    token:String
    
});


const model = mongoose.model('session', mySchema); 

module.exports = model;