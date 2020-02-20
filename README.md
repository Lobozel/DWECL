# DWECL
Repositorio para la asignatura de Desarrollo Web en Entorno Cliente
https://javascript-smm.blogspot.com/


https://codeshare.io/5NME7r

async function loadJson(url) { 
  let response = await fetch(url); 

  if (response.status == 200) {
    console.log("Todo ha ido bien");
    let json = await response.json(); 
    return json;
  }

  throw new Error(response.status);
}

loadJson('https://random.dog/woof.json'')
  .catch(alert); // Error: 404

Promesas -> https://repl.it/@AdamCahan/Promise-practice-exercises