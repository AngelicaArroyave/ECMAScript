// String Padding
const saludo = 'Hello'
// Trata de reescribir la estructura
console.log(saludo.padStart(7, 'Hola')); // HoHello
console.log(saludo.padStart(8, 'Hola')); // HolHello
console.log(saludo.padStart(15, '-')); // ----------Hello
console.log(saludo.padEnd(15, '-')); // Hello----------