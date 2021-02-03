import {Fish} from './Fish.js'

class Nemo extends Fish {
    constructor(name, color) { 
        super (name, color);
        this.breed = 'Nemo';
        this.sound = 'Bul bul';
    }
}

export { Nemo }