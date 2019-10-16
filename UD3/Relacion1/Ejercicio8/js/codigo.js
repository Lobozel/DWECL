/*
Haciendo uso de expresiones regulares, cómo podrías obtener del siguiente texto
“Test 123123329” sólo el número. Es decir, poder acceder al valor del número de este texto.
Explica cada uno de los términos de la expresión.
*/

let cadena = "Test 123123329";
let expresion="[0-9]{9}"; //[0-9]{9} => Busca 9 dígitos consecutivos


document.write(cadena+"<br>");
//match nos devuelve un array donde el indice 0 es la subcadena sacada a partir de la expresión regular
document.write((cadena.match(expresion))[0]);