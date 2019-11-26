var selected=false;

window.onload = function() {
    document.onclick=(e)=>{
        if(e.target.tagName=="HTML"){
            limpiarBordes();       
            selected=false; 
        }
    };

    for(i=1;i<getTable().rows.length;i++){
        getTable().rows[i].onclick = function(){
            limpiarBordes();
            selectStyle(this);
            selected=i-1;

            getFirstName().value = this.cells[0].innerHTML;
            getLastName().value = this.cells[1].innerHTML;
            getAge().value = this.cells[2].innerHTML;
        }
    }


};

function addHtmlTableRow(){
    let filas = getTable().rows;
       getTable().insertRow(filas.length);
       let i=filas.length-1;

       filas[i].insertCell().innerHTML=getFirstName().value;
       filas[i].insertCell().innerHTML=getLastName().value;
       filas[i].insertCell().innerHTML=getAge().value;

       filas[i].onclick = () =>{
        limpiarBordes();
        selectStyle(filas[i]);
        selected=i;

        getFirstName().value = filas[i].cells[0].innerHTML;
        getLastName().value = filas[i].cells[1].innerHTML;
        getAge().value = filas[i].cells[2].innerHTML;
       }
}

function editHtmlTbleSelectedRow(){
    let filas = getTable().rows;
    if(selected!=false){
        filas[selected].cells[0].innerHTML=getFirstName().value;
        filas[selected].cells[1].innerHTML=getLastName().value;
        filas[selected].cells[2].innerHTML=getAge().value;
    }else{        
        alert("Es necesario que selecciones una fila primero.\n\t\t\t\tGracias.");
    }
}

function removeSelectedRow(){
    if(selected!=false){
        getTable().deleteRow(selected);
    }else{
        alert("Es necesario que selecciones una fila primero.\n\t\t\t\tGracias.");
    }
}

function limpiarBordes(){
    let filas = getTable().rows;
    let dflt = filas[0].cells[0].style.borderTop;
    let i;
    for(i=1;i<filas.length;i++){
        for(j=0;j<filas[i].cells.length;j++){
            filas[i].cells[j].style.borderTop = dflt;
            filas[i].cells[j].style.borderRight =dflt;
            filas[i].cells[j].style.borderBottom =dflt;
            filas[i].cells[j].style.borderLeft =dflt;
        }        
    }
}

function selectStyle(fila){
    fila.cells[0].style.borderTop ="solid #77ff33";
    fila.cells[0].style.borderRight ="hidden";
    fila.cells[0].style.borderBottom ="solid #77ff33";
    fila.cells[0].style.borderLeft ="solid #77ff33";


    fila.cells[1].style.borderTop ="solid #77ff33";
    fila.cells[1].style.borderRight ="hidden";
    fila.cells[1].style.borderBottom ="solid #77ff33";
    fila.cells[1].style.borderLeft ="hidden";

    fila.cells[2].style.borderTop ="solid #77ff33";
    fila.cells[2].style.borderRight ="solid #77ff33";
    fila.cells[2].style.borderBottom ="solid #77ff33";
    fila.cells[2].style.borderLeft ="hidden";
}

function getTable(){
    return document.getElementById("table");
}

function getFirstName(){
    return document.getElementById("fname");
}

function getLastName(){
    return document.getElementById("lname");
}

function getAge(){
    return document.getElementById("age");
}