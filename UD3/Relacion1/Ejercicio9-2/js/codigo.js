/*
En el siguiente enlace podemos ver una serie de expresiones regulares las cuales validan diferentes formatos de tarjetas de crédito. Trata de explicar cada una de las expresiones regulares (desgrana la expresión) y explica la función de cada uno de los componentes de las mismas (especialmente fíjate en la última que es capaz de aunar en una sola expresión regular la validación de diferentes tarjetas de crédito en una sola expresión). 
→ Enlace: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=cc 
*/

//La expresión regular de la VISA en el enlace ofrecido es erronea.
//^4[0-9]{12}(?:[0-9]{3})?$ <-- la buena

let americanExpress="^3[47][0-9]{13}$";
let dinerClub="^3(?:0[0-5]|[68][0-9])[0-9]{11}$";
let discover="^6(?:011|5[0-9]{2})[0-9]{12}$";
let mastercard="5[1-5][0-9]{14}$";
let visaMastercardDiscover="^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$";

document.write("<h3>Desgranando expresiones regulares.</h3>");
document.write("Expresión regular para la <b>American Express</b>:  \""+americanExpress+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multiplinea (m) está habilitado.<br>");
document.write("<br><br>")

//https://regexr.com/
//TODO
document.write("Expresión regular para la <b>Diner's Club</b>:  \""+dinerClub+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multiplinea (m) está habilitado.<br>");
document.write("<br><br>")

//TODO
document.write("Expresión regular para la <b>Discover</b>:  \""+discover+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multiplinea (m) está habilitado.<br>");
document.write("<br><br>")

//TODO
document.write("Expresión regular para la <b>Master Card</b>:  \""+mastercard+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multiplinea (m) está habilitado.<br>");
document.write("<br><br>")

//TODO
document.write("Expresión regular para la <b>Visa</b>, la <b>Master Card</b> o la <b>Discover</b>:  \""+visaMastercardDiscover+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multiplinea (m) está habilitado.<br>");
document.write("<br><br>")

