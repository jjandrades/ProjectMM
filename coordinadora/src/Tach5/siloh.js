function buscarItem(lista, valor)
{
var ind, pos;
for(ind=0; ind<lista.length; ind++)
    {
    if (lista[ind] == valor) break;
    }
pos = (ind < lista.length)? ind : -1; return (pos);
}

var lista1 = new Array('s5q45u');
var cadena = prompt("Introduce el codigo");
var cad = cadena.toLowerCase();
var pos = buscarItem(lista1, cad);

if (pos >=0) window.location.replace("imagen/Tachira 5 Angeris de Sanchez/Grupo Siloh integrado - Tachira 5 - Grupo Enmanuel - Siloh.pdf");
   
    else window.location.replace("error.html");

