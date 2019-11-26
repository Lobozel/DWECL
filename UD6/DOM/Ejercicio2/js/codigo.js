window.onload = function() {
    let btns=[];
    for(i=1;i<=6;i++){
        btns[i-1]=document.getElementById('btn'+i);
    }

    btns[0].addEventListener('click',insertarFilaPrincipio);
    btns[1].addEventListener('click',borrarFilaPrincipio);
    btns[2].addEventListener('click',insertarFilaFinal);
    btns[3].addEventListener('click',borrarFilaFinal);
    btns[4].addEventListener('click',insertarFilaConCeldas);
    btns[5].addEventListener('click',borrarUltimaCelda);

};

function getTable(){
    return document.getElementById("tabla");
}

function getRows(){
    return getTable().getElementsByTagName("tr");
}


function insertarFilaPrincipio(){
getTable().insertRow(0);
}

function borrarFilaPrincipio(){
    getTable().deleteRow(0);
}

function insertarFilaFinal(){
    getTable().insertRow(getRows().length);
}

function borrarFilaFinal(){
    getTable().deleteRow(getRows().length-1);
}

function insertarFilaConCeldas(){
    getTable().insertRow(0);
    getRows()[0].insertCell().innerHTML="Celda Insertada";
    getRows()[0].insertCell().innerHTML="Celda Insertada";
}

function borrarUltimaCelda(){
    getRows()[getRows().length-1].deleteCell(-1);
}