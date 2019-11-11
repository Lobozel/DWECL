//Clases----------------------------------------------
//Clase Vehiculo
class Vehiculo{
    constructor(nR, c, n, vM){
        this.numRuedas= nR;
        this.color=c;
        this.nombre=n;
        this.velocidadMax=vM;
    }

    toString(){
        return ""+
        "<b>Número de ruedas: </b>"+this.numRuedas+"<br>"+
        "<b>Color: </b>"+this.color+"<br>"+
        "<b>Nombre: </b>"+this.nombre+"<br>"+
        "<b>Velocidad Máxima: </b>"+this.velocidadMax
        ;
    }
    
    static mayorNumRuedas(v1, v2){
        if(v1.numRuedas>v2.numRuedas){
            return "El vehículo "+v1.nombre+" tiene más ruedas.";
        }else if(v1.numRuedas<v2.numRuedas){
            return "El vehículo "+v2.nombre+" tiene más ruedas.";
        }else{
            return "Ambos vehículos tienen la misma cantidad de ruedas.";
        }
    }
}

//Clase Automovil
class Automovil extends Vehiculo{
    constructor(nR, c, n, vM, nPT, nPA){
        super(nR, c, n, vM);
        this.numPasajerosTotal=nPT;
        this.numPasajerosActual=nPA;
    }

    toString(){
        let cadena=super.toString();
        return cadena+"<br>"+
        "<b>Número de Pasajeros en Total: </b>"+this.numPasajerosTotal+"<br>"+
        "<b>Número de Pasajeros Actuales: </b>"+this.numPasajerosActual
        ;
    }
}

//Clase SUV
class SUV extends Automovil{
    constructor(nR, c, n, vM, nPT, nPA, tReduc, t4x4){
        super(nR, c, n, vM, nPT, nPA);
        this.tieneReductora=tReduc;
        this.tiene4x4=t4x4;
    }

    toString(){
        let cadena=super.toString();
        return cadena+"<br>"+
        "<b>¿Tiene Reductora?: </b>"+this.tieneReductora+"<br>"+
        "<b>¿Tiene 4x4?: </b>"+this.tiene4x4
        ;
    }

    circularXNieve(){
        return "Se han colocado las cadenas para circular por la nieve.";
    }

    circularXTierra(){
        return "Todas las comprobaciones listas para conducir por tierra de forma segura.";
    }
}

//Main-----------------------------------
automovil1 = new Automovil(4,'#c13037','Rayo McQueen',378,4,0);
suv1 = new SUV(4,'#42543e','Sargento',180,4,0,true,false);

document.write("<div class='text-center'>"+
    automovil1.toString()+
    "</div>");

document.write("<hr>");


document.write("<div class='text-center'>"+
    suv1.toString()+
    "</div>");

document.write("<hr><br>");


document.write("Comparando cantidad de ruedas de "+automovil1.nombre+" y "+suv1.nombre+":");
document.write("<br>");
document.write(Vehiculo.mayorNumRuedas(automovil1,suv1));

document.write("<br><br>");
document.write(suv1.nombre+" se prepara para circular por nieve:");
document.write("<br>");
document.write(suv1.circularXNieve());

document.write("<br><br>");
document.write(suv1.nombre+" se prepara para circular por tierra:");
document.write("<br>");
document.write(suv1.circularXTierra());