const model = require('./model');

function storeOrderList(orderList){
    const createdPack = new model(orderList);
    createdPack.save();
}

async function searchOrderList(filterPack){
    return new Promise((resolve, reject)=>{
        let filter = {};
        if(filterPack!=null){
            filter ={_id: filterPack}
        }
         model.find(filter).populate({path:'metaUser', select: 'name'}).populate('orders').exec((error, populated)=>{
            if(error){
                reject(error);
                return false;
            }
            resolve(populated)
        })

    })
   
}

function deleteOrdersPack(id){
    return model.deleteOne({
        _id:id
    });
}

module.exports = {
    save:storeOrderList,
    find:searchOrderList,
    remove:deleteOrdersPack
}