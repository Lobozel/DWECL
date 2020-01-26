document.getElementById('cargarDatos').addEventListener('click',run);

//La URL es la siguiente: https://developer.github.com/v3/
//Github tiene distintas apis, la que yo he utilizado me permite acceder a la información de los repositorios a través de GET
//https://api.github.com/repos/{owner}/{repo}
//Parámetros:
//{owner} se debe cambiar por el propietario del repositorio
//{repo} se debe cambiar por el nombre del repositorio
//Además le he añadido /commits al final para que solo me recoja los commits que se han hecho en ese repositorio
//que es con lo que voy a trabajar

//Si accedemos a la ruta https://api.github.com/repos/Lobozel/DWECL/commits veremos todos los commits realizados
//en el repositorio DWECL del propietario Lobozel (yo)
//Los datos se muestran en formato json

function run(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200){
            cargarDatos(this);
        }
    }
    xhr.open("GET",'https://api.github.com/repos/Lobozel/DWECL/commits',true);
    xhr.send();

}

function cargarDatos(xhr){
    document.getElementById('cargarDatos').innerText='Recargar Información';

    commits = JSON.parse(xhr.responseText);
    
    for(i=0;i<5;i++){
        let commit = commits[i].commit;
        let autor = commit.author;
        
        let tarjeta='<div class="card" style="width: 18rem;">';
        tarjeta+='<div class="card-body">';
        tarjeta+='<h5 class="card-title">'+autor.name+'</h5>';
        tarjeta+='<h6 class="card-subtitle mb-2 text-muted">'+autor.date+'</h6>'
        tarjeta+='<p class="card-text">'+commit.message+'</p>'
        tarjeta+='</div></div><br>';
        document.getElementById('commits').innerHTML+=tarjeta;
    }



}