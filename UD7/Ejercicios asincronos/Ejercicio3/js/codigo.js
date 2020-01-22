window.onload=function(){
    this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
}

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;

    let promesa = new Promise((resolve, reject) => {
        script.onload=()=>resolve();
        script.onerror=()=>reject();
    })
  
    promesa
        .then(()=>console.log("Se ha cargado el script con éxito."))
        .catch(()=>console.log(new Error(`Script load error for ${src}`)));
  
    document.head.append(script);
  }