let valido = false;

//Mientras no se introduzca un DNI válido, seguirá pidiendo al usuario que lo introduzca
while(!valido){
    let dni = prompt('Ingrese tu DNI completo:');
    valido = validarDNI(dni);
}

alert("Gracias por su colaboración.");

//Función que devuelve true o false dependiendo de si el dni pasado por parámetros es válido
function validarDNI(dni){
    if(dni.length!=9){
        //en el caso de que el tamaño del dni introducido sea incorrecto (9 caracteres)
        alert("El DNI debe tener 8 dígitos y 1 letra.");
        return false;
    }else{
        //separa el dni en el numero y en su letra
        let num=dni.substr(0,8);
        let letra=dni.substr(8);
        //para evitar problemas convierto la letra en mayúsculas de no estarlo ya
        letra=letra.toUpperCase();
        //busco la letra que realmente correspondería al número del dni introducido
        let c;
        switch (num % 23) {
			case 0: c = 'T';
			break;
			case 1: c = 'R';
			break;
			case 2: c = 'W';
			break;
			case 3: c = 'A';
			break;
			case 4: c = 'G';
			break;
			case 5: c = 'M';
			break;
			case 6: c = 'Y';
			break;
			case 7: c = 'F';
			break;
			case 8: c = 'P';
			break;
			case 9: c = 'D';
			break;
			case 10: c = 'X';
			break;
			case 11: c = 'B';
			break;
			case 12: c = 'N';
			break;
			case 13: c = 'J';
			break;
			case 14: c = 'Z';
			break;
			case 15: c = 'S';
			break;
			case 16: c = 'Q';
			break;
			case 17: c = 'V';
			break;
			case 18: c = 'H';
			break;
			case 19: c = 'L';
			break;
			case 20: c = 'C';
			break;
			case 21: c = 'K';
			break;
			case 22: c = 'E';
        }
        if(letra!=c){
            //si la letra introducida no coincide con la que corresponderia
            alert("La letra del DNI no es correcta\nDNI inválido.");
            return false;
        }else{
            //si no ha encontrado problemas
            return true;
        }
    }

}