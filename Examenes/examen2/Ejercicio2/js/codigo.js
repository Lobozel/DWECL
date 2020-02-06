window.onload = function() {
    let errores = document.createElement("ul");
    errores.id = "errores";
    document.body.appendChild(errores);

    let submit = document.getElementById("enviar");  

    document.getElementById("form").onsubmit = function(e) {
        e.preventDefault();
      };
      submit.addEventListener("click", verificar); //evento onclick


};

function error(elem, txt) {
    elem.setCustomValidity(txt);
  
    let error = document.createElement("li");
    error.innerHTML = txt;
    document.getElementById("errores").appendChild(error);
  }
  
  function verificar() {
    limpiarMensajes();
  
    let nombre = document.getElementById("nombre");
    let email = document.getElementById('email');
  
    //Compruebo Nombre
    if (nombre.validity.tooLong) {
      error(nombre, "El máximo permitido son 15 caracteres.");
    } else if (nombre.validity.patternMismatch) {
      error(
        nombre,
        "Solo se permiten de 1 a 15 letras comprendidas entre la a y la z (mayúsculas o mínusculas)"
      );
    } else if (nombre.validity.valueMissing) {
      error(nombre, "El campo nombre no puede estar vacio.");
    }
  
    //Compruebo Email
    if(email.validity.valueMissing){
        error(email,"El campo email no puede estar vacio.")
    }else if(!email.checkValidity()){
        error(email,"Escriba un email válido.");
    }
  }
  
  //Borro todos los mensajes de error para evitar duplicados
  function limpiarMensajes() {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById('email');
    email.setCustomValidity("");
    nombre.setCustomValidity("");

    let errores = document.getElementById("errores");    

    for (var i = 0; i < errores.children.length; i++) {
        
      errores.removeChild(errores.children[i]);
    }
  }