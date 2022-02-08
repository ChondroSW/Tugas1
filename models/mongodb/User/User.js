const { Int32 } = require('mongodb')
const Mongoose = require('mongoose')

var Schema = new Mongoose.Schema({
    username:{type:String},
    password:{type:String},
    fullName:{type:String},
    email:{type:String},
    age:{type:Number},
    description:{type:String}
})
Schema.method("toJSON",function(){
    const {__v,_id,...object} = this.toObject();
    object.id = _id
    return object
})
var schemaUser = Mongoose.model('User',Schema)

module.exports = schemaUser