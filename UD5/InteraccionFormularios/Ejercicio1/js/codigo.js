window.onload = function() {
  //Creo un elemento donde se mostrará el error
  let error = document.createElement("H1");
  error.id = "error";
  document.body.appendChild(error);
  //En el elemento check se mostrará si se ha chekeado o no mayor de edad
  let check = document.createElement("H1");
  check.id = "checked";
  document.body.appendChild(check);

  //boton enviar
  let submit = document.getElementById("enviar");

  //quitar el submit
  document.getElementById("miFormulario").onsubmit = function(e) {
    e.preventDefault();
  };
  submit.addEventListener("click", verificar); //evento onclick
};

function verificar() {
  let name = document.getElementById("nombre");
  let tel = document.getElementById("telefono");
  let dia = document.getElementById("dia");
  let mes = document.getElementById("mes");
  let ano = document.getElementById("ano");
  let checkMayor = document.getElementById("mayor");
  let error = document.getElementById("error");
  let check = document.getElementById("checked");

  limpiadoInicial(check, name, tel, dia, mes, ano);

  if (name.value.length == 0) {
    name.className = "invalido";
    error.innerHTML = "Debes introducir un nombre";
    return;
  }

  if (isNaN(tel.value) || tel.value.length != 9) {
    tel.className = "invalido";
    error.innerHTML = "Introduce un número de teléfono válido";
    return;
  }

  if (isNaN(ano.value) || ano.value.length == 0) {
    ano.className = "invalido";
    error.innerHTML = "Introduce un año.";
    return;
  }

  if (
    isNaN(mes.value) ||
    mes.value < 0 ||
    mes.value > 12 ||
    mes.value.length == 0
  ) {
    mes.className = "invalido";
    error.innerHTML = "Introduce un mes válido.";
    return;
  }

  if (
    isNaN(dia.value) ||
    dia.value < 0 ||
    dia.value > diasMes(mes.value, ano.value) ||
    dia.value.length == 0
  ) {
    dia.className = "invalido";
    error.innerHTML = "Introduce un día válido.";
    return;
  }

  if(!checkMayor.checked){
    error.innerHTML = "Debes ser mayor de edad.";
    return;
  }
  error.innerHTML="";

  if(confirm("¿Quieres enviar esta información?")){
    
      check.innerHTML += "<br>Formulario enviado con éxito";
    
      limpiar(name, tel, dia, mes, ano, checkMayor);
  }
  
}

function limpiadoInicial(check, name, tel, dia, mes, ano) {
  check.innerHTML = "";
  name.className = "normal";
  tel.className = "normal";
  dia.className = "normal";
  mes.className = "normal";
  ano.className = "normal";
}

function limpiar(name, tel, dia, mes, ano, sexo, checkMayor) {
  name.value = "";
  tel.value = "";
  dia.value = "";
  mes.value = "";
  ano.value = "";
  sexo[0].checked = true;
  sexo[1].checked = false;
  checkMayor.checked = false;
}

function diasMes(mes, anio) {
  let dias = 0;
  mes = parseInt(mes);
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      dias = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      dias = 30;
      break;
    case 2:
      if (bisiesto(anio)) dias = 29;
      else dias = 28;
  }
  return dias;
}

function bisiesto(anio) {
  let bisiesto = false;
  if (anio % 4 == 0 || (anio % 400 == 0 && anio % 100 != 0)) {
    bisiesto = true;
  }
  return bisiesto;
}
