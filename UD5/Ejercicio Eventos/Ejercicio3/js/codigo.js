window.onload=function(){
    let txt = document.getElementById('txt');
    let btn1 = document.getElementById('¿Estás contento?');
    let btn2 = document.getElementById('Botón timido');

    txt.addEventListener("mouseover",txtHover);
    txt.addEventListener("mouseout",txtHover);

    btn1.addEventListener("click",controlarClick);
    btn2.addEventListener("click",controlarClick);
}

function txtHover(event){
    if(event.type=="mouseover"){
        event.target.style.color="red";
    }else if(event.type == "mouseout"){
        event.target.style.color="black";
    }
}

function controlarClick(event){
    let idBoton = event.target.id;
    alert(idBoton);
}