/*
Crea un programa que pida al usuario que elija una opción del siguiente menú:
1. Potencia.
2. Raíz.
3. Redondeo.
4. Trigonometría.
Si el usuario introduce 1, se le deberá pedir una base y un exponente y se mostrará el resultado en pantalla (La potencia de X elevado a Y es: )
Si el usuario introduce 2, se le pedirá un número (no negativo) y se mostrará el resultado en pantalla (La raíz de X es: )
Si el usuario introduce 3, se le pedirá un decimal por pantalla y se mostrará el redondeo al entero más próximo, al alta y a la baja.
Si el usuario introduce 4, se le pedirá un ángulo (entre 0 y 360) y se le mostrarán por pantalla los valores trigonométricos del seno, coseno y tangente.

*/

let op=0;

do{

do{
    op = prompt('Escoge una operación\n1.Potencia\n2.Raíz\n3.Redondeo\n4.Trigonometría');
}while(op<1 || op>4);


    let num=0;
    switch(op){
        case "1":
            let num2;
            num = prompt('Ingese la base:');
            num2 = prompt('Ingrese el exponente:');
            document.write("La solución es "+Math.pow(num,num2));
        break;
        case "2":
            do{
                num = prompt('Ingese un número no negativo:');
            }while(num<0);
            document.write("La raiz cuadrada es "+Math.sqrt(num));
        break;
        case "3":
            do{
                num = prompt('Ingese un número decimal:');
            }while(num%1!=0);
            document.write("El entero más cercano (a la alta) es "+Math.round(num));
            document.write("El entero más cercano (a la baja) es "+Math.floor(num));
        break;
        case "4":
            do{
                num = prompt('Ingese un ángulo (entre 0 y 360):');
            }while(num<0 || num>360);
            document.write("El valor de seno es: "+Math.sin(num));
            document.write("El valor de coseno es: "+Math.con(num));
            document.write("El valor de la tangente es: "+Math.tan(num));
        break;
    }

    document.write("<br>");

    op = prompt('Introduzca 1 para volver al menú, u otra cosa para salir.');
}while(op==1);

