pedirDatos();

function pedirDatos() {
  let nombre = prompt("Introduzca su nombre");

  if (!/^[A-Z]/.test(nombre)) {
    document.getElementById("error").innerHTML =
      "Has introducido mal el nombre";
    return;
  }

  let apellido = prompt("Introduzca sus apellidos");

  let appelidos = apellido.split(" ");
  if (appelidos.length != 2){
    document.getElementById("error").innerHTML =
      "Has introducido mal los apellidos";
    return;
  }

  let email = prompt("Introduzca su email");

  if (!/[a-zA-Z]+\.+[0-9]+@+[a-zA-Z]+\.+[a-zA-Z]+$/.test(email)) {
    document.getElementById("error").innerHTML = "Has introducido mal el email";
    return;
  }

  let pass = prompt("Introduzca su contraseña");

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8}$/.test(pass)){
    document.getElementById("error").innerHTML =
      "Has introducido mal la contraseña";
    return;
  }

  document.getElementById("name").innerHTML = nombre;
  document.getElementById("apellido").innerHTML = apellido;
  document.getElementById("email").innerHTML = email;
  document.getElementById("pass").innerHTML = pass;

}
