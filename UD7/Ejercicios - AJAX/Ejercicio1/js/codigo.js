document.getElementById('cargaAlumnos').addEventListener('click',cargarAlumnos);
function cargarAlumnos(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //readyState 4 es que la petición ha finalizado y ya está lista
        //status 200 es el estatus Ok
        if(this.readyState==4 && this.status==200){
            cargarXML(this);

        }
    }
    xhr.open("GET","xml/alumnos.xml",true);
    xhr.send();
}

function cargarXML(xml){
    let docXML = xml.responseXML;
    let tabla  = "<tr><th>Nombre</th><th>Apellidos</th><th>Nota</th></tr>";
    let alumnos = docXML.getElementsByTagName("alumno");
    for(let i=0;i<alumnos.length;i++){
        tabla+="<tr><td>";
        tabla+=alumnos[i].getElementsByTagName("nombre")[0].textContent;
        tabla+="</td><td>";
        tabla+=alumnos[i].getElementsByTagName("apellido")[0].textContent;
        tabla+="</td><td>";
        tabla+=alumnos[i].getElementsByTagName("nota")[0].textContent;
        tabla+="</td></tr>";
    }
    document.getElementById('table-alumnos').innerHTML=tabla;
}