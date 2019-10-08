//Le pido al usuario que introduzca un número
let num = prompt('Ingrese un número:');
//En la variable factorial se irá calculando el factorial del número dado
let factorial=num;
//Creo una cadena que tendrá el formato del factorial para mostrar una salida más bonita
let cad=num+"! = "+num+" x ";

//paso por todos los números desde el dado por el usuario hacia abajo hasta el 1
//y voy multiplicandolos para obtener el factorial
for(i=num-1;i>0;i--){
    cad+=i;
    if(i!=1){
        cad+=" x ";
    }
    //Multiplico el valor del factorial por el valor actual de i
    factorial*=i;
}

cad+=" = "+factorial;

//Muestro una alerta con la cadena que muestra el factorial del número
alert(cad);