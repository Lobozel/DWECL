window.onload = function() {
  let verifMail = document.getElementById("emailValido");
  let reset = document.getElementById("reset");
  let box = document.getElementById("box");
  let cop = document.getElementById("copiable");
  let peg = document.getElementById("ctrlv");

  verifMail.addEventListener("keydown", validarEmail);
  reset.addEventListener("click", limpiar);
  //----------------------------------------------//
  box.addEventListener("mouseover", borderDashed);
  box.addEventListener("mouseout", borderSolid);
  box.addEventListener("dblclick", changeColor);
  //----------------------------------------------//
  cop.addEventListener("copy", copy);
  peg.addEventListener("paste", paste);
};

function validarEmail() {
  let verifMail = document.getElementById("emailValido");

  if (
    !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      verifMail.value
    )
  ) {
    verifMail.className = "invalido";
  } else {
    verifMail.className = "valido";
  }
}

function limpiar() {
  let celda = document.getElementById("emailValido");

  celda.value = "";
  celda.className = "";
}

function borderDashed() {
  let box = document.getElementById("box");

  box.style.borderStyle = "dashed";
}

function borderSolid() {
  let box = document.getElementById("box");

  box.style.borderStyle = "solid";
}

function changeColor() {
  let box = document.getElementById("box");

  box.style.backgroundColor = randColor();
}

function randColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function copy() {
  document.getElementById("hasCopiao").innerHTML = "Has copiado el texto ✔✔";
}

function paste() {
  document.getElementById("hasPegado").innerHTML = "Has pegado texto 👌";
}
