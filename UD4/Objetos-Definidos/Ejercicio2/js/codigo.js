class Jugador {
    constructor(n, a, e, nv, p){
        let nombre = n;
        let apellido = a;
        let empleo = e;
        let nivel = nv;
        let puntuacion = p;

        this.toString = function(){
            return "<div class='text-center'>"+
            "<b>Nombre:</b> "+nombre+"<br>"+
            "<b>Apellidos:</b> "+apellido+"<br>"+
            "<b>Empleo:</b> "+empleo+"<br>"+
            "<b>Nivel:</b> "+nivel+"<br>"+
            "<b>Puntuación:</b> "+puntuacion+
            "</div>";
        }

        this.resetPts = function() {
            puntuacion= 0;
        }
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