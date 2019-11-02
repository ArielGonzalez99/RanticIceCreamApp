const Model = require('./model');

function storeOrder(order){    
          const userOrder = new Model(order);
          userOrder.save();
}

async function findOrder(filterOrder){
            let filter = {};
        if(filterOrder!=null){
            filter = {_id: filterOrder}
        }
        const order = await Model.find(filter)
        return order;
}



function removeOrder(id){
    return Model.deleteOne({
        _id: id
    });
}

async function updateOrder(id, orderDescription) {
    const foundOrder = await Model.findOne({
        _id: id
    });
 
    foundOrder.description = orderDescription;

    const newOrder = await foundOrder.save();
    return newOrder;
}



  
module.exports = {
    save:storeOrder,
    find:findOrder,
    update:updateOrder,
    delete:removeOrder
}