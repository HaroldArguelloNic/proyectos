var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

document.addEventListener("keydown", moverCerdo);

var xcerdo = 100;
var ycerdo = 100;

function moverCerdo(e)
{
    var movimiento = 5;

    var teclas= 
    {
        LEFT: 37,
        UP : 38,
        RIGHT : 39,
        DOWN : 40
    }
switch(e.keyCode)
    {
        case teclas.LEFT:
            xcerdo = xcerdo-movimiento;
            dibujar();

            break;

        case teclas.UP:
            ycerdo = ycerdo-movimiento;
            dibujar();

            break;

        case teclas.RIGHT:
            xcerdo = xcerdo + movimiento;
            dibujar();
        
            break;

        case teclas.DOWN:
            ycerdo = ycerdo+movimiento;
            dibujar();

            break;
    }
}
var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "images/vaca.png",
    cargaOK: false

};

var cerdo = {
    url: "images/cerdo.png",
    cargaOK: false
}

var pollo = {
    url: "images/pollo.png",
    cargaOK: false
}


fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarfondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarvaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarcerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarpollo);

function cargarfondo()
{
    fondo.cargaOK = true;
    dibujar();
}
function cargarvaca()
{
    vaca.cargaOK = true;
    dibujar();
}
function cargarcerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}
function cargarpollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0,0);
    }
    if(vaca.cargaOK)
    {
        var cantidad= aleatorio(0,6);
        var x = 30;
        var y = 30;
       for (var i=0; i<cantidad; i++)
       {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(vaca.imagen, x,y);
       }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, xcerdo,ycerdo);
    }
    if(pollo.cargaOK)
    {
        for (var i=0; i<10; i++)
        {
            x = aleatorio(0,420);
            y = aleatorio(0,420);
            papel.drawImage(pollo.imagen, x,y);
        }
        
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}