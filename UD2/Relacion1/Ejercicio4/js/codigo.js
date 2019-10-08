//Pido al usuario que introduzca un número y lo guardo en una variable
let num1 = prompt('Ingrese el primer número:');
//Pido al usuario que introduzca otro número y lo guardo en una variable diferente
let num2 = prompt('Ingrese el segundo número:');

if(num1>num2){
    //Si el primer número es mayor que el segúndo muestro la suma y la resta de estos
    /*Nota: Para sumar dos números y que no me los trate como cadenas y los concatene,
    debo parsear ambos con el método parseInt()*/
    alert(num1.concat(" + ").concat(
        num2).concat(" = ").concat(parseInt(num1)+parseInt(num2)).concat("\n")
            .concat(num1).concat(" - ").concat(
                num2).concat(" = ").concat(num1-num2)
    );
}else if(num1<num2){
    //Si el segundo número es mayor que el primero muestro el producto y la división de estos
    alert(num1.concat(" * ").concat(
        num2).concat(" = ").concat(num1*num2).concat("\n")
        .concat(num1).concat(" / ").concat(
                num2).concat(" es = ").concat(num1/num2)
    );
}else{
    //En caso de ser iguales le comento al usuario que pruebe con números diferentes.
    alert("Prueba con números diferentes");
}