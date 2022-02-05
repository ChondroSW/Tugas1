
const mainProduct = (req,res)=>{
    
    res.render('product')
}

const getProduct = (req,res)=>{
    let dataObject = {
        message:'Successfull to get data',
        statusCode:200,
        results:[
            {colorName: "White",color:"white",image:"/3.png"},
    {colorName: "Emerald",color:"#2ecc71",image:"/1.png"},
    {colorName: "Pertevier",color:"#3498db",image:"/2.png"},
    {colorName: "Midnight",color:"#2c3e50",image:"/4.png"},
    {colorName: "Purple",color:"#655D8A",image:"/5.png"},
    {colorName: "Brown",color:"#694E4E",image:"/6.png"},
    {colorName: "Yellow",color:"#FFE162",image:"/7.png"},
    {colorName: "Orange",color:"#e67e22",image:"/8.png"},
    {colorName: "Brownies",color:"#4C0027",image:"/1.png"},
    {colorName: "Grey",color:"#D3DEDC",image:"/2.png"},
        ]
    }
    res.send(dataObject)
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
exports.getProduct = getProduct