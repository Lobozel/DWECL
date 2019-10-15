/*
Haciendo uso de expresiones regulares, valida el formato de un email. Como este ejercicio es muy fácil, te pido que detalles cada uno de los elementos que has utilizado en la expresión regular para conseguir la validación.
*/

let email = "progmiguelangel@gmail.com";

email = prompt("Introduce tu email:");

if(validarEmail(email)){
    document.write("Email válido.");
}else{
    document.write("Email no válido.");
}

function validarEmail(email){
    if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email)){
        return true;
    }else{
        return false;
    }
}