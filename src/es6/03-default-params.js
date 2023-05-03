// Antes de ES6
function newUser(name, age, country) {
    var name = name || 'Rodrigo'
    var age = age || 28
    var country = country || 'CO'
    console.log(name, age, country);
}

newUser() // Rodrigo 28 CO
newUser('Juana', 20) // Juana 20 CO
newUser('Ximena', 25, 'MX') // Ximena 25 MX
newUser('', 25, 'MX') // Rodrigo 25 MX

// Parámetros por defecto
function newAdmin(name = 'Andres', age = 30, country = 'MX') {
    console.log(name, age, country);
}

newAdmin() // Andres 30 MX
newAdmin('Julian', 35) // Julian 35 MX
newAdmin('Camilo', 31, 'CA') // Camilo 31 CA