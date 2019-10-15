/*
Crea un programa que pida al usuario su nombre y apellidos y muestre:
El tamaño del nombre más los apellidos (sin contar espacios).
La cadena en minúsculas y en mayúsculas.
Que divida el nombre y los apellidos y los muestre en 3 líneas, donde ponga
Nombre: / Apellido 1: / Apellido 2: y además, 

Una propuesta de nombre de usuario, compuesto por la inicial del nombre,
el primer apellido y la inicial del segundo apellido: ej. Para Laura Folgado Galache sería lfolgadog.
Una propuesta de nombre de usuario compuesto por las tres primeras
letras del nombre y de los dos apellidos: ej. Laufolgal.
*/

let nombre= "Miguel Ángel López Sánchez";
nombre = prompt("Introduzca su nombre:");

let separado= nombre.split(" ");

//Cuento el tamaño de cada palabra (nombres y apellidos)
for(i=0,cont=0;i<separado.length;i++){
    cont+=separado[i].length;
}
document.write("El tamaño del nombre más los apellidos sin contar los espacios es: "+cont+"<br>");

document.write("<br>");

aux=nombre.toLowerCase();
document.write("El nombre y los apellidos en minúsculas: "+aux+"<br>");
aux=nombre.toUpperCase();
document.write("El nombre y los apellidos en mayúsculas: "+aux+"<br>");

document.write("<br>");

//Siempre considero que la persona tiene 2 apellidos
let id=["Nombre:","Apellido1:","Apellido2:"];
if(separado.length==4){ //En el caso de que sean 2 nombres y 2 apellidos
    id.splice(0,1,"Nombre1:","Nombre2:");
}

for(i=0,cont=0;i<separado.length;i++){
    document.write(id[i]+" "+separado[i]+"<br>");
}

document.write("<br>");

//Le quito el segundo nombre, de tenerlo, antes de hacer la propuesta de nombres
if(separado.length==4){
    separado.splice(1,1);
}

let propuesta=separado[0].charAt(0);
    propuesta+=separado[1];
    propuesta+=separado[2].charAt(0);


document.write("Propuesta de nombre 1: "+propuesta+"<br>");

    propuesta=separado[0].substr(0,3);
    propuesta+=separado[1].substr(0,2);
    propuesta+=separado[2].substr(0,2);
document.write("Propuesta de nombre 2: "+propuesta+"<br>");

