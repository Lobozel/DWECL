window.onload = function() {
  let errores = document.createElement("ul");
  errores.id = "errores";
  document.body.appendChild(errores);

  let numberRange = document.getElementById("number_range");
  let numberInput = document.getElementById("number_input");

  numberInput.innerHTML = numberRange.value;

  numberRange.addEventListener("change", mostrarValorActual);
  numberRange.addEventListener("input", mostrarValorActual);

  //boton enviar
  let submit = document.getElementById("enviar");

  //quitar el submit
  document.getElementById("miFormulario").onsubmit = function(e) {
    e.preventDefault();
  };
  submit.addEventListener("click", verificar); //evento onclick
};

function error(elem, txt) {
  elem.setCustomValidity(txt);

  let error = document.createElement("li");
  error.className = "error";
  error.innerHTML = txt;
  document.getElementById("errores").appendChild(error);
}

function verificar() {
  limpiarMensajes();

  let nombre = document.getElementById("nombre");
  let edad = document.getElementById("edad");
  let tel = document.getElementById("telefono");

  //Comprobamos Nombre
  if (nombre.validity.tooLong) {
    error(nombre, "El máximo permitido son 15 caracteres.");
  } else if (nombre.validity.patternMismatch) {
    error(
      nombre,
      "Solo se permiten de 2 a 15 letras comprendidas entre la a y la z (mayúsculas o mínusculas)"
    );
  } else if (nombre.validity.valueMissing) {
    error(nombre, "El campo nombre no puede estar vacio.");
  }

  //Comprobamos Edad
  if (edad.validity.rangeOverflow || edad.validity.rangeUnderflow) {
    error(edad, "La edad debe estar comprendida entre 18 y 100.");
  } else if (edad.validity.valueMissing) {
    error(edad, "El campo edad no puede estar vacio.");
  }

  //Comprobamos telefono
  if (tel.validity.patternMismatch) {
    error(tel, "El número de teléfono debe ser un número de 9 cifras.");
  } else if (tel.validity.valueMissing) {
    error(tel, "El campo teléfono no puede estar vacio.");
  }
}

//Borramos todos los mensajes de error para evitar duplicados
function limpiarMensajes() {
  let errores = document.getElementById("errores");

  for (var i = 0; i < errores.children.length; i++) {
    errores.removeChild(children[i]);
  }
}

function mostrarValorActual() {
  let numberRange = document.getElementById("number_range");
  let numberInput = document.getElementById("number_input");

  numberInput.innerHTML = numberRange.value;
}
