/*
Ejercicio 8 - Realice una web que contenga un botón el cual cuando sea pulsado y sea capaz de abrir una ventana de 400x400 localizada en una posición random dentro de los márgenes de la pantalla. Además cada segundo que pasa la pantalla debe de disminuir en tamaño de 40 en 40 pixeles tanto de alto como ancho y cuando tenga una medida menor o igual a 60 x 60 empiece a crecer hasta un tamaño no mayor que 400x400. 
*/
let ventana;
let time;

function abrirVentana(){
   ventana = window.open("","Ejercicio2","width=400, height=400, top="+Math.floor(Math.random() * screen.height)+", left="+Math.floor(Math.random() * screen.width))
    time =setInterval(disminuirVentana, 1000);
}

function disminuirVentana(){
    console.log(ventana.innerWidth-40);
    //Lo más pequeña que se hace la pantalla es 80x80, nunca llega a 60x60
    if(ventana.innerWidth-40<=80 || ventana.innerHeigth-40<=80){
        clearInterval(time);
        time =setInterval(agrandarVentana, 1000);
    }else{
        ventana.resizeBy(-40,-40);

    }
}

function agrandarVentana(){

    if(ventana.innerWidth+60<400){
    ventana.resizeBy(60,60);
    }else{
        clearInterval(time);
    }
    console.log(ventana.innerWidth-40);

}

function cerrarVentana(){
    clearInterval(time);
    ventana.close();
}