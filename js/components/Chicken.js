import { Bird } from './Bird.js';
class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.breed = 'chicken';
        this.sound = 'kakareku';
    }
}
export { Chicken }