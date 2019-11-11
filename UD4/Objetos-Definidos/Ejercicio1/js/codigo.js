let jugador1 = {
    nombre : 'Jugador 1',
    apellido: 'Merlin',
    empleo: 'mago',
    nivel: '50',
    puntuacion: '34500',
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
let jugador2 = {
    nombre : 'Jugador 2',
    apellido: 'Lobozel',
    empleo: 'invocador',
    nivel: '72',
    puntuacion: '98753',
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

let jugadores = [jugador1, jugador2];

jugadores.forEach(function(jugador){
    document.write(jugador.toString());
    document.write("<br>");
});

document.write("<h3 class='text-center'>Reseteo de puntuación del jugador 2:</h3><br>");
jugador2.resetPts();
document.write(jugador2.toString());