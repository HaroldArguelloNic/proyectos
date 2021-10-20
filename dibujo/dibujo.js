var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click",dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var colorcito ="blue";
    var espacio = ancho / lineas;
    var l= 0;
    var xf;

    for(l=0; l < lineas; l++)
    {
        xf = espacio * (l+1);
        dibujarLinea(colorcito, 150, 0, xf, 300);
    }
}