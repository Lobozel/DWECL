/*
Ejercicio 3 - Haz una página en la aparecen 2 botones: uno abre una ventana y el segundo cierra la misma ventana.
*/

let ventana;

function abrirVentana(){
   ventana = window.open("","Ejercicio2","toolbar=yes, scrollbars=yes, resizable=no, width=400, height=400, left=500")
}

function cerrarVentana(){
    ventana.close();
}