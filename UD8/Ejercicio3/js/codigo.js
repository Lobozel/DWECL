const lsName = "elementos";
let item = document.getElementById("item");
let lista = document.getElementsByTagName("ul")[0];

if (typeof Storage == "undefined") {
  alert("El navegador NO soporta WebStorage");
} else {
  mostrar();

  document.getElementById("miFormulario").onsubmit = function(e) {
    e.preventDefault();
  };

  document.getElementById("clear").addEventListener("click", function() {
    localStorage.clear();
    lista.innerHTML = "";
  });

  item.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      añadirElemento(lsName, item.value);
      item.value = "";
    }
  });
}

function añadirElemento(lsName, valor) {
  if (localStorage.getItem(lsName) != null) {
    localStorage.setItem(
      lsName,
      localStorage.getItem(lsName) + "<li>" + valor + "</li>"
    );
  } else {
    localStorage.setItem(lsName, "<li>" + valor + "</li>");
  }
  mostrar();
}

function mostrar() {
  lista.innerHTML = localStorage.getItem(lsName);
}
