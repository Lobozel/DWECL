/* Explicación de idButton:

idButton hace referencia al botón, enlace u otro elemento que
hace la llamada a este método con el fin de cambiar el display
de un elemento distinto. Se recoge para cambiar el texto de
este de forma que el usuario entienda mejor lo que ocurre.
Se inicializa como null por si este elemento no existe o
no interesa pasarlo en algún caso
(como que haya un elemento distinto para mostrar y otro para ocultar)*/

function changeDisplay(id, idButton = null) {
  let elem;

  elem = document.getElementById(id);

  if (elem.style.display == "none") {
    if (idButton != null) {
      document.getElementById(idButton).innerHTML = "Ocultar contenidos";
    }
    elem.style.display = "block";
  } else {
    if (idButton != null) {
      document.getElementById(idButton).innerHTML =
        '<div style="background-color:black">Mostrar contenidos</div>';
    }
    elem.style.display = "none";
  }
}
