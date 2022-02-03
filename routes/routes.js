const Express = require('express')

const Routes = Express.Router()

const ProductControllers = require('../controller/product')

Routes.get('/',(req,res)=>{
    res.render("index")
})

Routes.get('/product',ProductControllers.mainProduct)
Routes.get('/detail-product',ProductControllers.detailProduct)

module.exports = Routes