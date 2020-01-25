let httpRequest;
if (window.XMLHttpRequest) {
  httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
} else {
  console.error("Error: Aquest navegador no admet AJAX.");
}
httpRequest.onload = procesarRespuesta;
httpRequest.open("GET", "json/alumnos.json", true);
httpRequest.overrideMimeType("text/plain");
httpRequest.send(null);

function procesarRespuesta() {
  var respuesta = JSON.parse(httpRequest.responseText);
  var container = document.createElement("div");
  container.className='container mt-5 border border-dark text-center';
  var lista = document.createElement("ul");
  for (var i = 0; i < respuesta.alumnos.length; i++) {
    var item = processarElement(respuesta.alumnos[i]);
    lista.appendChild(item);
  }
  document.body.appendChild(container);
  container.appendChild(lista);
}

function processarElement(alumno) {
  var item = document.createElement("li");
  item.innerHTML =
    "<b>Alumno:</b> " +
    alumno.nombre +
    ", <b>Edad:</b> " +
    alumno.edad +
    ", <b>Reside en:</b> " +
    alumno.ciudad;
  return item;
}
