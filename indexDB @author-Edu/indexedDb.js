let db;
const indexDB = window.indexedDB;

if(indexDB){
    const request = indexedDB.open("chat", 1);
    request.onsuccess= ()=>{
        db = request.result;
    }
    request.onupgradeneeded = ()=>{
        db = request.result;
        const objectStore = db.createObjectStore("mensajes", {
            keyPath:"id", autoIncrement:true
        });
    }
    request.onerror = ()=>{
        console.log("Error al abrir indexedDB");
    }
}
function addData(data, table){
    const transaction = db.transaction([table], "readwrite");
    const objectStore = transaction.objectStore(table);
    const request = objectStore.add(data);
}
async function readData(table, callback){
    
    const transaction = db.transaction([table], "readwrite");
    const objectStore = transaction.objectStore(table);
    let array = [];
    const request = objectStore.openCursor();
    request.onsuccess = (e)=>{
        const cursor = e.target.result; 
        if(cursor){
            array.push(cursor.value);
            cursor.continue();
        }else{
            callback(array);
        }
    }

}
window.onload = ()=>{
    const term = document.getElementById("term");
    const usu1 = document.getElementById("usu1");
    const usu2 = document.getElementById("usu2");
    
    setInterval(()=>{readData("mensajes", leerMensaje)}, 300);

    usu1.addEventListener("keyup", (e)=>{
        if(e.keyCode===13){
            mensaje(1, usu1.value.trim());
            usu1.value = "";
        }
    });
    usu2.addEventListener("keyup", (e)=>{
        if(e.keyCode===13){
            mensaje(2, usu2.value.trim());
            usu2.value = "";
        }
    });
    function mensaje(usu, mensaje){
        if(usu === 1){
            addData({usuario:"usu1", mensaje:mensaje, fecha:new Date().toISOString().slice(0,10)},"mensajes");
        }else{
            addData({usuario:"usu2", mensaje:mensaje, fecha:new Date().toISOString().slice(0,10)},"mensajes");
        }
    }
    async function leerMensaje(mensajes){
        term.innerHTML="";
        mensajes.forEach(mensaje => {
            crearMensaje(mensaje);
        });
    }
    function crearMensaje(mensaje){
        let div = document.createElement("div")
        
        div.classList.add("mensaje");
        if(mensaje.usuario == "usu1"){
            div.classList.add("usu1");
        }else{
            div.classList.add("usu2");
        }
        div.innerHTML = mensaje.mensaje+"<span>"+mensaje.fecha+"</span>";
        term.appendChild(div);
        term.scrollTo(0,term.scrollHeight);
    }
}