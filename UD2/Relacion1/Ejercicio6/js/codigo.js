//Creo un vector con los elementos especificados en el ejercicio
let vector=[
    0,7,2,3,4,2,6,2,8,2
];

//Muestro el vector en un alert
alert("Antes del cambio ".concat(vector));

//Cambio los elementos cuyo valor sea un 2 por dos elementos cuyo valor es un 1
for(i=0;i<vector.length;i++){
    if(vector[i]==2){
        vector.splice(i,1,1,1);
    }
}

//Muestro el vector trás los cmabios, en un alert
alert("Después del cambio ".concat(vector));