const User = require('../user/model');
const Model = require('./model');
const jwt = require('jsonwebtoken')
const config =  require('../../config')



async function login(loggedUser) {
   
    let filter = {};

    if (loggedUser) {
        filter ={
            email: loggedUser.email,
            password: loggedUser.password
        }
    }

    const authUser = await User.findOne(filter);
    if(authUser){
        const jToken = jwt.sign({loggedUser}, config.secret);
     
        const session={
            user:authUser,
            token:jToken
        }
        
        return new Model(session);

    }
    
}

module.exports = {
    login: login
}