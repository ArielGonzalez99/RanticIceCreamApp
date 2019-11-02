const store = require('./store')

function storeOrderList(creator, duration){
    return new Promise((resolve, reject)=>{
        if(!creator){
            reject('Usuario invalido')
            return false;
            }
    
        


   
        const fullOrdersPack = {
            metaUser: creator,
            Time: new Date(), 
        }

        const TimeOut = fullOrdersPack.Time.setMinutes(fullOrdersPack.Time.getMinutes() + duration)
        const actualTime = new Date();
   
        
        const fullPackage = {
            metaUser: fullOrdersPack.metaUser,
            Time: fullOrdersPack.Time,
            TimeOut: TimeOut,
           
            
        }
    store.save(fullPackage);
    resolve(fullPackage)
})
}

function getOrdersPack(filterPack){
    return new Promise((resolve, reject)=>{
        resolve(store.find(filterPack));
    })
}

function deleteOrdersPack(id){
    return new Promise((resolve, reject) =>{
        if(!id){
            reject('Invalid ID')
            return false;
        }
        store.remove(id).
        then(()=>{
            resolve();
        }).
        catch(e=>{
            reject(e)
        })
    })
}

module.exports = {
    save:storeOrderList,
    list:getOrdersPack,
    delete:deleteOrdersPack
}
