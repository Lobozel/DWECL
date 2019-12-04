let todoLosPerros, totalTodasEdades, totalEdadesHumanos, jovenesDe50, mediaLongitudNombres;
let  arr = [
{nombre:'luna',    sexo:'f',  edad:7,   especie:'perro'},
{nombre:'jimmy',   sexo:'m',  edad:122, especie:'humano'},
{nombre:'snoop',   sexo:'m',  edad:60,  especie:'humano'},
{nombre:'jennifer',sexo:'f',  edad:250, especie:'humano'},
{nombre:'yeller',  sexo:'f', edad:20,  especie:'perro'},
];

todoLosPerros = arr.filter(arr=>arr.especie=='perro');
totalTodasEdades = arr.reduce((suma,arr)=>suma+arr.edad,0);
totalEdadesHumanos = arr.filter(arr=>arr.especie=='humano').reduce((suma,arr)=>suma+arr.edad,0);
jovenesDe50 = arr.filter(arr=>arr.edad<50);
mediaLongitudNombres = arr.reduce((long,arr)=>long+arr.nombre.length,0)/arr.length;


console.log(todoLosPerros);
console.log(totalTodasEdades);
console.log(totalEdadesHumanos);
console.log(jovenesDe50);
console.log(mediaLongitudNombres);




