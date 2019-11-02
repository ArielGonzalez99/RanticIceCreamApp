const store  = require('./store');

function storeOrder(orderListID,productName, size, flavour, user, paymentMethod){
    return new Promise((resolve, reject)=>{
        if(!user || !orderListID || !productName || !size || !flavour || !paymentMethod){
            reject('Datos incorrectos'); 
            return false;       
        }

        const productDescription = {
            productName:productName,
            size:size,
            flavour:flavour
        }
        
        const fullOrder ={
            orderList:orderListID,
            description:productDescription,
            userId:user,
            paymentMethod:paymentMethod,
        }

        store.save(fullOrder);
        resolve(fullOrder);
    });
}

function findOrder(filterOrder){
    return new Promise((resolve, reject)=>{
        resolve(store.find(filterOrder));
    })
}



function deleteOrder(id){
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

function updateOrder(id, productName, flavour, size) {
    return new Promise(async (resolve, reject) => {

        if (!id || !productName || !size || !flavour) {
            reject('Invalid data');
            return false;
        }
        const description = {
            productName:productName,
            flavour:flavour,
            size:size
        }

        const result = await store.update(id, description);

        resolve(result);
    })
}


module.exports={
    storeOrder,
    findOrder,
    updateOrder,
    deleteOrder
}