// Encadenamiento opcional u Optional chaining
const users = {
    Andres: {
        country: 'MX'
    },
    Gabriela: {
        country: 'CO'
    }
}

console.log(users.Andres.country); // MX
console.log(users.Andres.age); // undefined

console.log(users.charge.country); // TypeError: Cannot read properties of undefined (reading 'country')
console.log(users?.charge?.country); // undefined