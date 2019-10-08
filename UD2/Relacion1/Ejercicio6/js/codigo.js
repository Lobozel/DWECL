let vector=[
    0,7,2,3,4,2,6,2,8,2
];

alert("Antes del cambio ".concat(vector));

for(i=0;i<vector.length;i++){
    if(vector[i]==2){
        vector.splice(i,1,1,1);
    }
}

alert("Después del cambio ".concat(vector));