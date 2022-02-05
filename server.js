const Express = require('express')
const App = Express()
const PORT = 8000
const Morgan = require('morgan')
const Dotenv = require('dotenv')

App.set("view engine","ejs")
App.use(Express.json())
Dotenv.config({path:'./config/Config.env'})

const ConnectMongoDB = require('./models/mongodb/Connection');
ConnectMongoDB()
App.listen(PORT,function(){
    console.log("Server is running")
})


App.use(Express.static('public'))

const Routing = require('./routes/routes')

App.use(Routing)
