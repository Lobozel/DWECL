let Jugador = {
    nombre : undefined,
    apellido: undefined,
    empleo: undefined,
    nivel: undefined,
    puntuacion: undefined,
    init: function(nombre, apellido, empleo, nivel, puntuacion){
        this.nombre=nombre;
        this.apellido=apellido;
        this.empleo=empleo;
        this.nivel=nivel;
        this.puntuacion=puntuacion;
    ;},
    toString: function() {return "<div class='text-center'>"+
    "<b>Nombre:</b> "+this.nombre+"<br>"+
    "<b>Apellidos:</b> "+this.apellido+"<br>"+
    "<b>Empleo:</b> "+this.empleo+"<br>"+
    "<b>Nivel:</b> "+this.nivel+"<br>"+
    "<b>Puntuación:</b> "+this.puntuacion+
    "</div>";},
    resetPts: function() {
        this.puntuacion= 0;
    }
};

let jugador1 = Object.create(Jugador);
let jugador2 = Object.create(Jugador);

jugador1.init("Jugador 1","Merlin","mago","50","34500");
jugador2.init("Jugador 2","Lobozel","invocador","72","98753");

let jugadores = [jugador1, jugador2];

jugadores.forEach(function(jugador){
    document.write(jugador.toString());
    document.write("<br>");
});

document.write("<h3 class='text-center'>Reseteo de puntuación del jugador 2:</h3><br>");
jugador2.resetPts();
document.write(jugador2.toString());