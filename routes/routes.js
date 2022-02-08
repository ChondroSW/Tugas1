const Express = require('express')

const Routes = Express.Router()

const ProductControllers = require('../controller/product')
const ProductControllersDatabse = require('../controller/product/productdata')
const UserControllerDatabase = require('../controller/user/userData')

Routes.get('/',(req,res)=>{
    res.render("index")
})
Routes.get('/login',(req,res)=>{
    res.render("login")
})
Routes.post('/login-post',UserControllerDatabase.LoginPost)

Routes.post('/api/inputProduct',ProductControllersDatabse.Create)
Routes.get('/api/getAllProduct',ProductControllersDatabse.All)
Routes.get('/api/getUser',UserControllerDatabase.All)
Routes.post('/api/inputUser',UserControllerDatabase.Create)
Routes.put('/api/updateUser/:id',UserControllerDatabase.UpdateOne)
Routes.delete('/api/deleteUser/:id',UserControllerDatabase.DeleteOne)
Routes.post('/api/login',UserControllerDatabase.Login)


module.exports = Routes


/*  
    Membuat Application bebas
    Includes:
    1. Authentication
    2. Authorization
    3. Must Use API
    4. Front End JQUERY/Valina js
    5. Create a database who have an owner (relation owner)
*/