const Express = require('express')

const Routes = Express.Router()

const ProductControllers = require('../controller/product')
const ProductControllersDatabse = require('../controller/product/productdata')

Routes.get('/',(req,res)=>{
    res.render("index")
})

Routes.get('/heheh',ProductControllersDatabse.All);
Routes.get('/tester',ProductControllers.getProduct)
Routes.get('/product',ProductControllers.mainProduct)
Routes.get('/detail-product',ProductControllers.detailProduct)

module.exports = Routes