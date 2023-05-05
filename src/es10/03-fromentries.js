// Pasar de un array de array a un objeto
const entries = new Map([['name', 'Daniela'], ['age', 30], ['country', 'CO']])
console.log(entries); // Map(3) { 'name' => 'Daniela', 'age' => 30, 'country' => 'CO' }
console.log(Object.fromEntries(entries)); // { name: 'Daniela', age: 30, country: 'CO' }

const user = [['name', 'Daniela'], ['age', 30], ['country', 'CO']]
console.log(user); // [ [ 'name', 'Daniela' ], [ 'age', 30 ], [ 'country', 'CO' ] ]
console.log(Object.fromEntries(user)); // { name: 'Daniela', age: 30, country: 'CO' }