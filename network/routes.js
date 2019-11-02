const user = require('../components/user/network')
const order = require('../components/order/network')
const session = require('../components/session/network')
const orderList = require('../components/orderList/network')

const routes = function(server){
    server.use('/session', session)
    server.use('/user', user)
    server.use('/order', order)
    server.use('/orderList', orderList)
    
    

}

module.exports =  routes;