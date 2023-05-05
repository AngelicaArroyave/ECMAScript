// Valores nulos
const anotherNumber = 1
const otherNumber = null
const validate = anotherNumber ?? 5
const validate2 = otherNumber ?? 5
console.log(validate); // 1
console.log(validate2); // 5