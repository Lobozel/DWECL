window.onload = function(){
    let texto1 = document.getElementById("texto1");
    texto1.addEventListener("keypress",function(e) {
        if (e.key === "Enter") {
          add('user1',texto1);
        }
    });

    document.getElementById("botonAnadir1")
    .addEventListener('click',function(){
        add('user1',texto1);
    });

    let texto2 = document.getElementById("texto2");
    texto2.addEventListener("keypress",function(e) {
        if (e.key === "Enter") {
            add('user2',texto2);
        }
    });

    document.getElementById("botonAnadir2")
    .addEventListener('click',function(){
        add('user21',texto2);
    });

    document.getElementById("botonLimpiar")
    .addEventListener('click',reset);

    //se ha usado el chat antes?
    if(localStorage.getItem('chat')==null){
        localStorage.setItem('chat',"");
    }else{
        this.write();
    }

}

function add(user,text){
    //existe?
    if(localStorage.getItem(user)==null){
        let value = prompt("Introduzca su nombre.");
        localStorage.setItem(user,value);
    }

    let name = localStorage.getItem(user);

    //ultimo mensaje
    localStorage.setItem(name,text.value);

    //chat
    localStorage.setItem('chat',
    localStorage.getItem('chat')+
    name+": "+
    localStorage.getItem(name)+"\n"
    );

    //escribir
    this.write();

    //limpiar
    text.value="";
}

function write(){
    document.getElementById('textarea').innerHTML=localStorage.getItem('chat');
}

function reset(){
    localStorage.setItem('chat',"");
    localStorage.removeItem('user1');
    localStorage.removeItem('user2');
    write();
}