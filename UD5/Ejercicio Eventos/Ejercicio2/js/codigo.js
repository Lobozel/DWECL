window.onload = function() {
  document.addEventListener("keypress", keyListener);
};

function keyListener(event) {
  let k = event.key;
  let colorDiv = document.getElementById("prueba");
  
  switch (k) {
    case "b":
      colorDiv.className = "blanco";
      break;
    case "r":
      colorDiv.className = "rojo";
      break;
    case "a":
      colorDiv.className = "amarillo";
      break;
  }
}
