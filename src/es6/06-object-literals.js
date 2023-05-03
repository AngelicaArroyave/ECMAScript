// Objects literals u Objetos literales
// Como se hacia antes
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// Ahora se puede hacer de la siguiente forma
function newAdmin(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newAdmin('Carolina', 30, 'CO', 1)); // { user: 'Carolina', age: 30, country: 'CO', id: 1 }