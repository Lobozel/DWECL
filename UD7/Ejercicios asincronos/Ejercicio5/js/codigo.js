window.onload=function(){
    this.llamada();
}

async function llamada(){
    try{
        let result = await loadJson('no-such-user.json');
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

async function loadJson(url) {
    let promesa = await fetch(url);
    return promesa(response => {
        if (response.status == 200) {
             return response.json();
        } else {
             throw new Error(response.status);
        }
      });
}