let bandera=false;

let array=[];

let interval = setInterval(aumentarDecrecer, 2000);


function aumentarDecrecer(){
    if(!bandera){
        if(array.length<4){
            array.push(array.length+1);
            console.log(array);
        }else{
            bandera=true;
        }
    }else{
        if(array.length>0){
            array.pop();
            console.log(array);
        }else{
            bandera=false;
        }
    }


}