async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
    yield await new Promise((resolve, reject) => {
        if (true) {
            resolve('4')
        } else {
            reject('Ops!')
        }
    })
}

const other = anotherGenerator()
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
other.next().then(response => console.log(response.value))
console.log('Pasa por acá!');

async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(['Diana', 'Flor', 'David', 'Hector'])
console.log('After');