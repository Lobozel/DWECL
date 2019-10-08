//Declaración de vectores y variables
let vector = new Array(10);
let random;

//Relleno el vector con 10 números random y a su vez busco el más pequeño de este
for(i=0;i<10;i++){
    random=Math.floor(Math.random()*1001); //Genera random entre 0 y 1000
    vector[i]=random;
}

//Nota:document.write es como escribir en html por eso para el salto de línea debo usar <br> en lugar de \n
document.write("Vector sin ordenar:<br>"+vector+"<br>");
vector.sort(); //ordeno el array de acuerdo a su valor Unicode (Menor a Mayor)
document.write("Vector ordenado:<br>"+vector+"<br>");
vector.reverse(); //invierto el array, como ya estaba ordenado, queda ordenado de mayor a menor.
document.write("Vector ordenado invertido:<br>"+vector+"<br>");