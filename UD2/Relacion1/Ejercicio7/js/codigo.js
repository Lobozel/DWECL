let vector = new Array(10);
let nuevoV = [];
let menor=Number.MAX_VALUE;
let random;

for(i=0;i<10;i++){
    random=Math.floor(Math.random() * 1001);
    vector[i]=random;
    if(menor>random){
        menor=random;
    }
}

for(i=0;i<vector.length;i++){
    if(vector[i]==menor){
        nuevoV = vector.slice(i);
    }
}


alert("Vector de 10 números random:\n".concat(vector));
alert("Vector cortado con slice:\n".concat(nuevoV));