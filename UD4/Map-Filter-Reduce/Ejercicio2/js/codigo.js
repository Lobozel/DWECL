var pilots = [
    {
        id: 2,
        name: "Wedge Antilles",
        faction: "Rebels"
    },
    {
        id: 8,
        name: "Ciena Ree",
        faction: "Empire"
    },
    {
        id: 40,
        name: "Iden Versio",
        faction: "Empire"
    },
    {
        id: 66,
        name: "Thane Kyrell",
        faction: "Rebels"
    }
];

let rebeldes = pilots.filter(function(pilots) {
    return pilots.faction == "Rebels"
});

console.log("Pilotos rebeldes sin arrow:");
console.log(Object.values(rebeldes));


rebeldes = pilots.filter(pilots=>pilots.faction=="Rebels");

console.log("Pilotos rebeldes con arrow:");
console.log(Object.values(rebeldes));


