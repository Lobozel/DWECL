class Jugador {
    constructor(nombre, apellido, empleo, nivel, puntuacion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.empleo = empleo;
        this.nivel = nivel;
        this.puntuacion = puntuacion;
    }

    toString() {        
        return "<div class='text-center'>"+
    "<b>Nombre:</b> "+this.nombre+"<br>"+
    "<b>Apellidos:</b> "+this.apellido+"<br>"+
    "<b>Empleo:</b> "+this.empleo+"<br>"+
    "<b>Nivel:</b> "+this.nivel+"<br>"+
    "<b>Puntuación:</b> "+this.puntuacion+
    "</div>";
    }

    resetPts() {
        this.puntuacion= 0;
    }
}

let jugador1 = new Jugador("Jugador 1","Merlin","mago","50","34500");
let jugador2 = new Jugador("Jugador 2","Lobozel","invocador","72","98753");

let jugadores = [jugador1, jugador2];

jugadores.forEach(function(jugador){
    document.write(jugador.toString());
    document.write("<br>");
});

document.write("<h3 class='text-center'>Reseteo de puntuación del jugador 2:</h3><br>");
jugador2.resetPts();
document.write(jugador2.toString());