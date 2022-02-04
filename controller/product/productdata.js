const { response } = require('express')
const { Mongoose } = require('mongoose')
const ProductModel = require('../../models/mongodb/Product/Product')

exports.All = (req,res)=>{
    ProductModel.find().then(response=>{
        res.send({
            message:'Successfull to get data',
            statusCode : 200,
            results:response
        })
    }).catch(err =>{
        res.send('failed to get data')
    })
}

exports.Create = (req,res)=>{
    //novar dataProduct = new ProductModel({title:'Manusia Ikan',description:'Pemerintah tidur sehingga  jadi manusia ikan',price :1000});
    ProductModel.create({title:'Manusia Ikan',description:'Pemerintah tidur sehingga  jadi manusia ikan',price :1000},(err,awesome)=>{
        if(err) return handleError(err);
        console.log("save")
    })
}

exports.FindOne = (req,res)=>{
    const query = ProductModel.where({title:'Manusia Ikan'})

    query.findOne((err,product)=>{
        if(err) return err;
        if(product){

        }
    })
}

exports.UpdatesOne = (req,res)=>{
    const User = Mongoose.model('Product',{name})
}