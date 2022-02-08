const { response } = require('express')
const { Mongoose } = require('mongoose')
const ProductModel = require('../../models/mongodb/Product/Product')

exports.All = async(req,res)=>{
    let tokenAuth = req.headers.authorization
    let resultToken = await JWT.verify(tokenAuth,process.env.SecretKey,function(err,resultToken){
        if(err) return false
        if(resultToken) return resultToken
    })

    if(!resultToken){
        res.send(403)
    }else{
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
    
}

exports.Create = (req,res)=>{
    //novar dataProduct = new ProductModel({title:'Manusia Ikan',description:'Pemerintah tidur sehingga  jadi manusia ikan',price :1000});
    
    let {title,description,price} = req.body;
    const newProduct = new ProductModel({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price
    })

    newProduct.save(newProduct).then(response=>{
        console.log(response)
    }).catch(err=>{
        console.log(err)
    })
    ProductModel.create(newProduct,(err,awesome)=>{
        if(err) return handleError(err);
        console.log("save")
    })
}

exports.FindOne = async(req,res)=>{
    let tokenAuth = req.headers.authorization
    let resultToken = await JWT.verify(tokenAuth,process.env.SecretKey,function(err,resultToken){
        if(err) return false
        if(resultToken) return resultToken
    })

    if(!resultToken){
        res.send(403)
    }else{
        const query = ProductModel.where({title:'Manusia Ikan'})

        query.findOne((err,product)=>{
            if(err) return err;
            if(product){
    
            }
        })
    }
    
}

exports.UpdatesOne = (req,res)=>{
    const User = Mongoose.model('Product',{name})
}

exports.UpdateMany = (req,res)=>{
    ProductModel.updateMany({},{$set:{title:'Chondro'}})
} 