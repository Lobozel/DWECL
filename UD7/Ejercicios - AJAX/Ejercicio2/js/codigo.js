document.getElementById('cargaAlumnos').addEventListener('click',cargarAlumnos);
function cargarAlumnos(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        //readyState 4 es que la petición ha finalizado y ya está lista
        //status 200 es el estatus Ok
        if(this.readyState==4 && this.status==200){
            cargarHTML(this);

        }
    }
    xhr.open("GET","plantillas/tabla_alumnos.html",true);
    xhr.send();
}

function cargarHTML(xhr){
    document.getElementById('cargaAlumnos').style.display='none';
    document.getElementById('table-alumnos').innerHTML=xhr.responseText;
}