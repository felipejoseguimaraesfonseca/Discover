class Athlete {
    weight;
    category;

    constructor(weight) {
        this.weight = weight
    }

    setCategory() {
        if(this.weight <= 50) {
            return this.category = 'infant'
        } else if(this.weight <= 65) {
            return this.category = 'juvenile'
        } else {
            return this.category = 'adult'
        }
    }
}

let athlete = new Athlete(50)
console.log(athlete.setCategory())

class Fighter extends Athlete {
    constructor(weight) {
        super(weight)
    }

    setCategory() {
        if(this.weight <= 54) {
            return this.category = 'plume'
        } else if(this.weight <= 60){
            return this.category = 'light'
        } else if(this.weight <= 75){
            return this.category = 'medium-light'
        } else {
            return this.category = 'heavy'
        }
    }
}

let fighter = new Fighter(54)
console.log(fighter.setCategory())