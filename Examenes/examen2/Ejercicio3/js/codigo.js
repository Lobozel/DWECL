window.onload = function() {
    this.document.body.style.fontFamily="Arial,sans-serif";
    this.document.getElementById('nickname').innerHTML="Lobozel";
    this.document.getElementById('favorites').innerHTML="Videojuegos";
    this.document.getElementById('hometown').innerHTML='Almería';

    let lista = document.getElementsByTagName('li');
    for(i=0;i<lista.length;i++){
        lista[i].className='listitem';
    }


    let imagen = document.createElement("img");
    imagen.setAttribute('src','https://66.media.tumblr.com/tumblr_mascepqCnq1ropclfo1_1280.jpg');
    document.body.appendChild(imagen);
};