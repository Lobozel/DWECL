const indexedDB = window.indexedDB;

console.log();


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let edad = document.getElementById("edad");
let btnAnadirItemBD = document.getElementById("btnAnadirItemBD");
let btnAnadirItemBD2 = document.getElementById("btnAnadirItemBD2");
let btnLeerBD = document.getElementById("btnLeerBD");
let btnActualizarValorBD1 = document.getElementById("btnActualizarValorBD1");
let btnBorrarValorBD1 = document.getElementById("btnBorrarValorBD1");
let btnIterar1 = document.getElementById("iterar1");
let textArea1 = document.getElementById("textArea1");
let valor1 = document.getElementById("valor1");
let valor2 = document.getElementById("valor2");
let btnIterar2 = document.getElementById("iterar2");
let textArea2 = document.getElementById("textArea2");

if (indexedDB) {
  let db;
  const request = indexedDB.open("gente", 1);

  btnAnadirItemBD.addEventListener("click", function() {
    anadirItemBD("objectStore1");
  });
  btnAnadirItemBD2.addEventListener("click", function() {
    anadirItemBD("objectStore2");
  });


  request.onsuccess = () => {
    db = request.result;
    console.log("OPEN", db);

    readData("objectStore1");

      btnLeerBD.addEventListener('click',leerBD);
  // btnActualizarValorBD1.addEventListener('click',actualizarValorBD1);
  // btnBorrarValorBD1.addEventListener('click',borrarValorBD1);
  // btnIterar1.addEventListener('click',iterar1);
  // btnIterar2.addEventListener('click',iterar2);

    function leerBD(){
        findData("objectStore1");
    }
  };

  request.onupgradeneeded = () => {
    db = request.result;
    const objectStore = db.createObjectStore("objectStore1",{autoIncrement:true});
    const objectStore2 = db.createObjectStore("objectStore2",{autoIncrement:true});
  };

  request.onerror = error => {
    console.log("Error", error);
  };

  const addData = (data, storeName) => {
    const transaction = db.transaction([storeName], 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.add(data);
  };

  const readData = (storeName) => {
    const transaction = db.transaction([storeName], 'readonly');
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.openCursor();

    request.onsuccess = (e) =>{
        const cursor = e.target.result;
        if(cursor){
                cursor.continue();
        }
    }
  };

  const findData = (storeName) => {
    const transaction = db.transaction([storeName], 'readonly');
    const objectStore = transaction.objectStore(storeName);
    const request = objectStore.openCursor();

    request.onsuccess = (e) =>{
        const cursor = e.target.result;
        if(cursor){
            if(cursor.value.Nombre==nombre.value){
                /*En chrome no se carga bien el dialog, funciona pero se ve feo y transparente
                por ello, primero detecto si estoy usando chrome, y si es así, muestro la información
                en un sencillo alert.
                */
                if(navigator.userAgent.toLowerCase().indexOf('chrome') > -1){
                    alert("Nombre: "+cursor.value.Nombre+","+
                    "Apellidos: "+cursor.value.Apellidos+","+
                    "Edad: "+cursor.value.Edad);
                }else{
                    $(function(){
                        $("#dialog").attr("title",cursor.value.Nombre);
                        $("#dialog").text("Nombre: "+cursor.value.Nombre+","+
                        "Apellidos: "+cursor.value.Apellidos+","+
                        "Edad: "+cursor.value.Edad);
                        $("#dialog").dialog();
                    });
                }                
            }else{
                cursor.continue();
            }
        }
    }
  };

  function anadirItemBD(objectStore) {
    const data = {
      Nombre: nombre.value,
      Apellidos: apellido.value,
      Edad: edad.value
    };    
    console.log(data);
    addData(data, objectStore);
    limpiarCeldas();
  }

  function limpiarCeldas(){
    nombre.value="";
    apellido.value="";
    edad.value="";
  }
}
