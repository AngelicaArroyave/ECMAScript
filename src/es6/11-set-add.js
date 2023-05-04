// Set - Add, devuelve un OBJECT
const list = new Set()

list.add('Item 1')
list.add('Item 2').add('Item 3') // Se puede unir los add

console.log(list); // Set(3) { 'Item 1', 'Item 2', 'Item 3' }