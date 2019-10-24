let ventana;

function abrirVentana(){
    ventana = window.open("","Ventana Ejercicio 5","width=400, height=400");    
}

function cerrarVentana(){
    ventana.close();
}

function disminuirVentana(){
    ventana.resizeBy(-40,-40);
}

function posicionarVentana(){
    ventana.moveTo(0,0);
}

function desplazarVentana(){
    ventana.moveBy(20, 20);
}