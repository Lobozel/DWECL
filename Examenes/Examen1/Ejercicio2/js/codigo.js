//Cogemos la hora actual
let date = new Date();
let hora = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

//intervalo infinito
let interval = setInterval(reloj,1000);


function reloj(){
    //Separamos la hora en un array para tratarla facilmente
    horaSeparada=hora.split(":");

    //simula un reloj
    horaSeparada[2]++;
    if(horaSeparada[2]<10){
        horaSeparada[2]="0"+horaSeparada[2];
    }else if(horaSeparada[2]>=60){
        horaSeparada[2]="00";
        horaSeparada[1]++;
        if(horaSeparada[1]<10){
            horaSeparada[1]="0"+horaSeparada[1];
        }else if(horaSeparada[1]>=60){
            horaSeparada[1]="00";
            horaSeparada[0]++;
            if (horaSeparada[0]<10){
            horaSeparada[0]="0"+horaSeparada[0];
            }else if(horaSeparada[0]>=24){
                horaSeparada[0]="00";
            }
        }
    }

    //La devolvemos a una cadena
    hora=horaSeparada.join(":");

    //Escribe en la página la hora y el tramo del dia
    document.getElementById('hora').innerHTML = hora;
    document.getElementById('txt').innerHTML = tramoDelDia(horaSeparada[0]);

}

//Devuelve el tramo del día
function tramoDelDia(hora){
    if(hora>=12 && hora<15){
        return "Es mediodía.";
    }else if(hora>=15 && hora<21){
        return "Estamos en la tarde.";
    }else if(hora>=21 && hora<7){
        return "Estamos de noche."
    }else{
        return "Es mañana."
    }
}

console.log(hora);