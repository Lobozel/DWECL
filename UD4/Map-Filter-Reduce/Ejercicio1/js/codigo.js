let pilotos = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14
  },
  {
    id: 2,
    name: "Temin 'Snap' Wexley",
    years: 30
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22
  }
];

let totalAniosExp = pilotos.reduce(function(acumulador, pilotos) {
  return acumulador + pilotos.years;
}, 0);

document.write("Total de Años de Experiencia de los pilotos, sin arrow:");
document.write(totalAniosExp);

document.write("<br><br>");

totalAniosExp = pilotos.reduce(
  (acumulador, pilotos) => acumulador + pilotos.years,
  0
);

document.write("Total de Años de Experiencia de los pilotos, con arrow:");
document.write(totalAniosExp);

document.write("<br><br>");

let mayorExp = pilotos.reduce((mayor, pilotos)=> mayor.years<pilotos.years ? mayor=pilotos:mayor);
document.write("El piloto con más experiencia es: ");
document.write(mayorExp.name+" con "+mayorExp.years+" años de experiencia.");