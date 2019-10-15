const usuario = {
    nombre: "Juan"
  };
  
  // Esto funciona?
  usuario.nombre = "Diego";

  document.write("usuario.nombre = \"Diego\" si funciona porque \"nombre\" es una variable y se puede modificar su valor.");
  document.write("<br><br>");
  document.write("Sin embargo, no podemos cambiar el valor de una constante, por lo que el siguiente código daría error:<br>");
  document.write("usuario = { nombre: \"Diego\" }");