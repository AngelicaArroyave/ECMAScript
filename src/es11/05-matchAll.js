// Expresiones regulares con match all
const regex = /\b(Apple)+\b/g
const fruit = 'Banana, Melon, Apple, Kiwi, Orange, Apple'

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
// Output
// [
//     'Apple',
//     'Apple',
//     index: 15,
//     input: 'Banana, Melon, Apple, Kiwi, Orange, Apple',
//     groups: undefined
// ]
// [
//     'Apple',
//     'Apple',
//     index: 36,
//     input: 'Banana, Melon, Apple, Kiwi, Orange, Apple',
//     groups: undefined
// ]