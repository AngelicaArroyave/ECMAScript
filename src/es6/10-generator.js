// Generator o Generadores
// Para identificar a una función como generator se coloca el símbolo *
function* iterate(array) {
    for (const value of array) {
        yield value
    }
}

const numbers = [1, 2, 3, 4, 5]
// Con la palabra next, se toca cada uno de los siguientes datos
const it = iterate(numbers)
console.log(it.next().value); // 1
console.log(it.next().value); // 2
console.log(it.next().value); // 3
console.log(it.next().value); // 4