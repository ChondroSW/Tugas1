const { response } = require('express')
const {Mongoose} = require('mongoose')
const UserModel = require('../../models/mongodb/User/User')

const JWT = require('jsonwebtoken')
const Cryptr = require('cryptr')
const { data } = require('jquery')
const cryptr = new Cryptr(process.env.SecretKey)
const encrypt = cryptr.encrypt

exports.All = async(req,res)=>{
    let tokenAuth = req.headers.authorization
    let resultToken = await JWT.verify(tokenAuth,process.env.SecretKey,function(err,resultToken){
        if(err) return false
        if(resultToken) return resultToken
    })

    if(!resultToken){
        res.send(403)
    }else{

    }

    console.log(resultToken)
    UserModel.find().then(response=>{
        res.send({
            message:'Success get data  user',
            statusCode:200,
            results:response
        });
    }).catch(err=>{
        res.send({
            message:'Failed get data',
            statusCode:500
        })
    })
}

exports.Create = async (req,res)=>{
    let {username,password,fullName,email,age,description} = req.body
    if(!req.body){
        res.send(400)
    }
    let dataFind = await UserModel.findOne({'username': req.body.username})
    if(dataFind){
        res.send({
            message:'Username Already exist'
        })
    }
    
    const newUser = new   UserModel({
        username:req.body.username,
        password:cryptr.encrypt(req.body.password),
        fullName:req.body.fullName,
        email:req.body.email,
        age:req.body.age,
        description:req.body.description
    })

     await newUser.save().then(response=>{
        res.send({
            message:"Success Save data",
            statusCode:200,
            result:response
        })
    }).catch(err=>{
        res.send({
            message:"Failed save data",
            statusCode:500
        })
    })
}
exports.UpdateOne = async(req,res)=>{
    let tokenAuth = req.headers.authorization.split('Bearer ')[1]
    let resultToken = await JWT.verify(tokenAuth,process.env.SecretKey,function(err,resultToken){
        if(err) return false
        if(resultToken) return resultToken
    })

    if(!resultToken){
        res.send(403)
    }else{
        const id = req.params.id
    
    UserModel.findByIdAndUpdate(id,req.body).then(response=>{
        if(response == null){
            res.send({
                message:'Data tidak ditemukan',
                statusCode:500
            })
        }
        res.send({
            message:'Success Update data',
            statusCode:200,
            result:response
        })
    }).catch(err=>{
        res.send({
            message:'Failed update data',
            statusCode:500
        })
    })
    }
    
    
}

exports.DeleteOne = async(req,res)=>{
    let tokenAuth = req.headers.authorization.split(' ')
    let resultToken = await JWT.verify(tokenAuth,process.env.SecretKey,function(err,resultToken){
        if(err) return false
        if(resultToken) return resultToken
    })

    if(!resultToken){
        res.send(403)
    }else{
        const id = req.params.id
    
    UserModel.findByIdAndDelete(id,req.body).then(response=>{
        if(response == null){
            res.send({
                message:'Data tidak ditemukan',
                statusCode:500
            })
        }
        res.send({
            message:'Success Delete data',
            statusCode:200,
            result:response
        })
    }).catch(err=>{
        res.send({
            message:'Failed Delete data',
            statusCode:500
        })
    })
    }
    
    
}


exports.Login = async (req,res)=>{
    let dataUser = await UserModel.findOne({'username':req.body.username})

    if(!dataUser){
        res.send({
            message : "Data not found",
            statusCode:400
        })
    }else{
        let password = cryptr.decrypt(dataUser.password)
        if(password != req.body.password){
            res.send({
                message: 'Wrong username and password',
                statusCode:400
            })
        }else{
            let token = JWT.sign({
                'UID':dataUser.id,
                'username':dataUser.username,
                'email':dataUser.email,

            },process.env.SecretKey)
            let dataParsing = {
                username: dataUser.username,
                fullName: dataUser.fullName,
                email: dataUser.email,
                tokenType: 'Bearer',
                token: token
            }
            res.send({
                message:"Success Login",
                statusCode:200,
                result:dataParsing
            })
        }
        
    }
}

exports.LoginPost = async(req,res) =>{
    let dataUser = await UserModel.findOne({'username':req.body.username})

    if(!dataUser){
        res.send({
            message : "Data not found",
            statusCode:400
        })
    }else{
        let password = cryptr.decrypt(dataUser.password)
        if(password != req.body.password){
            res.send({
                message: 'Wrong username and password',
                statusCode:400
            })
        }else{
            let token = JWT.sign({
                'UID':dataUser.id,
                'username':dataUser.username,
                'email':dataUser.email,

            },process.env.SecretKey)
            let dataParsing = {
                username: dataUser.username,
                fullName: dataUser.fullName,
                email: dataUser.email,
                tokenType: 'Bearer',
                token: token
            }
            res.render('index',dataParsing)
        }
        
    }
}