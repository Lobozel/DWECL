/*
Número de enlaces de la página
Dirección a la que enlaza el penúltimo enlace.
Número de enlaces que enlazan a http://prueba/
Número de enlaces del tercer párrafo
*/
window.onload = function() {
    let lista = document.createElement("ol");
    let uno = document.createElement("li");
    let dos = document.createElement("li");
    let tres = document.createElement("li");
    let cuatro = document.createElement("li");

    let links = document.getElementsByTagName('a');
    let penulLink = links[links.length-2];
    let pruebaLinks = 0;
    let pars = document.getElementsByTagName('p');
    let p3Links = pars[2].getElementsByTagName('a');

    for(i=0;i<links.length;i++){
        if(links[i]=='http://prueba/'){
            pruebaLinks++;
        }
    }
    
    uno.innerHTML="Número de enlaces de la página: "+links.length;
    dos.innerHTML="Dirección a la que enlaza el penúltimo enlace: "+penulLink;
    tres.innerHTML="Número de enlaces que enlazan a http://prueba/: "+pruebaLinks;
    cuatro.innerHTML="Número de enlaces del tercer párrafo: "+p3Links.length;
    
    document.body.appendChild(lista);
    lista.appendChild(uno);
    lista.appendChild(dos);
    lista.appendChild(tres);
    lista.appendChild(cuatro);

};