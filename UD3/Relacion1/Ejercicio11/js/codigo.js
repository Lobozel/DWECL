let salarios = {
    Juan: 10000,
    Alicia: 16000,
    Lucas: 13000
}

let totalSalario=0;

for(let salario in salarios){
    totalSalario+=salarios[salario];
}
document.write(totalSalario);