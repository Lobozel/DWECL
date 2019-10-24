let i, output = "";
let inicio = new Date().getTime();

for(i=1;i<=1e6;i++){
    output +=1;
    console.log(new Date().getTime()-inicio);
}