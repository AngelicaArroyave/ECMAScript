// Trabajar ocn varias promesas al tiempo
const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve'))
const promise3 = new Promise((resolve, reject) => resolve('Resolve two'))

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response)) // [ { status: 'rejected', reason: 'Reject' }, { status: 'fulfilled', value: 'Resolve' }, { status: 'fulfilled', value: 'Resolve two' } ]
    .finally(() => console.log('Finally!')) // Finally!

// Sucede que si una promesa es rechazada, Promise.all será rechazada
Promise.all([promise1, promise2, promise3])
    .then(response => console.log(response)) // Reject
    .catch(error => console.log(error)) // Finally!
