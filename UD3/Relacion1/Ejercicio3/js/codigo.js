/*
Crea un programa que muestre la hora en diferentes formatos,
según el valor que meta el usuario por parámetro: los parámetros
que debe introducir el usuario son la hora, los minutos, los segundos.


14:35:07 (hora detallada con minutos y segundos)
02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día).
*/

let hora="20:15:10";
let validacion;

validarHora(hora);

/*
do{
    hora = prompt('Ingresa una hora con el formato HH:MM:SS:');
    document.write(hora.substring(3,5))
    validacion=validarHora(hora);
}while(!validacion);

document.write("<br>"+hora);
if(parseInt(hora.substring(0, 2))>12){
    hora=(parseInt(hora.substring(0, 2))-12)+hora.substring(2,8);
    document.write("<br>"+hora+" PM");
}else{
    document.write("<br>"+hora+" AM");    
}
*/

function validarHora(hora){

    let num = parseInt(hora.substring(0, 2));
    document.write(num);
    if(num<0){
        document.write("true");
    }else{
        document.write("falso");
    }

/*
    if(hora.length!=8 || hora.charAt(2)!='-' || hora.charAt(5)!='-' ||
	parseInt(hora.substring(0, 2))<0 || parseInt(hora.substring(0, 2))>23 //comprobacion horas
	|| parseInt(hora.substring(3,5))<0 || parseInt(hora.substring(3,5))>59//comprobacion minutos
    || parseInt(hora.substring(6,8))<0 || parseInt(hora.substring(6,8))>59)//comprobacion segundos
    {
		return false;
	}
    return true;
    */
}