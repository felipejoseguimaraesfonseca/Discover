class Screw {
    constructor() {
        if(this.constructor === Screw) 
            throw new Error('Classe abstrata não pode ser instânciada')
    }
    get type() {
        throw new Error('Método "get type()" precisa ser implementado')
    }
}

class Slit extends Screw {
    constructor() { super() }

    get type() {
        return 'slit'
    }
}

class Philips extends Screw {
    constructor() { super() }

    get type() {
        return 'philips'
    }
}

class Allen extends Screw {}

//new Screw()
let slit = new Slit()
let philips = new Philips()
let allen = new Allen()

console.log(slit.type, philips.type)
console.log(allen.type)