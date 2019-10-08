//Creo 3 variables con 3 números enteros diferentes
let num1=8;
let num2=4;
let num3=7;

//Llamo a la función ordenarTresNumeros para que se ejecute
ordenarTresNumeros(num1,num2,num3);

//Dados 3 números por parámetros, muestra un alert con estos números ordenados de menor a mayor
function ordenarTresNumeros(num1,num2,num3){
    if(num1<num2 && num1<num3){
        if(num2<num3){
            alert(num1+"<"+num2+"<"+num3);
        }else{
            alert(num1+"<"+num3+"<"+num2);
        }
    }else if(num2<num3){
        if(num1<num3){
            alert(num2+"<"+num1+"<"+num3);
        }else{
            alert(num2+"<"+num3+"<"+num1);
        }
    }else{
        if(num2<num1){
            alert(num3+"<"+num2+"<"+num1);
        }else{
            alert(num3+"<"+num1+"<"+num2);
        }
    }
}