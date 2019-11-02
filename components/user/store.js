const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUser(userSearch) {
    return new Promise((resolve, reject)=>{
        let filter = {};

        if (userSearch) {
            filter['_id'] = userSearch;
        }
    
        Model.find(filter).populate('order').populate('orderList').exec((error, populated)=>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated)
        })
    })
   
}

function deleteUser(id){
    return model.deleteOne({
        _id:id
    });
}




module.exports = {
    add:addUser,
    list:getUser,
    delete:deleteUser
}