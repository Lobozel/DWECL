/*
Ejercicio 4 - Partiendo del mismo ejercicio anterior, añade un botón que compruebe si la ventana que se tiene que abrir, ha sido ya abierta, está abierta, o ha sido ya cerrada.
*/

let ventana;

function abrirVentana(){
   ventana = window.open("","Ejercicio2","toolbar=yes, scrollbars=yes, resizable=no, width=400, height=400, left=500")
}

function cerrarVentana(){
    ventana.close();
}

function comprobar(){
    if(ventana==null){
        document.getElementById("demo").innerHTML = "La ventana no se ha abierto";

    }
    if(ventana.closed){
        document.getElementById("demo").innerHTML = "La ventana se ha cerrado";
    }else{
        document.getElementById("demo").innerHTML = "La ventana sigue abierta";
    }
    
}