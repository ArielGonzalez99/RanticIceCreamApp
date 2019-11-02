const store  = require('./store');

function addUser(name, email, password){

    if(!name || !email || !password){
        return Promise.reject('Invalid name');
    }

    const user = {
        name:name,
        email:email,
        password:password
    };

    return store.add(user)
}

function getUser(userSearch) {
    return new Promise(async (resolve, reject) => {
        return resolve(store.list(userSearch));
    });
}

function deleteUser(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Invalid ID')
            return false;
        }
        store.delete(id).
        then(()=>{
            resolve();
        }).
        catch(e=>{
            reject(e)
        })
    })
}

module.exports={
    addUser,
    getUser,
    deleteUser
}