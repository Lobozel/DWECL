/*
Ejercicio 1 - Abre un nueva ventana cuando hace “click” en un botón. Modifica el código siguiente para asignar el evento onclick al botón y abrir la ventana:

<p id="demo" onclick="myFunction()">Click me</p>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
</script>
*/

//Busca el elemento con el id "demo" y le cambia su valor por "YOU CLICKED ME!"
function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}