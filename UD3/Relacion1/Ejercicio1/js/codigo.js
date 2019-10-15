/*
Escribe un script el cual contenga una función que sea capaz de calcular
los años que tiene una persona. A la función debe de pasarse la fecha de
nacimiento de la persona y devolverá cuántos años tiene.
*/
let fecha="1996-09-06";
let date = new Date();
let fActual = moment(date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());

do{

	fecha = prompt('Ingresa tu fecha de nacimiento con el formato YYYY-MM-DD:');

	let validacion=validarFecha(fecha);

	if(!validacion){
		alert("La fecha NO es válida");
	}else{
		//La fecha es válida
		fecha=moment(fecha);
		//devuelve la edad
		document.write('Tienes ', fActual.diff(fecha, 'years'), ' años.');
	}
}while(!validacion);

function validarFecha(fecha){
 
	if(fecha.length!=10 || fecha.charAt(4)!='-' || fecha.charAt(7)!='-' ||
	parseInt(fecha.substring(5, 7))<1 || parseInt(fecha.substring(5, 7))>12 //comprobacion mes
	|| parseInt(fecha.substring(8,10))<1 || parseInt(fecha.substring(8,10))>//comprobacion dias
	diasMes(parseInt(fecha.substring(5, 7)),parseInt(fecha.substring(0, 4)))){
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
