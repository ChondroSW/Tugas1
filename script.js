
document.body.style.textAlign = "center";
const color = [
    {colorName: "Carrot",color:"#e67e22"},
    {colorName: "Emerald",color:"#2ecc71"},
    {colorName: "Pertevier",color:"#3498db"},
    {colorName: "Midnight",color:"#2c3e50"}
];
let box = document.getElementsByClassName("box");


for(let i = 0; i < box.length; i++){
    box[i].style.height = "250px";
    box[i].style.width = "250px"
    box[i].style.margin = "50px"
    box[i].style.display = "inline-block"
    box[i].style.backgroundColor = color[i].color
}