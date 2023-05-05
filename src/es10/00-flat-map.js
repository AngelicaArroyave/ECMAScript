// Flat map, devuelve una matriz de una submatriz (aplanar matriz)
const array = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0]]]
// El número 3 hace referencia a la profundidad de la matriz
console.log(array.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value * 2])); // [1, 2, 2, 4,  3, 6, 4, 8, 5, 10]