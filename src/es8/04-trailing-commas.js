// Trailing commas
const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numbers.length); // 6

const ids = [1, 2, 3, 4, 5, 6, , , , , , ]
console.log(ids); // [ 1, 2, 3, 4, 5, 6, <5 empty items> ]
console.log(ids.length); // 11