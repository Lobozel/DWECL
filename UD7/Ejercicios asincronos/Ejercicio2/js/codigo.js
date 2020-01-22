window.onload=function(){
    delay(0).then(() => alert("Espere porfavor")); 
    delay(3000).then(() => alert("Ya casi hemos terminado"));
    delay(6000).then(() => alert("Aún que no lo creas, estamos cargando cosas"));
    delay(9000).then(() => alert("Agradecemos su paciencia y le pedimos que siga con nosotros"));
    delay(15000).then(() => alert("Mientras esperabas se han instalado 12 malware en su sistema. Gracias por confiar en nosotros."));
}

function delay(ms) {
    return new Promise((resolve,reject)=>{
        setTimeout(
            function(){resolve("Exito");},ms
        )
    });
}
