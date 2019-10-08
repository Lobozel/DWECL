//Almacena en una variable un saludo que más tarde se mostrará al usuario
var saludo = "Hola Mundo!\n".concat(
"qué fácil es incluir 'comillas simples'\n").concat(
"y \"comillas dobles\"");
//Pide al usuario que ingrese su nombre y almacena este en una variable
var nombre = prompt('Ingrese su nombre:');
//Muestra un mensaje por pantalla con el saludo hacia el usuario
alert(saludo.concat("\nHola ".concat(nombre)));