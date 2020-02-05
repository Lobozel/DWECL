window.onload=function(){
    document
    .getElementById('crearCookie')
    .addEventListener('click',function(){
        //Obtengo la fecha actual y la guardo en un String con el formato deseado (HH:mm)
        f=new Date();
        hora=f.getHours()+":";
        if(f.getMinutes()<10){
            hora+="0";
        }
        hora+=f.getMinutes();
        //Creo la cookie
        setCookie(cname,hora,99999);
    });

    document
    .getElementById('obtenerCookie')
    .addEventListener('click',function(){
        //Si hubiese algún mensaje, lo borro, dado que en este caso no es necesario y puede confundir al usuario
        mensaje.textContent='';

        document.getElementById('valorCookie').value=getCookie(cname);
    });

    document
    .getElementById('borrarCookie')
    .addEventListener('click',function(){
        removeCookie(cname);
    });
}

let cname='time';
let mensaje = document.getElementById('msg');

/*
Función que permite modificar una Cookie o, de no existir, crearla
*/
function setCookie(cname, cvalue, exdays){
    //Sumo, a la fecha actual, los días que se pasan por parámetro
    let d = new Date();
    d.setTime(d.getTime()+exdays*24*60*60*1000);

    document.cookie=cname+"="+cvalue+"; expires="+d.toUTCString()+";";

    //Unica función del mensaje, ayudar al usuario a entender lo que ocurre
    mensaje.innerHTML='¡La cookie se ha creado con éxito!<br>Utiliza el botón obtenerCookie para ver su valor';
}
/*
Devuelve el valor de una cookie en concreto
*/
function getCookie(cname){
    //Separo los segmentos de cada cookie, que se separan por ';'
    let seg = document.cookie.split(";");
    for(let i=0; i<seg.length; i++){
        //Cada segmento lo divido por el carácter '='
        //De esta forma en el índice [0] se guarda la clave y en el [1] el valor
        //Cuando encuentre en el índice [0] el nombre de la cookie que busco
        //Sabré que en el [1] está el valor de esta
        let cookie = seg[i].split("=");
        if(cookie[0].trim()==cname){            
            return cookie[1];
        }
    }
    return "";
}
function removeCookie(cname){
    //Edito la cookie sin valor y hago que expire en el momento
    setCookie(cname,"",0);

    //Para no confundir al usuario, borro el valor de la cookie en caso de que se estubiese mostrando
    document.getElementById('valorCookie').value="";

    //Unica función del mensaje, ayudar al usuario a entender lo que ocurre
    mensaje.textContent='¡La cookie se ha borrado con éxito!';
}