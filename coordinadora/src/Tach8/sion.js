function buscarItem(lista, valor)
{
var ind, pos;
for(ind=0; ind<lista.length; ind++)
    {
    if (lista[ind] == valor) break;
    }
pos = (ind < lista.length)? ind : -1; return (pos);
}

var lista1 = new Array('n36s1');
var cadena = prompt("Introduce el codigo");
var cad = cadena.toLowerCase();
var pos = buscarItem(lista1, cad);

if (pos >=0) window.location.replace("imagen/Tachira 8 Elizabeth de Bonilla/Doncellas de Sion, Llanitos - Tachira 8.pdf");
   
    else window.location.replace("error.html");

