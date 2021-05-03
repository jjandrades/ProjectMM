function buscarItem(lista, valor)
{
var ind, pos;
for(ind=0; ind<lista.length; ind++)
    {
    if (lista[ind] == valor) break;
    }
pos = (ind < lista.length)? ind : -1; return (pos);
}

var lista1 = new Array('r2c5d1');
var cadena = prompt("Introduce el codigo");
var cad = cadena.toLowerCase();
var pos = buscarItem(lista1, cad);

if (pos >=0) window.location.replace("imagen/Apure 4 Grey/Mujeres creadas por Dios - Apure 4 - Las Carpas.pdf");
   
    else window.location.replace("error.html");

