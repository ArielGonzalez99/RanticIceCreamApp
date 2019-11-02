const express = require('express');
const response =  require('../../network/response'); 
const controller = require('./controller') 
const router = express.Router(); 


router.get('/', function(req, res){
    const filterOrders = req.query.order || null; 
    
    controller.findOrder(filterOrders).then((orderList) =>{
        response.success(req, res, orderList, 200);
    })
    .catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e);
    })

 
});


router.post('/', function(req, res){ 
    console.log(req.body.orderListID, req.body.productName, req.body.flavour, req.body.size, req.body.user, req.body.paymentMethod);
    controller.storeOrder(req.body.orderListID, req.body.productName, req.body.flavour, req.body.size, req.body.user, req.body.paymentMethod).then((result)=>{
        response.success(req, res, result, 201);
    })
    .catch(e=>{
        response.error(req, res, 'Informacion Invalida', 400, 'Error en el controlador');
    });
});

router.patch('/:id', function (req, res) {
    controller.updateOrder(req.params.id, req.body.productName, req.body.flavour, req.body.size)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 500, e);
        });
});

router.delete('/:id', function(req, res){
    controller.deleteOrder(req.params.id).then(()=>{
        response.success(req, res, `Orden ${req.params.id} eliminada`, 200);
    }).
    catch(e=>{
        response.error(req, res, 'Error Interno', 500, e);
    })
})

module.exports = router;