//Declaración de vectores y variables
let vector = new Array(10);
let nuevoV = [];
//Inicializo el valor de la variable menor por el mayor número positivo representable
let menor=Number.MAX_VALUE;
let random;

//Relleno el vector con 10 números random y a su vez busco el más pequeño de este
for(i=0;i<10;i++){
    random=Math.floor(Math.random() * 1001); //Genera random entre 0 y 1000
    vector[i]=random;
    //Si el nuevo número random es menor que el actual valor de menor, cambio el valor de menor por este
    if(menor>random){
        menor=random;
    }
}

//Busco la posición del elemento más pequeño y a partir de ahí uso el slice para generar un nuevo vector
for(i=0;i<vector.length;i++){
    if(vector[i]==menor){
        nuevoV = vector.slice(i);
    }
}

//Muestro los dos vectores diferentes con alert
alert("Vector de 10 números random:\n".concat(vector));
alert("Vector cortado con slice:\n".concat(nuevoV));