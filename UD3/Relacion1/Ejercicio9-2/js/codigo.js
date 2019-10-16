/*
En el siguiente enlace podemos ver una serie de expresiones regulares las cuales validan diferentes formatos de tarjetas de crédito. Trata de explicar cada una de las expresiones regulares (desgrana la expresión) y explica la función de cada uno de los componentes de las mismas (especialmente fíjate en la última que es capaz de aunar en una sola expresión regular la validación de diferentes tarjetas de crédito en una sola expresión). 
→ Enlace: http://w3.unpocodetodo.info/utiles/regex-ejemplos.php?type=cc 
*/



let americanExpress="^3[47][0-9]{13}$";
let dinerClub="^3(?:0[0-5]|[68][0-9])[0-9]{11}$";
let discover="^6(?:011|5[0-9]{2})[0-9]{12}$";
let mastercard="5[1-5][0-9]{14}$";
//La expresión regular de la VISA en el enlace ofrecido es erronea. (repite la de la american express)
let visa="^4[0-9]{12}(?:[0-9]{3})?$"; //he buscado la expresión regular
let visaMastercardDiscover="^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$";

document.write("<h3>Desgranando expresiones regulares.</h3>");

//AMERICAN EXPRESS
document.write("Expresión regular para la <b>American Express</b>:  \""+americanExpress+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>[47] =></b> Carácter 4 o 7.<br>");
document.write("<b>[0-9]{13} =></b> 13 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

//Diner's Club
document.write("Expresión regular para la <b>Diner's Club</b>:  \""+dinerClub+"\"<br>");
document.write("<b>^3 =></b> El primer caracter sea 3.<br>");
document.write("<b>(?: =></b> No captura el grupo de tokens que se encuentran entre el paréntesis.<br>");
document.write("&nbsp;&nbsp;<b>0 =></b> El carácter 0.<br>");
document.write("&nbsp;&nbsp;<b>[0-5] =></b> Un carácter comprendido entre el rango 0-5.<br>");
document.write("&nbsp;&nbsp;<b>| =></b> Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>");
document.write("&nbsp;&nbsp;<b>[68] =></b> El carácter 6 o el 8.<br>");
document.write("&nbsp;&nbsp;<b>[0-9] =></b> Un carácter comprendido entre el rango 0-9.<br>");
document.write("<b>)</b><br>");
document.write("<b>[0-9]{11} =></b> 11 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

//Discover
document.write("Expresión regular para la <b>Discover</b>:  \""+discover+"\"<br>");
document.write("<b>^6 =></b> El primer caracter sea 6.<br>");
document.write("<b>(?: =></b> No captura el grupo de tokens que se encuentran entre el paréntesis.<br>");
document.write("&nbsp;&nbsp;<b>0 =></b> El carácter 0.<br>");
document.write("&nbsp;&nbsp;<b>1 =></b> El carácter 1.<br>");
document.write("&nbsp;&nbsp;<b>1 =></b> El carácter 1.<br>");
document.write("&nbsp;&nbsp;<b>| =></b> Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>");
document.write("&nbsp;&nbsp;<b>[0-9]{2} =></b> 2 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>)</b><br>");
document.write("<b>[0-9]{12} =></b> 12 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

//Master Card
document.write("Expresión regular para la <b>Master Card</b>:  \""+mastercard+"\"<br>");
document.write("<b>5 =></b> El carácter 5.<br>");
document.write("<b>[1-5] =></b> Un carácter comprendido entre el rango 1-5.<br>");
document.write("<b>[0-9]{14} =></b> 14 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

//VISA
document.write("Expresión regular para la <b>Visa</b>:  \""+visa+"\"<br>");
document.write("<b>^4 =></b> El primer caracter sea 4.<br>");
document.write("<b>[0-9]{12} =></b> 12 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>(?: =></b> No captura el grupo de tokens que se encuentran entre el paréntesis.<br>");
document.write("&nbsp;&nbsp;<b>[0-9]{3} =></b> 3 caracteres comprendidos entre el rango 0-9 consecutivos.<br>");
document.write("<b>)</b><br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

//Visa, Master Card y Discover
document.write("Expresión regular para la <b>Visa</b>, la <b>Master Card</b> o la <b>Discover</b>:  \""+visaMastercardDiscover+"\"<br>");
document.write("<b>^ =></b> Si coincide con el comienzo de la cadena, o de la línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<b>(?: =></b> No captura el grupo de tokens que se encuentran entre el paréntesis.<br>");
document.write("&nbsp;&nbsp;<b>4 =></b> El carácter 4.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>( =></b> Grupo de captura #1, agrupa varios tokens y crea un grupo de captura para extraer una subcadena o usar una referencia inversa.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>[\\- ] =></b> Carácter - o ESPACIO.<br>");
document.write("&nbsp;&nbsp;<b>)</b><br>");
document.write("&nbsp;&nbsp;<b>? =></b> Coincidencia entre 0 y 1 del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>{6} =></b> 6 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>\\1 =></b> Coincidencia con el grupo de captura #1.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>{5} =></b> 5 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>| =></b> Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>");
document.write("&nbsp;&nbsp;<b>(?: =></b> No captura el grupo de tokens que se encuentran entre el paréntesis.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>4 =></b> El carácter 4.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>{3} =></b> 3 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>| =></b> Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>5 =></b> El carácter 5.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>[1-5] =></b> Un carácter comprendido entre el rango 1-5.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>{2} =></b> 2 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>| =></b> Actua igual que un OR. Coincide con la expresión antes o después del \'|\'.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>6 =></b> El carácter 6.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>0 =></b> El carácter 0.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>1 =></b> El carácter 1.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>1 =></b> El carácter 1.<br>");
document.write("&nbsp;&nbsp;<b>)</b><br>");
document.write("&nbsp;&nbsp;<b>( =></b> Grupo de captura #2, agrupa varios tokens y crea un grupo de captura para extraer una subcadena o usar una referencia inversa.<br>");
document.write("&nbsp;&nbsp;&nbsp;&nbsp;<b>[\\- ] =></b> Carácter - o ESPACIO.<br>");
document.write("&nbsp;&nbsp;<b>)</b><br>");
document.write("&nbsp;&nbsp;<b>? =></b> Coincidencia entre 0 y 1 del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>{4} =></b> 4 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>\\2 =></b> Coincidencia con el grupo de captura #2.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>{4} =></b> 4 coincidencias del token anterior.<br>");
document.write("&nbsp;&nbsp;<b>\\2 =></b> Coincidencia con el grupo de captura #2.<br>");
document.write("&nbsp;&nbsp;<b>\\d =></b> Un dígito.<br>");
document.write("&nbsp;&nbsp;<b>{4} =></b> 4 coincidencias del token anterior.<br>");
document.write("<b>)</b><br>");
document.write("<b>$ =></b> Final de cadena o, final de línea si el indicador de multilínea (m) está habilitado.<br>");
document.write("<br><br>")

