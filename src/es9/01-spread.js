// Propagación
const user = { username: 'Sara', age: 30, country: 'CO' }
const { username, ...values } = user
console.log(username); // Sara
console.log(values); // { age: 30, country: 'CO' }

const objectOriginal = { a: 1, b: 2 }
const objectReference = objectOriginal
const objectCopy = { ...objectOriginal }
console.log(objectOriginal === objectReference); // true
console.log(objectOriginal === objectCopy); // false

const original = { datos: [1, [2, 3, 4], 5] }
const copy = { ...original }
console.log(original === copy); // false
console.log(original['datos'] === copy['datos']); // true

const objOriginal = { data: [1, [2, 3, 4], 5] }
const objCopy = structuredClone(objOriginal)
console.log(objOriginal === objCopy); // false
console.log(objOriginal['data'] === objCopy['data']); // false