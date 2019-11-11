//CLASES-------------------------------------------------------------------------------------------------
/*-->Clase Padre 'Trabajador'<--*/
class Trabajador{

    constructor(i, n, ap) {
        this.id=i;
        this.nombre=n;
        this.apellidos=ap;
    }

    concentrarse(){
        return this.nombre+" dedicará el día a concentrarte en tu trabajo.<br><br>";
    }
    viajar(){
        return this.nombre+" dedicará viajar para relajarte y olvidarte de tu trabajo.<br><br>";
    }

}

/*Clase >Futbolista<*/
class Futbolista extends Trabajador{

    constructor(i,n,ap,ds,dema){
        super(i,n,ap);
        this.dorsal=ds;
        this.demarcacion=dema;
        super.concentrarse();
        super.viajar();
    }

    //metodo jugar partido
    jugarPartido(){
        let equipo1 = Math.floor(Math.random() * 11);
        let equipo2 = Math.floor(Math.random() * 11);
        let name=this.nombre;

        document.getElementById("cpestana1").innerHTML = 
        document.getElementById("cpestana1").innerHTML +
        "El/La futbolista "+name+" ha empezado a jugar un partido.<br>Por favor espere...<br><br>";

        setTimeout(
            function(){
                document.getElementById("cpestana1").innerHTML = 
                document.getElementById("cpestana1").innerHTML +
                "El/La futbolista "+name+" ha terminado de jugar.<br><br>";

                document.getElementById("cpestana1").innerHTML = 
                document.getElementById("cpestana1").innerHTML +
                "Resultado: "+equipo1+"-"+equipo2+"<br><br>";
            },3000);

    }

    //metodo entrenar
    entrenar(){
        let name=this.nombre;

        document.getElementById("cpestana1").innerHTML = 
        document.getElementById("cpestana1").innerHTML +
        "El/La futbolista "+name+" ha comenzado a entrenar.<br>Por favor espere...<br><br>";

        setTimeout(
            function(){
                document.getElementById("cpestana1").innerHTML = 
                document.getElementById("cpestana1").innerHTML +
                "El/La futbolista "+name+" ha entrenado duramente.<br><br>";
            },1000);            
    }
}

/*Clase >Entrenador<*/
class Entrenador extends Trabajador{
    
    constructor(i,n,ap,idF){
        super(i,n,ap);
        this.idFederacion=idF;
        super.concentrarse();
        super.viajar();
    }

    //metodo dirigir partido
    dirigirPartido(){
        let equipo1 = Math.floor(Math.random() * 11);
        let equipo2 = Math.floor(Math.random() * 11);
        let name=this.nombre;

        document.getElementById("cpestana2").innerHTML = 
        document.getElementById("cpestana2").innerHTML +
        "El/La entrenador/a "+name+" ha empezado a dirigir un partido.<br>Por favor espere...<br><br>";

        setTimeout(
            function(){
                document.getElementById("cpestana2").innerHTML = 
                document.getElementById("cpestana2").innerHTML +
                "El partido que dirigia el/la entrenador/a "+name+" ha terminado..<br><br>";

                document.getElementById("cpestana2").innerHTML = 
                document.getElementById("cpestana2").innerHTML +
                "Resultado: "+equipo1+"-"+equipo2+"<br><br>";
            },3000);

    }

    //Metodo dirigir entrenamiento
    dirigirEntrenamiento(){
        let name=this.nombre;

        document.getElementById("cpestana2").innerHTML = 
        document.getElementById("cpestana2").innerHTML +
        "El/La entrenador/a "+name+" ha comenzado a dirigir el entrenamiento.<br>Por favor espere...<br><br>";

        setTimeout(
            function(){
                document.getElementById("cpestana2").innerHTML = 
                document.getElementById("cpestana2").innerHTML +
                "El entrenamiento que dirigia el/la entrenador/a "+name+" ha terminado.<br><br>";
            },1000);
    }

}

/*Clase >Masajista<*/
class Masajista extends Trabajador{

    constructor(i,n,ap,ti, aExp){
        super(i,n,ap);
        this.titulacion=ti;
        this.aniosExperiencia=aExp;
        super.concentrarse();
        super.viajar();
    }

    //Metodo dar masaje
    darMasaje(){
        let name=this.nombre;

        document.getElementById("cpestana3").innerHTML = 
        document.getElementById("cpestana3").innerHTML +
        "El/la masajista "+name+" esta dando un masaje.<br>Por favor espere...<br><br>";

        setTimeout(
            function(){
                document.getElementById("cpestana3").innerHTML = 
                document.getElementById("cpestana3").innerHTML +
                "El/la masajista "+name+" ha terminado el masaje.<br><br>";
            },1000);
    }

}
//MAIN--------------------------------------------------------------------------------------------------

//Trabajando con Futbolistas
let futbolista1 = new Futbolista(1,'Juan','Gonzalez Martinez',23,7,'delantero');
let futbolista2 = new Futbolista(2,'Sara','Hidalgo Pastor',32,12,'portero');
let futbolista3 = new Futbolista(3,'Manolo','Puig Parra',54,5,'defensa');


document.getElementById("cpestana1").innerHTML = 
document.getElementById("cpestana1").innerHTML +
futbolista1.concentrarse(); //Se concentra

futbolista1.entrenar(); //Entrena

futbolista2.jugarPartido(); //Juega un partido


document.getElementById("cpestana1").innerHTML = 
document.getElementById("cpestana1").innerHTML +
futbolista3.viajar(); //Viaja



//Trabajando con Entrenadores
let entrenador1 = new Entrenador(4,'Lidia','Caballero Rodriguez',42,'sdfk');
let entrenador2 = new Entrenador(5,'Ángela','Romero Molina',25,'asd');
let entrenador3 = new Entrenador(6,'Marti','Marti Parra',30,'ads');


document.getElementById("cpestana2").innerHTML = 
document.getElementById("cpestana2").innerHTML +
entrenador2.concentrarse(); //Se concentra

entrenador2.dirigirEntrenamiento(); //Dirige Entrenamiento

entrenador1.dirigirPartido(); //Dirige Partido


document.getElementById("cpestana2").innerHTML = 
document.getElementById("cpestana2").innerHTML +
entrenador3.viajar(); //Viaja


//Trabajando con Masajistas
let masajista1 = new Masajista(7,'Sergio','Romero Moya',24,'titulado',5);
let masajista2 = new Masajista(8,'Elena','Vazquez Ortega',28,'titulada',10);

document.getElementById("cpestana3").innerHTML = 
document.getElementById("cpestana3").innerHTML +
masajista2.concentrarse(); //Se concentra

masajista2.darMasaje(); //Da masage

document.getElementById("cpestana3").innerHTML = 
document.getElementById("cpestana3").innerHTML +
masajista1.viajar(); //Viaja

//Cambiar Pestañas--------------------------------------------------------------------------------------
function cambiarPestanna(pestannas,pestanna) {
   
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);
        
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);
    
    i=0;
    
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        $(cpestanna).css('display','');
        $(pestanna).css('background','dimgray');
        $(pestanna).css('padding-bottom','2px'); 
    });

}