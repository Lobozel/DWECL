/*
Realiza un script que sea capaz de calcular los días que hay entre dos fechas.
Siempre el número de días debe de ser positivo, ya que el usuario debe de
introducir 2 fechas, da igual cual es anterior a la otra, para que calcule la
diferencia de días de ambas.
*/
let fecha;
let fecha2;
let validacion;
let dias;

do {
  fecha = prompt("Ingresa una primera fecha con el formato YYYY-MM-DD:");

  validacion = validarFecha(fecha);

  if (!validacion) {
    alert("La fecha NO es válida");
  } else {
    do {
      fecha2 = prompt("Ingresa una segunda con el formato YYYY-MM-DD:");

      validacion = validarFecha(fecha);

      if (!validacion) {
        alert("La segunda fecha NO es válida");
      } else {
        fecha = moment(fecha);
        fecha2 = moment(fecha2);

        dias = fecha2.diff(fecha, "days");
        if (dias < 0) {
          dias = -dias;
        }

        document.write(dias, " días de diferencia");
      }
    } while (!validacion);
  }
} while (!validacion);

function validarFecha(fecha) {
  if (
    fecha.length != 10 ||
    fecha.charAt(4) != "-" ||
    fecha.charAt(7) != "-" ||
    parseInt(fecha.substring(5, 7)) < 1 ||
    parseInt(fecha.substring(5, 7)) > 12 || //comprobacion mes
    parseInt(fecha.substring(8, 10)) < 1 ||
    parseInt(fecha.substring(8, 10)) > //comprobacion dias
      diasMes(parseInt(fecha.substring(5, 7)), parseInt(fecha.substring(0, 4)))
  ) {
    return false;
  }
  return true;
}

function diasMes(mes, anio) {
  let dias = 0;
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
