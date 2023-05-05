// Flat map, devuelve una matriz de una submatriz (aplanar matriz)
const array = [1, 2, 3, 4, [5, 6, 7, [8, 9, 0]]]
// El número 3 hace referencia a la profundidad de la matriz
console.log(array.flat(3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(array.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const array2 = [1, 2, 3, 4, 5]
console.log(array2.flatMap(value => [value, value * 2])); // [1, 2, 2, 4,  3, 6, 4, 8, 5, 10]
console.log(array2.map(value => [value, value * 2])); // [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]

const array3 = [1, 2, [3, 4, 5], 6]
console.log(array3.flatMap(value => value * 2)); // [ 2, 4, NaN, 12 ]

const cadenas = ['Nunca pares', 'de aprender']
console.log(cadenas.map(value => value.split(' '))); // [ [ 'Nunca', 'pares' ], [ 'de', 'aprender' ] ]
console.log(cadenas.flatMap(value => value.split(' '))); // [ 'Nunca', 'pares', 'de', 'aprender' ]