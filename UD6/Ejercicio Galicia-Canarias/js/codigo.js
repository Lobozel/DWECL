window.onload = function() {
    let txt = document.createElement("ul");
    txt.id="mensaje";
    document.body.appendChild(txt);

    let titulos = document.getElementsByTagName("h2");

    for(i = 0 ; i < titulos.length ; i++){
        titulos[i].addEventListener("click", info);
    }
  };




  function info(){
      let txt = document.getElementById("mensaje");
      txt.innerHTML = "";

    let ub = this.parentNode.id;
    let numP = this.nextElementSibling.children.length;
      
     let html = "Has elegido <b>"+this.textContent+"</b> que está situada en el <b>"+ub+"</b><br>"+
     "El número de provincias es <b>"+numP+"</b>: <ul>";
    for(i=0;i<numP;i++){
        html+="<li>"+this.nextElementSibling.children[i].textContent+"</li>"
    }
    html+="</ul>";

     txt.innerHTML=html
  }