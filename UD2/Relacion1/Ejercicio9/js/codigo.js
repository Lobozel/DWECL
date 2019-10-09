let valores = [true,5,false,"hola","adios",2];

//Comparo los dos elementos de texto y escribo por pantalla cual es mayor
if(valores[3].length>valores[4].length){
    document.write (valores[3]+" es más grande que "+valores[4]);
}else{
    document.write (valores[4]+" es más grande que "+valores[3]);
}

document.write("<br>");
//Operación lógica con los valores booleanos que devuelve true
document.write(valores[0]||valores[2]);
document.write("<br>");
//Operación lógica con los valores booleanos que devuelve false
document.write(valores[0]&&valores[2]);
document.write("<br>");
//Escribo por pantalla las 5 operaciones matemáticas básicas con los dos elementos númericos
document.write(valores[1]+"+"+valores[5]+"="+(parseInt(valores[1])+parseInt(valores[5])));
document.write("<br>");
document.write(valores[1]+"-"+valores[5]+"="+(parseInt(valores[1])-parseInt(valores[5])));
document.write("<br>");
document.write(valores[1]+"*"+valores[5]+"="+(parseInt(valores[1])*parseInt(valores[5])));
document.write("<br>");
document.write(valores[1]+"/"+valores[5]+"="+(parseInt(valores[1])/parseInt(valores[5])));
document.write("<br>");
document.write("modulo de "+valores[1]+" y "+valores[5]+"="+(parseInt(valores[1])%parseInt(valores[5])));