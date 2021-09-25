var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var colorcito ="blue";
var l= 0;
var xf;


for(l=0; l < lineas; l++)
{
    
    xf = 10 * (l+1);
    dibujarLinea(colorcito, 150, 0, xf, 300);
}



function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}