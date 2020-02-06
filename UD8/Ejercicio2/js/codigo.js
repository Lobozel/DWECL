/*
He decidido usar Cookies en lugar de WebStorage debido a que
este último no tiene fecha de expiración y yo considero
que para un ejercicio de este estilo, debería tener expiración

Un usuario que regresa a esta página después de semanas, meses o años
no necesita saber que tuvo errores hace tanto tiempo
*/

//Variables y constantes globales
const cname="errores";
let errores;

window.onload = function() {
  errores=getCookie(cname);
  if(errores==""){
    //Si no se encontro la cookie
    errores=0;
    setCookie(cname,errores,10);
   }

   document.getElementById("valorCookie").value=getCookie(cname);

  //captura de botones
  let submit = document.getElementById("enviar");
  let removeCookies = document.getElementById("removeCookies");
  let reload = document.getElementById("reload");

  //quitar el submit
  document.getElementById("miFormulario").onsubmit = function(e) {
    e.preventDefault();
  };

  //eventos
  submit.addEventListener("click", verificar);
  removeCookies.addEventListener("click",removeCookie);
  reload.addEventListener("click",function(){location.reload();});
};

function verificar() {
  let user = document.getElementById("user");
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");

  if (
    user.checkValidity() == false ||
    email.checkValidity() == false ||
    pass.checkValidity() == false
  ) {
    //Si ha fallado la validación de algún campo, aumento el contador de errores
      errores++;
      //Modifico la cookie con el nuevo valor de errores
      setCookie(cname,errores,1);
  }
}

function setCookie(cname, cvalue, exdays){
    let d = new Date();
    d.setTime(d.getTime()+exdays*24*60*60*1000);

    document.cookie=cname+"="+cvalue+"; expires="+d.toUTCString()+";";
}

function getCookie(cname){
    let seg = document.cookie.split(";");
    for(let i=0; i<seg.length; i++){
        let cookie = seg[i].split("=");
        if(cookie[0].trim()==cname){            
            return cookie[1];
        }
    }
    return "";
}

function removeCookie(cname){
    setCookie(cname,"",0);
}