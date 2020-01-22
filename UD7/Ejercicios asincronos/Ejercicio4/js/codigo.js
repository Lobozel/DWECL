//Declaración de promesas
let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Promesa");
}); 

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