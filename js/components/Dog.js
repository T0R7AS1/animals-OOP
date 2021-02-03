import {Pet} from './Pet.js'

class Dog extends Pet {
    constructor(name, color) {
        super(name,color);
        this.breed = 'Dog';
        this.sound = 'Au au';
    }
}

export { Dog }