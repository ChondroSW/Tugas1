const mainProduct = (req,res)=>{
    res.send('Tersesat')
}
const detailProduct = (req,res)=>{
    res.send('Terseat 2')
}

exports.findAll = ()=>{
    let dataProduct = []
    for(let i  = 0; i < 10 ; i++){
        dataProduct[i] = {
            title:'Product title ${i}',
            price:10000 + (i * 100)
        }
    }

    res.send({
        'message':'Sucessfull'
    })
}
exports.mainProduct = mainProduct
exports.detailProduct = detailProduct