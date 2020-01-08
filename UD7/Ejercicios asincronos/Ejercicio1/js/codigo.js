function loadScript (url, callback){
    let script = document.createElement("script");
    script.src= url;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript("js/script1.js",function(){
    console.log("Hemos terminado de cargar el script.");
    escribirHola();
});

escribirHola();