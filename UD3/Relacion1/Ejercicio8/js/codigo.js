/*
Haciendo uso de expresiones regulares, cómo podrías obtener del siguiente texto
“Test 123123329” sólo el número. Es decir, poder acceder al valor del número de este texto.
Explica cada uno de los términos de la expresión.
*/

let cadena = "Test 123123329";
let expresion="[0-9]";

let nuevaCadena="";
let index=0;
let aux=cadena;//Para no cargarme el valor de cadena

do{
    index=aux.search(expresion); //Busco la primera coincidencia del la expresion regular
    nuevaCadena+=aux.charAt(index); //Añado esta a la nueva cadena
    aux=aux.replace(aux.charAt(index),""); //elimino esta de la cadena vieja para poder buscar la siguiente coincidencia
}while(index!=-1); //si devuelve -1 es que no hay mas coincidencias


document.write(cadena+"<br>");
document.write(nuevaCadena+"<br>");

// document.write(cadena.search(expresion));