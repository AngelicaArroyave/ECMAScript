// Permite re-asignar datos a una variable
var lastName = 'Andrea'
lastName = 'Camila'
console.log(lastName); // 'Camila'

let fruit = 'Apple'
fruit = 'Kiwi'
console.log(fruit); // 'Kiwi'

const animal = 'Cat'
animal = 'Dog'
console.log(animal); // TypeError: Assignment to constant variable

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple' // function scope
        let fruit2 = 'Banana' // Block scope
        const fruit3 = 'Kiwi' // Block scope
    }
    console.log('Fruit 1: ', fruit1);
    console.log('Fruit 2: ', fruit2); // ReferenceError: fruit2 is not defined
    console.log('Fruit 3: ', fruit3); // ReferenceError: fruit3 is not defined
}

fruits()