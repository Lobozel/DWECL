class Empleado{
    constructor(n,a,d){
        this.nombre=n;
        this.apellido=a;
        this.dni=d;
    }

    mostrarNombreCompleto() {
        return "Nombre: "+this.nombre+"<br>Apellido: "+this.apellido+"<br>";
    }

    toString(){
        return this.mostrarNombreCompleto()+
        "DNI: "+this.dni+"<br>";
    }
}
class Operario extends Empleado{
    constructor(n,a,d,dep,t){
        super(n,a,d);
        this.departamento=dep;
        this.turno=t;
    }

    mostrarDptYTurno(){
        return "Departamento: "+this.departamento+"<br>"+
        "Turno: "+this.turno+"<br>";
    }

    toString(){
        return super.toString()+this.mostrarDptYTurno()+"<br>";
    }
}

class Tecnico extends Operario{
    constructor(n,a,d,dep,t,e,s){
        super(a,n,d,dep,t);
        this.especialidad=e;
        this.sueldo=s;
    }

    mostrarEspecialiYsueldo(){
        return "Especialidad: "+this.especialidad+"<br>"+
        "Sueldo: "+this.sueldo+"<br>";
    }

    toString(){
        return super.toString()+this.mostrarEspecialiYsueldo()+"<br>";
    }
}

let tecnico1 = new Tecnico('nombre','apellido1 apellido2','4352352d','informática','tarde','programador',3000);
console.log(tecnico1.especialidad);
console.log(tecnico1.mostrarEspecialiYsueldo());
console.log(tecnico1.mostrarDptYTurno());
console.log(tecnico1.mostrarNombreCompleto());
console.log(tecnico1.dni);
console.log(tecnico1.toString());





