// Promises o Promesas
const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!  ')
        } else {
            reject('Ops!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) // Cuando se ejecuta el resolve (true)
    .catch(err => console.log(err)) // Cuando se ejecuta el reject (false)