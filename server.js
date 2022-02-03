const Express = require('express')
const App = Express()
const PORT = 8000
const Morgan = require('morgan')

App.set("view engine","ejs")
App.listen(PORT,function(){
    console.log("Server is running")
})
App.use(Express.static('public'))



App.get('/get/home',(req,res)=>{
    res.render("index")
})
App.get('/get/detail',(req,res)=>{
    res.render("detail")
})
App.get('/get/product',(req,res)=>{
    res.render("product")
})
