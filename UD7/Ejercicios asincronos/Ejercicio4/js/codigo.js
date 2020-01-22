//Declaración de promesas
let p1 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, "Promesa 1"); });
let p2 = new Promise((resolve, reject) => { setTimeout(resolve, 3000, "Promesa 2"); });
let p3 = new Promise((resolve, reject) => { setTimeout(resolve, 2000, "Promesa 3"); });

/*
Espera que terminen todas y ejecuta todas las promesas que se le pasan por argumento
*/
function promiseAll(){
    Promise.all([p1,p2,p3]).then(txt => console.log(txt));
}

/*
Ejecuta la promesa que antes termine de todas las que se le pasen por argumento
*/
function promiseRace(){
    Promise.race([p1,p2,p3]).then(txt => console.log(txt));
}