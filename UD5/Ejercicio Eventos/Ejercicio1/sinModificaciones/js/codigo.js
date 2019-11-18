window.onload = function() {
  let anchors = document.getElementsByTagName("a");

  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener("click", function() {
      changeDisplay(anchors[i]);
    });
  }
};

function changeDisplay(elem) {
  let prevElem = elem.previousElementSibling;

  if (prevElem.style.display == "none") {
    elem.innerHTML = "Ocultar contenidos";
    prevElem.style.display = "block";
  } else {
    elem.innerHTML =
      "<div style='background-color:black'>Mostrar contenidos</div>";
    prevElem.style.display = "none";
  }
}
