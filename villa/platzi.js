var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");


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
        for(var v=0; v<10; v++)
        {
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            papel.drawImage(vaca.imagen, x,y);
        }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, 100,100);
    }
    if(pollo.cargaOK)
    {
        papel.drawImage(pollo.imagen, 200,200);
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}