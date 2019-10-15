/*
Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
El valor del radio.
El valor del diámetro.
El valor del perímetro de la circunferencia.
El valor del área del círculo.
El valor del área de la esfera.
El valor del volumen de la esfera.
• El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
• Debes escribir al lado si son cm, o cm2, ó cm3.
• Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59.   (sin incluir las unidades)
*/
let radio=5;

 radio = prompt("Introduce el radio.");

 diametro=radio*2;
 perimetro=(2*Math.PI*radio).toFixed(2);
 aCir=(Math.PI*Math.pow(radio,2)).toFixed(2);
 aEsf=(4*Math.PI*Math.pow(radio,2)).toFixed(2);
 vEsf=(4/3*Math.PI*Math.pow(radio,3)).toFixed(2);

document.write("El valor del radio es: "+radio+"cm<br>");
document.write("El valor del diámetro es: "+diametro+"cm<br>");
document.write("El valor del perímetro es: "+perimetro+"cm2<br>");
document.write("El valor del área del círculo es: "+aCir+"cm2<br>");
document.write("El valor del área de la esfera es: "+aEsf+"cm3<br>");
document.write("El valor del volumen de la esfera es: "+vEsf+"cm3<br>");