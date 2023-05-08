// Trabajar ocn varias promesas al tiempo
const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve'))
const promise3 = new Promise((resolve, reject) => resolve('Resolve two'))

// Toma la primer promesa que sea satisfactoria
Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response)) // Resolve
    .catch(error => console.log(error))