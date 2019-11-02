const express = require('express');
const response =  require('../../network/response'); 
const controller = require('./controller') 
const router = express.Router();

router.post('/register', function(req, res){
    controller.addUser(req.body.name, req.body.email, req.body.password).then((data)=>{
        response.success(req,res,data,201);
    })
    .catch(err=>{
        response.error(req, res, 'Internal error', 500, err);
    })
})

router.get('/', function(req, res){
    const userSearch = req.query.id || null;

    controller.getUser(userSearch)
        .then(data => {
            response.success(req, res, data, 200);
        })
        .catch(error => {
            response.error(req, resp, 'Internal Error', 500, error);
        })
});

router.delete('/:id', function(req, res){
    controller.deleteUser(req.params.id).then(()=>{
        response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    }).
    catch(e=>{
        response.error(req, res, 'Error Interno', 500, e);
    })
})


module.exports = router;