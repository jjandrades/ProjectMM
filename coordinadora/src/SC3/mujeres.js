function buscarItem(lista, valor)
{
var ind, pos;
for(ind=0; ind<lista.length; ind++)
    {
    if (lista[ind] == valor) break;
    }
pos = (ind < lista.length)? ind : -1; return (pos);
}

var lista1 = new Array('m3b46d2');
var cadena = prompt("Introduce el codigo");
var cad = cadena.toLowerCase();
var pos = buscarItem(lista1, cad);

if (pos >=0) window.location.replace("imagen/San Cristobal 3 Andrea de Barraza/Mujeres buscando la presencia de Dios - San Cristobal 3 - Machiri.pdf");
   
    else window.location.replace("error.html");

