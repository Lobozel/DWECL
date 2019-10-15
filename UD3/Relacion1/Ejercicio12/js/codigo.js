let menu = {
    width: 200,
    height: 300,
    title: "Mi menu"
};

document.write("<h4>Antes de modificarlo:</h4>")
mostrarObjeto(menu);
multiplicarNumeros(menu);
document.write("<h4>Después de modificarlo:</h4>")
mostrarObjeto(menu);

function multiplicarNumeros(numeros){
    for(let valor in numeros){
        if(Number.isInteger(numeros[valor])){
            numeros[valor]=numeros[valor]*2;
        }
    }
}

function mostrarObjeto(obj){
    for(let v in obj){
        document.write(v+": "+obj[v]+"<br>");
    }
}