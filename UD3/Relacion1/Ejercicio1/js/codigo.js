
let fecha="06/09/1996";
let date = new Date();
let fActual = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();

//FALTA CALCULAR EDAD
if(validarFecha(fecha)){
    document.write("La fecha es válida");
}else{
    document.write("La fecha NO es válida");

}



function calcularEdad(fecha){

}

function validarFecha(fecha){

    if (fecha.length!=10 || fecha.charAt(2)!='/' || fecha.charAt(5)!='/' ||
			parseInt(fecha.substring(3, 5))<1 || parseInt(fecha.substring(3, 5))>12 
			|| parseInt(fecha.substring(0,2))<1 || parseInt(fecha.substring(0,2))>
			diasMes(parseInt(fecha.substring(3, 5)),parseInt(fecha.substring(6, 10)))){
                return false;
            }
    return true;
}

function diasMes(mes,anio){
    let dias=0;
    switch (mes){
		case 1: case 3: case 5: case 7: case 8: case 10: case 12:
			dias=31;
			break;
		case 4: case 6: case 9: case 11:
			dias=30;
			break;
		case 2:
			if(bisiesto(anio)) 
				dias=29;
			else
				dias=28;
		}
		return dias;
}

function bisiesto(anio){
    let bisiesto=false;
    if(anio%4==0 || anio%400==0 && anio%100!=0){
        bisiesto=true;
    }
		return bisiesto;
}