
//DOM dan Penggunaan Query
document.body.style.textAlign = "center";
const color = [
    {colorName: "White",color:"white"},
    {colorName: "Emerald",color:"#2ecc71"},
    {colorName: "Pertevier",color:"#3498db"},
    {colorName: "Midnight",color:"#2c3e50"},
    {colorName: "Purple",color:"#655D8A"},
    {colorName: "Brown",color:"#694E4E"},
    {colorName: "Yellow",color:"#FFE162"},
    {colorName: "Orange",color:"#e67e22"},
    {colorName: "Brownies",color:"#4C0027"},
    {colorName: "Grey",color:"#D3DEDC"},

];
//let box = document.getElementsByClassName("box");
// let box =  $(".box");
// // var box2 = document.getElementsByClassName("box-1");
// // box2.style.width = "200px";
// // box2.style.height = "200px";
// // box2.style.backgroundColor = "black";


// for(let i = 0; i < box.length; i++){
//     if (i == 0){
//         box[0].style.border = "thick solid #000000";
//     }
//     box[i].style.height = "250px";
//     box[i].style.width = "250px";
//     $(".box").css("margin","50px");
//     $(".box").css("display","inline-block");
//     $(".box").css("background-color",color[i].color);
//     $(document).ready(function(){
//         $(".box").click(function(){
//             $(".box").css("background-color",color[i].color);
//         })
//     });
// }

// JQuery
$(document).ready(function(){
    $(".box").each(function(i){
        $(this).html();
        $(this).css("margin","50px");
        $(this).css("background-color",color[i ].color);
        $(this).css("width","50px");
        $(this).css("height","50px")
        $(this).css("display","inline-block");
        $(this).click(function(){
            $('#box1').css("background-color",color[i].color);
        });
    })
});
