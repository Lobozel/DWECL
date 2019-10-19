/*
Ejercicio 5 - Partiendo del mismo ejercicio 3, realiza un script que se capaz de:
Abrir una ventana de un tamaño determinado (cualquiera).
Cerrar ventana.
Aumentar tamaño de esa ventana.
Disminuir tamaño de esa ventana.
Posicionar en la posición (0, 0) la ventana.
Desplazar la ventana hacia la derecha.
Para cada una de estas funciones debemos de crear un botón, y mostrar por pantalla el tamaño de la ventana para poder hacer un seguimiento de los cambios de la misma.
*/

let ventana;

function abrirVentana(){
   ventana = window.open("","Ejercicio2","toolbar=yes, scrollbars=yes, resizable=no, width=400, height=400, left=500")
    document.getElementById("ancho").innerHTML = ventana.innerWidth;
    document.getElementById("alto").innerHTML = ventana.innerHeight;
}

function cerrarVentana(){
    ventana.close();
    document.getElementById("ancho").innerHTML ="";
    document.getElementById("alto").innerHTML = "";
}

function agrandarVentana(){
    ventana.resizeBy(100,100);
    //El +100 es porque tarda en actualizarse
    document.getElementById("ancho").innerHTML = ventana.innerWidth+100;
    document.getElementById("alto").innerHTML = ventana.innerHeight+100;
}

function disminuirVentana(){
    ventana.resizeBy(-100,-100);
    //El -100 es porque tarda en actualizarse
    document.getElementById("ancho").innerHTML = ventana.innerWidth-100;
    document.getElementById("alto").innerHTML = ventana.innerHeight-100;
}

function posicionarVentana(){
    ventana.moveTo(0,0);
}

function desplazarVentana(){
    ventana.moveBy(10, 0);
}