// Clases
// Declaración de una clase
// class User { }

// Instancia de la clase User
// const newUser = new User()

class User {
    // Métodos
    greeting() {
        return 'Hello'
    }
}

const newUser = new User()
console.log(newUser.greeting()); // Hello

class Person {
    // Constructor
    constructor() {
        console.log('Nuevo usuario');
    }

    greeting() {
        return 'Hello'
    }
}

const newPerson = new Person() // Nuevo usuario
console.log(newPerson.greeting()); // Hello

// this, hace referencia al elemento padre que lo contiene
class Admin {
    constructor(name) {
        this.name = name
    }

    speak() {
        return 'Hello'
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }
}

const newAdmin = new Admin('Daniel')
console.log(newAdmin.speak()); // Hello
console.log(newAdmin.greeting()); // Hello Daniel

// Getters y Setters
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    speak() {
        return 'Hello'
    }

    greeting() {
        return `${this.speak()} ${this.name}`
    }

    get aName() {
        return this.name
    }

    get aAge() {
        return this.age
    }

    set aName(n) {
        this.name = n
    }
    
    set aAge(a) {
        this.age = a
    }
}

const newAnimal = new Animal('Copito', 2)
console.log(newAnimal.aName, newAnimal.aAge); // Copito 2 -> Get
console.log(newAnimal.aName = 'Moly', newAnimal.aAge); // Moly 2 -> Set