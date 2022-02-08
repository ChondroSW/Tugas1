const { Int32 } = require('mongodb')
const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number}
})

var schemaProduct = Mongoose.model('Product',Schema)

module.exports = schemaProduct
