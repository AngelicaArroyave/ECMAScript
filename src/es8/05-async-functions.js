// Async functions o Funciones asíncronicas y Operadores ternarios
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000) // Se ejecuta tercero
            : reject(new Error('Error!!!'))
    })
}

const anotherFn = async () => {
    const something = await fnAsync()
    console.log(something);
    console.log('Hi'); // Se ejecuta cuarto
}

console.log('Before'); // Se ejecuta primero
anotherFn()
console.log('After'); // Se ejecuta segundo