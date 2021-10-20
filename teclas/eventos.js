var teclas = {
    UP: 38,
    DOWN:40,
    LEFT:37,
    RIGHT: 39
};
var colorcito = "blue";

var botonRojo = document.getElementById("botonrojo");
botonRojo.addEventListener("click",colorrojo);

var botonVerde = document.getElementById("botonverde");
botonVerde.addEventListener("click",colorverde);

var botonAzul = document.getElementById("botonazul");
botonAzul.addEventListener("click",colorazul);

let isDrawing = false;
let x = 0;
let y = 0;
document.addEventListener("mousedown", e =>{
    x= e.offsetX;
    y= e.offsetY;
    isDrawing = true;
});
document.addEventListener("mousemove", e =>{
    if (isDrawing == true){
        dibujarLinea(colorcito,x,y,e.offsetX,e.offsetY,papel);
        x = e.offsetX;
        y = e.offsetY;
    }
});
window.addEventListener('mouseup', e => {
    if (isDrawing === true) {
      dibujarLinea(colorcito, x, y, e.offsetX, e.offsetY,papel);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("Areadibujo");
var papel = cuadrito.getContext("2d");
//var x = 150;
//var y = 150;

dibujarLinea("red", x-1,y-1,x+1,y+1, papel);



function colorrojo(){
    colorcito="red";
}

function colorverde(){
    colorcito="green";
}

function colorazul(){
    colorcito="blue";
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
  
  var movimiento = 1;

  switch(evento.keyCode)
  {
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y- movimiento, papel);
        y = y - movimiento;
    break;
    case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
    break;
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
    break;
    case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
    break;
  }
}
