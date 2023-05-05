try {
    hello()
} catch (error) {
    console.log(error); // ReferenceError: hello is not defined
}

try {
    anotherFn()
} catch (error) {
    console.log('Esto es un error', error); // Esto es un error ReferenceError: anotherFn is not defined
}