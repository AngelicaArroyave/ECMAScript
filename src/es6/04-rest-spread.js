// Antes de ES6
let admin = { name: 'Gabriela', charge: 'Administradora'}
let name = admin.name
let charge = admin['charge']
console.log(name, charge); // Gabriela Administradora


// Arrays destructuring o desestructuración de arreglos
let fruits = ['Apple', 'Melon', 'Banana']
let [fruit1, fruit2] = fruits
console.log(fruit1, fruit2); // Apple Melon
console.log(fruit1, fruits[2]); // Apple Banana

// Objects destructuring o desestructuración de objetos
let user = { username: 'Angie', age: 25 }
let { username, age } = user
console.log(username, age); // Angie 25
console.log(user.username, age); // Angie 25

// Desestructuración en parámetros de una función
const patient = { name2: 'Angela', surname: 'Rios', plataform: 'Platzi' }

function viewData({ name2, surname, plataform }) {
    console.log(name2, surname, plataform);
}

viewData(patient) // Angela Rios Platzi

// NO SE RECOMIENDA HACER CON DESESTRUCTURACIÓN
const animals = ['Cat', 'Dog', 'Lion', 'Zebra']
const [,,,animal4] = animals
console.log(animal4); // Zebra