const iceCream = [
    { flavor: 'pineaple', color: 'white'},
    { flavor: 'strawberry', color: 'red'},
    { flavor: 'watermelon', color: 'red'},
    { flavor: 'kiwi', color: 'green'},
    { flavor: 'mango', color: 'yellow'},
    { flavor: 'pear', color: 'green'},
];

let iceCreamsRed = iceCream.filter(iceCream => iceCream.color=='red');

console.log("Helados de color rojo:");
console.log(Object.values(iceCreamsRed));

let flavorsIceCream = iceCream.map(iceCream => iceCream.flavor);

console.log("Sabores de helados:");
console.log(Object.values(flavorsIceCream));