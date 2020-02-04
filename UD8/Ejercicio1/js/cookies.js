window.onload=function(){
    document
    .getElementById('crearCookie')
    .addEventListener('click',function(){
        f=new Date();
        hora=f.getHours()+":";
        if(f.getMinutes()<10){
            hora+="0";
        }
        hora+=f.getMinutes();
        setCookie(cname,hora,99999);
    });

    document
    .getElementById('obtenerCookie')
    .addEventListener('click',function(){
        getCookie(cname);
    });

    document
    .getElementById('borrarCookie')
    .addEventListener('click',function(){
        removeCookie(cname);
    });
}

let cname='time';
let mensaje = document.getElementById('msg');

function setCookie(cname, cvalue, exdays){
    document.cookie=cname+"="+cvalue+"; expires=Thu, 16 Nov 2021 12:00:00 UTC;";
    mensaje.innerHTML='¡La cookie se ha creado con éxito!<br>Utiliza el botón obtenerCookie para ver su valor';
}
function getCookie(cname){
    console.log(document.cookie);
    t=document.cookie.split("=")[1];
    if(t!=undefined){
        document.getElementById('valorCookie').value=t;
    }
    mensaje.textContent='';
}
function removeCookie(cname){
    document.cookie=cname+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.getElementById('valorCookie').value="";
    mensaje.textContent='¡La cookie se ha borrado con éxito!';
}