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

// Spread operator u Operador de propagación
let person = { name: 'David', age: 39 }
let country = 'MX'

let data = { ...person, country }
console.log(data); // { name: 'David', age: 39, country: 'MX' }
let data2 = { id: 1, ...person, country }
console.log(data2); // { id: 1, name: 'David', age: 39, country: 'MX' }

// Parámetro rest
function sum(num, ...values) {
    console.log(values); // [ 1, 2, 3, 4 ]
    console.log(num + values[0]); // 2
    return num + values[0]
}

sum(1, 1, 2, 3, 4)

//  El resultado que se obtiene se debe a una especie de concatenación entre num y values, al no
// colocarse o especificarse que de values tome uno de los elementos para sumar con la variable num
function sum2(num, ...values) {
    console.log(values); // [ 7, 5 ]
    console.log(num); // 3
    console.log(num + values); // 37,5
    console.log(typeof num, typeof values); // number object
}

sum2(3, 7, 5)

let info = { name: 'Hector', age: 27, plataform: 'Platzi' }
let elements = [1, 2, 3, 4]

const { plataform, ...patient } = info
const [one, ...numbers] = elements

console.log(plataform, patient); // Platzi { name: 'Hector', age: 27 }
console.log(numbers, one); // [ 2, 3, 4 ] 1

// Posición del parámetro rest (SIEMPRE DEBE ESTAR AL FINAL/ÚLTIMA POSICIÓN)
let array = [1, 2, 3, 4, 5]

// function param(one, ...rest, final) { } // SyntaxError: Rest element must be last element

function param(one, two, ...rest) {
    console.log(one, two); // 1 2
    console.log(rest); // [ 3, 4, 5, 'final' ]
}

param(...array, 'final')